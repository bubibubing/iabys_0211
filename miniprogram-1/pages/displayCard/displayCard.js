// miniprogram-1/pages/displayCard/displayCard.js
const app = getApp()

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
    setTimeout((function callback(){
      this.setData({ isDisplay: 'none'});
    }).bind(this), 1000);

    this.setData({
      aaaa: "../image/" + app.globalData.currentAvatar + ".png"
    })
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
    wx.navigateTo({
      url: '../cardBack/cardBack'
    })
  },

  xxx() {
    var n1 = Math.round(Math.random()*100);
    var n2 = Math.ceil(Math.random()*9);
    if(n1 < 95){
      console.log( 我是機率為95%的 )
   }else{
       console.log( 我是機率為5%的)
   }


  }
})