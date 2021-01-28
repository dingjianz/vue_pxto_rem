<template>
  <div>
    <ul>
      <li
        :class="showFlag === 'childOne' ? 'active' : ''"
        @click="showFlag = 'childOne'"
      >
        childOne
      </li>
      <li
        :class="showFlag !== 'childOne' ? 'active' : ''"
        @click="showFlag = 'childTwo'"
      >
        childTwo
      </li>
    </ul>
    <child-one />
    <hr>
    <child-two />
  </div>
</template>

<script>
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";
export default {
  name: "eventBusDemo",
  components: {
    ChildOne,
    ChildTwo
  },
  data() {
    return {
      showFlag: "childOne"
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;

  li {
    width: 100px;
    border: 1px solid #000;
    text-align: center;
    cursor: pointer;
    user-select: none;

    &.active {
      background-color: #00965e;
      color: #fff;
      border-color: #00965e;
    }
  }
}
</style>