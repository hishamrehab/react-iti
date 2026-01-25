import React from "react";

export default class Navbar
  extends React.Component
{
  constructor() {
    super();
    console.log(
      "constructor",
    );

    this.state =
      {
        name: "hisham",
        title:
          "Devleopre",
      };
  }

  componentDidMount() {
    console.log(
      "from componentDidMount",
    );
    this.setState(
      {
        name: "Ahmed",
      },
    );
  }

  componentDidUpdate() {
    console.log(
      "from componentDidUpdate",
    );
  }

  // componentWillUnmount() { //clean up method
  //   console.log("from componentWillUnmount");
  // }

  render() {
    console.log(
      "render",
    );
    return (
      <>
        <h1>
          My
          Name
          is{" "}
          {
            this
              .state
              .name
          }
        </h1>
        <p>
          Hello
        </p>
      </>
    );
  }
}
