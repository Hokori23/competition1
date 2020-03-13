var changeLoad = function(state, value) {
  state.load = value
}
var changeUser = function(state, value) {
  if (value === null) {
    localStorage.removeItem('user')
  } else {
    state.user = value;
    localStorage.setItem('user', JSON.stringify(value));
  }
}
export {
  changeLoad,
  changeUser,
}
