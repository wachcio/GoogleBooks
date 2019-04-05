<template>
  <div id="app">
    <div class="container">
      <div class="searchWrapper">
        <h1>Wpisz szukany tytuł</h1>
        <form action.prevent>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Tytuł książki"
            v-model="inputText"
          >
        </form>
      </div>
      <Books :books="books"/>
    </div>
  </div>
</template>

<script>
import Books from "./components/Books";
import axios from "axios";
var _ = require("lodash");
export default {
  name: "app",
  components: {
    Books
  },
  data() {
    return {
      books: null,
      API: {
        url: "https://www.googleapis.com/books/v1/volumes?q=",
        startIndex: 0,
        maxResults: 20
      },
      searchText: ""
    };
  },
  computed: {
    inputText: {
      get() {
        return this.searchText;
      },
      set: _.debounce(function(newValue) {
        this.searchText = newValue;
        this.getBooks();
      }, 500)
    }
  },
  methods: {
    getBooks() {
      // let gBooks = _.debounce(() => {

      let array = [];
      axios
        .get(
          `${this.API.url}${this.searchText}&startIndex=${
            this.API.startIndex
          }&maxResults=${this.API.maxResults}`
        )
        .then(response => (this.books = response.data));
      // }, 500);
    },
    moreBooks() {
      this.API.startIndex += this.API.maxResults;
      let array = [];
      axios
        .get(
          `${this.API.url}${this.searchText}&startIndex=${
            this.API.startIndex
          }&maxResults=${this.API.maxResults}`
        )
        .then(
          response =>
            (this.books.items = array.concat(
              this.books.items,
              response.data.items
            ))
        );
    },
    handleScroll(e) {
      // console.log(e.target.scrollingElement.scrollTop);
      // console.log(e.target.scrollingElement.scrollHeight);
      // console.log(e);

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        // bottom of the page
        if (this.books) {
          this.moreBooks();
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // mounted() {
  //   this.getBooks = _.debounce(function() {
  //     let array = [];
  //     axios
  //       .get(
  //         `${this.API.url}${this.searchText}&startIndex=${
  //           this.API.startIndex
  //         }&maxResults=${this.API.maxResults}`
  //       )
  //       // .then(
  //       //   response => (this.books = array.concat(this.books, response.data))
  //       // );
  //       .then(response => (this.books = response.data));
  //   }, 500);
  // },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  background-color: #333;
  color: #ddd;

  & h1 {
    font-size: 2em;
  }
}

.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  & .searchWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
      margin: 1em;

      & input {
        font-size: 1.2em;
        color: #ddd;
        border: #ddd solid 2px;
        border-radius: 10px;
        text-align: center;
        background: none;
        padding: 5px;
      }
    }
  }
}
</style>
