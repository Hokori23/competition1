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
        };
        localStorage.setItem('Authorization', res.data.data.Authorization);
        event.$store.commit('User/changeUser', user);
        event.$router.replace('/')
      } else {
        /*********修改input框的错误提示***********/
        mdui.snackbar({
          message: res.data.message,
          timeout: '2000',
          position: 'top'
        })
      }
    }).catch(function(err) {
      mdui.snackbar({
        message: event.$t('user.timeOutErr'),
        timeout: '2000',
        position: 'top'
      })
    }).finally(() => {
      event.$store.commit('User/changeLoad', false)
    })
  }
}

//注册
var register = function({
  commit,
  state
}, event) {
  console.log(event.user.account)
  console.log(event.user.password)
  console.log(event.user.phoneNumber)
  console.log(event.user.checkCode)
  if (!state.load) {
    commit('changeLoad', true);
    event.$axios({
      methods: 'post',
      url: '/public/login.json',
      data: {
        account: event.user.account,
        password: event.user.password,
        phoneNumber:event.user.phoneNumber,
        checkCode:event.user.checkCode,
      },
      timeout: 5000,
    }).then(function(res) {
      if (res.data.code < 1) {
        //注册成功
        event.$router.go(-1);
      } else {
        //注册失败
        mdui.snackbar({
          message: res.data.message,
          timeout: '2000',
          position: 'top'
        })
      }
    }).catch(function(err) {
      mdui.snackbar({
        message: event.$t('user.timeOutErr'),
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
    },
    timeout: 5000,
  }).then(function(res) {
    if (localStorage.getItem('Authorization')) {
      event.$store.commit('User/changeUser', res.data.data.user)
    }
  }).catch(function(err) {
    mdui.snackbar({
      message: event.$t('user.timeOutErr'),
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


//更改用户信息//now**************************************************
//******************************************************************
//******************************************************************
//******************************************************************
//******************************************************************
//******************************************************************
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
      nickName: event.user.nickName,
      avatarURL: event.user.avatarURL
      //多层验证增加安全性
      //password:event.user.password
    },
    timeout: 5000,
  }).then(function(res) {
    event.$store.commit('User/changeUser', Object.assign({}, event.$store.state.User.user, res.data.user))
  }).catch(function(err) {
    mdui.snackbar({
      message: event.$t('user.timeOutErr'),
      buttonText: event.$t('common.reconnect'),
      timeout: 0,
      // onButtonClick: function() {
      //   this.close;
      //   event.$store.dispatch('User/changeUser', event);
      // },
      // closeOnOutsideClick: false,
    })
  }).finally(() => {
    //关闭提交状态
    event.$store.commit('User/changeLoad', false)
  })
}
export {
  login,
  register,
  getUser,
  changeUser
}
