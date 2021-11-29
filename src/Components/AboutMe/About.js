import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="my-5">
        <div className="container">
          <h4>About</h4>
          <hr className="HR" />
          <h1 className="text-red fontSizeBig fw-bold">About Me</h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="http://benyreact.ibthemespro.com/img/about/2.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2>I'm Abu Bakker</h2>
              <h4>
                A Lead <span className="text-red">Web developer</span> , based
                in
                <span className="text-red"> Bangladesh</span>
              </h4>
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
              <hr />
              <div>
                <div className="">
                  <h2>PERSONAL INFO</h2>

                  <div className=" row mt-4">
                    <div className="col-lg-5 col-md-12 col-12">
                      <p className="myInfo">
                        <span>Name: </span>Abu Bakker
                      </p>
                      <p className="myInfo">
                        <span>Age : </span>19 years old
                      </p>
                      <p className="myInfo">
                        <span>Nationality : </span>Bangladesh
                      </p>
                      <p className="myInfo">
                        <span>Freelance : </span>Available
                      </p>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                      <p className="myInfo">
                        <span>Address :</span> Patanga, Chattogram
                      </p>
                      <p className="myInfo">
                        <span>Phone : </span> 0130329098X
                      </p>
                      <p className="myInfo">
                        <span>Email : </span> freelencerbayazid@gmail.com
                      </p>
                      <p className="myInfo">
                        <span>Language : </span>
                        English, Hindi, Bangla
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/u/0/uc?id=1-g-MsvWIsD6yB57eybhEW9WTqHhSk7Bk&export=download"
                      download="AbuBakker Resume"
                      className="buttonNormal"
                    >
                      Download Resume <i class="fas fa-download"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 my-5">
                <div className="d-flex flex-column align-items-center shadow borderRadius py-2 bg-light mx-4">
                  <h1 className="text-gray">4+</h1>
                  <p className="text-red fw-bold">Years Experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-5">
                <div className="d-flex flex-column align-items-center bg-light shadow borderRadius py-2">
                  <h1 className="text-gray">330+</h1>
                  <p className="text-red fw-bold">Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-5">
                <div className="d-flex flex-column align-items-center bg-light shadow borderRadius py-2">
                  <h1 className="text-gray">30+</h1>
                  <p className="text-red fw-bold">Projects Done</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 my-5">
                <div className="d-flex flex-column align-items-center bg-light shadow borderRadius py-2">
                  <h1 className="text-gray">20</h1>
                  <p className="text-red fw-bold">Get Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
