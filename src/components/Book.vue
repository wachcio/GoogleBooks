<template>
  <div class="book" @click="getDetails">
    <h2>{{book.volumeInfo.title}}</h2>
    <img
      :src="book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:'http://placehold.jp/24/cccccc/ffffff/150x200.png?text=No image'"
      :alt="book.volumeInfo.title"
    >
    <p v-if="book.volumeInfo.description">{{shortDescription}}</p>
    <p v-else>No description</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Book",
  props: {
    book: Object
  },
  data() {
    return {
      bookDetails: null,
      API: {
        url: "https://www.googleapis.com/books/v1/volumes/"
      }
    };
  },
  components: {},
  methods: {
    getDetails() {
      axios
        .get(`${this.API.url}${this.book.id}`)
        .then(response => (this.bookDetails = response.data));
    }
  },
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
  watch: {
    bookDetails: function(newValue) {
      this.$emit("setActiveBook", newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
}
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
    width: 150px;
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