import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();

  const searchName = () => {
    dispatch({ type: "FILTER_CONTACTS", payload: searchItem });
  };

  return (
    <Row>
      <Col lg={10}>
        <Form.Control
          type="text"
          placeholder="name"
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </Col>
      <Col lg={2}>
        <Button onClick={searchName}>Search</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
