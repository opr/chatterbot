import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./Logic/reducer";
import ChatterBot from './ChatterBot';
import {fromJS} from 'immutable';
import {setupInitialState} from "./Logic/core";
import {travel} from "./ChatRoutes/travel";

export default class ChatterBotContainer extends React.Component {

  constructor(props) {
    super();

    let reducerOptions = function() {};
    if(process.env.NODE_ENV !== 'production') {
      let extension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function() {};
      reducerOptions = window.__REDUX_DEVTOOLS_EXTENSION__ && extension;
    }
    this.store = createStore(reducer, setupInitialState(travel), reducerOptions);

    this.state = {...props};
  }

  render() {
    return (<Provider store={this.store}><ChatterBot /></Provider>);
  }
}
