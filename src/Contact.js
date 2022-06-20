import React from "react";
// import { img } from "../img-20220606-WA0041_1.jpg";
import img from "./picture/IMG-20220606-WA0041_1.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="pic">
        <img src={img} alt="anointing picture" />
      </div>
      <div className="con">
        <h2>CONTACT</h2>
        <ul>
          <li>+234 811 857 8284</li>
          <li>Ogun State, Nigeria</li>
          <li>https://twitter.com/sammy/01755964/</li>
          <li>https://facebook.com/ogundele.olamilekanis</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
