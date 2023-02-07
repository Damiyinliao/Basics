//手写时间格式化函数
// 1.定义格式化时间的方法
function dateFormat(dtStr){
    const dt = new Date(dtStr);

    const y = padZero(dt.getFullYear())
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//单数补零
function padZero(n){
    return n > 9 ? n :'0' + n
}
//暴露方法
module.exports = {
    dateFormat
}