import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        text: this.get('text'),
        tag: this.get('tag')
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
