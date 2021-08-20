new Vue({
  el: '.app',
  data: {
    text: 'Test Text',
    clickCard: false,
    buttonAnimate: false },

  computed: {
    cardAnimate: function () {
      return {
        'app-content--animate': this.clickCard };

    },
    buttonsAnimate: function () {
      return {
        'app-buttons--animate': this.buttonAnimate };

    } } });