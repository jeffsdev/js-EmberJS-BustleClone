import Ember from 'ember';

export default Ember.Component.extend({
  isTextShowing: false,
  actions: {
    textShow: function() {
      this.set('isTextShowing', true);
    },
    textHide: function() {
      this.set('isTextShowing', false);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
