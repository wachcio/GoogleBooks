<template>
  <div id="app">
    <div class="container">
      <div class="searchWrapper">
        <h1>Wpisz szukany tytuł</h1>
        <form action>
          <input type="search" name="search" id="search" v-model="searchText" @input="getBooks">
        </form>
      </div>
      <Books :books="books"/>
    </div>
  </div>
</template>

<script>
import Books from "./components/Books";
import axios from "axios";
import _ from "lodash";

export default {
  name: "app",
  components: {
    Books
  },
  data() {
    return {
      books: null,
      urlAPI: "https://www.googleapis.com/books/v1/volumes?q=",
      searchText: ""
    };
  },
  methods: {
    inputSearch() {
      _.debounce(this.getBooks, 500);
    },
    getBooks() {
      axios
        .get(`${this.urlAPI}${this.searchText}`)
        .then(response => (this.books = response.data));
    }
  },
  created() {}
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
    }
  }
}
</style>
