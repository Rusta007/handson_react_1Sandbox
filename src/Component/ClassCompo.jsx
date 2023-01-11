import React from "react";

class ClassCompo extends React.Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
    // console.log("helloworld");
  };

  render() {
    const isActive = this.state.isActive;
    return (
      <>
        {isActive && <h1>Hello react</h1>}

        <button onClick={this.handleToggle}>Toggle class</button>
      </>
    );
  }
}
export default ClassCompo;
