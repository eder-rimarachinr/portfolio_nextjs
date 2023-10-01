import Image from "next/image";
import Link from "next/link";
import { projects } from "../utils/profile";
import "./Projects.css";

export default function Projects() {
  return (
    <section>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className=" overflow">
                        <Image
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/projects" className="btn btn-outline-light">
                      More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
