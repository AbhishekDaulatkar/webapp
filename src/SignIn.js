import React from "react";
import FormEx from "./components/FormEx";
import { Card, Col, Row } from "antd";
export default function SignIn() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="SignIn" bordered={true}>
            <FormEx title="SignIn:" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Password" bordered={true}>
            <FormEx title="Password:" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
