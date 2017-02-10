// pages/cart/cart.js
Page({
  data:{
 proList:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'https://datainfo.duapp.com/shopdata/getCar.php?callback=',
      data: {
        userID:wx.getStorage({
              key: 'userID',
              success: function(res){
                // success
                 console.log("res.data1",res.data)
          // success
          that.setData({
            userID:res.data
          })
              },
            
            }),
      },
     success:function(res){
      
        let str = res.data;
        let len = str.length;
        var result = str.substring(1,len-1);
     //    console.log("result",result)
        
        var data = JSON.parse(result);
        console.log(data)

        that.setData({
          proList:data

        });
        }

    })
    
  },
     delete:function(e){
      let that = this;
           console.log(e.target.dataset.goodsid)
      
      wx.request({
        url: 'https://datainfo.duapp.com/shopdata/updatecar.php', 
        data:{
            goodsID:e.target.dataset.goodsid,
            userID:wx.getStorage({
              key: 'userID',
              success: function(res){
                // success
          // success
          that.setData({
            userID:res.data
          })
              },
            
            }),
            number:0
           },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
      
          var number=1;
          console.log("res.data2",res.data)
          console.log("res",res)
          //console.log(number)
        that.setData({
            goodsID:e.target.dataset.goodsid,
      
          number:0
        });
        if(res.data == "0"){
          console.log("res",res);}
        },
        
        });
    },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})