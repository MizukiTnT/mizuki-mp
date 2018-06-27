// 时间戳转标准时间
function toNormalTime(timestamp) {
    let date = new Date(timestamp),
    Y = date.getFullYear() + '-',
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
    D = date.getDate() + ' ',
    h = date.getHours() + ':',
    m = date.getMinutes() + ':',
    s = date.getSeconds()
    return Y+M+D // 暂时只取年月日 但是包含了更具体的时间
}
// 获取当前时间并转化
function getCurrentTime() {
    var keep = ''
    var date = new Date()
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    var rand = Math.round(Math.random() * 899 + 100)
    keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
    return keep //20160614134947
  }

// 去除字符串所有空格
function sTrim(text) {
    return text.replace(/\s/ig, '')
  }
//去除所有:
function replaceMaohao(txt) {
    return txt.replace(/\:/ig, '')
}

module.exports = {
    toNormalTime: toNormalTime,
    getCurrentTime: getCurrentTime,
    sTrim: sTrim,
    replaceMaohao: replaceMaohao   
  }
