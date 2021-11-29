import React from "react";

const Services = () => {
  return (
    <div className="bg-light p-5 my-4">
      <div className="container">
        <h4>Services</h4>
        <hr className="HR" />
        <h1 className="text-red fontSizeBig fw-bold">What I Do?</h1>
        <div className="row">
          <div className="col-lg-4  col-md-6 col-12 ">
            <div className="d-flex m-3 bgLightGray rounded shadow p-3">
              <div className="me-3">
                <p className="p-3 bgLightRed borderRadius">
                  <i class="fas fa-laptop fs-4 text-red"></i>
                </p>
              </div>
              <div>
                <h4 className="m-0 fw-bold">Web Design</h4>
                <span className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, facere?
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="d-flex m-3 bgLightGray rounded shadow p-3">
              <div className="me-3">
                <p className="p-3 bgLightRed borderRadius">
                  <i class="fas fa-code  fs-4 text-red"></i>
                </p>
              </div>
              <div>
                <h4 className="m-0 fw-bold">Web Developer</h4>
                <span className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, facere?
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="d-flex m-3 shadow bgLightGray rounded p-3">
              <div className="me-3">
                <p className="p-3 bgLightRed borderRadius">
                  <i class="fab fa-react fs-4 text-red"></i>
                </p>
              </div>
              <div>
                <h4 className="m-0 fw-bold">React JS</h4>
                <span className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, facere?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
