import AddOnClickBehavior from 'behaviors/addOnClick';

const FavoriteModel = Backbone.Model.extend( {

  defaults: {
    size: 0
  }

} );

const FavoriteView = Marionette.ItemView.extend( {

  template: "#favorite",
  tagName: 'span',

  behaviors: {
    AddOnClick: {
      behaviorClass: AddOnClickBehavior
    }
  }

} );

export default { FavoriteModel, FavoriteView };
