var array = [
  { id: 'red', pic:'http://www.sanpinche.com/public/upload/ad/2018/01-11/55be5a295101a44de650c02938caff31.jpg'}, 
  { id: 'yellow', pic: 'http://www.sanpinche.com/public/upload/ad/2018/01-11/77fc3c8b1c69d3e37ea44fca75662052.jpg'},
  { id: 'blue', pic: 'http://www.sanpinche.com/public/upload/ad/2018/01-11/dc59f8aea8787ae5b8a63ce2f5f6900a.jpg'}, 
  { id: 'green', pic: 'http://www.sanpinche.com/public/upload/ad/2018/01-11/77fc3c8b1c69d3e37ea44fca75662052.jpg'}
 ]
Page({
  data: {
    toView: array[2].id,
    scrollTop: 0,
    array: array
  },
  onLoad:function(){
    wx.request({
      url: getApp().data.service+'/Mobile/Index/banners.html', //仅为示例，并非真实的接口地址
      data: {
        type: 'banner'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(3)
  },
  tap: function (e) {
    // console.log(1)
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    // console.log(2)
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})