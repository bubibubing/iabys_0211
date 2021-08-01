// pages/madeph/madeph.js
const app = getApp();

//js的这部分有很多是找的轮子，谢谢分享轮子的网友
/**
 * 大概两部分：
 * 1、先把用户上传的头像画出来，类一个圆
 * 2、把前一个页面传过来的头像框（中间透明）在画上去就基本结束了
 * PS：思路比较清晰，但细节完善的不是很好，只能说能用吧。
 */



app.globalData.toubgsrc = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0, //滚动条距离左边的距离
    barW: 0, //滚动条的宽度
    src: '',
    bgsrc: '',
    hasBorder: '',
    // bgcss:'',
    // touList: _tousList,
    canvas: {
      width: null,
      height: null,
      background: 'rgb(255,255,255)'
    },
    canvasId: 'canvas',
    preview: {
      left: 0,
      right: 0,
      height: 534
    },
    qualityImg: null,
    screenWidth: '',
    distributionCode: '',
    imageBill: '',
    isWeChatAvatarUrl: false, // true微信头像   false自定义头像
    borderArrImgs: app.globalData.avatarImgList,
    avatar: '',
    addBtn: '/images/add.png',
    existAvatars: '',
    posterUrl: './../../images/6381627763655_.pic.jpg',
  },
  // getImgList(){
  //   app.globalData['has']
  // },
  //选择用户自己头像图片
  hasBorder() {
    var that = this;
    for (var i = 0; i < app.globalData.avatarImgList.length; i++) {
      if (app.globalData.avatarImgList[i].hasAvatar) {
        return true;
      }
    }
    return false;
  },

  upload() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        //将选择的图传至upload页处理
        wx.redirectTo({
          url: `../upload/upload?src=${src}`
        })
      }
    })
  },
  selectBorder(e) {
    var that = this
    // console.log(e.currentTarget.dataset)
    if (!e.currentTarget.dataset.url) {
      wx.showModal({
        title: '提示',
        content: '头像框无法找到了哦!'
      })
    } else {
      // 选择头像框路径 存入全局
      app.globalData.toubgsrc = e.currentTarget.dataset.url
      that.setData({
        bgsrc: e.currentTarget.dataset.url
        // bgcss:bgcss
      });
      wx.showToast({
        title: '选择头像框成功',
        icon: 'none',
        duration: 1000,
        // success:function(){
        //   // 然后返回上一页
        //   wx.navigateBack()
        // }
      })
    }
  },
  onLoad(option) {
    var that = this;
    // console.log(app.globalData.avatarImgList)
    // var bgcss = app.globalData.toubgsrc.substr(14, 2);
    // console.log(bgcss)
    that.setData({
      bgsrc: app.globalData.toubgsrc,
      borderArrImgs: app.globalData.avatarImgList,
      hasBorder: that.hasBorder(),
      src: app.globalData.photo?app.globalData.photo:'',
      // bgcss:bgcss
    });
    // console.log(that.data.bgsrc);
    // console.log(that.data.bgcss);
    let {
      avatar
    } = option;
    if (avatar) {
      that.setData({
        src: avatar
      });
      app.globalData.photo = avatar;
    }
  },
  continue () {
    // app.globalData.toubgsrc = "https://s1.imagehub.cc/images/2021/07/25/mmexport1627203411540fbd0fbb61c09ecac.png"
    // console.log(app.globalData)
    wx.redirectTo({
      url: './../index/index'
    })
  },
  /* 计算滚动区域的宽度 */
  countCatWidth() {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.scroll-item').boundingClientRect(function (rect) {
      let sw = (rect.width + 5) * that.data.catList.length + 5
      that.setData({
        barW: (200 / sw) * wx.getSystemInfoSync().windowWidth
      })
    }).exec();
  },
  //bindscroll事件
  spikeScroll(e) {
    // console.log(e.detail)
    let barW = (200 / e.detail.scrollWidth) * wx.getSystemInfoSync().windowWidth
    this.setData({
      barW: barW,
      percent: (200 / e.detail.scrollWidth) * e.detail.scrollLeft
    })
  },
  async savePhoto() {
    let that = this
    wx.showLoading({
      title: '正在生成头像',
      mask: true
    })
    // 开始绘制头像
    that.init()

  },
  init() {
    let that = this
    that.ctx = wx.createCanvasContext(that.data.canvasId)
    wx.getSystemInfo({
      success: (systemInfo) => {
        // 屏幕宽度
        let screenWidth = systemInfo.screenWidth

        // 预览图片宽度
        let previewWidth = that.getPreviewWidth()
        // 预览图片宽高比
        let aspectRatio = previewWidth / that.data.preview.height

        // 设置画布尺寸px
        let canvas = that.data.canvas
        canvas.width = screenWidth,
          canvas.height = screenWidth
        that.setData({
          screenWidth: screenWidth,
          aspectRatio: aspectRatio,
          canvas: canvas
        })
        that.ctx.setFillStyle(that.data.canvas.background)
        that.ctx.fillRect(0, 0, that.data.canvas.width, that.data.canvas.height)
        // 画用户头像
        that.drawAvatarUrlImage()
      }
    })
  },
  /**
   * 画头像框
   */
  drawAvatarBorderImage() {
    let that = this
    let borderImg = that.data.bgsrc
    // console.log(borderImg)

    // 没有头像框
    if (!borderImg) {
      // 开始生成
      that.draw()
      return
    }
    // 有头像框则继续执行
    wx.downloadFile({
      url: borderImg,
      success: function (result) {
        console.log('result', result)
        that.ctx.drawImage(result.tempFilePath, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
        // 开始生成
        that.draw()
      },
      fail: function () {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '无法下载头像框',
        })
      }
    })

    // wx.getImageInfo({
    //   src: borderImg,
    //   success: function(result) {
    //         console.log('result', result)
    //         that.ctx.drawImage(result.path, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
    //         // 开始生成
    //         that.draw()
    //       },fail: function() {
    //             wx.hideLoading()
    //             wx.showModal({
    //               title: '提示',
    //               content: '无法下载头像框',
    //             })
    //           }
    // })
    // ({
    //   url: borderImg,
    //   success: function(result) {
    //     console.log('result', result)
    //     that.ctx.drawImage(result.tempFilePath, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
    //     // 开始生成
    //     that.draw()
    //   },
    //   fail: function() {
    //     wx.hideLoading()
    //     wx.showModal({
    //       title: '提示',
    //       content: '无法下载头像框',
    //     })
    //   }
    // })

    //  wx.chooseImage({
    //   count: 1,
    //   sizeType: ['compressed', 'original'],
    //   sourceType: ['album'],
    //   success: (res) => {
    //     var tempFilePaths = res.tempFilePaths
    //     console.log(tempFilePaths);
    //     this.setData({
    //       isShowContainer: true,
    //       backgroundImgSrc: tempFilePaths,
    //     })

    //     // 滚动到预览区域
    //     wx.pageScrollTo({
    //       selector: "#avatarPreview",
    //     })

    //     this.resetOffset();
    //   }
    // })
    // },

  },
  /**
   * 画用户头像
   */
  drawAvatarUrlImage() {
    let that = this
    // let avatarUrl = that.data.userInfo ? that.data.userInfo.avatarUrl : ''
    let avatarUrl = that.data.src;
    console.log(avatarUrl)
    if (!that.data.src) {
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '请先上传头像',
      })
    } else if (!that.data.bgsrc) {
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '请先选择头像框',
      })
    } else if (that.data.src) {
      that.ctx.drawImage(that.data.src, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
      // 画头像框
      that.drawAvatarBorderImage()
    } else {
      wx.hideLoading()
      wx.showModal({
        title: '提示',
        content: '请先上传头像',
      })
    }
  },
  // rpx转为画布尺寸
  changeSize(size) {
    let canvasSize = (size / 750) * this.data.screenWidth
    canvasSize = parseFloat(canvasSize * 2)
    return canvasSize
  },
  // 获取预览栏的宽度rpx
  getPreviewWidth() {
    let previewWidth = (750 - this.data.preview.left - this.data.preview.right)
    return previewWidth
  },

  draw() {
    let that = this
    that.ctx.draw(false, () => {
      setTimeout(() => {
        that.canvasToTempFilePath()
      }, 130)
    })
  }, // 生成图片
  canvasToTempFilePath() {
    let that = this
    wx.canvasToTempFilePath({
      canvasId: that.data.canvasId,

      success(res) {
        wx.hideLoading()
        that.ctx = null
        // console.log(res)
        that.setData({
          imageBill: res.tempFilePath
        })

        // 生成以后直接预览图片
        wx.previewImage({
          current: res.tempFilePath,
          urls: [res.tempFilePath],
        })

      },
      fail() {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '头像保存失败',
        })
      }
    })
  },

  toMainPage() {
    wx.redirectTo({
      url: './../index/index'
    })
  },
  savePoster() {
    let that = this
    that.ctx = wx.createCanvasContext(that.data.canvasId)
    wx.showLoading({
      title: '正在生成头像',
      mask: true
    })
    wx.getSystemInfo({
      
      success: (systemInfo) => {
        // 屏幕宽度
        let screenWidth = systemInfo.screenWidth

        // 预览图片宽度
        let previewWidth = that.getPreviewWidth()
        // 预览图片宽高比
        let aspectRatio = previewWidth / that.data.preview.height

        // 设置画布尺寸px
        let canvas = that.data.canvas
        canvas.width = screenWidth,
          canvas.height = screenWidth
        that.setData({
          screenWidth: screenWidth,
          aspectRatio: aspectRatio,
          canvas: canvas
        })
        that.ctx.setFillStyle(that.data.canvas.background)
        that.ctx.fillRect(0, 0, that.data.canvas.width, that.data.canvas.height)
        that.downloadPoster()
        // that.ctx.drawImage(that.data.posterUrl, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
        // // posterImg = that.data.posterUrl
        // that.draw();
        // setTimeout(() => {
        // wx.hideLoading()
        // }, 500);
      }
    })

    // wx.downloadFile({
    //   url: posterImg,
    //   success: function(result) {
    //     console.log('result', result)
    //     that.ctx.drawImage(result.tempFilePath, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
    //     // 开始生成
    //     that.draw()
    //   },
    //   fail: function() {
    //     wx.hideLoading()
    //     wx.showModal({
    //       title: '提示',
    //       content: '无法下载海报',
    //     })
    //   }
    // })
  },downloadPoster(){
    var that = this
    wx.downloadFile({
      url: 'https://img.wenhairu.com/images/2021/08/01/9hq90.jpg',
      success: function (result) {
        // console.log('result', result)
        that.ctx.drawImage(result.tempFilePath, that.changeSize(0), that.changeSize(0), that.data.screenWidth, that.data.screenWidth)
        // 开始生成
        wx.hideLoading()
        that.draw()
      },
      fail: function () {
        wx.showModal({
          title: '提示',
          content: '无法下载头像框',
        })
      }
    })
  }

})