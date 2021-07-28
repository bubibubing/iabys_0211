// miniprogram-1/pages/displayBackCard/displayBackCard.js
const app = getApp();
var backQuestion = new Array("Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionContent: '',
    isHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sampleImg: getApp().globalData.sampleImg,
      hasQuestion: app.globalData.hasQuestion
    })
  
    console.log(app.globalData.hasQuestion);
    console.log(app.globalData.questionNo);
    if (app.globalData.hasQuestion) {
      this.setData({
        questionContent: backQuestion[app.globalData.questionNo]
      }) 
    }

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

  returnHome() {
    wx.navigateTo({
      url: '../index/index'
    })
  },

  listenerText() {
    this.setData({
      isHidden: false
    })
  },

  listenerInput: function(e) {
    app.globalData.questionAns = e.detail.value;
  },

  compositeAvatarm() {
    wx.redirectTo({
      url: '../createBase/createBase'
    })
  }
})