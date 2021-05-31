<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <div class="good-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 50%;
    text-align: center;
  }
  .goods-item img{
    width: 95%;
    height: 88%;
    border-radius: 4px;
  }
  .good-info{
    width: 95%;
    font-size: 0.7rem;
    padding: 0 7px;
  }
  .good-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
  .good-info .price{
    color: var(--color-tint);
    margin-right:20px;
  }
  .good-info .collect{
    position: relative;
  }
  .good-info .collect::before{
    content:'';
    position: absolute;
    top: -1px;
    left: -15px;
    width:14px;
    height: 14px;
    background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>