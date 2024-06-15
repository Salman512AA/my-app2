import React from 'react';
import { Link } from 'react-router-dom';

const  NavBar=(props)=>{
    let { mode, toggle } = props;

    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse "tyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
            <div className="ms-auto">
              <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {mode === 'light' ? 'ENABLE DARK MODE' : 'ENABLE LIGHT MODE'}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
export default NavBar
