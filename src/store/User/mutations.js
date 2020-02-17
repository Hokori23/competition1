var changeLogin = function(state, value) {
  state.login = value
}
var changeLoad = function(state,value){
  state.load = value
}
var changeUser = function(state,value){
  state.user = value
}
export {
  changeLogin,
  changeLoad,
  changeUser
}
