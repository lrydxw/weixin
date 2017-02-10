Page({
  data:{
    kindtit:'',
    kindlistIndex:'',
    kindarr:["kind1.json","kind2.json","kind3.json","kind4.json","kind5.json","kind6.json","kind7.json","kind8.json","kind9.json","kind10.json","kind11.json","kind12.json","kind13.json","kind14.json","kind15.json"],
    listarr:''   
  },
  kindlist:function(e){
    var that=this;
    console.log(e.target.dataset.id);
    var list=e.target.dataset.id;
    this.setData({
      kindlistIndex:list
    })
    var kindarr=this.data.kindarr;
    // 正在流行
    wx.request({
      url: "http://10.48.0.149:8080/"+kindarr[list],
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        var arr=[];
        // success
        var str=res.data;
        // console.log("kkkk",str)
        // console.log("kkkk",data)
       arr=str;   
        that.setData({
          listarr:arr
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
    var that=this;
    // 生命周期函数--监听页面加载
    
    wx.request({
      url: 'http://10.48.0.149:8080/kind.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      
      success: function(res){
        // success
        // console.log(res.data.data[581].list)
        var arr=res.data.data[581].list
        that.setData({
          kindtit:arr
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
    // 正在流行
    wx.request({
      url: "http://10.48.0.149:8080/kind1.json",
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        var arr=[];
        // success
        var str=res.data;
        console.log("kkkk",str)
        // console.log("kkkk",data)
       arr=str;   
        that.setData({
          listarr:arr
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
   
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
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