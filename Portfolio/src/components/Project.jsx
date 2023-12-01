import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <div className="d-flex align-items-start">
    <Card style={{ width: "18rem", margin: "5rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>Name: {props.name}</Card.Title>
        <Card.Title>ID: {props.id}</Card.Title>
        <Card.Text>Description: {props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Project;
