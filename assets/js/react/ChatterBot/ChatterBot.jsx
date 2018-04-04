import React from 'react';
import {connect} from 'react-redux';

class ChatterBot extends React.Component {

    constructor(props) {
        super();
        this.state = {...props};
    }

    render() {
        return (<div>welcome to chilli's<img src={this.props.logo} /></div>);
    }
}

function mapStateToProps(state) {
    return {
      logo: state.getIn(['logo'], null)
    };
}

export default connect(mapStateToProps)(ChatterBot);
