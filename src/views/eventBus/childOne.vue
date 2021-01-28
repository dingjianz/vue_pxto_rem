<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ sex }}</h1>
    <button @click="addCart(9, 11, 12)">addCart</button>
    <button @click="test(8977)">事件</button>
  </div>
</template>

<script>
import Bus from "./eventBus";
import mixin from "./mixin";
export default {
  name: "childOne",
  mixins: [mixin],
  data() {
    return {
      name: "childOne",
    };
  },
  methods: {
    addCart(event, ...argu) {
      Bus.$emit("getTarget", event, argu);
    },
    test(val) {
      console.log("val", val);
      console.log(this.$parent.showFlag); // 获取父组件data
      // console.log(this.$parent.fatherFun()); // 获取父组件method
      this.changeSex();
    },
  },
  mounted() {
    this.addCart(1, 2, 3, 45);
  },
};
</script>
