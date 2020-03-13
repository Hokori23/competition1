<template>
  <div></div>
</template>

<script>
  export default {
    name: 'fakeIndex',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$router.replace('/')
      })
    }
  }
</script>

<style>
</style>
