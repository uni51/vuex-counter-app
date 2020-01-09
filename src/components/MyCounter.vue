<template>
  <div>
    Count: {{ count }}
    <button @click="onclick">Increment</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    onclick () {
      this.count++
    }
  }
}
</script>