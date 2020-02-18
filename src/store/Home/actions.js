import mdui from 'mdui'
var getPost = function({
  commit,
  state
}, event) {
  if (!state.load) {
    commit('changeLoad', true);
    event.$axios({
      methods: 'get',
      url: 'public/post.json',
      timeout: 5000,
    }).then(function(res) {
      console.log(res)
      event.$store.commit('Home/changePost', res.data);
      mdui.snackbar({
        message: event.$t('post.refresh'),
        timeout: '300',
      })
    }).catch(function(err) {
      mdui.snackbar({
        message: err,
        timeout: '2000',
      })
    }).finally(() => {
      event.$store.commit('Home/changeLoad', false)
    })
  }
}

var newPost = function({
  commit,
  state
}, event) {
  if (!state.load) {
    commit('changeLoad', true);
    event.$axios({
      methods: 'get',
      url: 'public/post.json',
      data: {
        title: event.title,
        content: event.content
      },
      timeout: 5000,
    }).then(function(res) {
      console.log(res)
      //成功则跳转至新帖子
    }).catch(function(err) {
      mdui.snackbar({
        message: err,
        timeout: '2000',
      })
    }).finally(() => {
      event.$store.commit('Home/changeLoad', false)
    })
  }
}
export {
  getPost
}
