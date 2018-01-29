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
        requst_code: 'MOBILE_BANNER'
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



    //获取主页数据
    wx.request({
      url: getApp().data.service + '/Mobile/Index/index.html', //仅为示例，并非真实的接口地址
      data: {
        requst_code: 'MOBILE_HOME'
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({ recommends: res.data.data.recommends})
        that.setData({ curings: res.data.data.curings })
        that.setData({ new_cars: res.data.data.new_cars })
        that.setData({ used_cars: res.data.data.used_cars })
      },
      fail: function (res) {

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
