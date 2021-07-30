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
    hiddenGachaShow: true,
    borderArrImgs: app.globalData.avatarImgList,
    gachaIsMove: 'none'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad() {
    this.setData({
      borderArrImgs: app.globalData.avatarImgList
      // sampleImg:getApp().globalData.sampleImg
    })
    randomPick();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onHide() {
    this.setData({
      gachaIsMove: 'none'
   })
  },

  start() {
    wx.navigateTo({ url: '../displayCard/displayCard' })
  },

  createAva() {
    wx.redirectTo({
      url: '../createAvatar/createAvatar'
    })
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
