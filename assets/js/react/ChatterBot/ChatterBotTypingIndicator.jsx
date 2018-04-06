import React from 'react';
import {connect} from 'react-redux';
import bowser from 'bowser';
import ChatterBotOptions from './ChatterBotOptions';

class ChatterBotTypingIndicator extends React.Component {

  constructor(props) {
    super();
    let logoDiv = (<div></div>);

    if (props.logo) {
      logoDiv = (<div className={'chatterbot-message__logo'} style={{
        backgroundImage: 'url(' + props.logo + ')'
      }}></div>);
    }

    if (props.logoSVG && !bowser.isUnsupportedBrowser({msie: '8'}, window.navigator.userAgent)) {
      logoDiv = (<div className={'chatterbot-message__logo'} style={{
        backgroundImage: 'url(' + props.logoSVG + '), none'
      }}></div>);
    }

    this.state = {...props, logoDiv: logoDiv};
  }

  render() {
    return this.props.visible ? (<div className={'chatterbot-typing-indicator'}>
      {this.state.logoDiv}
      <div className={'chatterbot-typing-indicator__container'}>
        <div className={'chatterbot-typing-indicator__dot-container'}>
          <div className={'chatterbot-typing-indicator__dot'}></div>
          <div className={'chatterbot-typing-indicator__dot'}></div>
          <div className={'chatterbot-typing-indicator__dot'}></div>
        </div>
      </div>
    </div>) : null;
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    logoSVG: state.getIn(['logoSVG'], null),
    visible: state.getIn(['typing'], false)
  };
}

export default connect(mapStateToProps)(ChatterBotTypingIndicator);
