import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Title } from "chart.js";

const Homepage = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level="2" className="heading">
        Global Crypto Stats
      </Title>
    </>
  );
};

export default Homepage;
