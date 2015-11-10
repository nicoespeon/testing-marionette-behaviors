import AddOnClick from 'behaviors/addOnClick';

function addOnClickTests ( context ) {

  let model, view, behavior, options;

  beforeEach( function () {
    model = new context.ModelClass();
    view = new context.ViewClass( { model: model } );

    behavior = _.findWhere( view._behaviors, { id: "addOnClick" } );
    options = behavior.options;

    model.set( options.propertyToIncrease, 1 );
  } );

  it( "should be instantiated", function () {
    expect( behavior ).not.toBeUndefined(  );
  } );

  it( "should increase the model value when we click on the view", function () {
    var expectedValue = model.get( options.propertyToIncrease ) + options.increaseStep;

    view.$el.trigger( "click" );

    expect( model.get( options.propertyToIncrease ) ).toBe( expectedValue );
  } );

  it( "should increase the model value when view triggers increase method", function () {
    var expectedValue = model.get( options.propertyToIncrease ) + options.increaseStep;

    view.triggerMethod( "increase" );

    expect( model.get( options.propertyToIncrease ) ).toBe( expectedValue );
  } );

}

export default addOnClickTests;
