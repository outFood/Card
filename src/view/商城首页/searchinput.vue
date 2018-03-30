<template>
	<div id="searchinput">
		<div class="wrapinput">
			<img :src="require('@/assets/search.png')" alt="">
			<input type="text">
		</div>
	</div>
</template>

<script>
export default{

}
</script>

<style>
	#searchinput{
		width: 100%;
		box-sizing: border-box;
		background: #eee;
		padding:0.3125rem;
	}

	#searchinput .wrapinput{
		width: 100%;
		box-sizing: border-box;
		position: relative;
		padding-left:1.0625rem;
		background: #fff;
	}

	#searchinput .wrapinput img{
		width:0.75rem;
		height:0.75rem;
		position: absolute;
		top: 50%;
		left: 5px;
		margin-top: -0.375rem;
	}

	#searchinput .wrapinput input{
		background: rgb(255, 255, 255);
	    color: rgb(102, 102, 102);
	    opacity: 1;
	    flex: 0 0 70%;
	    height:0.9375rem;
	    padding-left:0.3215rem;
	    border:none;
	    width: 100%;
	    display:block
	}
</style>
