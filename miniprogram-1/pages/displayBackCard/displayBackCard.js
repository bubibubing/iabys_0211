// miniprogram-1/pages/displayBackCard/displayBackCard.js
const app = getApp();
var backQuestion = [{q:'伯远下岛后第一次cover的曲目是？', a:'爱人错过'},
                    {q:'伯远b站10w粉福利cover曲目是（有两首哦）', a:'总有爱&命运是你家'},
                    {q:'伯远表演Highlight时服装上的刺绣是什么？', a:'蝴蝶'},
                    {q:'伯远表演Butterfly的时候什么东西关不掉？', a:'眼镜'},
                    {q:'伯远在训练时期常用的缓解压力的办法是？', a:'吃饭'},
                    {q:'伯远两次在镜头前详细介绍的家乡菜是？', a:'丝娃娃'},
                    {q:'决赛夜妆造花絮中伯远戏称自己solo环节造型是？', a:'金角大王'},
                    {q:'伯远希望自己房间里要有植物但不能是？', a:'真的'},
                    {q:'伯远下岛后的第一条自评是？', a:'土鸡蛋是什么梗？'},
                    {q:'请写出伯远赛时节目中公布的第一次排名和成团排名？', a:'46-7'}]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionContent: '',
    isHidden: true,
    scale_q: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.questionNo)
    this.setData({
      hasQuestion: app.globalData.hasQuestion
    })
  
    if (app.globalData.hasQuestion) {
      this.setData({
        questionContent: backQuestion[app.globalData.questionNo - 1].q
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
    wx.redirectTo({
      url: '../index/index'
    })
  },

  listenerText() {
    this.setData({
      isHidden: false,
      answerContent: backQuestion[app.globalData.questionNo - 1].a,
      scale_q: 'scale_q'
    })
  },

  listenerInput: function(e) {
    app.globalData.questionAns = e.detail.value;
  },

  compositeAvatarm() {
    wx.redirectTo({
      url: '../createAvatar/createAvatar'
    })
  }
})