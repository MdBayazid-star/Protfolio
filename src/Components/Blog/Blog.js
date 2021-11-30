import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./News.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blogs">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 text-center my-5 py-5 text-light">
              <h3>Latest News & Articles</h3>
              <p>
                Get the latest World News: international news, features and
                analysis from Africa, the Asia-Pacific, Europe, Latin America,
                the Middle East, South Asia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center mb-2">
          Our <span className="c-green">Blog</span>
        </h2>
        <p className="pText text-center mb-5">
          International news, features and analysis from Africa, the
          Asia-Pacific, Europe, Latin America, the Middle East, South Asia
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 col-12">
              <div className="carts bg-light  shadow roundeds">
                <div className="cartImgs">
                  <img className="img-fluid blogImg" src={blog.img} alt="" />
                </div>
                <div className="cartContent p-3">
                  <div className="my-3">
                    <span className="subThree">{blog.job}</span>
                  </div>
                  <p className="fw-bold">{blog.title}</p>
                  <p className="pText mb-3">{blog.details}</p>
                  <hr />
                  <div className="d-flex justify-content-evenly align-items-center">
                    <div>
                      <p>
                        <i className="far fa-eye iconsd"></i> {blog.view}
                      </p>
                    </div>
                    <div>
                      <p>
                        <i className="fas fa-clock iconsd iconTwo"></i>{" "}
                        {blog.data}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
