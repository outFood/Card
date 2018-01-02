<template>
	<div class="merchwrap">
		<div class="htitle">
			<span class="guides"></span>
			<span class="centertext">附近商家</span>
			<span class="guides"></span>
		</div>
		<div class="merch" v-for="(item, index) in datas">
			<div class="content">
				<div class="logo">
					<img :src="item.logo" alt="">
				</div>
				<div class="detail">
					<div class="merchname">
						{{item.merchname}}
					</div>
					<div class="merchdesc">
						{{item.desc}}
					</div>
					<div class="merchaddress">
						<div class="address">
							地址: <span>{{item.address}}</span>
						</div>
						<div class="phone">
							电话: <span>{{item.phone}}</span>
						</div>
					</div>
					<div class="comein">
						<div class="btn">进店 ></div>
						<div class="distance">{{item.dis}}km</div>
					</div>
				</div>
			</div>
			<div class="otherinfo">
				<div class="location">
					查看地图
				</div>
				<div class="callmerch">
					联系商家
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data (){
		return {
			datas: [
				{
					logo: "http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
					merchname: "新白鹿",desc: "哈哈哈哈嘻嘻嘻嘻看家胡师傅远看看卡",address: "美国纽约时代广场",
					phone: "19022339302", dis: "80"
				},{
					logo: "http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
					merchname: "新白鹿",desc: "哈哈哈哈嘻嘻嘻嘻看看卡",address: "美国纽约时代广场",
					phone: "19022339302", dis: "80"
				},{
					logo: "http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
					merchname: "新白鹿",desc: "哈哈哈哈嘻嘻嘻嘻看看卡位阿海爱护肤哈",address: "美国纽约时代广场",
					phone: "19022339302", dis: "80"
				},{
					logo: "http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
					merchname: "新白鹿",desc: "哈哈哈哈嘻嘻嘻嘻看看卡",address: "美国纽约时代广场",
					phone: "19022339302", dis: "80"
				},{
					logo: "http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
					merchname: "新白鹿",desc: "哈哈哈哈嘻嘻嘻嘻哈UI回复免看看卡",address: "美国纽约时代广场",
					phone: "19022339302", dis: "80"
				}
			]
		}
	}
}
</script>

<style>
	.merchwrap{
		width: 100%;
		font-size: 15px;
		background: #f5f5f5;
	}
	
	.merchwrap .htitle{
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: -webkit-box;
    	display: -webkit-flex;
    	display: -ms-flexbox;
    	display: flex;
    	align-items: center;
    	flex-direction: row;
    	justify-content: center;
    	border-bottom: 1px solid #bbb;
    	background: #FFF;
	}

	.merchwrap .htitle span{
		display: inline-block;
	}

	.merchwrap .htitle span.guides{
		width: 60px;
		height: 1px;
		background: #000;
	}

	.merchwrap .htitle span.centertext{
		color: #000;
		margin: 0 10px;
		font-size: 16px;
	}

	.merchwrap .merch{
		width: 100%;
		box-sizing: border-box;
		padding: 0 10px;
		background: #FFF;
		margin-bottom: 10px;
	}

	.merchwrap .merch .content{
		width: 100%;
		overflow: hidden;
		display: -webkit-box;
    	display: -webkit-flex;
    	display: -ms-flexbox;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
		flex-wrap: nowrap;
		align-items: center;
		padding: 10px 0;
		text-align: left;
		border-bottom: 1px solid #bbb
	}

	.merchwrap .merch .content .logo{
		width: auto;
		height: auto;
	}

	.merchwrap .merch .content .logo img{
		width: 80px;
		height: 80px;
		border-radius: 10px;
	}

	.merchwrap .merch .content .detail{
		flex-grow: 1;
		color: #000;
		padding-left: 15px;
		position: relative;
	}

	.merchwrap .merch .content .detail .merchname{
		width: 100%;
		height: 36px;
		line-height: 36px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		font-weight: bold;
	}

	.merchwrap .merch .content .detail .merchdesc{
		width: 75%;
		height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #333;
		font-size: 12px;
	}

	.merchwrap .merch .content .detail .merchaddress{
		margin-top: 5px;
		font-size: 12px;
		color: #555;
	}

	.merchwrap .merch .content .detail .comein{
		width: auto;
		height: auto;
		position: absolute;
		top: 50%;
		right: 10px;
		margin-top: -20px;
		text-align: center;
	}

	.merchwrap .merch .content .detail .comein .btn{
		width: auto;
		height: 26px;
		line-height: 26px;
		font-size: 13px;
		color: #FF0000;
		padding: 0 3px;
		border: 1px solid #FF0000;
		border-radius: 12px;
	}

	.merchwrap .merch .content .detail .comein .distance{
		width: auto;
		height: auto;
		margin-top: 6px;
		font-size: 12px;
		color: #FF0000;
		font-weight: bold;
	}

	.merchwrap .merch .otherinfo{
		overflow: hidden;
		text-align: center;
		height: 42px;
		line-height: 42px;
		font-size: 17px
	}

	.merchwrap .merch .otherinfo div{
		width: 50%;
		float: left;
		box-sizing: border-box;
	}

	.merchwrap .merch .otherinfo div.location{
		border-right: 1px solid #bbb;
		color: #555;
	}
	
</style>