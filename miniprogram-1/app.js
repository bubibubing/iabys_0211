// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    hasBorder:{hasAvatar1: true,
    hasAvatar2: false,
    hasAvatar3: false,
    hasAvatar4: true,
    hasAvatar5: false,
    hasAvatar6: true,
    hasAvatar7: false,
    hasAvatar8: false,}
  }

})
