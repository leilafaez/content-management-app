import Link from "next/link";
import { useState } from "react";

const Navbar=()=>{
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link legacyBehavior href="/">
              <a className="navbar-item">
                <h1>Content Manager</h1>
              </a>
            </Link>
            <span
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              data-target="navbarMenu"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenu"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  {/* <input
                    className="input is-rounded"
                    type="email"
                    placeholder="Search"
                  /> */}
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <Link legacyBehavior href="/">
                <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/resources/new">
                <a className="navbar-item is-size-5 has-text-weight-semibold">
                  Add
                </a>
              </Link>
              {/* <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;