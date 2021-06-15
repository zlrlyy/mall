<template>
  <div>
    <div v-for="(item,index) in cartList" class="cart_list" :key="index" >
      <cart-check-button class="check_button" 
      :isChecked="item.checked" @click.native="checkChange(item)"/>
      <div class="cart_list_left">
        <img :src="item.img" alt="" >
      </div>
      <div class="cart_list_right">
        <p class="item_title" @click="goTogoods(item)">{{ item.title }}</p>
        <p class="item_desc">{{ item.desc }}</p>
        <span class="item_price">￥{{ item.price }}</span>
        <span class="item_count">x{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CartCheckButton from './CartCheckButton.vue'

  export default {
    name:'CartList',
    components:{
      CartCheckButton
    },
    props:{
      cartList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      checkChange(item){
        item.checked = !item.checked
      },
      goTogoods(item){
        this.$router.push({path:'/detail',query:{iid:item.iid}})
      }
    },
  }
</script>

<style scoped>
  .cart_list{
    width: 100%;
    height: 5.5rem;
    border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
    display: flex;
    padding: 0.4rem;
  }
  .check_button{
    width: 5%;
    padding-right: 0.5rem;
  }
  .cart_list_left{
    width: 20%;
    height: 100%;
  }
  .cart_list_left img{
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
  }
  .cart_list_right{
    width: 68%;
    position: relative;
  }

  .cart_list_right p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 0.8rem;
}
.item_title {
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
}
.item_desc {
  font-size: 0.8rem;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0.8rem;
  bottom: 0.2rem;
  font-size: 0.8rem;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 0rem;
  bottom: 0.2rem;
  font-size: 0.75rem;
}
</style>
