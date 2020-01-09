<template lang="html">
<div>
  <h1 v-text = 'salary'></h1>
  <div class="box" @touchstart='click' v-text = 'newSalary'></div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="test">
    <span></span>
    <span></span>
  </div>

  <TabBar></TabBar>
</div>
</template>

<script>
import { mapState } from 'vuex'
const TabBar = ()=>import('@/components/TabBar.vue')
export default {
  components: {
    TabBar
  },
  computed:{
    ...mapState('first', ['salary']),
    ...mapState('second',['newSalary'])
  },
  methods: {
    click() {
      console.log('被点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 10rem;
  height: 100px;
  background-color: red;
  color: white;
}
.test {
  &>span:first-child {
    display: inline-block;
    width: 2.29rem;
    height: .8rem;
    background: orange;
  }
  &>span:last-child {
    display: inline-block;
    width: 6.91rem;
    height: .8rem;
    background: green;
  }
}
</style>
