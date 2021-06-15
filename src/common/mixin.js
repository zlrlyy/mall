// import {debounce} from './utils'
import BackTop from 'components/common/backtop/backTop'

// export const itemListenerMixin = {
//   data(){
//     return {

//     }
//   },
//   mounted() {
//     //let refresh = debounce(this.$refs.refresh,100)
//   },
// }


//在需要的组件中mixin:[itemListenerMixin]

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false,
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  },
}