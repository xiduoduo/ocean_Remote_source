function setRem() {
  //  PC端
  // 基准大小
  const baseSize = 192;
  const basePc = baseSize / 1920; // 表示1920的设计图,使用100PX的默认值
  let vW = window.screen.width; // 当前窗口的宽度
  const vH = window.screen.height; // 当前窗口的高度
  // 非正常屏幕下的尺寸换算
  const dueH = (vW * 1080) / 1920;
  if (vH < dueH) {
    // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
    vW = (vH * 1920) / 1080;
    window.isRuleScreen = false;
  }
  const rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
  document.documentElement.style.fontSize = rem + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
