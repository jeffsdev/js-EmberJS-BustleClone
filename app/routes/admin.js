import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    },

    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    }
  }
});
