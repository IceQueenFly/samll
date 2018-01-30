var p = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curings:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    p++;
    this.request(p,'')    
    //获取数据
    
    // wx.request({
    //   url: getApp().data.service + '/Mobile/Goods/index.html', //仅为示例，并非真实的接口地址
    //   data: {
    //     requst_code: 'MOBILE_GOODSLIST',
    //     id:'138',
    //     p:1,
    //     keywords:''
    //   },
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {

    //     that.setData({ curings: res.data.data })

    //   },
    //   fail: function (res) {
    //   }
    // })
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
    p=1;
    this.request(p, '')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    p++;
    this.request(p,'')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 搜索
   */
  search:function(){
  
  },
  /**
   * 网络请求
   */
  request: function (p, keywords){
    var that = this
    wx.request({
      url: getApp().data.service + '/Mobile/Goods/index.html', //仅为示例，并非真实的接口地址
      data: {
        requst_code: 'MOBILE_GOODSLIST',
        id: '138',
        p: p,
        keywords: keywords
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var curings = that.data.curings;
        var list =curings.concat(res.data.data)
        that.setData({ curings: list })

      },
      fail: function (res) {
      }
    })
  }
})