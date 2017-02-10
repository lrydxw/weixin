Page({
  data:{
      goodsID:"",
      goodsListImg:"",
      goodsName:"",
      number:"",
      price:"",
      
      indicatorDots: true,
      autoplay: false,
      interval: 3000,
      duration: 500,
      circular:true,
      bannerList:"",
      proList:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log(options)
    // this.setData({
    //     goodsID:options.goodsID
    // })
var that = this;
wx.setNavigationBarTitle({
      title: options.goodsName
    })
     wx.request({
  url: 'https://datainfo.duapp.com/shopdata/getGoods.php?callback=', 
  data:{
      goodsID:options.goodsID
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
       console.log(2222)
    // console.log(res.data)
    let str = res.data;
    let len = str.length;
    var result = str.substring(1,len-1);
    // console.log(result)
    var data = JSON.parse(result);
    console.log("data",data)

    that.setData({
      proList:data,
      goodsID:data[0].goodsID,
      goodsListImg:data[0].goodsListImg,
      goodsName:data[0].goodsName,
      price:data[0].price,
      bannerList:JSON.parse(data[0].imgsUrl)
    });
    
    
  },
  
});
  },
  gocart:function(e){
    var goodsID=e.target.dataset.goodsid;
      var goodsName=e.target.dataset.goodsname;
      var number=1;
      console.log("goodsID",goodsID)
      console.log("detail-e-cart",e)
     
     // console.log("e",e.target)
       wx.navigateTo({
      url: '../cart/cart?goodsID='+goodsID+'&goodsName='+goodsName+'&number='+number
    });
     
     // console.log(goodsID)
    },
    shoucang:function(){
      console.log("a")
    },
    addcart:function(e){
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
              },
            
            }),
            number:1
           },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
      
          var number=1;
          console.log("res.data",res.data)
          console.log("res",res)
          //console.log(number)
        that.setData({
      
          number:1
        });
          console.log("number",res.number)
        if(res.data == "0"){
        wx.navigateTo({
          url: '../login/login'
        });
          }
        },
        
        });
    },
  onReady:function(){
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})