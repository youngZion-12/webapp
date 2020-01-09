<template lang="html">
<div>
  <h1 @touchstart='change'>详情页</h1>
  <h1 v-text='$route.params.id'></h1>
  <h1 v-text='bonus.yearEnd'></h1>
</div>
</template>

<script>
import { mapActions,mapMutations,mapState } from 'vuex'

export default {
  computed:{
    ...mapState('second',['bonus'])
  },
  mounted() {
    console.log(this.$route)
  },
  methods:{
    ...mapMutations('second',['improveSalary']),
    ...mapActions('second',['improveBonus']),
    change(){
      console.log(1)
      this.improveSalary()
      this.improveBonus()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
