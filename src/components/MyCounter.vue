<template>
  <div>
    Count: {{ count }}
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
    ...mapGetters(['count'])
  },
  methods: {
    // incrementAsync () {
    //   this.$store.dispatch({
    //     type: 'incrementAsync'
    //   })
    // },
    ...mapActions(['incrementAsync']),
    // onclick () {
    //   this.$store.commit('increment')
    // }
    ...mapMutations(['increment'])
  }
}
</script>