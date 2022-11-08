// geos
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js
Math.hypot = function (a, b) {
  return Math.pow(Math.pow(a, 2) + Math.pow(b, 2), 0.5);
};

function init_geos() {
  this.h = this.h !== undefined ? parseFloat(this.h) : 0;
  this.a = this.a !== undefined ? parseFloat(this.a) : 0;
  this.b = this.b !== undefined ? parseFloat(this.b) : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;
  this.k = this.k !== undefined ? parseFloat(this.k) : 1;
  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;

  //h 已经存在
  this.radius_g_1 = this.h / this.a;
  this.radius_g = 1.0 + this.radius_g_1;
  this.C = this.radius_g * this.radius_g - 1.0;
  this.globalScale = this.k * this.a;

  var es = 1.0 - (this.b * this.b) / (this.a * this.a);
  var one_es = 1.0 - es;
  var rone_es = 1.0 / one_es;

  this.radius_p = Math.sqrt(one_es);
  this.radius_p2 = one_es;
  this.radius_p_inv2 = rone_es;
}

function forward_geos(p) {
  var x0 = p.x;
  var y0 = p.y;

  var lon = this.long0 != 0 ? rollLongitude(p.x - this.long0) : p.x;
  var lat = p.y;
  /**地心纬度的计算*/
  lat = Math.atan(this.radius_p2 * Math.tan(lat));
  /* 计算从卫星到地球表面位置（lon，lat）的矢量的三个分量。*/
  var r =
    this.radius_p / Math.hypot(this.radius_p * Math.cos(lat), Math.sin(lat));
  var Vx = r * Math.cos(lon) * Math.cos(lat);
  var Vy = r * Math.sin(lon) * Math.cos(lat);
  var Vz = r * Math.sin(lat);

  /***检查可见性。*/
  if ((this.radius_g - Vx) * Vx - Vy * Vy - Vz * Vz * this.radius_p_inv2 < 0) {
    p.x = NaN;
    p.y = NaN;
    return p;
    //throw new Error('geos error');
  } else {
    /**基于卫星视角的计算*/
    var tmp = this.radius_g - Vx;
    var x = this.radius_g_1 * Math.atan(Vy / tmp);
    var y = this.radius_g_1 * Math.atan(Vz / Math.hypot(Vy, tmp));
    p.x = this.globalScale * x + this.x0;
    p.y = this.globalScale * y + this.y0;
  }
  xx = p.x;
  yy = p.y;
  return p;
}

/**
	    Transverse Mercator Inverse  -  x/y to long/lat
	  */
function inverse_geos(p) {
  var x = (p.x - this.x0) / this.globalScale;
  var y = (p.y - this.y0) / this.globalScale;

  /***设置矢量从卫星到位置的三个分量**/
  var Vx = -1.0;
  var Vy = Math.tan(x / this.radius_g_1);
  var Vz = Math.tan(y / this.radius_g_1) * Math.hypot(1.0, Vy);

  /***三次方程和行列式中项的计算***/
  var a = Vz / this.radius_p;
  a = Vy * Vy + a * a + Vx * Vx;
  var b = 2 * this.radius_g * Vx;
  var det = b * b - 4.0 * a * this.C;
  if (det < 0) {
    p.x = NaN;
    p.y = NaN;
    return p;
  }

  /***从卫星到位置的矢量三个分量的计算***/
  var k = (-b - Math.sqrt(det)) / (2.0 * a);
  Vx = this.radius_g + k * Vx;
  Vy = Vy * k;
  Vz = Vz * k;

  /***经度和纬度的计算***/
  var lambda = Math.atan2(Vy, Vx);
  var phi = Math.atan((Vz * Math.cos(lambda)) / Vx);
  phi = Math.atan(this.radius_p_inv2 * Math.tan(phi));

  p.x = this.long0 != 0 ? rollLongitude(lambda + this.long0) : lambda;
  p.y = phi;
  return p;
}

function rollLongitude(x) {
  return x - 6.283185307179586 * Math.floor(x / 6.283185307179586 + 0.5);
}

function toDegrees(angrad) {
  return (angrad * 180.0) / Math.PI;
}

function toRadians(angdeg) {
  return (angdeg / 180.0) * Math.PI;
}

var names_geos = ["geos"];
var geos = {
  init: init_geos,
  forward: forward_geos,
  inverse: inverse_geos,
  names: names_geos,
};
proj4.Proj.projections.add(geos);
