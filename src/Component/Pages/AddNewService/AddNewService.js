import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewService.css";

const AddNewService = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
  };

  // console.log(watch("example"));
  return (
    <div className="container add-new-service-top mx-auto">
      <h1 className="mt-5 text-center fw-bold fs-2">Add A New Service </h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form
              className="container-fluid form-area"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex">
                <input
                  {...register("title")}
                  placeholder="Title ex: Journey by SpaceX🚀"
                  className="p-2 m-2 w-100"
                />
                <input
                  type="url"
                  {...register("image", { required: true })}
                  placeholder="Image Link ex: https://p-hero/images/60-mark-chai.jpg"
                  className="p-2 m-2 w-100"
                />
              </div>
              <br />

              <textarea
                {...register("description")}
                placeholder="Description ex: Journey is a wordless story told through gameplay and visual-only cutscenes. 🌍🌎🌏 "
                className="p-2 m-2   form-description"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add New Service"
                className="btn btn-outline-success submit-btn text-center   w-75 "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
