<template>
  <div class="resultWrapper" v-if="books != null">
    <Book v-for="(book, index) in books.items" :key="index" :book="book"/>
  </div>
</template>

<script>
import Book from "./Book";

export default {
  name: "Books",
  props: { books: Object },
  data() {
    return {};
  },
  components: {
    Book
  },
  methods: {},
  computed: {},
  created() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.resultWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  width: 100%;
}
</style>