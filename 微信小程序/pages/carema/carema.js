Page({
   onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
      this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
      this.audioCtx.play()
  },
  data:{
   test:"测试",
   arr:[1,2,3,4,5],
   users:[{name:"wxx",age:17},{name:"laowang",age:71}],
   type:"b",
   count:0,
   staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    isChecked:false,
    isShow:false,
    src:''
  },
    audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  go:function(){
    wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
    }
  });
  wx.previewImage({
  current: '', // 当前显示图片的http链接
  urls: [] // 需要预览的图片http链接列表
});
wx.getImageInfo({
  src: 'images/a.jpg',
  success: function (res) {
    console.log(res.width)
    console.log(res.height)
  }
})

wx.chooseImage({
  success: function (res) {
    wx.getImageInfo({
      src: res.tempFilePaths[0],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
  },
  video:function(){
//     wx.startRecord({
//   success: function(res) {
//     var tempFilePath = res.tempFilePath
//       wx.playVoice({
//       filePath: tempFilePath
//     })

//     setTimeout(function() {
//         //暂停播放
//       wx.pauseVoice()
//     }, 5000)
//   }
// });
wx.startRecord({
  success: function(res) {
    var tempFilePath = res.tempFilePath
    wx.playVoice({
      filePath:tempFilePath
    })

    setTimeout(function(){
      wx.stopVoice()
    }, 5000)
  }
})
  },
  music:function(){
    wx.getBackgroundAudioPlayerState({
        success: function(res) {
            var status = res.status
            var dataUrl = res.dataUrl
            var currentPosition = res.currentPosition
            var duration = res.duration
            var downloadPercent = res.downloadPercent
        }
    });
    wx.playBackgroundAudio({
    dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    title: '',
    coverImgUrl: 'images/a.jpg'
});
    wx.pauseBackgroundAudio();
    wx.seekBackgroundAudio({
        position: 30
    });
    wx.stopBackgroundAudio();
    wx.onBackgroundAudioPlay()
      },
      changeShow:function(){
        this.setData({
          isShow:!this.data.isShow
        })
  },
  changeA:function(){
    this.data.count++;
    console.log(this.data.count)
    if(this.data.count%3 == 0){
      this.setData({
        type:"c"
      })
    }else if(this.data.count%3 == 2){
      this.setData({
        type:"b"
      })
    }else{
      this.setData({
        type:"a"
      })
    }
      
  },
  changeB:function(){
      this.setData({
        type:"b"
      })
  },
  changeC:function(){
      this.setData({
        type:"c"
      })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
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
    console.log(11111111111)
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