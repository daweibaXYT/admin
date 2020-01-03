<template>
  <div class="home">
    <div id="nav">
      顶部导航
    </div>
    <div class="container">
      <aside>
        <slider></slider>
        <!-- <div v-for="(item,index) in routeLinks" :key='index'>
          <router-link :to="item.link">{{item.name}}</router-link>
        </div> -->
      </aside>
      <article>
        <router-view/>
      </article>
    </div>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  name: 'home',
  components: {
    slider
  },
  methods: {
    /*   ...mapActions([
        'doLogin'
      ]) */
    ...mapActions('users', [
      'doLogin'
    ])
  },
  created () {
    this.doLogin({ userName: 'domain', passWord: '123456' })
  }
}
</script>
<style lang='scss'>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      background-color: red;
      color: #42b983;
    }
  }
}
.container{
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  aside{
    width: 200px;
    height: 100%
  };
  article{
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
  }
}
</style>
