var changeLoad = function(state,value) {
  state.load  = value
}
var changePost = function(state, newPost) {
  state.post = newPost
}
export {
  changeLoad,
  changePost
}
