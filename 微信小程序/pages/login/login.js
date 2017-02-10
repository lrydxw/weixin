// pages/login/login.js
Page({
  data:{
    userID:"",
    password:"",
    inputValue:''
  },
    userID:function(e){
    //console.log(e)
    var userID=e.detail.value 
    this.setData({   
         userID: e.detail.value 
            })
      console.log("userID",userID)
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
   login:function(userID,password){
      var that=this;
      console.log("that.data",that.data)
     wx.request({
      url: 'https://datainfo.duapp.com/shopdata/userinfo.php', 
      header: {
          'content-type': 'application/json'
      },
        data:{
        status:"login",
        userID:that.data.userID,
        password:that.data.password
       },
      success: function(res) {
      //  console.log(2222)
          console.log("res",res)
           if(res.data == "0"){
				console.log("用户名不存在");
        wx.showToast({
        title: '用户名不存在',
        icon: 'success',
        duration: 2000
      })
        that.setData({
         inputValue: "用户名不存在"
        })
				}else if(res.data=="2"){
				console.log("密码错误");
          wx.showToast({
        title: '密码错误',
        icon: 'success',
        duration: 2000
      })
        that.setData({
         inputValue: "密码错误"
        })
				}else{
           wx.switchTab({
              url: '../user/user'
            })
          console.log("登陆成功",3000);
            wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 2000
        })
          that.setData({
         inputValue: "登陆成功"
        })
          wx.setStorage({  key:"isLogin",  data:true})
          wx.setStorage({  key:"userID",  data:res.data.userID})
          wx.setStorage({  key:"userImg",  data:res.data.userimg_url})
        }
      //  if("islogin"=="ok"){
      //       wx.navigateTo({
      //         url: '../user-success/user-success'
      //       })
      //     }
     that.setData({
        userID:that.data.userID,
        password:that.data.password,
        userImg: wx.getStorage({  key:"userImg"})
     })
       
      }
    });
},
  onLoad:function(options){
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