// pages/addCart/addCart.js
Page({
  data:{
  goodsID:"",
  goodsListImg:"",
  price:"",
  number:"",
  proList:""

  },
  onLoad:function(options){
     console.log("options",options)
   // console.log(11111)
    let that = this;
   wx.request({
   url: 'https://datainfo.duapp.com/shopdata/updatecar.php', 
  data:{
      goodsID:options.goodsID,
      goodsName:options.goodsName,
      userID:wx.getStorage({
        key: 'userID',
        success: function(res){
          console.log("res.data",res.data)
          // success
          that.setData({
            userID:res.data
          })
        },
       
      }),
      number:options.number
     
			
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
 
    var number=res.data;
    console.log("res.data",res.data)
    //console.log(number)
   that.setData({
  goodsID:options.goodsID,
    number:options.number
   });
    console.log("number",options.number)
   if(res.data == "1"){
    console.log("res",res);}
  },
  
   });
   },
//     onLoad:function(options){
//     // 生命周期函数--监听页面加载
//     console.log(options)
//     // this.setData({
//     //     goodsID:options.goodsID
//     // })
// var that = this;
// wx.setNavigationBarTitle({
//       title: options.goodsName
//     })
//      wx.request({
//   url: 'https://datainfo.duapp.com/shopdata/getGoods.php?callback=', 
//   data:{
//       goodsID:options.goodsID
//   },
//   header: {
//       'content-type': 'application/json'
//   },
//   success: function(res) {
//    //    console.log(2222)
//     // console.log(res.data)
//     let str = res.data;
//     let len = str.length;
//     var result = str.substring(1,len-1);
//     // console.log(result)
//     var data = JSON.parse(result);
//     console.log("data",data)

//     that.setData({
//       proList:data,
//       goodsID:data[0].goodsID,
//       goodsListImg:data[0].goodsListImg,
//       goodsName:data[0].goodsName,
//       price:data[0].price,
//       bannerList:JSON.parse(data[0].imgsUrl)
      
//     });
   
//   },
  
// });
//   },
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