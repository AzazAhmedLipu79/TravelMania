import React, { useEffect, useState } from "react";
// import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://fast-chamber-49643.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container service-area">
      <h2>Best Services </h2>

      <div>
        <div className="mt-2 bg-light mx-auto  row row-cols-1 p-2 row-cols-md-3 g-4">
          {services.map((service) => (
            <Service key={service.key} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
