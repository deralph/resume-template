import React from "react";
import Name from "./Name";
import "./index.css";
import Experience from "./Experience";
import Summary from "./Summary";
import Education from "./Education";
import Contact from "./Contact";
import Skills from "./skills";
import Extra from "./Extra";

const App = () => {
  return (
    <>
      <div className="cont">
        <Contact />
        <Skills />
        <Extra />
      </div>
      <div className="container">
        <Name />
        <Summary />
        <Experience />
        <Education />
      </div>
    </>
  );
};

export default App;
