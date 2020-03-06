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
}
var snackBar = function(state, sn) {
  state.snackBar = sn;
}
export {
  fab,
  searchBar,
  refresh,
  nav,
  snackBar
}
