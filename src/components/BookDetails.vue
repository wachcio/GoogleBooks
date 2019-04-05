<template>
  <div class="wrapper">
    <div class="x" @click="closeDetails">X</div>
    <img class="picture" :src="activeBook.volumeInfo.imageLinks.small">
    <H1>{{activeBook.volumeInfo.title}} - {{getAuthors}}</H1>
    <h2 v-if="activeBook.volumeInfo.subtitle">({{activeBook.volumeInfo.subtitle}})</h2>
    <div class="description" v-html="activeBook.volumeInfo.description"></div>
  </div>
</template>

<script>
export default {
  name: "bookDetails",
  props: { activeBook: Object },
  data() {
    return {};
  },
  components: {},
  methods: {
    closeDetails() {
      this.$emit("closeDetails");
    }
  },
  computed: {
    getAuthors() {
      return this.activeBook.volumeInfo.authors[0];
    }
  },
  created() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #222;

  & .x {
    position: fixed;
    right: 1em;
    top: 1em;
    width: 1.8em;
    height: 1.8em;
    // padding: 5px;
    background-color: #111;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  & .picture {
    position: fixed;
    top: 50px;
    left: 15px;
    width: 300px;
    height: 400px;
  }

  h1,
  h2,
  .description {
    position: fixed;
    left: 320px;
  }
  h1 {
    top: 1em;
  }
  h2 {
    top: 2.7em;
  }
  & .description {
    top: 6em;
  }
}
</style>