import React from "react";
import "./Speciality.css";

const Speciality = () => {
  return (
    <div className="py-5 bg-light">
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-title">
                <h2 className="  shadow w-50 rounded-pill p-1  px-3 text-center  ">
                  Speciality
                </h2>
                <p className="py-4">
                  <span class="fw-bold fs-3 text-success"> Specially</span>{" "}
                  service travel world and the rest of the world with one foot
                  off his ass. The last thing I want is to write someone off as
                  a jerk. At least the last of the "no-knock" signs that are
                  everywhere in the world.
                </p>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-md-6 d-flex align-items-stretch">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-fingerprint"></i>
                    </div>
                    <h4>
                      <a href="/">Like a Family</a>
                    </h4>
                    <p>
                      Always we try to provide familiarity as we can , we always
                      try to love you
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-shield-shaded"></i>
                    </div>
                    <h4>
                      <a href="/">100% Security</a>
                    </h4>
                    <p>
                      24 Hour Guard ready to guard our clients. You can breath
                      safely with us
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-heart-half"></i>
                    </div>
                    <h4>
                      <a href="/">Loving Nature </a>
                    </h4>
                    <p>
                      If you are planning to consume our services then ready to
                      make adventure with us , Hurrah !
                    </p>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="bi bi-globe2"></i>
                    </div>
                    <h4>
                      <a href="/">WorldOver Travel Station</a>
                    </h4>
                    <p>
                      We unite a quite medium number of people & then we decide
                      together that where should we travel ; There's No Limit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </div>
  );
};

export default Speciality;
