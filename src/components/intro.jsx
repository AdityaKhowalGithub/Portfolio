import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div>
      <div id="homeback" className="route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      {/* <div className="spacer" style={{ height: "100vh" }}></div> */}
      </div>
    );
  }
}

export default Intro;
