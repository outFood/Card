<template>
    <div class="listnavigation">
        <div class="list-item" v-for="(item, index) in list">
        	<div class="icons">
        		<img :src="item.img" alt="">
        	</div>
        	<div class="texts">
        		{{item.title}}
        	</div>
        	<div class="links">
        		<span>查看</span>
        		<img src="../../../static/img/more.png" alt="">
        	</div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'listnavigation',

    data() {
        return {
            list: [
                {img: "http://img4.imgtn.bdimg.com/it/u=2004840322,1084692558&fm=27&gp=0.jpg", title: "标题111标题今日的大馒头正好吃"},
                {img: "http://img3.imgtn.bdimg.com/it/u=4084676783,2817689240&fm=27&gp=0.jpg", title: "标题222标题"},
                {img: "http://img0.imgtn.bdimg.com/it/u=2872111527,2880589981&fm=27&gp=0.jpg", title: "标题333标题"},
                {img: "http://img3.imgtn.bdimg.com/it/u=3347837251,2454072672&fm=27&gp=0.jpg", title: "标题444标题"},
                {img: "http://img5.imgtn.bdimg.com/it/u=240755640,3516110765&fm=27&gp=0.jpg", title: "标题555标题"}
            ]
        }
    }
}
</script>

<style>
	.listnavigation{
		width: 100%;
		padding: 0 15px;
		overflow: hidden;
		box-sizing: border-box;
		background: #FFF;
	}

	.listnavigation .list-item{
		width: 100%;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		box-sizing: border-box;
		display: -webkit-box;
  		display: -webkit-flex;
  		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #999;
	}

	.listnavigation .list-item:last-child{
		border: none;
	}
	
	.listnavigation .list-item .icons{
		width: auto;
	}

	.listnavigation .list-item .icons img{
		width: 26px;
		height: 26px;
		margin: 12px auto;
		display: block
	}

	.listnavigation .list-item .texts{
		padding-left: 5px;
		width: 75%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		font-size: 16px;
	}

	.listnavigation .list-item .links{
		color: #777;
		font-size: 14px;
		text-align: left;
		display: -webkit-box;
  		display: -webkit-flex;
  		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.listnavigation .list-item .links img{
		width: 16px;
		height: 16px;
	}
	
</style>