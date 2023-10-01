import Link from "next/link";
import { skills, experiences, projects } from "../utils/profile";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience">
      <div className="container ">
        <div className="row ">
          <div className="col-md-4 py-2">
            <div className="card">
              <div className="card-body">
                <h1>Skills</h1>

                {/* Skill Progress  */}
                {skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8 py-2 ">
            {/* Experience */}
            <div className="card bg-light animate__animated animate__fadeInRight">
              <div className="card-body">
                <h1>Experience</h1>

                <ul>
                  {/* List Item Experience */}
                  {experiences.map(
                    ({ title, description, from, to }, index) => (
                      <li key={index}>
                        <h3>{title}</h3>
                        <h5>
                          {from} {to ? `- ${to}` : "- current"}
                        </h5>
                        <p>{description}</p>
                      </li>
                    )
                  )}
                </ul>
                <button className="btn--cs btn-primary--cs">Know me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
