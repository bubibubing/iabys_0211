// miniprogram-1/pages/displayCard/displayCard.js
const app = getApp();

function randomBackPick(){
  var n1 = Math.floor(Math.random()*10+1);
  var n2 = Math.floor(Math.random()*10+1);
  if(n1 <= 8){
    app.globalData.hasQuestion = true;
    app.globalData.questionNo = n2;
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
    aaaa: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    randomBackPick();
    setTimeout((function callback(){
      this.setData({ isDisplay: 'none'});
    }).bind(this), 1000);

    this.setData({
      aaaa: app.globalData.avatarImg[app.globalData.currentAvatar - 1]
    })
    app.globalData.avatarImgList[app.globalData.currentAvatar - 1].hasAvatar = true
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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