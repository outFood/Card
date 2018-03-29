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
		height:0.9375rem;
		line-height:0.9375rem;
		font-size:0.5rem;
		text-align: center;
	}
</style>
