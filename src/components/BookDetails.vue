<template>
  <div class="wrapper">
    <div class="innerWrapper">
      <div class="x" @click="closeDetails">X</div>
      <div class="flexRow">
        <img class="picture" :src="coverPicture" :alt="activeBook.volumeInfo.title">
        <H1>{{activeBook.volumeInfo.title}} - {{getAuthors}}</H1>
        <h2 v-if="activeBook.volumeInfo.subtitle">({{activeBook.volumeInfo.subtitle}})</h2>
        <p v-if="activeBook.saleInfo.buyLink">
          Cena: {{price}}
          <a :href="activeBook.saleInfo.buyLink" target="_blank">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </p>
        <p>Język: {{activeBook.volumeInfo.language}}</p>
      </div>
      <div class="description" v-html="activeBook.volumeInfo.description"></div>
    </div>
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
      let result = "";

      if (this.activeBook.volumeInfo.authors.length > 0) {
        this.activeBook.volumeInfo.authors.forEach(function(e, idx, array) {
          if (idx < array.length - 1) {
            result += `${e}, `;
          } else {
            result += e;
          }
        });

        result.slice(0, -2);
      }
      return result;
    },
    price() {
      if (this.activeBook.saleInfo.saleability == "NOT_FOR_SALE") return "";
      if (this.activeBook.saleInfo.saleability == "FOR_SALE") {
        return `${this.activeBook.saleInfo.retailPrice.amount} ${
          this.activeBook.saleInfo.retailPrice.currencyCode
        }`;
      }
      if (this.activeBook.saleInfo.saleability == "FREE") {
        return `Darmowa`;
      }
    },
    coverPicture() {
      if (this.activeBook.volumeInfo.imageLinks) {
        if (this.activeBook.volumeInfo.imageLinks.small) {
          return this.activeBook.volumeInfo.imageLinks.small;
        } else if (this.activeBook.volumeInfo.imageLinks.thumbnail) {
          return this.activeBook.volumeInfo.imageLinks.thumbnail;
        }
      }
      return "http://placehold.jp/24/cccccc/ffffff/300x400.png?text=No image";
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
  padding: 1em;
  width: 100vw;
  height: 100vh;
  background-color: #222;
  z-index: 100;

  & .innerWrapper {
    display: flex;
    flex-direction: column;

    & .x {
      position: absolute;
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

    & .flexRow {
      flex-direction: row;

      & .picture {
        // position: fixed;
        top: 50px;
        left: 15px;
        width: 300px;
        height: 400px;
        float: left;
        margin-right: 1em;
      }
    }

    h1,
    h2,
    .description {
      // position: fixed;
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
      margin: 1em;
    }
    a {
      color: #ddd;
    }
  }
}
</style>