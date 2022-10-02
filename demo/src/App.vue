<script setup>
const focused = () => {};
const unfocused = () => {};
</script>

<template>
  <div>
    <input
      :style="{ backgroundColor: 'red', width: '300px', height: '300px' }"
      v-provider-focus
      :focused="focused"
      :unfocused="unfocused"
    />
  </div>
</template>

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
