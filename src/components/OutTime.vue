<template>
  <div id='outTime' v-show='this.$store.state.Home.outTime'>
  </div>
</template>

<script>
  export default{
    name:'outTime'
  }
</script>

<style>
  #outTime {
    position: absolute;
    /* margin-top: calc(56px + 28px + 7.5px); */
    margin-top: 7.5px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
  }
</style>
