var p = 0;
var wxrequest = require('../../utils/request.js')
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
    //获取数据
    this.request(p,0,'')    
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
    this.request(p, 0, '') 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    p++;
    this.request(p, 1, '') 
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
  request: function (p,pull, keywords){
    var that = this
    //获取主页数据
    wxrequest.request({ url: "/Mobile/Goods/index" }, { requst_code: 'MOBILE_GOODSLIST', id: '138', p: p, keywords: keywords}, function success (res) {
        var curings = that.data.curings;
        if(pull==1){
          var list = curings.concat(res.data.data)
          that.setData({ curings: list })
        }else{
          that.setData({ curings: res.data.data })
        }
    }, function fail (res) {
      console.log(res)
    }
    )
  }

  
})