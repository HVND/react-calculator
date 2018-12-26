import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({screen}) => ({
  screen
});

export class Screen extends Component {
  render() {
    return (
      <div className="screen">{this.props.screen}</div>
    );
  }
}

export default connect(mapStateToProps)(Screen);