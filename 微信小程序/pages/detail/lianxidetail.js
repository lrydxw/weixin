Page({
	data:{
		goodsID:"",
		goodsListImg:"",
		goodsName:"",
		price:"",
		indicatorDots:true,
		autoplay:false,
		interval:3000,
		duration:500,
		circular:true,
		bannerList:""
	},
	onLoad:function(){
		var that=this;
		wx.setNavigationBarTitle({
			title:options.goodsName
		})
		wx.request({
			url: 'https://datainfo.duapp.com/shopdata/getGoods.php?callback=',
			data:{
				goodsID:options.goodsID
			},
			header:{
				'content-type':'application/json'
			},
			success:function(res){
				let str=res.data;
				let len=str.length;
				var result=str.substring(1,len-1);
				var data=JSON.parse(result);
				that.setData({
					goodsID:data[0].goodsID,
					goodsListImg:data[0].goodsListImg,
					goodsName:data[0].goodsName,
					price:data[0].price,
					bannerList:JSON.parse(data[0].imgsUrl)
					
				})
			}
		})
	},
	
})
