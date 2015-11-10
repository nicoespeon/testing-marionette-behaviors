import {FavoriteModel, FavoriteView} from 'modules/favorites';
import addOnClickTests from './behaviors/addOnClick.test';

"use strict";

describe( "Favorites", () => {

  describe( "View", () => {

    const View = FavoriteView.extend( { template: _.template( "" ) } );

    describe( "AddOnClick Behavior", () => {

      addOnClickTests( { ViewClass: View, ModelClass: FavoriteModel } );

    } );

  } );

} );
