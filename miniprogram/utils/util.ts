const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

/**
 * 比较版本号
 * @param v1 
 * @param v2 
 * @example
 * compareVersion('1.11.0', '1.9.9') // => 1 // 1表示 1.11.0比1.9.9要新
 * compareVersion('1.11.0', '1.11.0') // => 0 // 0表示1.11.0和1.11.0是同一个版本
 * compareVersion('1.11.0', '1.99.0') // => -1 // -1表示1.11.0比 1.99.0要老
 */
export function compareVersion(v1: string, v2: string): number {
  const v1Arr = v1.split('.');
  const v2Arr = v2.split('.');
  var len = Math.max(v1Arr.length, v2Arr.length)

  while (v1Arr.length < len) {
    v1Arr.push('0')
  }
  while (v2Arr.length < len) {
    v2Arr.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1Arr[i])
    var num2 = parseInt(v2Arr[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}
