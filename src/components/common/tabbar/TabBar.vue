<template>
  <div class="tab-bar" >
    <slot></slot>    
  </div>
</template>

<script>

  export default {
    name:'TabBar',
    components:{
      
    }
  }
</script>

<style scoped>
  .tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
</style>