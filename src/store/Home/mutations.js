var changeLoad = function(state,value) {
  state.load  = value
}
var changePost = function(state, newPost) {
  state.post = newPost
}

var changeSinglePost = function(state, newPost) {
  state.singlePost = newPost
}

export {
  changeLoad,
  changePost,
  changeSinglePost
}
