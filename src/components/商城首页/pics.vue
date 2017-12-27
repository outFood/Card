<template>
	<div id="pics">		
		<div class="wrap">
			<!-- <html v-for="(item, index) in items"> -->
				<div class="imgcell"  v-for="(item, index) in items">
					<img :src="item" alt="">
				</div>
			<!-- </html> -->
		</div>				
	</div>
</template>

<script>
export default{
	//name: 'picture',

	data (){
		return {
			items: [
				"http://img0.imgtn.bdimg.com/it/u=2872111527,2880589981&fm=27&gp=0.jpg",
				"http://img5.imgtn.bdimg.com/it/u=2710667228,2655968137&fm=27&gp=0.jpg",
				"http://img3.imgtn.bdimg.com/it/u=4084676783,2817689240&fm=27&gp=0.jpg"
			]
		}
	}
}
</script>

<style scoped>
	#picture{
		width: 100%;
	}

	#picture .wrap{
		width: 100%;
	}

	#picture .wrap .imgcell{
		width: 100%;
		box-sizing: border-box;
	}

	#picture .wrap .imgcell img{
		width: 100%;
		height: 200px;
	}
</style>