import mdui from 'mdui'
//登录
var login = function({
  commit,
  state
}, event) {
  if (!state.load) {
    commit('changeLoad', true);
    event.$axios({
      methods: 'post',
      url: '/public/login.json',
      data: {
        account: event.user.account,
        password: event.user.password,
      },
      timeout: 5000,
    }).then(function(res) {
      if (res.data.code < 1) {
        //登陆成功
        let user = {
          account: event.user.account,
          login: true,
        };
        event.$store.commit('User/changeUser', user)
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
      account: event.account,
      //多层验证增加安全性
      //password:event.user.password
    },
    timeout: 5000,
  }).then(function(res) {
    event.$store.commit('User/changeUser', Object.assign(res.data.user, event.$store.state.User.user))
  }).catch(function(err) {
    mdui.snackbar({
      message: `${event.$t('user.timeOutErr')}`,
      buttonText: event.$t('common.reconnect'),
      timeout: 0,
      onButtonClick: function() {
        this.close;
        event.$store.dispatch('User/getUser', event);
      },
      closeOnOutsideClick: false,
    })
  }).finally(() => {
    //关闭提交状态
    event.$store.commit('User/changeLoad', false)
  })
}


//更改用户信息
var changeUser = function({
  commit,
  state
}, event) {
  //开启提交状态
  commit('changeLoad', true);
  event.$axios({
    methods: 'get',
    url: '/public/user.json',
    data: {
      nickName:event.nickName
      //多层验证增加安全性
      //password:event.user.password
    },
    timeout: 5000,
  }).then(function(res) {
    event.$store.commit('User/changeUser', Object.assign(res.data.user, event.$store.state.User.user))
  }).catch(function(err) {
    mdui.snackbar({
      message: `${event.$t('user.timeOutErr')}`,
      buttonText: event.$t('common.reconnect'),
      timeout: 0,
      onButtonClick: function() {
        this.close;
        event.$store.dispatch('User/changeUser', event);
      },
      closeOnOutsideClick: false,
    })
  }).finally(() => {
    //关闭提交状态
    event.$store.commit('User/changeLoad', false)
  })
}
export {
  login,
  getUser,
  changeUser
}
