import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container service-area">
      <h2>Best Services </h2>

      <div>
        <CardGroup className="bg-light mx-auto">
          {services.map((service) => (
            <Service key={service.key} service={service}></Service>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default Services;
