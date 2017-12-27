<template>
	<header class="m-navbar">
        <div class="img">
        	<img src="http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg" alt="">
        </div>
        <div class="navbar-center">
        	<div class="item">
        		布拉德皮特
        	</div>
        	<div class="item">
        		杭州滨江区南环路卓信大厦
        	</div>
        </div>
        <div class="navbar-right">
        	【钻石级别】
        </div>
    </header>
</template>

<script>
export default{
	name: 'topheader',

	data (){
		return {
			
		}
	}
}
</script>

<style>
	.m-navbar{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		padding: 10px;
		background: #FFF;
	}

	.m-navbar .img{
		float: left;

	}

	.m-navbar .img img{
		display: block;
		width: 56px;
		height: 56px;
		border-radius: 50%;
	}

	.m-navbar .navbar-center{
		float: left;
		text-align: left;
		padding-left: 10px;
	}

	.m-navbar .navbar-center .item{
		line-height: 28px;
		font-size: 15px;
		font-weight: bold;
	}

	.m-navbar .navbar-right{
		float: right;
		line-height: 56px;
		color: #FF0000;
		text-align: right;
		font-size: 14px;
		font-weight: bold;
	}
</style>