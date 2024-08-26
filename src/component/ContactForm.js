import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Contact Info</Form.Label>
        <Form.Control
          type="number"
          placeholder="phone number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default ContactForm;
