import React from "react";

const Footer = () => {
  return (
    <div class="container-fluid bg-light   my-5">
      <footer
        class="text-center text-lg-start text-dark"
        //   style={backgroundColor= '#ECEFF1'}
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <section
          class="d-flex justify-content-between p-4 text-white"
          //  style="background-color: #21D192"
          style={{ backgroundColor: "#21D192" }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" class="text-white me-4">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="bi bi-google"></i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="bi bi-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold">Travel Mania</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  ©️ Travel Mania is #1 Online based Travelling WebApplication
                  Over All Bangladesh. All rights reserved 2021
                  @Programming-Hero
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Services</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" class="text-dark">
                    Sundarban
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Sylhet
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Kashmir
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Cox's Bazar
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" class="text-dark">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Review
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Noahkhali, Mars 1012, Milky
                  Way Galaxy🚀
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> admin@travel-mania.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> +88 01 717 579939
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> +88 01 388 99320
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          //  style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2021 Copyright:
          <a class="text-dark" href="/">
            Travel-Mania.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
