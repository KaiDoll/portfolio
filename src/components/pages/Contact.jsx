import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const [emailaddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    return name === "emailaddress" ? setEmailAddress(value) : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={emailaddress}
          name="emailaddress"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
        // onSubmit={handleFormSubmit}
      >
        <Form.Label>Message!</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          name="message"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit" variant="secondary" size="lg" active>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
