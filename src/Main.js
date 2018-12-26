import React, {Component} from 'react';
import './Main.scss';
import Screen from "./components/screen/Screen";
import Container from "./components/container/Container";
import buttons from "./constants/buttonsList";
import {connect} from "react-redux";
import {APPLY_OPERATOR, CLEAR, UPDATE_SCREEN_VALUE} from "./constants/actions";

const mapDispatchToProps = dispatch => ({
  applyOperator: operator => dispatch({ type: APPLY_OPERATOR, payload: operator }),
  updateScreenValue: value => dispatch({ type: UPDATE_SCREEN_VALUE, payload: value }),
  clear: () => dispatch({ type: CLEAR }),
});

class Main extends Component {
  constructor() {
    super();

    this.state = {
      buttons
    }
  }

  handleButtonClick({isOperator, name}) {
    if (isOperator) {
      if (name === 'clear') {
        this.props.clear();
      } else {
        this.props.applyOperator(name);
      }
    } else {
      this.props.updateScreenValue(name);
    }
  }

  render() {
    return (
      <main className="main">
        <Screen></Screen>
        <Container buttons={this.state.buttons} onAction={this.handleButtonClick.bind(this)}></Container>
      </main>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);