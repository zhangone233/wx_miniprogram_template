// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    this.userLogin();
  },

  // 用户登录
  userLogin() {
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

        // wx.request({
        //   url: 'http://127.0.0.1:4000/api/user/login',
        //   method: 'POST',
        //   data: {
        //     code: res.code
        //   },
        //   success: (res) => {
        //     console.log(res, 'res');

        //   }
        // })
      },
    })
  }
})