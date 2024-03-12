import React from "react";
import "../../App.css";
import ToysagaImg from "../../assets/images/Toysaga.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="section">
        <div className="footerWrapper">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="footer-logo">
                    <img src={ToysagaImg} alt="" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="footerlinkWrapper">
                    <div className="linkWrapper">
                      <div className="linkTitle">
                        <h5>Quick Links</h5>
                      </div>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Terms & Condition</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="linkWrapper">
                      <div className="linkTitle">
                        <h5>Info</h5>
                      </div>
                      <ul className="socialLink">
                        <li>
                          <span className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          <a href="#">Location goes here</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-solid fa-mobile-screen"></i>
                          </span>
                          <a href="#">+1 12345 67890</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-regular fa-at"></i>
                          </span>
                          <a href="#">toysaga@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="linkWrapper">
                      <div className="linkTitle">
                        <h5>Social</h5>
                      </div>
                      <ul className="socialLink">
                        <li>
                          <span className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                          <a href="#">Facebook</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                          <a href="#">Instagram</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                          <a href="#">twitter</a>
                        </li>
                        <li>
                          <span className="icon">
                            <i className="fa-brands fa-youtube"></i>
                          </span>
                          <a href="#">Youtube</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="copyRight">
            <div className="container">
              <p>Toysaga © 2023 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
