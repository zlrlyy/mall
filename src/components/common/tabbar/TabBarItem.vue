<template>
  <div class="tab-bar-items" @click="itemClick">
    <div v-if="!isActive"><slot name="tab-bar-img"></slot></div>
    <div v-else><slot name="tab-bar-img-active"></slot> </div>
    <div :style="activeStyle"><slot name="tab-bar-text"></slot> </div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      link:String,
      activeColor:{
        type:String,
        default: 'var(--color-tint)'
      }
    },
    data(){
      return {
        
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link) != -1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.link)
      }
    },
  }
</script>

<style scoped>
  .tab-bar-items {
  flex: 1;
  height: 44px;
  text-align: center;
  font-size: 10px;
  }

.tab-bar-items img{
  width: 22px;
  width: 22px;
  margin-top: 5PX;
}
</style>