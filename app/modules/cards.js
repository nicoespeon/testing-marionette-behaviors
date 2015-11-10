import AlertBehavior from 'behaviors/alert';

const CardModel = Backbone.Model.extend( {

  defaults: {
    title: "Welcome",
    supportMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
    callToAction: "Get started"
  }

} );

const CardView = Marionette.ItemView.extend( {

  template: "#card",

  behaviors: {
    AlertOnShare: {
      behaviorClass: AlertBehavior,
      title: "Shared",
      message: "Your message has been shared!"
    }
  },

  ui: {
    "share": "[data-ui~=share]"
  },

  triggers: {
    "click @ui.share": "alert"
  },

  onShareClick() {
    this.trigger( "alert" );
  }

} );

export default { CardModel, CardView };
