import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  // state= {
  //   age: 21
  // }
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  render() {
    return (
      <div>
        <div>
          Age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispachToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispach({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
