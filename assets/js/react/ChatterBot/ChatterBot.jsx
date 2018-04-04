import React from 'react';

export default class ChatterBot extends React.Component {

    constructor(props) {
        super();
        this.state = {...props};
    }

    render() {
        return (<div>
          Welcome to chilli's
        </div>);
    }
}
