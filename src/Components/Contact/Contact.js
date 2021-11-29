import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ovibkgo",
        e.target,
        "user_xLthyZFgbu2l6SU6L3vnC"
      )
      .then(
        (result) => {
          console.log(result.text);
          // document.getElementById("status").classList.add("success");
          // document.getElementById("status").innerHTML =
          //   "Thank you for your message.";
        },
        (error) => {
          console.log(error.text);
          // document.getElementById("status").classList.add("error");
          // document.getElementById("status").innerHTML =
          //   "Oops! There was a problem.";
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="bg-light p-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h4>Contact</h4>
            <hr className="HR" />
            <h1 className="text-red fontSizeBig fw-bold mb-5">
              Let's discuss your project
            </h1>
            <div className="d-flex">
              <span className="icons">
                <i className="fas fa-phone-alt p-3"></i>
              </span>
              <div>
                <h5>Call Me</h5>
                <p>999-777-666</p>
              </div>
            </div>
            <div className="d-flex">
              <span className="icons">
                <i className="far fa-envelope p-3"></i>
              </span>
              <div>
                <h5>Email</h5>
                <p>freelencebayazid@email.com</p>
              </div>
            </div>
            <div className="d-flex">
              <span className="icons">
                <i className="fas fa-map-marker-alt p-3"></i>
              </span>
              <div>
                <h5>Location</h5>
                <p>Bangladesh,Asia,Earth</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="shadow borderRadius p-5">
              <form
                className="row g-3"
                action="https://formspree.io/f/xoqraljo"
                method="POST"
                id="my-form"
                onSubmit={sendEmail}
              >
                <div className="col-md-6">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="col-md-6">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="col-12">
                  <label for="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="subject"
                    name="subject"
                  />
                </div>
                <div className="col-12">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    rows="10"
                    name="message"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn buttonNormal">
                    Send Message <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
