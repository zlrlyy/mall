<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

    <main-tab-bar v-if="isActive"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar"

export default {
  name: "App",
  components: {
    MainTabBar
  },
  data(){
    return {
      isActive:true
    }
  },
  watch:{
    $route(to,from){
      if(to.path == '/detail'){
        this.isActive = false
      }
      if(from.path == '/detail'){
        this.isActive = true
      }
    }
  }
};
</script>

<style>
@import url("assets/css/base.css");


</style>
