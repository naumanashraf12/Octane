import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Bar.css";

const Bar = () => {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "#ff685d" }} className="mt-2">
        <Col md="4">
          <div className="d-flex flex-column justify-content-center align-items-center bar">
            <p
              style={{
                color: "#3e4855",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              TOTAL VALUE LOCKED
            </p>
            <p
              style={{ color: "white", fontSize: "40px", fontWeight: "bolder" }}
            >
              1.0063 BTC
            </p>
          </div>
        </Col>
        <Col md="8">
          <div
            className="d-flex flex-md-row flex-column "
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              height: "100%",
              margin: "0 5rem 0 5rem",
            }}
          >
            <button className="bar_button mt-md-0 mt-3">STAKE NOW</button>
            <button className="bar_button mt-md-0 mt-3">FARM NOW</button>
            <button className="bar_button  mt-md-0 mt-3">BUY OKANE</button>
            <button className="bar_button  mt-md-0 mt-3 mb-3 mb-md-0">
              BUY OSHARE
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Bar;
