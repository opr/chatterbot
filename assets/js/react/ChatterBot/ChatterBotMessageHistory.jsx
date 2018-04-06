import React from 'react';
import {connect} from 'react-redux';
import ChatterBotMessage from "./ChatterBotMessage";

class ChatterBotMessageHistory extends React.Component {

  constructor(props) {
    super();
    this.state = {...props};
  }

  render() {

    let messages = [];

    for(let message of this.props.messages.values()) {
      console.log(message);
      messages.push(<ChatterBotMessage chosenAnswer={message.getIn(['chosenAnswer'])} key={message.getIn(['message'])} messageName={message.getIn(['message'])} />)
    }

    return (<div className={'message-history'}>{messages}
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    messages: state.getIn(['history'])
  };
}

export default connect(mapStateToProps)(ChatterBotMessageHistory);
