const Alert = Marionette.Behavior.extend( {

  id: "alert",

  defaults: {
    title: "Alert!",
    message: "Well that's not really urgent"
  },

  onAlert() {
    swal( { title: this.options.title, text: this.options.message } );
  }

} );

export default Alert;
