<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <div class="box"></div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    color:red;
    font-size: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>
