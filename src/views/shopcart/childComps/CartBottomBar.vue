<template>
  <div class="cart_bottom_bar">
    <div class="cart_bottom_bar_left">
      <cart-check-button 
        class="cart_bottom_button" 
        :isChecked="checkedAll"
        @click.native="checkedAllChange"/>
      <span>全选</span>
    </div>
    <div class="cart_bottom_bar_center">合计￥{{totalPrice}}</div>
    <div class="cart_bottom_bar_right" @click="toBug">去购买({{ checkedLength }})</div>
  </div>
</template>

<script>
  import CartCheckButton from './CartCheckButton.vue'
  export default {
    name:'CartBottomBar',
    components:{
      CartCheckButton
    },
    computed:{
      cartList(){
        return this.$store.state.cartList
      },
      totalPrice(){
        return this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((price,item) =>{
          return price + item.price*item.count
        },0).toFixed(2)
      },
      totalLength(){
        return this.$store.state.cartList.length
      },
      checkedLength(){
        return this.$store.state.cartList.filter(item =>{
          return item.checked
        }).length
      },
      checkedAll(){
        if(this.cartList.length === 0) return false
        return !this.cartList.some(item => !item.checked)
      }
    },
    methods: {
      checkedAllChange(){
        if(this.checkedAll){
          this.cartList.forEach(item => item.checked = false);
        }else{
          this.cartList.forEach(item => item.checked = true);
        }
      },
      toBug(){
        if(this.checkedLength === 0){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    }
  }
</script>

<style scoped>
 .cart_bottom_bar{
   height: 40px;
   display: flex;
 }
 .cart_bottom_bar_left{
   width: 25%;
   display: flex;
 }
 .cart_bottom_button{
    width: 25%;
    margin-left: 15px;
  }

 .cart_bottom_bar_left span{
   font-size: 0.9rem;
   width: 75%;
   line-height: 40px;
   padding-left: -1rem;
 }
 .cart_bottom_bar_center{
   width: 50%;
   line-height: 40px;
   font-size: 0.9rem;
   margin-left: 15px;
 }
 .cart_bottom_bar_right{
  width: 25%;
  font-size: 0.9rem;
  line-height: 40px;
  background-color: orangered;
  color: #eee;
  text-align: center;
 }
</style>