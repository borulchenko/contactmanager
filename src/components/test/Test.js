import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      //   .then(json => console.log(json))
      .then(json => this.setState({ title: json.title, id: json.id }));
  }
  //   componentWillMount() {
  //     console.log("component will mount");
  //   }
  //   componentDidUpdate() {
  //     console.log("component did update");
  //   }
  //   componentWillReceiveProps(nextProps, state) {
  //     console.log(nextProps + "  " + state);
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: "smth"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("snapshot beforre");
  //   }

  render() {
    const { title, id } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>retrieved id is => {id}</p>
      </div>
    );
  }
}

export default Test;
