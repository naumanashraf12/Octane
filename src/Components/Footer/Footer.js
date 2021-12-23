import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="d-flex flex-md-row flex-column justify-content-around align-items-center mt-5"
      style={{
        backgroundColor: "#3e4855",
        height: "100px",
        borderRadius: "10px",
      }}
    >
      <div>
        <p style={{ color: "white" }}>Copyright@ OkaneDefi 2021</p>
      </div>
      <div>
        <img style={{ marginRight: "5px" }} src="/images/twitter.svg" alt="" />
        <img style={{ marginRight: "5px" }} src="/images/discord.svg" alt="" />
        <img style={{ marginRight: "5px" }} src="/images/github.svg" alt="" />
        <img style={{ marginRight: "5px" }} src="/images/telegram.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
