import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const projectSlice = projects.slice(0, 3);
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
          {projectSlice.map((project) => (
            <div class="col-md-4 col-sm-6 col-12">
              <div class="box shadow">
                <img src={project.ScreenShort1} alt="" />
                <div class="box_content">
                  <div class="content">
                    <h3 class="title">{project.name}</h3>
                    <div className="d-flex justify-content-between mt-4">
                      <span>
                        <a target="_blank" href={project.GithubClient}>
                          <i class="fas fa-code fs-4 text-light"></i>
                        </a>
                      </span>
                      <span>
                        <a target="_blank" href={project.LiveSite}>
                          <i class="fas fa-external-link-alt fs-4 text-light"></i>
                        </a>
                      </span>
                    </div>
                    <div>
                      <Link
                        to={`/details/${project.id}`}
                        className="w-50 text-center my-2"
                      >
                        <button className="buttonOutline mt-5">
                          See More <i class="fas fa-angle-double-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mb-5">
          <button className="buttonNormal">
            All Project <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
