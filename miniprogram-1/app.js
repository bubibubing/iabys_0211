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
  globalData: {userInfo: null,
    currentAvatar: null,
    questionNo: null,
    hasQuestion: false,
    hasAvatar1: false,
    hasAvatar2: false,
    hasAvatar3: false,
    hasAvatar4: false,
    hasAvatar5: false,
    hasAvatar6: false,
    hasAvatar7: false,
    hasAvatar8: false,
    hasAvatar9: false,
    avatarImg: ['https://s1.imagehub.cc/images/2021/07/25/mmexport162720341642076c0237386929f77.png', 
    'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341424626d53a553082c1f7.png',
    'https://s1.imagehub.cc/images/2021/07/25/mmexport1627203411540fbd0fbb61c09ecac.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar25a9aa3452355c5f6.png',
    'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341642076c0237386929f77.png', 
    'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341424626d53a553082c1f7.png',
    'https://s1.imagehub.cc/images/2021/07/25/mmexport1627203411540fbd0fbb61c09ecac.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png'],
    sampleImg: 'https://s1.imagehub.cc/images/2021/07/26/008iYvyZgy1grj994mecyj303q03qdfr9f2cb22744c84ded.jpg'
  }

})
