import _ from "lodash"; // бибилотека всяких операций с массивами и т.д., в даннном случае можно и без неё

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 5,
      pageCount: 0,
      allItems: [],
      items: [],
    };
  },

  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.items = this.allItems[page - 1] || this.allItems[0];
    },

    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize); // разбить общий массив записей на массив страниц (подмассивов записей)
      this.pageCount = _.size(this.allItems); // просто длина массива
      this.items = this.allItems[this.page - 1] || this.allItems[0]; // текущая страница
    },
  },
};
