import Toast from './Toast.vue'

const obj ={}

obj.install = function(Vue){
  //1、创建组件构造器
  const ToastConstructor = Vue.extend(Toast)
  //2、new方式生成新的组件对象
  const toast = new ToastConstructor()
  // console.log(toast);
  //3、将组件对象挂在到某个div
  toast.$mount(document.createElement('div'))
  // console.log(toast.$el);
  //4、将组件加入body
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj