<template>
  <div class="shop_cart">

    <nav-bar class="cart_bar">
      <div slot="center">购物车({{cartCounter}})</div>
    </nav-bar>

    <scroll class="cart_content" ref="scroll">
      <cart-list :cartList = "cartList"/>
    </scroll>

    <cart-bottom-bar />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'
  
  import {mapGetters} from 'vuex'

  export default {
    name:'ShopCart',
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters(['cartCounter','cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped>
  .shop_cart{
    height: 100vh;
  }

  .cart_bar{
    background-color: #ff8198;
    color: #fff;
 }

  .cart_content{
    height: calc(100% - 128px);
    overflow: hidden;
  }

</style>