<template>
	<div class="container">
		<div class="headers">
			<div class="header-l">累计分红</div>
			<div class="header-r">+ 0.00 元</div>
		</div>
		<div class="navbar">
			<div class="navbar-item active">全部</div>
			<div class="navbar-item">待结算</div>
			<div class="navbar-item">已结算</div>
		</div>
		<div class="section">
			<div class="empty">
				<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				<div>暂时没有任何数据</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return {

		}
	}
}
</script>

<style>
	.container{
		width: 100%;
	}
	
	.container .headers{
		width: 100%;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		padding: 0 15px;
		box-sizing: border-box;
		background: #FFF;
	}

	.container .headers div.header-l{
		float: left;
		
		color: #555;
	}

	.container .headers div.header-r{
		float: right;
		font-size: 15px;
	}

	.container .navbar{
		display: -webkit-box;
  		display: -webkit-flex;
  		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 50px;
		line-height: 50px;
		background: #FFF;
		border-bottom: 1px solid #999;
	}

	.container .navbar .navbar-item{
		flex: 1;
		text-align: center;
		border-bottom: 3px solid transparent;
	}

	.container .navbar .navbar-item.active{
		border-bottom: 3px solid #ff8e18;
		color: #ff8e18;
	}

	.container .section{
		width: 100%;
	}

	.container .section .empty{
		width: 100%;
		text-align: center;
		line-height: 50px;
		color: #777;
		font-size: 15px;
	}

	.container .section .empty img{
		width: 140px;
		height: 160px;
		margin: 80px auto 0;
	}
</style>