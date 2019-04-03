<template>
  <div class="book">
    <h2>{{book.volumeInfo.title}}</h2>
    <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title">
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
h2 {
  font-size: 1.5em;
  text-align: center;
}
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  max-width: 30%;
}
p {
  font-size: 1em;

  height: 4em;
}
</style>