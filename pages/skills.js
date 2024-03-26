import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <div className="head">
      <h1 className="tite1">SKILLS</h1> </div>
      <div className="skill" style={{marginLeft: 250}}>
        <div className="circle">90%</div>
        <div className="circle">96%</div>
        <div className="circle">85%</div>
        <div className="circle">93%</div>
      </div>
      <div className="skill1" style={{marginLeft: 200}}>
        <h3 className="skill1">COMPUTER SKILLS</h3>
        <h3 className="skill1">COMMUNICATION</h3>
        <h3 className="skill1">TIME MANAGEMENT</h3>
        <h3 className="skill1">PROBLEM SOLVING</h3>
      </div>
      <div className="foot">
        <h3>DALIA W. ABOU CHAKRA, COMPUTER & COMMUNICATION ENGINEER</h3>
      </div>
    </div>
  );
};

export default Skills;
