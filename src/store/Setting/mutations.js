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
  let body = document.getElementsByTagName('body')[0];
  if (value == 1) {
    body.classList.add('mdui-theme-layout-dark')
  } else {
    body.classList.remove('mdui-theme-layout-dark')
  }
}
export {
  changeLanguage,
  changeTheme,
  changeDarkMode,
}
