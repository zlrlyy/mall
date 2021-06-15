import {ADD_COUNTER,ADD_TO_CART} from './mutations-types'

export default {
  addToCart(context,payload){
    return new Promise((resolve,reject)=> {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct){
      context.commit(ADD_COUNTER , oldProduct)
      resolve('购物车数量加一')
    }else{
      payload.count = 1
      context.commit(ADD_TO_CART , payload)
      resolve('成功添加购物车')
    }
    })
  }
}