import React from "react";

import "./cardstyle.css";

import { Card, Typography, Row, Col } from "antd";
import Steps from "./Steps";

const OnboardCard = () => (
  <Card
    style={{
      width: 340,
      height: 480
    }}
  >
    <Row
      style={{
        color: "dimgray",
        fontWeight: 200,
        textAlign: "center",
        marginBottom: 10
      }}
    >
      <Col>
        <Typography.Title level={3} style={{ color: "dimgray" }}>
          User Onboarding
        </Typography.Title>
      </Col>
    </Row>
    <Steps />
  </Card>
);

export default OnboardCard;
