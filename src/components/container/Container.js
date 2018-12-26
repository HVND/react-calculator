import React, {Component} from 'react';
import Button from './../../components/button/Button';

export class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.buttons.map((button, index) => <Button key={index} button={button} onAction={this.props.onAction}></Button>)}
      </div>
    );
  }
}

export default Container;