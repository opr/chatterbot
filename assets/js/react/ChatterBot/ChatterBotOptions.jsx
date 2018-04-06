import React from 'react';
import * as actionCreators from './Logic/actionCreators';
import {connect} from 'react-redux';

class ChatterBotOptions extends React.Component {

  constructor(props) {
    super();
    this.state = {
      ...props
    };
  }

  render() {

    const buttons = [];

    for (const [index, option] of this.props.options.entries()) {
      buttons.push(<button
        disabled={this.props.chosenAnswer !== -1}
        className={'chatterbot-options__button' + ((this.state.chosenAnswer !== -1 && this.state.chosenAnswer !== index) ? ' --disabled' : '') + ( this.props.chosenAnswer === -1 ? '' : (this.props.chosenAnswer === index ? '' : ' --disabled'))}
        onClick={() => {
          this.props.simulateTyping();
          setTimeout(() => {this.props.chooseAnswer(index);}, 1500);
          /*this.setState({
            chosenAnswer: index
          });*/
        }} key={option.get('text')}>{option.get('text')}</button>);
    }
    return (<div className={'chatterbot-options'}>{buttons}</div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    options: state.getIn(['messages', ownProps.messageName, 'options'], []),
    chosenAnswer: (ownProps.chosenAnswer === 0) ? 0 : (ownProps.chosenAnswer || -1),
  };
}

export default connect(mapStateToProps, actionCreators)(ChatterBotOptions);
