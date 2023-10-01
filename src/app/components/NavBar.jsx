"use client";

import Link from "next/link";
import "./NavBar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavBar() {
  const navigation = usePathname();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container ">
          <Link className="navbar-brand" href="/">
            <Image
              className="img"
              src={"/logo.svg"}
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${navigation === "/" ? "active" : ""} `}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    navigation === "/projects" ? "active" : ""
                  } `}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    navigation === "/blog" ? "active" : ""
                  } `}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
