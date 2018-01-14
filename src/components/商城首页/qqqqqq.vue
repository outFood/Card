<template>
    <div class="goodsgroup">
        <div class="block two column" v-for="(item, index) in list">
        	<div class="img">
        		<img :src="item.img">
        	</div>
            <div class="detail">
            	<div class="title">{{item.title}}</div>
            	<div class="otheri">
	                <div class="goods-price">
	                    <span class="price"><em>¥</em>{{item.price}}</span>
	                    <span class="originalprice"><s>原价 ¥{{item.w_price}}</s></span>
	                </div>
	                <div class="sales-num">
	                	销量 {{item.sales}}
	                </div>
	                <div class="buy-btn">
	                	<yd-icon name="shopcart" size="25px" color="#FF0000"></yd-icon>
	                </div>
	            </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
	name: 'goodsgroup',

    data() {
        return {
            list: [
                {img: "http://img4.imgtn.bdimg.com/it/u=2004840322,1084692558&fm=27&gp=0.jpg", title: "标题111标题标题标题标题布拉德皮特还好覅和阿富汗黑号我啊二号肉哈尔恩爱返回揉捻安徽卫视繁荣度爱老我我还叫阿瓦", price: 1563.23, w_price: 1989.36, sales: 245},
                {img: "http://img3.imgtn.bdimg.com/it/u=4084676783,2817689240&fm=27&gp=0.jpg", title: "标题222标题标题标题标题", price: 2562.23, w_price: 2289.36, sales: 119},
                {img: "http://img0.imgtn.bdimg.com/it/u=2872111527,2880589981&fm=27&gp=0.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36, sales: 4324},
                {img: "http://img3.imgtn.bdimg.com/it/u=3347837251,2454072672&fm=27&gp=0.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36, sales: 433},
                {img: "http://img5.imgtn.bdimg.com/it/u=240755640,3516110765&fm=27&gp=0.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36, sales: 119},
                {img: "http://img3.imgtn.bdimg.com/it/u=642238629,4021041706&fm=27&gp=0.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36, sales: 75}
            ]
        }
    }
}
</script>

<style>
	.goodsgroup{
		width: 100%;
		padding: 10px 8px;
		overflow: hidden;
		box-sizing: border-box;
		background: #f5f5f5;
	}

	.goodsgroup .block{
		width: 100%;
		overflow: hidden;
		background: #FFF;
		margin-top: 10px;
		box-sizing: border-box;
		border: 1px solid #ccc;
	}

	.goodsgroup .block .img{
		width: 100%;
	}

	.goodsgroup .block .img img{
		width: 100%;
		height: 350px;
	}

	.goodsgroup .block .detail{
		padding: 5px;
		text-align: left;

	}

	.goodsgroup .block .detail .title{
		max-height: 48px;
		line-height: 24px;
		font-size: 18px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		color: #000000;
	}


	.goodsgroup .block .detail .otheri{
		width: 100%;
		position: relative;
	}

	.goodsgroup .block .detail .otheri .goods-price{
		margin-top: 15px;
		width: 100%;
	}

	.goodsgroup .block .detail .otheri .goods-price .price{
		font-size: 20px;
		font-weight: bold;
		color: #FF0000;
	}

	.goodsgroup .block .detail .otheri .goods-price .originalprice{
		display: inline-block;
		font-size: 14px;
		color: #777;
		margin-left: 5px;
	}

	.goodsgroup .block .detail .otheri .sales-num{
		font-size: 14px;
		color: #777;
		margin-top: 3px;
	}

	.goodsgroup .block .detail .otheri .buy-btn{
		width: 30px;
		height: 30px;
		position: absolute;
		top: 50%;
		right: 5px;
		margin-top: -15px;
	}

	.goodsgroup .two{
		width: 49%;
		float: left;
		overflow: hidden;
	}

	.goodsgroup .two:nth-child(odd){
		margin-right: 2%;
	}

	.goodsgroup .two .img{
		width: 100%;
	}

	.goodsgroup .two .img img{
		width: 100%;
		height: 210px;
	}

	.goodsgroup .two .detail{
		padding-bottom: 10px;
	}

	.goodsgroup .two .detail .otheri .buy-btn{
		top: 85%;
		right: 0;
	}

	.goodsgroup .column{
		width: 100%;
		overflow: hidden;
		display: flex;
		display: -webkit-box;
  		display: -webkit-flex;
  		display: -ms-flexbox;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap;
		border: none;
	}

	.goodsgroup .column .img{
		width: auto;
		height: auto;
	}

	.goodsgroup .column .img img{
		width: 120px;
		height: 120px;
	}

	.goodsgroup .column .detail{
		flex-grow: 1;
		padding-left: 10px;
	}

	.goodsgroup .column .detail .title{
		width: 100%;
		height: 48px;
	}

	.goodsgroup .column .detail .otheri .buy-btn{
		top: 85%;
		right: 0;
	}
</style>