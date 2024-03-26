import React from "react";
import MyImage from "./ndu.jpg";
const Education = () => {
  return (
    <div>
      <div className="head">
        <h1 className="tite1">EDUCATION</h1>
      </div>
      <hr />
      <p>
        I am pursuing a bachelor in Computer and Communication Engineering at
        Notre Dam University - Louaize and I am expected to graduate in the Fall
        of 2022.
      </p>

      <img src={MyImage} alt="horse" />
      <div className="foot">
        <h3>DALIA W. ABOU CHAKRA, COMPUTER & COMMUNICATION ENGINEER</h3>
      </div>
    </div>
  );
};

export default Education;
