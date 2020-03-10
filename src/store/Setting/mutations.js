var changeLanguage = function(state, value) {
  state.language = value
  localStorage.setItem('language', value)
}
var changeThemeColor = function(state, value) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.remove(`mdui-theme-primary-${state.themeColor}`);
  body.classList.add(`mdui-theme-primary-${value}`);
  state.themeColor = value
  localStorage.setItem('themeColor', value)

  window.onload = function() {
    let temp = document.getElementsByClassName('mdui-toolbar')[0]|| document.getElementById('login--btn').children[0];
    document.getElementsByTagName('meta')['theme-color'].content = getComputedStyle(temp).backgroundColor;
    temp = null;
  }
}
var changeAccentColor = function(state, value) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.remove(`mdui-theme-accent-${state.accentColor}`);
  body.classList.add(`mdui-theme-accent-${value}`);
  state.accentColor = value
  localStorage.setItem('accentColor', value)
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
  changeThemeColor,
  changeAccentColor,
  changeDarkMode,
}
