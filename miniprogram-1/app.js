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
    questionAns: '',
    avatarImg: ['https://s1.imagehub.cc/images/2021/07/25/mmexport162720341642076c0237386929f77.png', 
    'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341424626d53a553082c1f7.png',
    'https://s1.imagehub.cc/images/2021/07/25/mmexport1627203411540fbd0fbb61c09ecac.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar25a9aa3452355c5f6.png',
    'https://s1.imagehub.cc/images/2021/07/26/avatar6d32e70baac12ecb4.png', 
    'https://s1.imagehub.cc/images/2021/07/26/avatar74315177b763269e6.png',
    'https://s1.imagehub.cc/images/2021/07/26/avatar8e7753088e257698d.png',
    'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png'],
    avatarImgList: [{url:'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341642076c0237386929f77.png', hasAvatar:false},
    {url:'https://s1.imagehub.cc/images/2021/07/25/mmexport162720341424626d53a553082c1f7.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/25/mmexport1627203411540fbd0fbb61c09ecac.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/25/avatar25a9aa3452355c5f6.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/26/avatar6d32e70baac12ecb4.png', hasAvatar:false}, 
     {url:'https://s1.imagehub.cc/images/2021/07/26/avatar74315177b763269e6.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/26/avatar8e7753088e257698d.png', hasAvatar:false},
     {url:'https://s1.imagehub.cc/images/2021/07/25/avatar16688ed196e42024a.png', hasAvatar:false}]
  }
})
