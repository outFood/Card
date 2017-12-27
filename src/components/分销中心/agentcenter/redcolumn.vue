<template>
	<div class="content" style="background: #FFFFFF">
		<div class="full">
			<div class="full-item">
				<div class="cell">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="cell">
					累计分红
				</div>
				<div class="cell cash">
					0.00
				</div>
			</div>
			<div class="full-item">
				<div class="cell">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="cell">
					累计分红
				</div>
				<div class="cell cash">
					0.00
				</div>
			</div>
		</div>
		<div class="full">
			<div class="full-item">
				<div class="full-wrap">
					<div class="cell">
						<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
					</div>
					<div class="cell">
						累计分红
					</div>
					<div class="cell cash">
						0.00
					</div>
				</div>
				<div class="full-wrap">
					<div class="cell">
						<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
					</div>
					<div class="cell">
						累计分红
					</div>
					<div class="cell cash">
						0.00
					</div>
				</div>
			</div>
			<div class="full-item">
				<div class="cell">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="cell">
					累计分红
				</div>
				<div class="cell cash">
					0.00
				</div>
			</div>
		</div>
		<div class="full">
			<div class="full-item">
				<div class="full-wrap">
					<div class="cell">
						<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
					</div>
					<div class="cell">
						累计分红
					</div>
					<div class="cell cash">
						0.00
					</div>
				</div>
				<div class="full-wrap">
					<div class="cell">
						<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
					</div>
					<div class="cell">
						累计分红
					</div>
					<div class="cell cash">
						0.00
					</div>
				</div>
			</div>
			<div class="full-item">
				<div class="cell">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="cell">
					累计分红
				</div>
				<div class="cell cash">
					0.00
				</div>
			</div>
		</div>
		<div class="full">
			<div class="full-item">
				<div class="cell">
					<img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
				</div>
				<div class="cell">
					累计分红
				</div>
				<div class="cell cash">
					0.00
				</div>
			</div>
			<div class="full-item"></div>
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
	.content{
		width: 100%;
		background: #fff;
		overflow: hidden;
		font-size: 15px
	}
	
	.content .full{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid #999;
	}

	.content .ful:last-child{
		border: none;
	}

	.content .full .full-item{
		width: 50%;
		float: left;
		box-sizing: border-box;
		border-right: 1px solid #999;
	}

	.content .full .full-item:last-child{
		border: none;
	}

	.content .full .full-item .full-wrap{
		border-bottom: 1px solid #999;
	}

	.content .full .full-item .full-wrap:last-child{
		border: none;
	}

	
	.content .full .full-item .cell{
		line-height: 28px;
		color: #333;
	}

	.content .full .full-item .cell:last-child{
		margin-bottom: 10px;
	}

	.content .full .full-item .cell img{
		width: 35px;
		height: 35px;
		margin-top: 15px;
	}

	.content .full .full-item .cash{
		color: #ffbe31;
	}

	.content .full .full-item .full-wrap{
		line-height: 28px;
	}

	.content .full .full-item .full-wrap .cell:last-child{
		margin-bottom: 10px;
	}

	.content .full .full-item .full-wrap img{
		width: 35px;
		height: 35px;
		margin-top: 15px;
	}
</style>