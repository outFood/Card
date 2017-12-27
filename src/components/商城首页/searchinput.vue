<template>
	<div id="searchinput">
		<div class="wrapinput">
			<img src="/static/img/search.png" alt="">
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
		padding: 10px;
	}

	#searchinput .wrapinput{
		width: 100%;
		box-sizing: border-box;
		position: relative;
		padding-left: 34px;
		background: #fff;
	}

	#searchinput .wrapinput img{
		width: 24px;
		height: 24px;
		position: absolute;
		top: 50%;
		left: 5px;
		margin-top: -12px;
	}

	#searchinput .wrapinput input{
		background: rgb(255, 255, 255);
	    color: rgb(102, 102, 102);
	    opacity: 1;
	    flex: 0 0 70%;
	    height: 30px;
	    padding-left: 10px;
	    border:none;
	    width: 100%;
	    display:block
	}
</style>