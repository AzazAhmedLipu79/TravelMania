import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div>
      <div className="bg-light py-5 service-11">
        <div className="container">
          {/* <!-- Row  --> */}
          <div className="row">
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service11-box">
              <div className="card card-shadow border-0 mb-4">
                <div className="p-4">
                  <div className="icon-space">
                    <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                      R
                    </div>
                  </div>
                  <h6 className="font-weight-medium">Retargeting Market</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service11-box">
              <div className="card card-shadow border-0 mb-4">
                <div className="p-4">
                  <div className="icon-space">
                    <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                      F
                    </div>
                  </div>
                  <h6 className="font-weight-medium">Fruitful Results</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service11-box">
              <div className="card card-shadow border-0 mb-4">
                <div className="p-4">
                  <div className="icon-space">
                    <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                      S
                    </div>
                  </div>
                  <h6 className="font-weight-medium">Instant Solutions</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3 text-center">
              <a
                className="btn btn-success-gradiant text-white border-0 btn-md"
                href="#f11"
              >
                <span>View Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
