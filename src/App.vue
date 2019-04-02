<template>
  <div id="app">
    <div class="container">
      <Search/>
      <Result/>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search";
import Result from "./components/Result";

export default {
  name: "app",
  components: {
    Search,
    Result
  }
};
</script>

<style lang="scss">
</style>
