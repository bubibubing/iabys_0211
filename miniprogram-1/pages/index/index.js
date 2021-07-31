// index.js
// 获取应用实例
const app = getApp()

function randomPick(){
  var n1 = Math.round(Math.random()*100);
  var n2 = Math.ceil(Math.random()*7);
  var n3 = Math.ceil(Math.random()*2);
  if(n1 < 95){
    app.globalData.currentAvatar = n2
  }else if(n3 == 1) {
    app.globalData.currentAvatar = 8
  } else {
    app.globalData.currentAvatar = 9
  }
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    hiddenGachaShow: true,
    borderArrImgs: app.globalData.avatarImgList,
    gachaIsMove: 'none'
  },
  // 事件处理函数
  bindViewTap() {
    wx.redirectTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    randomPick();

    this.setData({
      borderArrImgs: app.globalData.avatarImgList
    })

  },

  onHide() {
    this.setData({
      gachaIsMove: 'none'
   })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  start() {
    wx.redirectTo({ url: '../displayCard/displayCard' })
  },

  //bindscroll事件
  spikeScroll(e) {
    let barW = (200/e.detail.scrollWidth)*wx.getSystemInfoSync().windowWidth
    this.setData({
        barW: barW,
        percent: (200/e.detail.scrollWidth)*e.detail.scrollLeft
    })
  }
})
