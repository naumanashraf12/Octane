import React from "react";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="header_pad">
      <Row>
        <Col md="6" className="HEADER mt-5">
          <p
            style={{
              fontSize: "30px",
              fontWeight: "1000",
              lineHeight: "50px",
              color: "#3e4855",
            }}
          >
            Welcome To <br />
            <span
              style={{ fontSize: "60px", color: "#3e4855", fontWeight: "1000" }}
            >
              Okane<span style={{ color: "#68ebca" }}>D</span>eFi
            </span>
          </p>
          <p className="Header_p">
            Okane is an algocoin which is designed
            <br /> to follow the price of BTC.
          </p>
          <p className="Header_p">
            Enjoy high yields normally only found on
            <br /> high risk asset,but exposure to BTC instead!
          </p>
          <div className="width_content">
            <p className="Header_p2">
              Okane is pegged via algorithm to a <br />
              <span style={{ color: "#ff685d" }}>10,000</span>:
              <span style={{ color: "#ff685d" }}>1</span> ratio to BTC.
              <span style={{ color: "#ff685d" }}>$100</span> BTC=
              <span style={{ color: "#ff685d" }}>$10</span> OKANE PEG
            </p>
            <p className="Header_p2" style={{ textAlign: "center" }}>
              join our Telegram to find out more!
            </p>
            <div className="divider"></div>
          </div>
        </Col>
        <Col md="6">
          <div
            className="circles d-md-flex d-none "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <img className="Header_img" src="./images/okane-512.png" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
