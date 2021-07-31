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
    avatarImgList: [{url:'https://img.wenhairu.com/images/2021/07/31/9Llsn.png', hasAvatar:false},
    {url:'https://img.wenhairu.com/images/2021/07/31/9Lh7B.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9LLWN.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9LzjR.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9LtZs.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9Lr9C.png', hasAvatar:false}, 
     {url:'https://img.wenhairu.com/images/2021/07/31/9L36S.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9LsVt.png', hasAvatar:false},
     {url:'https://img.wenhairu.com/images/2021/07/31/9LiyD.png', hasAvatar:false}]
  }
})
