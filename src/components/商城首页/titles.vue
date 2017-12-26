<template>
	<div id="titles">
		<div class="titleword">
			{{message}}
		</div>
	</div>
</template>

<script>
export default{
	data (){
		return {
			message: '今日大促销'
		}
	},

}
</script>

<style>
	#titles{
		width: 100%;
	}

	#titles .titleword{
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 16px;
		text-align: center;
	}
</style>