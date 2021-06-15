<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" 
    class="tab-control-item" @click="itemClick(index)">
      <span :class="{active:index === currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex : 0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  background-color: #fff;
  padding-bottom: 5px;
  z-index: 10;
  
}
.tab-control-item{
  flex: 1;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
}
.active{
  color: var(--color-high-text);
  padding: 4px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>