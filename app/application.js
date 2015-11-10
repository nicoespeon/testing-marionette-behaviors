import {FavoriteModel, FavoriteView} from './modules/favorites';
import {LikeModel, LikeView} from './modules/likes';
import {ButtonModel, ButtonView, ButtonCounterView} from './modules/buttons';
import {CardModel, CardView} from './modules/cards';

"use strict";

function _renderView ( $container, View, model ) {
  var view = new View( { model: model } );
  $container.append( view.$el );
  view.render();

  return view;
}

const App = {
  init() {
    const $app = $( "#app" );

    _renderView( $app, FavoriteView, new FavoriteModel() );
    _renderView( $app, LikeView, new LikeModel() );
    _renderView( $app, ButtonView, new ButtonModel() );
    _renderView( $app, ButtonCounterView, new ButtonModel( { text: "Click me!" } ) );
    _renderView( $app, CardView, new CardModel() );
  }
};

export default App;
