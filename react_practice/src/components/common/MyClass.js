import React from "react";

export default class MyClass extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  changeColor = () => {
    this.setState({ color: "green" });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeColor}>ChangeColor</button>
        <h1>Color:{this.state.color}</h1>
      </div>
    );
  }
}
