// miniprogram-1/pages/displayCard/displayCard.js
const app = getApp();

function randomBackPick(){
  var n1 = Math.floor(Math.random()*10+1);
  var n2 = Math.floor(Math.random()*10+1);

  if(n1 <= 8){
    app.globalData.hasQuestion = true;
    app.globalData.questionNo = n2;
  } else {
    app.globalData.hasQuestion = false;
    app.globalData.questionN = null;
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDisplay: 'block',
    isCardFrontDisplay: 'flex',
    isCardBackDisplay: 'none',
    getAva: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    randomBackPick();
    setTimeout((function callback(){
      this.setData({ isDisplay: 'none'});
    }).bind(this), 2000);

    this.setData({
      getAva: app.globalData.avatarImgList[app.globalData.currentAvatar - 1].url
    })
    app.globalData.avatarImgList[app.globalData.currentAvatar - 1].hasAvatar = true
  },

  flipCard() {
    wx.redirectTo({
      url: '../displayBackCard/displayBackCard'
    })
  },
  toSelect() {
    wx.redirectTo({
      url: './../createAvatar/createAvatar'
    })
    console.log(app.globalData.avatarImgList)
  },
  toMainPage() {
    console.log(app.globalData)
    wx.redirectTo({
      url: './../index/index'
    })
  }
})