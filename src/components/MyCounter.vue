<template>
  <div>
    Count: {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    // count() {
    //   return this.$store.state.count
    // }
    ...mapGetters(['count'])
  },
  methods: {
    // onclick () {
    //   this.$store.commit('increment')
    // }
    ...mapMutations(['increment'])
  }
}
</script>