import mdui from 'mdui'
//登录
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
      timeout: 5000,
    }).then(function(res) {
      console.log(res)
      if (res.data.code === 0) {
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

//获取用户信息
var getUser = function({
  commit,
  state
}, event) {
  //开启提交状态
  commit('changeLoad', true);
  event.$axios({
    methods: 'get',
    url: '/public/user.json',
    data: {
      account: event.user.account,
      //多层验证增加安全性
      //password:event.user.password
    },
    timeout: 5000,
  }).then(function(res) {
    event.$store.commit('User/changeUser', res.data.user)
  }).catch(function(err) {
    let banner = mdui.snackbar({
      message: `${event.$t('user.timeOutErr')}`,
      buttonText: event.$t('user.try'),
      timeout: 0,
      onButtonClick: function() {
        banner.close;
        event.$store.dispatch('User/getUser', event);
      },
    })
  }).finally(() => {
    //关闭提交状态
    event.$store.commit('User/changeLoad', false)
  })
}
export {
  login,
  getUser
}
