import React from "react";
import travel from "./../../Assist/Poject/Travel.png";
import MoneyHeist from "./../../Assist/Poject/MONEY HEIST.png";
import Doctor from "./../../Assist/Poject/DEV Skills....png";
import Carify from "./../../Assist/Poject/Carify.png";
import complete from "./../../Assist/Poject/complete respons.png";
import Health from "./../../Assist/Poject/Health PLUS.png";

const Project = () => {
  return (
    <div id="project">
      <div class="container">
        <h4>My Project</h4>
        <hr className="HR" />
        <h1 className="text-red fontSizeBig fw-bold">
          Recently Finished Project
        </h1>
        <br />
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={travel} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">Travel</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/TRAVEL-WEBSITE">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://travel-2022.web.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={MoneyHeist} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">Money Heist</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/MONEY_HEIEST">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://zen-jennings-5f4d61.netlify.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Doctor} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">DEV Skills...</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/COUCSES">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://kind-carson-5496ff.netlify.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Carify} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">carify</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/CAR_CLIENT">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://carify-2021.web.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={complete} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">Coffee</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/TRAVEL-WEBSITE">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://travel-2022.web.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Health} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">Health+...</h3>
                  <div className="d-flex justify-content-between mt-4">
                    <span>
                      <a href="https://github.com/MdBayazid-star/DOCTOR-SERVICES">
                        <i class="fas fa-code fs-4 text-light"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://health-plus-2021.web.app/">
                        <i class="fas fa-external-link-alt fs-4 text-light"></i>
                      </a>
                    </span>
                  </div>
                  <div>
                    <button className="buttonOutline mt-5">
                      See More <i class="fas fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
