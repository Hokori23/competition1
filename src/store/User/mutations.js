var changeLoad = function(state, value) {
  state.load = value
}
var changeUser = function(state, value) {
  state.user = value
  localStorage.setItem('user', JSON.stringify(value));
}
export {
  changeLoad,
  changeUser,
}
