import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactInfo = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        />
      </Col>
      <Col lg={10}>
        <h3>{item.name}</h3>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactInfo;
