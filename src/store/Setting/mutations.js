var changeLanguage = function(state, value) {
  state.language = value
  localStorage.setItem('language', value)
}
var changeTheme = function(state, value) {
  state.theme = value
}
var changeDarkMode = function(state, value) {
  state.darkMode = value
  localStorage.setItem('darkMode', value)
}
export {
  changeLanguage,
  changeTheme,
  changeDarkMode
}
