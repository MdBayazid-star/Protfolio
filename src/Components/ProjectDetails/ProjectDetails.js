import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactItem = data.filter((td) => td.id === userId);
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 bgLightReds py-3">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={ExactItem[0]?.ScreenShort1}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ExactItem[0]?.ScreenShort2}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ExactItem[0]?.ScreenShort3}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={ExactItem[0]?.ScreenShort4}
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <i class="fas fa-chevron-left text-red"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <i class="fas fa-chevron-right text-red"></i>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="text-red m-0">{ExactItem[0]?.name}</h1>
            <div className="d-flex  mt-2">
              <div className="me-4">
                {ExactItem[0]?.GithubClient ? (
                  <a href={ExactItem[0]?.GithubClient}>
                    <button className="buttonOutline">
                      <i class="fab fa-github"></i> Github
                    </button>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="me-4">
                {ExactItem[0]?.GithubServer ? (
                  <a href={ExactItem[0]?.GithubServer}>
                    <button className="buttonOutline">
                      <i class="fab fa-github"></i> Github
                    </button>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="me-4">
                {ExactItem[0]?.LiveSite ? (
                  <a href={ExactItem[0]?.LiveSite}>
                    <button className="buttonOutline">
                      <i class="fas fa-external-link-alt"></i> Live
                    </button>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            <p className="text-secondary my-4">{ExactItem[0]?.Details1}</p>
            <p className="text-secondary my-4">{ExactItem[0]?.Details2}</p>
            <p className="text-secondary my-4">{ExactItem[0]?.Details3}</p>
            <p className="text-secondary my-4">{ExactItem[0]?.Details4}</p>
            <div className="d-flex justify-content-around">
              <div>
                {ExactItem[0]?.Tools1 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools1}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ExactItem[0]?.Tools2 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools2}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ExactItem[0]?.Tools3 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools3}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ExactItem[0]?.Tools4 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools4}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ExactItem[0]?.Tools5 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools5}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {ExactItem[0]?.Tools5 ? (
                  <div className="bgContent px-4 py-2">
                    {ExactItem[0]?.Tools5}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
