import Ember from 'ember';

export default Ember.Component.extend({
  updateArticle: false,
  actions: {
    updateArticle() {
      this.set('updateArticle', true);
    },

    update(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('text'),
        tag: this.get('tag')
      };
      this.set('updateArticle', false);
      this.sendAction('update', article, params);
    }
  }
});
