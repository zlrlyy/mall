<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="返回" 
        class="detail-left">
      </div>
      <div slot="center" class="detail-center" > 
        <div v-for="(item,index) in title" 
        class="detail-center-item"
        :class="{detailActive:index === currentIndex }" 
        @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Detail',
  components:{
    NavBar
  },
  data(){
    return{
      iid:'',
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>
<style>
  .detail-center{
    display: flex;
  }
  .detail-center-item{
    flex: 1;
    font-size: 15px;
  }
  .detail-left{
    height: 15px;
    margin-top: 14px;
  }
  .detailActive{
    color: var(--color-tint);
  }
</style>