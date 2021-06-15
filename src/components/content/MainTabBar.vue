<template>
  <div>
    <tab-bar>
      <tab-bar-item link='/home' >
        <template v-slot:tab-bar-img>
          <img src="~assets/img/home.svg" alt="首页" />
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="~assets/img/home-active.svg" alt="首页" />
        </template>
        <template v-slot:tab-bar-text>
          <div>首页</div> 
        </template>
      </tab-bar-item>
      <tab-bar-item  link='/category'>
        <template v-slot:tab-bar-img>
          <img src="~assets/img/category.svg" alt="分类" />
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="~assets/img/category-active.svg" alt="分类" />
        </template>
        <template v-slot:tab-bar-text>
          <div>分类</div> 
        </template>
      </tab-bar-item>
      <tab-bar-item link='/shopcart'>
        <template v-slot:tab-bar-img>
          <img src="~assets/img/shopcar.svg" alt="购物车" />
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="~assets/img/shopcar-active.svg" alt="购物车" />
        </template>
        <template v-slot:tab-bar-text>
          <div>购物车</div> 
        </template>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <template v-slot:tab-bar-img>
          <img src="~assets/img/profile.svg" alt="我的" />
        </template>
        <template v-slot:tab-bar-img-active>
          <img src="~assets/img/profile-active.svg" alt="我的" />
        </template>
        <template v-slot:tab-bar-text>
          <div>我的</div> 
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
  };
</script>

<style scoped>

</style>