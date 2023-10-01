import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer--cs">
      <footer className="text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Youtube --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              //   style="background-color: #FF0000;"
              style={{ backgroundColor: "#FF0000" }}
              href="https://www.youtube.com/@imjoaquinz1998/"
              target="_blank"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </a>
            {/* <!-- Instagram --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              //   style="background-color: #ac2bac;"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/_ederjoaquin/"
              target="_blank"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              //   style="background-color: #0082ca;"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/eder-rimarachinr/"
              target="_blank"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/eder-rimarachinr"
              target="_blank"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>

        <div
          className="text-center p-3"
          //   style="background-color: rgba(0, 0, 0, 0.2);"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            &nbsp; Eder Rimarachin
          </a>
        </div>
      </footer>
    </div>
  );
}
