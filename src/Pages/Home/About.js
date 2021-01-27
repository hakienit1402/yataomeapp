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
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/141027165_3484082521816742_6552506414995593971_o.jpg?_nc_cat=101&ccb=2&_nc_sid=0debeb&_nc_ohc=o_g6_FNN3xoAX9ZXAYY&_nc_ht=scontent.fvca1-2.fna&oh=3ce69f5b878a58314a60fcf87d339ec7&oe=60357A5D"
          />
          <br />
          <strong>
            <a href="https://www.facebook.com/hakien1402">HÀ KIÊN</a>
          </strong>
        </Col>
        <Col className="info">
          <Image
            width={200}
            // src="https://photos.app.goo.gl/cHjZEDwgX42AaGen9"
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/141048146_3484082571816737_6476665111340637646_n.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=ZE8oVf-_ZigAX_n89-_&_nc_ht=scontent.fvca1-2.fna&oh=c38ba0e709e2af78f936143941787632&oe=60374D7F"
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
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/141589035_3484082528483408_7798999355879976581_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=aHBVjz4RVoAAX8a0HKC&_nc_ht=scontent.fvca1-2.fna&oh=b83545a7e14faa393d800f587241033e&oe=6036BB65"
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
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/143639069_3484082501816744_1848686676182843184_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=NGX_PWNcPsQAX90b5hS&_nc_ht=scontent.fdad2-1.fna&oh=9c15099969628d47b6a7bf675937bd65&oe=603578D0"
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
