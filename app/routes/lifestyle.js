import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('article', {
      orderBy: 'tag',
      equalTo: 'lifestyle'
    });
  }
});
