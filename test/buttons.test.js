import {ButtonModel, ButtonCounterView} from 'modules/buttons';
import addOnClickTests from './behaviors/addOnClick.test';

"use strict";

describe( "Buttons", () => {

  describe( "View", () => {

    const View = ButtonCounterView.extend( { template: _.template( "" ) } );

    describe( "AddOnClick Behavior", () => {

      addOnClickTests( { ViewClass: View, ModelClass: ButtonModel } );

    } );

  } );

} );
