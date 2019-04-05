<template>
  <div class="resultWrapper" v-if="books != null">
    <Book
      v-for="(book, index) in books.items"
      :key="index"
      :book="book"
      @setActiveBook="setActiveBook"
    />

    <BookDetails v-if="showDetails" :activeBook="activeBook" @closeDetails="closeDetails"/>
  </div>
</template>

<script>
import Book from "./Book";
import BookDetails from "./BookDetails";

export default {
  name: "Books",
  props: { books: Object },
  data() {
    return {
      activeBook: null,
      showDetails: false
    };
  },
  components: {
    Book,
    BookDetails
  },
  methods: {
    setActiveBook(value) {
      this.activeBook = value;
      this.showDetails = true;
    },
    closeDetails() {
      this.showDetails = false;
    }
  },
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