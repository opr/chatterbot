import React from 'react';
import * as actionCreators from './Logic/actionCreators';
import {connect} from 'react-redux';

class ChatterBotOptions extends React.Component {

  constructor(props) {
    super();
    this.state = {...props};
  }

  render() {

    const buttons = [];

    for (const [index, option] of this.props.options.entries()) {
      buttons.push(<button onClick={() => {
        this.props.chooseAnswer(index);
      }} key={option.get('text')}>{option.get('text')}</button>);
    }
    return (<div>{buttons}</div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    options: state.getIn(['messages', ownProps.messageName, 'options'], [])
  };
}

export default connect(mapStateToProps, actionCreators)(ChatterBotOptions);
