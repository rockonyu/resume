var app = new Vue({
  el: '#app',
  data: {
    resume: null,
    leftFixed: false
  },
  methods: {
    handleScroll () {
      this.leftFixed  = window.scrollY > 280 ? true : false;
    }
  },
  created: function () {
    this.$http.get('./resume.json').then(response => {
      this.resume = response.body;
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
});