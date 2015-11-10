import {LikeModel, LikeView} from 'modules/likes';
import addOnClickTests from './behaviors/addOnClick.test';

"use strict";

describe( "Likes", () => {

  describe( "View", () => {

    const View = LikeView.extend( { template: _.template( "" ) } );

    describe( "AddOnClick Behavior", () => {

      addOnClickTests( { ViewClass: View, ModelClass: LikeModel } );

    } );

  } );

} );
