<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ sex }}</h1>
  </div>
</template>

<script>
import Bus from "./eventBus";
import mixin from "./mixin";
export default {
  name: "childTwo",
  mixins: [mixin],
  data() {
    return {
      name: "childTwo",
    };
  },
  created() {
    Bus.$on("getTarget", (event, ...argu) => {
      console.log("arguments", argu);
      console.log("event", event);
    });
  },
};
</script>
