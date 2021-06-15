<template >
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,key) in topImg" :key="key">
        <img :src="item" alt="轮播图">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name:'DetailSwiper',
  components:{
    Swiper, 
    SwiperItem
  },
  props:{
    topImg :{
      type:Array,
      default(){
        return []
      }
    }
  },
  created() {

  },
}
</script>
<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>