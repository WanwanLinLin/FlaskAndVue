<template>
  <div>
    <Header></Header>
    <!-- 这里是头部组件 -->

    <!-- 这里是路由组件 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show">
    </Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import TypeNav from './components/TypeNav';

export default {
  // name: '',
  components: {
    Header,
    Footer,
    TypeNav
  },

  mounted() {
    // 派发action
    this.$store.dispatch("categoryList");
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
