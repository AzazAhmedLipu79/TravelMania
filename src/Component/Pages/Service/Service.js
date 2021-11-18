import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { image, title, description, _id } = props.service || {};
  // console.log(props.service);
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
          <Link to={`/Booking/${_id}`}>
            <Button variant="outline-success">
              Let's Start
              <i class="bi bi-bookmark-dash-fill"></i>
            </Button>
          </Link>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Service;
