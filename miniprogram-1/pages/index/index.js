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
    hiddenGachaShow: true
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    randomPick();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    console.log(app.globalData.currentAvatar);

    // getApp().globalData.name = "王二麻子";
    // getApp().globalData.favorite = "集邮";

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
    // var animation = wx.createAnimation({
    //   duration: 4000,
    //   delay: 1000
    //  });
    //  animation.opacity(1).step()
    //  this.setData({
    //   hiddenGachaShow:!this.data.hiddenGachaShow,
    //   ani: animation.export()
      
    //  })

    wx.navigateTo({
      url: '../displayCard/displayCard'
    })
  }
})
