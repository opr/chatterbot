import React from 'react';
import {connect} from 'react-redux';
import bowser from 'bowser';
import ChatterBotOptions from './ChatterBotOptions';

class ChatterBotMessage extends React.Component {

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
    return (<div className={'chatterbot-message'}>
      {this.state.logoDiv}
      <div className={'chatterbot-message__container'}>{this.props.message}</div>
      <ChatterBotOptions chosenAnswer={this.props.chosenAnswer} messageName={this.props.messageName}/>
    </div>);
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    logoSVG: state.getIn(['logoSVG'], null),
    logo: state.getIn(['logo'], null),
    messageName: ownProps.messageName,
    chosenAnswer: (ownProps.chosenAnswer === 0) ? 0 : (ownProps.chosenAnswer || -1),
    message: state.getIn(['messages', ownProps.messageName, 'message'], 'empty message')
  };
}

export default connect(mapStateToProps)(ChatterBotMessage);
