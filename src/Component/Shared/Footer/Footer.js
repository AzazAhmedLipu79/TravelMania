import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-light   my-5">
      <footer
        className="text-center text-lg-start text-dark"
        //   style={backgroundColor= '#ECEFF1'}
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <section
          className="d-flex justify-content-between p-4 text-white"
          //  style="background-color: #21D192"
          style={{ backgroundColor: "#21D192" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="text-white me-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="bi bi-google"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="bi bi-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold">Travel Mania</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  ©️ Travel Mania is #1 Online based Travelling WebApplication
                  Over All Bangladesh. All rights reserved 2021
                  @Programming-Hero
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" className="text-dark">
                    Sundarban
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Sylhet
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Kashmir
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Cox's Bazar
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" className="text-dark">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Review
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Noahkhali, Mars 1012,
                  Milky Way Galaxy🚀
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  admin@travel-mania.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +88 01 717 579939
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> +88 01 388 99320
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          //  style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2021 Copyright:
          <a className="text-dark" href="/">
            Travel-Mania.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
