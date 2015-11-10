import AddOnClickBehavior from '../behaviors/addOnClick';
import AlertBehavior from '../behaviors/alert';

const ButtonModel = Backbone.Model.extend( {

  defaults: {
    text: "A simple button",
    numberOfClicks: 0
  }

} );

const ButtonView = Marionette.ItemView.extend( {

  template: "#button",
  tagName: 'span',

  behaviors: {
    Alert: {
      behaviorClass: AlertBehavior
    }
  },

  triggers: {
    "click": "alert"
  }

} );

const ButtonCounterView = Marionette.ItemView.extend( {

  template: "#counter-button",
  tagName: 'span',

  behaviors: {
    Alert: {
      behaviorClass: AlertBehavior,
      title: "A countable button"
    },
    AddOnClick: {
      behaviorClass: AddOnClickBehavior,
      propertyToIncrease: "numberOfClicks"
    }
  },

  triggers: {
    "click": "alert"
  }

} );

export default { ButtonModel, ButtonView, ButtonCounterView };
