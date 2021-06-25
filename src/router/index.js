import Vue from 'vue'
import Router from 'vue-router'
import { TK, R_TK, getUid, getToken, removeToken } from "common/const.js";  
import { postCheckToken } from "network/login.js";


const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const ShopCart = () => import('views/shopcart/ShopCart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/details/Detail.vue')

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/profile',
      component:Profile,
      beforeEnter(to, from, next) {
        let uid = getUid();
        if (uid) {
          next("/profile/" + uid);
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/profile/:uid",
      name: "profile_uid",
      component: () => import("views/profile/Profile.vue"),
      beforeEnter(to, from, next) {
        //1. 获取token
        let allToken = getToken();
        //2. 没有 token 就重新登录 (避免用户直接输入 uid进入此路由)
        if (allToken.token != null) {
          //发送网络请求，检验token
          routerCheckToken(allToken, next);
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("views/login/Login.vue")
    },
    {
      path:'/detail',
      component:Detail
    }
  ],
  mode:'history'
})

function routerCheckToken(token, next) {
  postCheckToken(token)
    .then(res => {
      //3. 长期token过期 或 没有长期token且过期了
      if (res.isExpire == true) {
        console.log("重新登录");
        removeToken();
        next("/login");
      } else {
        //有newToken表示这是一个 长期token
        if (res.newToken != "") {
          localStorage.setItem(TK, res.newToken);
        } else {
          console.log("短期token没过期");
        }
        next();
      }
    })
    .catch(err => {
      console.log(err);
    })
}