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
    currentAvatar: null,
    hasAvatar1: false,
    hasAvatar2: false,
    hasAvatar3: false,
    hasAvatar4: false,
    hasAvatar5: false,
    hasAvatar6: false,
    hasAvatar7: false,
    hasAvatar8: false,
    hasAvatar9: false
  }
})
