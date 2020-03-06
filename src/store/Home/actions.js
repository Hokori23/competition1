import mdui from 'mdui'
var getPost = function({
  commit,
  state
}, event) {
  if (!state.load) {
    commit('changeLoad', true);
    event.$axios({
      methods: 'get',
      url: '/public/post.json',
      timeout: 5000,
    }).then(function(res) {
      event.$store.commit('Home/changePost', res.data);
      if (event.$store.state.Home.load) {
        let sn = mdui.snackbar({
          message: event.$t('post.refresh'),
          timeout: '300',
          position: 'right-bottom'
        })
      }
    }).catch(function(err) {
      if (event.$store.state.Home.load) {
        let sn = mdui.snackbar({
          message: err,
          timeout: '2000',
          position: 'right-bottom'
        })
        event.$store.commit('Display/snackBar', sn)
      }
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
      url: '/public/post.json',
      data: {
        title: event.title,
        content: event.content
      },
      timeout: 5000,
    }).then(function(res) {
      console.log(res)
      //成功则跳转至新帖子
    }).catch(function(err) {
      let sn = mdui.snackbar({
        message: err,
        timeout: '2000',
        position: 'left-bottom'
      })
      event.$store.commit('Display/snackBar', sn)
    }).finally(() => {
      event.$store.commit('Home/changeLoad', false)
    })
  }
}
export {
  getPost,
  newPost
}
