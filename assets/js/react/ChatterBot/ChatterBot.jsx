import React from 'react';
import {connect} from 'react-redux';
import ChatterBotMessageHistory from './ChatterBotMessageHistory';
import ChatterBotMessage from './ChatterBotMessage';

class ChatterBot extends React.Component {

  constructor(props) {
    super();
    this.state = {...props};
  }

  render() {
    return (<div className={'chatterbot'}>
      <ChatterBotMessageHistory />
      <ChatterBotMessage messageName={this.props.currentMessage} />
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    currentMessage: state.getIn(['currentMessage'], null)
  };
}

export default connect(mapStateToProps)(ChatterBot);
