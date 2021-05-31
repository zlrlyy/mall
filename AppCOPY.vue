<template>
  <div id="app">
    <div id="tab-bar" >
      <div class="tab-bar-items" v-for="items in tabbarlist">
      <img :src="items.url" :alt="items.name">
      <div>{{items.name}}</div>
      </div>
      <!-- <div class="tab-bar-items">
        <img src="~assets/img/home.svg" alt="首页" />
        <div>首页</div>
      </div>
      <div class="tab-bar-items">
        <img src="~assets/img/category.svg" alt="分类" />
        <div>分类</div>
      </div>
      <div class="tab-bar-items">
        <img src="~assets/img/shopcar.svg" alt="购物车" />
        <div>购物车</div>
      </div>
      <div class="tab-bar-items">
        <img src="~assets/img/profile.svg" alt="我的" />
        <div>我的</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {
    // TabBar
  },
  data() {
    return {
      tabbarlist: []
    }
  },
  mounted() {
    axios.get("/mock/nav.json").then(res =>
      {this.tabbarlist = res.data}
    );
  }
};
</script>

<style>
@import url("assets/css/base.css");

#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.tab-bar-items {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-items img{
  width: 19px;
  width: 19px;
}
</style>
