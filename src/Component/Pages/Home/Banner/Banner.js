import React from "react";

const Banner = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-center">
        Travel <span className="text-success">Mania</span>
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          <span className="fw-bold text-danger fs-3"> Travel Mania </span> ,
          Travel Worldover Bangladesh Programming Hero's Adventure Best Known
          For Being the "Walking Dead" creator. The story is set in an unknown
          time period when a virus and a zombie plague hit.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-success btn-lg px-4 me-sm-3">
            Primary button
          </button>
          <button type="button" className="btn btn-outline-success btn-lg px-4">
            Secondary
          </button>
        </div>
      </div>
      <div className="overflow-hidden h-100">
        <div className="container px-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-pgHv--BEn2mxrJRI2sOn1YzAKgKeb0U3w&usqp=CAU"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            width="700"
            height="500"
            loading="lazy"
            alt="Travel Mania"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
