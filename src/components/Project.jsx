import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <Card sm={3} style={{ width: "18rem", margin: "1rem" }}>
      <div>
        <Card.Img variant="top" src={props.image} width={75} />
      </div>
      <Card.Body>
        <div style={{ height: "80%", marginBottom: '8%' }}>
          <Card.Title>Name: {props.name}</Card.Title>
          {/* <Card.Title>ID: {props.id}</Card.Title> */}
          <Card.Text>Description: {props.description}</Card.Text>
        </div>
        <div>
          <Button variant="outline-dark">
            <a href={props.gitLink}>Github</a>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
