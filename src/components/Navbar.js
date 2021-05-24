import React, { useEffect, useState } from 'react'

import githubLogo from "./github.svg";

function NavBar() {

  useEffect(() => {
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });
  }, []);

  const { innerWidth } = window;
  const [isCollapsed] = useState( (innerWidth < 992) ? true : false );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xl py-1">
        <a className="navbar-brand" href="/">
          <img src={githubLogo} alt="Github Logo" wdith="32" height="32"></img>
        </a>
        {isCollapsed && (<div className="d-lg-none flex-grow-1 width-fit p-2"></div>)}
        {isCollapsed && (<button className="btn btn-outline-secondary mx-3" type="submit">Sign Up</button>)}
        <button className="navbar-toggler mx-3" type="button" id="navbarSideCollapse" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>      
        <div className="navbar-collapse offcanvas-collapse z-1050" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Enterprise</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
              </a>
              <ul className="dropdown-menu rounded" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Explore Github<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><p className="px-3">Learn and contribute</p></li>
                <li><a className="dropdown-item" href="/">Topics<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
                <li><a className="dropdown-item" href="/">Collections<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
                <li><a className="dropdown-item" href="/">Trending<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><p className="px-3">Connect with others</p></li>
                <li><a className="dropdown-item" href="/">The README Project<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
                <li><a className="dropdown-item" href="/">Events<span className="float-end"><i className="bi bi-arrow-right"></i></span></a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">MarketPlace</a>
            </li>
          </ul>
          <form className="d-flex mx-2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className="navbar-nav mx-2">
            <a className="nav-link" href="/">Sign in</a>
          </div>
          {!isCollapsed && (<button className="btn btn-outline-secondary mx-2" type="submit">Sign Up</button>)}
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
