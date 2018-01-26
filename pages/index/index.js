//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiper: {
      'indicatordots':true,
      'indicatorcolor':'#fff',
      'indicatoractivecolor':'#ddd',
      'autoplay':true,
      'interval':3000
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: getApp().data.service + '/Mobile/Index/banners.html', //仅为示例，并非真实的接口地址
      data: {
        type: 'banner'
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({ imgUrls: res.data.data})
      },
      fail:function(res){
        
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res),
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  }
})
