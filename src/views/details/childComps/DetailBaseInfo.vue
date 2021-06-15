<template>
  <div v-if="Object.keys(goods).length !== 0 " class="base-info">
    <div class="info-title">{{goods.title}}</div>

    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span v-if="goods.services[goods.services.length-1]">{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon">
        <span v-if="goods.services[index-1]">{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseInfo',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .base-info{
    margin-top: 12px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
    margin-bottom:4px
  }

  .info-price{
    position: relative;
  }

  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    font-size: 12px;
    padding: 2px 6px;
    color: #f2f5f8;
    background-color: #ff8198;
    border-radius: 12px;
    position: absolute;
    bottom: 12px;
  }

  .info-other{
    margin-top: 15px;
    display: flex;
    justify-content:space-between;
  }

  .info-other span{    
    font-size: 13px;
  }

  .info-service{
    margin-top: 15px;
    display: flex;
    justify-content:space-between;
  }

  .info-service-item{
    position: relative;
  }
  
  .info-service-item img{
    height: 13px;
    width: 13px;
    position: absolute;
    top: 3px;
  }
  .info-service-item span{
    font-size: 10px;
    margin-left: 15px;
  }
</style>