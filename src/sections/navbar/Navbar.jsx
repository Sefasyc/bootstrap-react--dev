import styles from "./navbar.module.scss";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container px-lg-5">
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav al navbar-nav ms-auto mb-2 mb-lg-0">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
