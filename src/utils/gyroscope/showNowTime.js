
//展示当前时间
export function showCurrentDate() {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hh = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    let mm =
        time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    let ss =
        time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()


    let ap = hh < 12 ? 'AM' : 'PM'
    let week = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
    }
    return `${year}.${month}.${day} ${hh}:${mm}:${ss}`

    // '周' +
    // week[time.getDay()]
}


