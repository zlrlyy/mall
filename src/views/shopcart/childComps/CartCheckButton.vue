<template>
  <div class="cart_check_button" >
    <img src="~assets/img/cart/tick.svg" alt="图" 
    :class="{checked:isChecked}" class="cart_img">
  </div>
</template>

<script>
  export default {
    name:'CartCheckButton',
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }
    },

  }
</script>

<style scoped>
  .cart_check_button{
    position: relative;
  }
 .cart_img{
   height:0.9rem;
   border: 2px solid #aaa;
   border-radius: 1rem;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-60%,-50%);
 }
 .checked{
  background-color: orangered;
  border: 1px solid orangered;
 }
</style>