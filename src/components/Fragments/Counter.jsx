import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: 10 });
    console.log("component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");

    if (this.state.count === 10) {
      this.setState({ count: 5 });
    }
  }

  render() {
    return (
      <div className="items-center flex gap-3 justify-center">
        <h1>{this.state.count}</h1>
        <button
          className="bg-black p-3 text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
