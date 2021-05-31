<template>
  <div class="recommend" >
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    padding: 1rem 0 1.2rem;
    border-bottom: 0.3rem solid #eee
  }

  .recommend-item{
    display: flex;
    flex: 1;
    text-align: center;
    font-size: 0.95rem;
  }

  .recommend-item img{
    width: 80%;
    padding: 0 0 0.4rem;
  }
</style>