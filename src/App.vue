<template>
  <div id="app">
    <Page></Page>
  </div>
</template>

<script>
import Page from './components/Page'

export default {
  name: 'App',
  components: {Page},
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
}
</style>
