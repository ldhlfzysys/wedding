// pages/map/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, 
  },
  markertap(e) {
    // console.log(e)
    wx.openLocation({
      latitude: parseFloat(25.075829436404327),
      longitude: parseFloat(116.10905706882477),
      scale: 18,
      name: "中凯国际酒店",
      address: "中凯国际酒店"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      lng: "116.10905706882477", // 全局属性，用来取定位坐标
      lat: "25.075829436404327",
      markers: [{
        iconPath: "/images/nav.png",
        id: 0,
        latitude: "25.075829436404327", // 页面初始化 options为页面跳转所带来的参数 
        longitude: "116.10905706882477",
        width: 50,
        height: 50
      }],
    });
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
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
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  }
})