var fab = function(state, value) {
  state.fab = value
}
var searchBar = function(state, value) {
  state.searchBar = value
}
var refresh = function(state, value) {
  state.refresh = value
}
var nav = function(state, value) {
  state.nav = value
  let body = document.getElementsByTagName('body')[0];
  if (value) {
    body.classList.add('body-nav')
  } else {
    body.classList.remove('body-nav')
  }
}
export {
  fab,
  searchBar,
  refresh,
  nav,
}
