<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <better-scroll class="home-content" ref="scroll" :probe-type="3" 
    @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :title="['流行','新款','精选']" class='tab-control' 
      @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </better-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/> 
  </div>
</template>

<script scoped>
  import NavBar from 'components/common/navbar/NavBar'

  import HomeSwiper from './childcomps/HomeSwiper'
  import RecommendView from './childcomps/RecommendView'
  import FeatureView from './childcomps/FeatureView'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BetterScroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/backTop'
 
  import {getHomeMultidata,getHomeGoods} from 'network/home' 
  import {debounce} from 'common/utils.js'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BetterScroll,
      BackTop
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page : 0,list:[]},
          'new':{page : 0,list:[]},
          'sell':{page : 0,list:[]},
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomeData(),
      this.getHomeGood('pop'),
      this.getHomeGood('new'),
      this.getHomeGood('sell')
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,50)

      this.$bus.$on('homeImageLoad',()=>{
        // console.log('....');
        refresh()
      })
    },
    methods:{
      
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore(){
        this.getHomeGood(this.currentType);
        this.$refs.scroll.scroll.refresh()
      },
      //事件监听相关
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      // 网络请求相关
      getHomeData(){
        getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
        })
      },
      getHomeGood(type){
        const page = this.goods[type].page +1;
        getHomeGoods(type,page).then(res => {
          // console.log(res);
          // console.log(this);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1;
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .home-content{
    overflow: hidden;
    height: calc(100% - 88px)
  }
</style>