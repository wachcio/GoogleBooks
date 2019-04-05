<template>
  <div class="book">
    <h2>{{book.volumeInfo.title}}</h2>
    <img
      :src="book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:'http://placehold.jp/24/cccccc/ffffff/150x200.png?text=No image'"
      :alt="book.volumeInfo.title"
    >
    <p v-if="book.volumeInfo.description">{{shortDescription}}</p>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: Object
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {
    shortDescription() {
      const maxWords = 12;
      let text = this.book.volumeInfo.description;
      let result = "";

      //   result = text
      //     .split(" ")
      //     .splice(maxWords)
      //     .join(" ");
      result = text
        .split(" ")
        .splice(0, maxWords)
        .join(" ");
      result += "...";

      return result;
    }
  },
  created() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.book {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  width: 27%;
  background-color: #555;
  color: #ddd;
  border: 3px solid #333;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  & h2 {
    font-size: 1.2em;
    text-align: center;
    padding-bottom: 15px;
  }

  & img {
    margin-bottom: 15px;
    height: 200px;
    border: 0;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  & p {
    font-size: 1em;
    text-align: justify;

    //   height: 4em;
  }
}
</style>