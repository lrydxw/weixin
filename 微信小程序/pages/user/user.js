//input.js
Page({
  data: {
    focus: false,
    inputValue: '',
    key:'',
    isLogin:false
  },
  onLoad:function(options){
    var that=this;
  var key=  wx.getStorage({
      key: 'isLogin',
      success: function(res) {
          console.log(res.data)
          console.log(key)
         if(res.data == false){
            //   console.log("g")
            //    wx.navigateTo({
            //   url: '../user-success/user-success'
            // })

             that.setData({
                isLogin:true
            })
            
            }
         
        }  
    })
    //   wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
         
            
    console.log(options)
  var userID=  wx.getStorage({
      key: 'userID',
     success: function(res) {
    console.log(res)
that.setData({
           userID:res.data,
             key:"isLogin"
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
  login:function(){
      wx.redirectTo({
        url: '../login/login',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
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
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if(pos != -1){
      //光标在中间
      var left = e.detail.value.slice(0,pos)
      //计算光标的位置
      pos = left.replace(/11/g,'2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g,'2'),
      cursor: pos
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function(e) {
    if (e.detail.value === '123') {
      //收起键盘
      wx.hideKeyboard()
    }
  }
})
