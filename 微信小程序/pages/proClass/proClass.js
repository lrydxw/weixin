
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    circular:false,
    current:0,
    currentIndex:0,
    proList:"",
    val:""
  },
  onLoad:function(){
    console.log(11111)
    let that = this;
   wx.request({
  url: 'https://datainfo.duapp.com/shopdata/getGoods.php?callback=', 
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
    console.log(data)

    data.sort(function(a,b){
      return a.price-b.price;
    })

    that.setData({
      proList:data
    });
  }
});

  
  
  },
  bindKeyInput:function(e){
    console.log(e.detail.value)
    this.setData({
      val:e.detail.value
    })
  },
  bindButtonTap:function(e){
      console.log(e.detail)
      var searchTxt = this.data.val;
      
  },
  toDetail:function(e){
      var goodsID=e.target.dataset.goodsid;
      var goodsName=e.target.dataset.goodsname;
      console.log(goodsID);
      wx.navigateTo({
      url: '../detail/detail?goodsID='+goodsID+'&goodsName='+goodsName
    })
  }
  
 
  
})