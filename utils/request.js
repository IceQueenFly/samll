/**
 * ｛Object｝params:访问的配置 路径：url,方式：type，数据传输格式：content_type，数据接收格式：data_type 
 * {Object}data:请求的参数
 * {function}success:请求成功
 * {function}fail:请求失败
 */

var request = function (params,data,success,fail){
  typeof (params.type) !='undefined' ? params.type = params.type : params.type='POST';
  typeof (params.content_type) != 'undefined' ? params.content_type = params.content_type : params.content_type='application/json';
  typeof (params.data_type) != 'undefined' ? params.data_type = params.data_type : params.data_type='json';
  wx.request({
    'url': getApp().data.service+params.url,
    data:data,
    header:{
      'content-type': params.content_type
    },
    method: params.type,
    dataType: params.data_type,
    success:function(res){
      success(res)
    },
    fail:function(res){
      success(res)
    }

  })

};
module.exports = {
  request: request,
};