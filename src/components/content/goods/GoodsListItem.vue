<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="homeImageLoad"> 
      <div class="good-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
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
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      homeImageLoad(){
          this.$bus.$emit('homeImageLoad')
      },
      itemClick(){
        if(this.$route.path.indexOf('home') !== -1){
          this.$router.push({path:'/detail',query:{iid:this.goodsItem.iid}})
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
    height: 85%;
    border-radius: 4px;
  }
  .good-info{
    width: 95%;
    font-size: 12px;
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