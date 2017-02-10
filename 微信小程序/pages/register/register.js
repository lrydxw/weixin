// pages/register/register.js

Page({
  data:{
    userID:"",
    password:"",
    focus: false,
    inputValue:''
  },
  userID:function(e){
    //console.log(e)
    var userID=e.detail.value 
    this.setData({   
         userID: e.detail.value 
            })
      console.log("userID",userID)
 if(userID == ""){
					console.log("用户名不能为空");
             wx.showToast({
          title: '用户名不能为空',
          icon: 'success',
          duration: 2000
        })
				}
      
  },
  password:function(e){
    //console.log(e)
    var password=e.detail.value 
    this.setData({   
         password: e.detail.value 
            })
      console.log("password",password)
  },
  // makeText:function(str,time){
	// 	$("#toast").show();
	// 	$("#tip").html(str);
	// 	setTimeout(function(){
	// 		$("#toast").hide();
	// 	},time)
	// },
    register:function(userID,password){
      var that=this;
      console.log("that.data",that.data)
     wx.request({
      url: 'https://datainfo.duapp.com/shopdata/userinfo.php', 
      header: {
          'content-type': 'application/json'
      },
      
        data:{
          status:"register",
        userID:that.data.userID,
        password:that.data.password
       },
      success: function(res) {
      //    console.log(2222)
          console.log("res",res)
     
     that.setData({
        userID:that.data.userID,
        password:that.data.password
     })
      if(res.data == "0"){
				console.log("用户名重名");
          wx.showToast({
          title: '用户名重名',
          icon: 'success',
          duration: 2000
        })
        that.setData({
         inputValue: "用户名重名"
        })
      }else{
        	console.log("注册成功");
           wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 2000
        })
        that.setData({
         inputValue: "注册成功"
        })
         wx.navigateTo({
      url: '../login/login'
    })
      }
      }
    });
},
   onLoad:function(e){
    // 页面初始化 options为页面跳转所带来的参数
  

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

