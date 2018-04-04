import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./Logic/reducer";
import ChatterBot from './ChatterBot';
import {fromJS} from 'immutable';
import {travel} from "./ChatRoutes/travel";

export default class ChatterBotContainer extends React.Component {

  constructor(props) {
    super();
    this.state = {...props};
  }

  render() {
    return (<Provider store={createStore(reducer, fromJS(travel))}><ChatterBot /></Provider>);
  }
}
