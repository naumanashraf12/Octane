import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Navbar.css";
const Menu = () => (
  <>
    <p>HOME</p>
    <p>FARM</p>
    <p>BOARDROOM</p>
    <p>BOND</p>
    <p>DOCS</p>
    <p>AUTOVOULTS</p>
  </>
);
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <Container fluid>
      <Row
        style={{
          backgroundColor: "#3e4855",
          paddingBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <Col
          lg="7"
          md="12"
          sm="12"
          style={{
            backgroundColor: "white",
            padding: "10px 0 0px 10px",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex flex-row r_mobile">
            <img
              style={{ width: "80px", height: "80%", marginBottom: "15px" }}
              src="./images/okane-256.png"
              alt=""
            />
            <div className="Container_links ml-2">
              <Menu />
            </div>
            <div className="gpt__navbar-menu">
              {Toggle ? (
                <img
                  style={{
                    width: "30px",
                    marginBottom: "15px",
                    marginRight: "15px",
                  }}
                  src="./images/x-lg.svg"
                  alt=""
                  onClick={() => setToggle(false)}
                />
              ) : (
                <img
                  style={{ marginRight: "25px", width: "40px" }}
                  src="./images/list.svg"
                  onClick={() => setToggle(true)}
                />
              )}
              {Toggle && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                  <div className="gpt3__navbar-menu_container-links">
                    <Menu />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col md={5} lg={{ span: 4, offset: 1 }}>
          <div className="container_Icons">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="circle" style={{ display: "flex" }}>
                <img
                  style={{ width: "40px", margin: "auto" }}
                  src="./images/okane-256.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0px", color: "white", fontSize: "18px" }}>
                $4.56
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="circleshare" style={{ display: "flex" }}>
                <img
                  style={{ width: "40px", margin: "auto" }}
                  src="./images/oshare-256.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0px", color: "white", fontSize: "18px" }}>
                $4.56
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="circle" style={{ display: "flex" }}>
                <img
                  style={{ width: "40px", margin: "auto" }}
                  src="./images/obond-256.png"
                  alt=""
                />
              </div>
              <p style={{ margin: "0px", color: "white", fontSize: "18px" }}>
                $44,414.56
              </p>
            </div>

            <button className="nav_button">MY WALLET</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
