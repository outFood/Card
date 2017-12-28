<template>
	<div class="wrap">
		<div class="full">
			<div class="full-item three">
				<div class="icon">
					<img style="width:24px;height:24px" src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="text">
					我的下线
				</div>
				<div class="text">
					0人
				</div>
			</div>
			<div class="full-item four">
				<div class="text1">
					本月预计分红
				</div>
				<div class="text2">
					0
				</div>
				<div class="text3">
					区级0.00 乡镇0.00
				</div>
			</div>
			<div class="full-item three">
				<div class="icon">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="text">
					可提现佣金
				</div>
				<div class="text">
					0元
				</div>
				<div class="text" style="margin-top: 10px">
					佣金提现
				</div>
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
	.wrap{
		width: 100%;
		color: #FFF;
		font-size: 15px;
	}

	.wrap .full{
		display: -webkit-box;
  		display: -webkit-flex;
  		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 15px 0 20px;
		background: #ff9a00;
		align-items: center;
	}

	.wrap .full .three{
		width: 30%;
		line-height: 26px;
	}

	.wrap .full .three .icon img{
		width: 30px;
		height: 30px;
	}

	.wrap .full .four{
		width: 40%;
	}

	.wrap .full .four .text1{
		font-size: 14px;
		line-height: 36px;
	}

	.wrap .full .four .text2{
		font-size: 65px;
	}

	.wrap .full .four .text3{
		line-height: 36px;
	}
</style>