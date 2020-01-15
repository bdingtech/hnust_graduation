<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
  // components: {
  //   HelloWorld
  // }
};
</script>

<style scoped>
@import "../src/assets/css/bootstrap.min.css";
@import "../src/assets/css/flat-ui.min.css";
@import "../src/assets/css/font-awesome.min.css";
@import "../src/assets/css/wenku.css";
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  position: absolute;
}
* {
  margin: 0;
  padding: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
