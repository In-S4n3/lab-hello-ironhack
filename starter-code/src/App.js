import React, { Component } from "react";
import "./App.css";
// import Logo from "../public/images/ironhack-logo.svg"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={Logo} alt='Ironhack logo'/> */}
        <div className="header">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p className="intro-p"> You will learn a Frontend </p>
          <p className="intro-p"> framework from scratch, to </p>
          <p className="intro-p"> became an Ninja Developer </p>
          <br />
          <button>Awsome!</button>
        </div>
        <br />
        <div className="icons-div">
          <div>
            <img className="icon" src="/images/icon1.png" alt="" />
            <h3>Declarative</h3>
            <p className="icon-p">
              React makes it painless to create interactive UIs
            </p>
          </div>
          <div>
            <img className="icon" src="/images/icon2.png" alt="" />
            <h3>Components</h3>
            <p className="icon-p">
              Build encapsulated componets that manage their state.
            </p>
          </div>
          <div>
            <img className="icon" src="/images/icon3.png" alt="" />
            <h3>Sigle-Way</h3>
            <p className="icon-p">
              A set of immutable values are passed to the component's
            </p>
          </div>
          <div>
            <img className="icon" src="/images/icon4.png" alt="" />
            <h3>JSX</h3>
            <p className="icon-p">
              Statically-typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
