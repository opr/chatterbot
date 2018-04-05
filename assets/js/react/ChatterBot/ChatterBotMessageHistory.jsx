import React from 'react';
import {connect} from 'react-redux';

class ChatterBotMessageHistory extends React.Component {

  constructor(props) {
    super();
    this.state = {...props};
  }

  render() {
    return (<div className={'message-history'}></div>);
  }
}

function mapStateToProps(state) {
  return {
    messages: state.getIn(['history'])
  };
}

export default connect(mapStateToProps)(ChatterBotMessageHistory);
