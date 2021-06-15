<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="商铺图片">
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter:function(value){
        if(value>10000){
          value = value/10000
          return value.toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style>
  .shop-info{
    padding: 0.64rem 0.34rem;
    border-bottom: 0.128rem solid rgba(128, 128, 128, 0.2);
    font-size: 0.85rem;
  }

  .shop-top img{
    width: 1.7rem;
    height: 1.7rem;
    border: 0.042rem solid rgba(128, 128, 128, 0.5);
    border-radius: 0.85rem;
  }

  .shop-top span{
    margin-left: 0.34rem;
    position: relative;
    top: -0.64rem;
    font-size: 0.85rem;
  }
  /**
  * 商店信息左右两侧的样式，整个商店信息是弹性盒子，
  * 可左边用弹性盒子做，右边用table做
  */
  .shop-middle{
    padding: 0px 0.512rem;
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .shop-middle-item{
    box-sizing: border-box;
    flex: 1;
    text-align: center;
    
  }

  .shop-middle-left {
    display: flex;
    align-items: center;
    border-right: 0.042rem solid gray;
}

.shop-middle-left > div {
  flex: 1;
}

.sells-count,.sells-text,
.goods-count,.goods-text{
  padding: 0.2rem 0;
}

.shop-middle-right > table {
  margin: 0 auto;
  font-size: 0.64rem;
  border-spacing: 0.8rem 0.5rem ;
}

.score{
  color: green;
}
.better{
  color: #fff;
  background-color: green;
}
.score-better{
  color: var(--color-tint);
}
.better-more{
  background-color: var(--color-tint);
}
.enter-shop {
  color: #fff;
  width: 6.4rem;
  height: 1.28rem;
  line-height: 1.28rem;
  text-align: center;
  border-radius: 0.42rem;
  background-color: var(--color-tint);
  margin: 0 auto;
}
</style>
