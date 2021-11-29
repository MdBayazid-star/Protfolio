import React from "react";
import travel from "./../../Assist/Poject/Travel.png";
import MoneyHeist from "./../../Assist/Poject/MONEY HEIST.png";
import Doctor from "./../../Assist/Poject/DEV Skills....png";
import Carify from "./../../Assist/Poject/Carify.png";
import complete from "./../../Assist/Poject/complete respons.png";
import Health from "./../../Assist/Poject/Health PLUS.png";

const Project = () => {
  return (
    <div>
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
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={MoneyHeist} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Doctor} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Carify} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={complete} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="box shadow">
              <img src={Health} alt="" />
              <div class="box_content">
                <div class="content">
                  <h3 class="title">MD BAYAZID</h3>
                  <span class="post">Web Designer</span>
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
