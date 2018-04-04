import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader';
import ChatterBotContainer from './ChatterBot/ChatterBotContainer';

const getRenderFunc = app => {
  return () => {
      render(app.component, app.element, app.name);
  }
};

const render = (Component, element, name) => {
    ReactDOM.render(
        <AppContainer name={name}>
            {Component}
        </AppContainer>,
        element
    )
};

let apps = [
    {element: document.getElementById('chatterbot-anchor'), component: <ChatterBotContainer />, file: './ChatterBot/ChatterBotContainer', name: 'ChatterBotContainer'}
];

for (let a of apps) {
    a.element ? getRenderFunc(a)() : null;
    module.hot ? module.hot.accept(getRenderFunc(a)()) : null;
}
