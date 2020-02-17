import mdui from 'mdui'
var login = function({
  commit,
  state
}, event) {
  if (!state.load) {
    commit('changeLoad', true);
    commit('changeUser', event.user)
    event.$axios({
      methods: 'post',
      url: '/public/login.json',
      data: {
        account: event.user.account,
        password: event.user.password,
      },
    }).then(function(res) {
      if (res.data.code == 1) {
        //登陆成功
        event.$store.commit('User/changeLogin', true)
        event.$router.replace('/')
      } else {
        mdui.snackbar({
          message: res.data.err,
          timeout: '2000',
          position: 'top'
        })
      }
    }).catch(function(err) {
      mdui.snackbar({
        message: err,
        timeout: '2000',
        position: 'top'
      })
    }).finally(() => {
      event.$store.commit('User/changeLoad', false)
    })
  }
}
var getUser = function({
  commit,
  state
}, event) {
  commit('changeLoad', true);
  event.$axios({
    methods: 'get',
    url: '/public/user.json',
    data: {
      account: event.user.account,
      //多层验证增加安全性
      //password:event.user.password
    }
  }).then(function(res) {
    event.$store.commit('User/changeUser', res.data.user)
  }).catch(function(err) {
    mdui.snackbar({
      message: err,
      timeout: '2000',
    })
  }).finally(() => {
    event.$store.commit('User/changeLoad', false)
  })
}
export {
  login,
  getUser
}
