<template>
  <div id="category_right">
    <scroll class="wrapper" ref="scroll">
      <div class="tab_item" v-for="(item, index) in listItem" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
          <p class="item_text">{{ item.title }}</p>
        </a>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  props: {
    listItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  // updated() {
  //   console.log(this.listItem);
  // },
  methods: {
    imgLoad() {
      this.count++;

      if (this.count >= this.listItem.length) {
        this.$refs.scroll.refresh();
        this.count = 0;
      }
    }
  },
  components: {
    Scroll
  }
};
</script>
<style scoped>
#category_right {
  flex: 1;
}
.wrapper {
  height: 100%;
  overflow: hidden;
}
.tab_item {
  display: inline-block;
  width: 3.5rem;
  margin: 0.3rem 0.25rem;
}
.tab_item a {
  display: block;
}
.tab_item img {
  width: 100%;
}
.item_text {
  margin-top: 0.3rem;
  text-align: center;
}
</style>
