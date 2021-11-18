import React, { useEffect, useState } from "react";
import "./Booking.css";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";

import { useForm } from "react-hook-form";

const Booking = () => {
  const { email } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://fast-chamber-49643.herokuapp.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);
  const {
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = email;
    alert("Your Order Pending");
    console.log(data);
  };

  return (
    <div className="container booking-area mx-auto">
      <h2 className="fw-bold my-4 text-center text-gray">
        Confirm Your Order{" "}
      </h2>
      <form
        className="d-flex align-items-center justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="submit"
          value="Confirm Order"
          className="btn btn-outline-success w-50 my-5"
        />
      </form>
    </div>
  );
};

export default Booking;
