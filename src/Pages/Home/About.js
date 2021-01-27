import { Col, Divider, Image, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
const MyTitleMessage = styled.h1`
  width: 100%;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
      padding: 10px 0px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      padding: 10px 0px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Ha Ngoc Kien</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "MERN Stack Developer", "Tester"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>
        <strong style={{ color: "red", marginBottom: 0, marginTop: 10 }}>
          Motel room management
        </strong>

        <p style={{ color: "red", marginBottom: 0, marginTop: 10 }}>
          Sign In to use my app{" "}
        </p>
        <p style={{ color: "red", marginBottom: 0, marginTop: 10 }}>
          {" "}
          Love you !{" "}
        </p>
      </div>
    </div>
  </MyTitleMessage>
);
export const About = () => {
  return (
    <div className="container">
      <Row>
        <TitleMessage />
      </Row>
      <Divider
        style={{
          fontSize: 22,
          fontWeight: "bold",
          padding: 20,
          background: "lightgray",
        }}
      >
        Group 12 - Noob Boy
      </Divider>
      <Row className="about">
        <Col  className="info">
          <Image
            width={200}
            // src="https://photos.app.goo.gl/jyXPRGbVgTCKyGyX6"
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=Ab5thLRoIagAX8aAIje&_nc_ht=scontent.fvca1-1.fna&oh=ff2d59b191f6e5201588d7119c742acb&oe=60361BBA"
          />
          <br />
          <strong>
            <a href="https://www.facebook.com/hakien1402">HÀ KIÊN</a>
          </strong>
        </Col>
        <Col className="info">
          <Image
            width={200}
            src="https://photos.app.goo.gl/cHjZEDwgX42AaGen9"
          />
          <br />
          <strong>
            <a href="https://www.facebook.com/profile.php?id=100004886378381">
              VĂN QUANG
            </a>
          </strong>
        </Col>
        <Col className="info">
          <Image
            width={200}
            src="https://photos.app.goo.gl/FNQjVq5PaYJrCyL39"
          />
          <br />
          <strong>
            <a href="https://www.facebook.com/profile.php?id=100008440710917">
              QUYẾT THẮNG
            </a>
          </strong>
        </Col>
        <Col className="info">
          <Image
            width={200}
            src="https://photos.app.goo.gl/nwjE6L5z8H1Pnswn8"
          />
          <br />
          <strong>
            <a href="https://www.facebook.com/ngmanhcuong17">MẠNH CƯỜNG</a>
          </strong>
        </Col>
      </Row>
    </div>
  );
};
