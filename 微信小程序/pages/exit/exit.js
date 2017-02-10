

Page({
  data: {
   
  },
  exit:function(){
      console.log("a")
       wx.setStorage({  key:"isLogin",  data:false})
  }
})