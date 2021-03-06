import React, {Component} from 'react';
import {LinkContainer} from "react-router-bootstrap";
import StorageKeys from "../../utils/StorageKeys";
import TestNewCompon from "../TestNewCompon";

// styles
// import "../../node_modules/jquery/dist/jquery.min.js";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

class Header extends Component {


  logout(){
    localStorage.setItem(StorageKeys.USER_ID, "");
    localStorage.setItem(StorageKeys.EMAIL, "");
    localStorage.setItem(StorageKeys.PHOTO_URL, "");
  }


  render() {
    const shadow = {
      boxShadow: '1px 1px 5px rgba(0, 0, 0, .25)',
      backgroundColor: '#27679a',
    };

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={shadow}>
          <div className="container mt-0">
            <LinkContainer to="/">
              <a className="navbar-brand text-white abs font-weight-bold" href="#">
                SLAMON
              </a>
            </LinkContainer>
            <button className="navbar-toggler custom-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggleExternalContent">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <LinkContainer to="/boards">
                    <a className="nav-link text-white font-weight-bold">
                      Boards
                    </a>
                  </LinkContainer>
                </li>
                <li className="nav-item ">
                  <LinkContainer to="/Settings">
                    <a className="nav-link text-white font-weight-bold">
                      Settings
                    </a>
                  </LinkContainer>
                </li>
                <li className="nav-item " >
                  <LinkContainer to="/Collections">
                    <a className="nav-link text-white font-weight-bold">
                      Collection
                    </a>
                  </LinkContainer>
                </li>
                <li className="nav-item " >
                  <LinkContainer to="/Qr-Scanner">
                    <a className="nav-link text-white font-weight-bold">
                      QR-Scanner
                    </a>
                  </LinkContainer>
                </li>
                <li className="nav-item " >
                  <LinkContainer to="/pdfAnnotatorController">
                    <a className="nav-link text-white font-weight-bold">
                      Annotator
                    </a>
                  </LinkContainer>
                </li>
                <li className="nav-item " >
                  <LinkContainer to="/DemoCards">
                    <a className="nav-link text-white font-weight-bold">
                      DemoCards
                    </a>
                  </LinkContainer>
                </li>
                {localStorage.getItem(StorageKeys.USER_ID) != null && localStorage.getItem(StorageKeys.USER_ID).length  > 0 ? (
                  <li className="nav-item " onClick={this.logout.bind(this)}>
                    <LinkContainer to="/" >
                      <a className="nav-link text-white font-weight-bold">
                        Logout
                      </a>
                    </LinkContainer>
                  </li>
                ) : (
                  <li className="nav-item ">
                    <LinkContainer to="/Login">
                      <a className="nav-link text-white font-weight-bold">
                        Login
                      </a>
                    </LinkContainer>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
