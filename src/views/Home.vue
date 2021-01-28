<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/logo.png" />
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.img {
  width: 200px;
}
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>
