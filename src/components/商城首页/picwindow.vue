<template>
	<div id="picwindow">
		<div class="picwrap">
			<div class="pic_one">
				<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=653426014,2566484675&fm=27&gp=0.jpg" alt="">
			</div>
			<div class="pic_two">
				<img src="http://img4.imgtn.bdimg.com/it/u=2004840322,1084692558&fm=27&gp=0.jpg" alt="">
				<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
			</div>
			<div class="pic_three">
				<div class="full full_l">
					<img src="http://img4.imgtn.bdimg.com/it/u=2004840322,1084692558&fm=27&gp=0.jpg" alt="">
				</div>
				<div class="full full_r">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
				</div>
			</div>
			<div class="pic_four">
				<div class="full full_l">
					<img src="http://img4.imgtn.bdimg.com/it/u=2004840322,1084692558&fm=27&gp=0.jpg" alt="">
				</div>
				<div class="full full_r">
					<div class="cell">
						<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
					</div>
					<div class="cell cell_b">
						<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
						<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1549099194,4089944645&fm=11&gp=0.jpg" alt="">
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{

}
</script>

<style>
	#picwindow{
		width: 100%;
	}

	#picwindow .picwrap{
		width: 100%;
	}

	#picwindow .picwrap .pic_one{
		width: 100%;
	}

	#picwindow .picwrap .pic_one img{
		width: 100%;
		height: 300px;
	}

	#picwindow .picwrap .pic_two{
		width: 100%;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_two img{
		width: 50%;
		height: 150px;
		float: left;
	}

	#picwindow .picwrap .pic_three{
		width: 100%;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_three .full{
		width: 50%;
		float: left;
	}

	#picwindow .picwrap .pic_three .full_l img{
		width: 100%;
		height: 150px;
	}

	#picwindow .picwrap .pic_three .full_r img{
		width: 100%;
		height: 75px;
	}

	#picwindow .picwrap .pic_four{
		width: 100%;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_four .full{
		width: 50%;
		float: left;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_four .full_l img{
		width: 100%;
		height: 150px;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_four .full_r .cell{
		width: 100%;
		overflow: hidden;
	}

	#picwindow .picwrap .pic_four .full_r .cell img{
		width: 100%;
		height: 75px;
	}

	#picwindow .picwrap .pic_four .full_r .cell.cell_b img{
		float: left;
		width: 50%;
		height: 75px;
	}
</style>