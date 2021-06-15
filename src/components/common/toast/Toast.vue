<template>
  <div class="toast" v-if="isShow">
    <p class="toast_text">{{message}}</p>
  </div>
</template>
<script>
export default {
  name:'Toast',
  data() {
    return {
      message:'',
      isShow: false
    }
  },
  methods: {
    show(message , delay = 2000){
      this.message = message
      this.isShow  = true
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },delay)
    }
  },
}
</script>
<style scoped>
  .toast{
    height: 80px;
    width: 150px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    z-index: 999;
    text-align: center;
    line-height: 80px;
  }
  .toast_text{
    color: #fff;
  }
</style>