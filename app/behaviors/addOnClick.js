const OnClick = Marionette.Behavior.extend( {

  id: "addOnClick",

  defaults: {
    propertyToIncrease: "size",
    increaseStep: 1
  },

  events: {
    "click": "add"
  },

  onIncrease() {
    this.add();
  },

  add() {
    var currentValue = this.view.model.get( this.options.propertyToIncrease );
    this.view.model.set( this.options.propertyToIncrease, currentValue + this.options.increaseStep );
    this.view.render();
  }

} );

export default OnClick;
