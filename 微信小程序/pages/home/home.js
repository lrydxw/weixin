
Page({
  data: {
    imgUrls: [
      "https:/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1eqMyIVXXXXXIaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
      "http:\/\/img30.360buyimg.com\/popWaterMark\/jfs\/t2011\/4\/612174753\/231399\/8309087b\/561cbdb9N3ce22bf7.jpg",
      "https:\/\/img.alicdn.com\/imgextra\/i2\/2625587648\/TB20VACfpXXXXcFXXXXXXXXXXXX_!!2625587648.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular:true,
    current:0,
    currentIndex:0,
    proList:""
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
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

    //console.log(res.data)
    let str = res.data;
    let len = str.length;
    var result = str.substring(1,len-1);
  //   console.log("result",result)
   //  console.log("JSON",JSON.parse(str))
    var data = JSON.parse(result);
    console.log(data)

    that.setData({
      proList:data
    });
  }
});

  
  
  },
  toDetail:function(e){
      var goodsID=e.target.dataset.goodsid;
      var goodsName=e.target.dataset.goodsname;
      //console.log(goodsID);
      console.log("home-e-detail",e);
      console.log("e.target",e.target);
      wx.navigateTo({
      url: '../detail/detail?goodsID='+goodsID+'&goodsName='+goodsName
    })
  },
  proClass:function(e){
    console.log("a")
  wx.navigateTo({
      url: '../proClass/proClass'
      })
  },
  changeIndex:function(event){
    let index = event.target.dataset.index;
    console.log(index)
    this.setData({
      currentIndex:index
    })
  },
  changeItem:function(event){
     console.log("event.detail",event.detail)
   // event.detail = {current: current}
    //console.log(this.data.current)
    this.setData({
      currentIndex:event.detail.current
    })
  }
  
})