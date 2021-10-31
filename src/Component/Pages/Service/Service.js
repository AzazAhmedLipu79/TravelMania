import React from "react";
import { Card, Button } from "react-bootstrap";

const Service = (props) => {
  const { image, title, description } = props.service || {};
  return (
    <Card className="bg-light g-2">
      <Card.Img className="p-1 rounded bg-light" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          {description}...{" "}
          <span className="fw-bold text-secondary">See more</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {" "}
          <Button variant="outline-success">
            Let's Start
            <i class="bi bi-bookmark-dash-fill"></i>
          </Button>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Service;
