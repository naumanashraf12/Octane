import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";

const Card = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col lg="4" md="6" sm="12" className="mt-md-0 mt-2 p-0 p-sm-2">
          <div className="card">
            <div className="circle1" style={{ display: "flex" }}>
              <img
                style={{ width: "80px", margin: "auto" }}
                src="./images/okane-256.png"
                alt=""
              />
            </div>
            <p
              style={{ color: "#3e4855", fontWeight: "800", fontSize: "25px" }}
            >
              Okane
            </p>
            <p>10,000 BOMB(1.0 Peg)=</p>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "700",
                fontSize: "35px",
                lineHeight: "30px",
              }}
            >
              1.0063 BTC
            </p>
            <p style={{ fontSize: "13px", color: "#3e4855" }}>$4.24/OKANE</p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Market Cap:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Circulating:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Total Supply:1,234,52
            </p>
          </div>
        </Col>
        <Col lg="4" md="6" sm="12" className="mt-md-0 mt-2 p-0 p-sm-2">
          <div className="card">
            <div className="circleshare1" style={{ display: "flex" }}>
              <img
                style={{ width: "80px", margin: "auto" }}
                src="./images/oshare-256.png"
                alt=""
              />
            </div>
            <p
              style={{ color: "#3e4855", fontWeight: "800", fontSize: "25px" }}
            >
              OSHARE
            </p>
            <p>10,000 BOMB(1.0 Peg)=</p>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "700",
                fontSize: "35px",
                lineHeight: "30px",
              }}
            >
              1.0063 BNB
            </p>
            <p style={{ fontSize: "13px", color: "#3e4855" }}>$4.24/OSHARE</p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Market Cap:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Circulating:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Total Supply:1,234,52
            </p>
          </div>
        </Col>
        <Col lg="4" md="6" sm="12" className="mt-md-0 mt-2 p-0 p-sm-2">
          <div className="card">
            <div className="circle1" style={{ display: "flex" }}>
              <img
                style={{ width: "80px", margin: "auto" }}
                src="./images/okane-256.png"
                alt=""
              />
            </div>
            <p
              style={{ color: "#3e4855", fontWeight: "800", fontSize: "25px" }}
            >
              OBOND
            </p>
            <p>10,000 BOMB(1.0 Peg)=</p>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "700",
                fontSize: "35px",
                lineHeight: "30px",
              }}
            >
              1.0063 BTC
            </p>
            <p style={{ fontSize: "13px", color: "#3e4855" }}>$4.24/OBOND</p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Market Cap:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Circulating:1,234,5252
            </p>
            <p
              style={{ fontSize: "13px", color: "#3e4855", lineHeight: "14px" }}
            >
              Total Supply:1,234,52
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="6" sm="12" className="mt-md-0 mt-2">
          <div className="card">
            <div className="circle1" style={{ display: "flex" }}>
              <img
                style={{ width: "80px", margin: "auto", textAlign: "center" }}
                src="./images/okane-bnb-LP-256.png"
                alt=""
              />
            </div>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "800",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              OKANE-BNB PANCAKESWRAP LP
            </p>
            <p>ZIP IN</p>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "800",
                fontSize: "30px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              0.65 OKANE / 1.75 BTCB
            </p>

            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              $1,000
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              Liquidity:1,234,5252
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              Total Supply:1,234,52
            </p>
          </div>
        </Col>
        <Col md="6" sm="12" className="mt-md-0 mt-2">
          <div className="card">
            <div
              className="circleshare1"
              style={{ display: "flex", textAlign: "center" }}
            >
              <img
                style={{ width: "80px", margin: "auto" }}
                src="./images/oshare-bnb-LP-256.png"
                alt=""
              />
            </div>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "800",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              OSHARE-BNB PANCAKESWRAP LP
            </p>
            <p>ZIP IN</p>
            <p
              style={{
                color: "#3e4855",
                fontWeight: "800",
                fontSize: "30px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              0.65 OSHARE / 1.75 BNB
            </p>

            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              $1,234,5252
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              Liquidity:1,234,5252
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#3e4855",
                lineHeight: "14px",
                textAlign: "center",
              }}
            >
              Total Supply:1,234,52
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
