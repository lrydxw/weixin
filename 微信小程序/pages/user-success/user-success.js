// pages/user-success/user-success.js
Page({
  data:{
   
     userImg:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    console.log(options)
  var userID=  wx.getStorage({
      key: 'userID',
     success: function(res) {
    console.log(res)
that.setData({
           userID:res.data,
         })
     }
    })
    
    var userImg=  wx.getStorage({
      key: 'userImg',
     success: function(res) {
that.setData({
           userImg:res.data
         
         })
           console.log("userImg",res.data)
     }
    })
     
  },
  changeImg:function(){
    var that=this;
    wx.request({
       url: 'https://datainfo.duapp.com/shopdata/getuser.php?callback=', 
      header: {
          'content-type': 'application/json'
      },
      
        data:{
          userID: wx.getStorage({
          key: 'userID',
            success: function(res) {
           // console.log("llll",res)
              }
          }),

          // userImg: wx.getStorage({
          // key: 'userImg',
          //   success: function(res) {
          //   that.setData({
          //         userImg:res.data
                
          //   })
          //   //  console.log("userImg",res.data)
          //     }
          // })
       },
          success: function(res) {
          //    console.log(2222)
              console.log("res",res.data)
             // let res.data.userimg_url=userImg
        // that.setData({
        //     userID:that.data.userID,
        //   userImg: wx.getStorage({
        //   key: 'userImg',
        //     success: function(res) {
        //     that.setData({
        //           userImg:res.data
                
        //     })
        //       console.log("userImg",res.data)
        //       }
        //   })
        // })
          }
    })
    wx.chooseImage({
  count: 1, // 默认9
  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
    wx.setStorage({
        key: 'userImg',
        data: tempFilePaths[0],
        success: function(res){
          // success
          console.log(tempFilePaths[0])
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
 
})
  },
  //   onLoad:function(){
  // var key=  wx.getStorage({
  //     key: 'isLogin',
  //     success: function(res) {
  //         console.log(res.data)
  //         console.log(key)
  //        if(res.data == "ok"){
  //             console.log("g")
  //              wx.navigateTo({
  //             url: '../user-success/user-success'
  //           })
  //           }
         
  //       }  
  //   })
  
  //        this.setData({
  //          key:"isLogin"
  //        })
  // },
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