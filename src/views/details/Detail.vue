<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="detail-content" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImg ="topImg" />
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @loadImgEvent="loadImgEvent"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment="comment"/>
      <goods-list ref="goodsList" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop"/> 
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import Scroll from 'components/common/scroll/Scroll'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import GoodsList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
  import {backTopMixin} from 'common/mixin.js'
  import {mapActions} from 'vuex'

export default {
  name:'Detail',
  components:{
    DetailNavBar, 
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins:[backTopMixin],
  data(){
    return {
      iid:'',
      topImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      comment:{},
      recommends:[],
      itemYs:[],
      currentIndex:0
    }
  },
  created() {
    //保存存入的iid
    this.iid = this.$route.query.iid
    getDetail(this.iid).then((res)=>{
      // console.log(res);
      //1、获取顶部轮播图数据
      const data = res.result
      this.topImg = res.result.itemInfo.topImages
      //2、获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3、获取商铺信息
      this.shop = new Shop(data.shopInfo)
      //4、获取商品图片信息
      this.detailInfo = data.detailInfo
      //5、获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //6、获取评论数据
      if(data.rate.cRate !== 0){
        this.comment = data.rate.list[0]
      }
      // this.$nextTick(()=>{
      //   //根据最新的数据，对应的Dom已经渲染
      //   //但图片还没有加载完，目前的offsetTop不包含图片
      //   this.itemYs = []
      //   this.itemYs.push(0)
      //   this.itemYs.push(this.$refs.param.$el.offsetTop - 44);
      //   this.itemYs.push(this.$refs.comment.$el.offsetTop - 44);
      //   this.itemYs.push(this.$refs.goodsList.$el.offsetTop - 44);
      //   console.log(this.itemYs);
      // })
      
    }),
    //请求推荐数据
    getRecommend().then((res)=>{
      this.recommends = res.data.list
    })
  },
  methods:{
    ...mapActions(['addToCart']),
    loadImgEvent(){
      this.$refs.scroll.refresh()
      this.itemYs = []
      this.itemYs.push(0)
      this.itemYs.push(this.$refs.param.$el.offsetTop - 44);
      this.itemYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.itemYs.push(this.$refs.goodsList.$el.offsetTop - 44);
      this.itemYs.push( Number.MAX_VALUE)
      // console.log(this.itemYs);
      //1、created肯定不行，压根不能获取元素
      //2、mounted也不行，数据还没有获取到
      //3、获取到的数据的回调也不行，DOM还没有渲染完
      //4、$nextTick也不行，因为图片的高度没有被计算在内
      //5、在图片在家完成后，获取的高度才是正确
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.itemYs[index],500)
    },
    scroll(position){
      this.isShowBackTop = (-position.y) > 1000
      const positionY = -position.y
      for(let i = 0;i<this.itemYs.length-1;i++){
        // if(this.currentIndex !== i && ((i<this.itemYs.length-1 && positionY >= this.itemYs[i] 
        //   &&positionY < this.itemYs[i+1]) || (i === this.itemYs.length-1 
        //   && positionY >= this.itemYs[i]))){
        //     this.currentIndex = i
        //     console.log(this.currentIndex);
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        if(this.currentIndex !== i && ( positionY >= this.itemYs[i] && positionY < this.itemYs[i+1])){
            this.currentIndex = i
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }
      }
    },
    addCart(){
      //1、获取商品所需要的数据
      const product={}
      product.img = this.topImg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice 
      product.iid = this.iid
      // this.$store.dispatch('addToCart', product).then(res => {console.log(res);})
      this.addToCart(product).then(res => {
        this.$toast.show(res,1500)
      })
      

    }
  }
}
</script>
<style>
  #detail{
    height: 100vh;
  }
  .detail-content{
    /* position: relative; */
    height: calc(100% - 80px);
    overflow: hidden;
  }
</style>
