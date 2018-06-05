// 防止用户禁止存储cookie以及开启隐身模式
let defaultCity = '长沙'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
