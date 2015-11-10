import AddOnClickBehavior from 'behaviors/addOnClick';

const LikeModel = Backbone.Model.extend( {

  defaults: {
    number: 0
  }

} );

const LikeView = Marionette.ItemView.extend( {

  template: "#like",
  tagName: 'span',

  behaviors: {
    AddOnClick: {
      behaviorClass: AddOnClickBehavior,
      increaseStep: 10,
      propertyToIncrease: "number"
    }
  }

} );

export default { LikeModel, LikeView };
