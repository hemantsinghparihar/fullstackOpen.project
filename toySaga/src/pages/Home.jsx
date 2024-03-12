import React, { useEffect, useState } from "react";
import "../App.css";
// import images from "../services/imgService";
import images from "../services/imgService";
// import homeAPI from "../services/homeService";
import homeAPI from "../services/homeService";

import ToysagaImg from "../assets/images/Toysaga.png";

import AdsSlider from "../components/ui/AdsSlider";
import AbstractLogoCarousel from "../components/ui/AbstractLogoCarousel";
import Testimonial from "../components/ui/Testimonial";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  // const [image, setImage] = useState(null);
  const [top, setTop] = useState({});
  console.log("✌️top --->", top);
  top.data
    ? top.data[0].attributes.bannerImg.data[0].attributes.url
    : "loading";
  console.log(
    '✌️top.data?top.data[0].attributes.bannerImg.data[0].attributes.url:"loading" --->',
    top.data
      ? top.data[0].attributes.bannerImg.data[0].attributes.url
      : "loading"
  );

  const [videoSec, setVideoSec] = useState({});

  console.log("✌️setVideoSec --->", videoSec);
  console.log("✌️videoSec --->", videoSec);
  console.log(
    "videoSec image",
    videoSec.data
      ? videoSec.data[0].attributes.bannerImage.data.attributes.url
      : "loading"
  );

  const [testimonialImage, setTestimonialImage] = useState({});

  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
  const SLIDE_COUNT = 16;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    const element = document.getElementById("head");
    element.scrollIntoView(true);
    document.title = "ToySaga || Home";
  }, []);

  useEffect(() => {
    images.getAllImages().then((res) => {
      setImage(res);
    });
    homeAPI.getTopHome().then((res) => {
      setTop(res);
    });

    homeAPI.getVideoSecHome().then((res) => {
      setVideoSec(res);
    });

    homeAPI.getTestimonialImages().then((res) => {
      setTestimonialImage(res);
    });
  }, []);

  return (
    <div id="head">
      <main className="home-page">
        {/* Header */}
        <div className="custome-header" >
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand mobile-logo" href="#">
                  <img src={ToysagaImg} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    <li className="logo Dekstop">
                      <a className="logoClick" href="index.html">
                        <img src={ToysagaImg} alt="" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/collaborate">
                        Collaborate
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/institution">
                        Institution
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/csr">
                        CSR
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div id="fullpage">
          <div className="section">
            {/* <AdsSlider image={banner} imageStyles={{height:'72vh', width:'100%'}}/> */}
            <AdsSlider
              image={`http://localhost:1337${
                top.data
                  ? top.data[0].attributes.bannerImg.data[0].attributes.url
                  : "loading"
              }`}
              imageStyles={{ height: "72vh", width: "100%" }}
            />

            <section className="about-sec">
              <div className="container">
                <p className="text-center">
                  {top.data
                    ? top.data[0].attributes.description[0].children[0].text
                    : "loading"}
                </p>
              </div>
            </section>
          </div>

          <div className="section">
            <section className="videoSec">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="video-img">
                    {/* <img src={banner} alt="" className="img-fluid" /> */}
                    <img
                      src={`http://localhost:1337${
                        videoSec.data
                          ? videoSec.data[0].attributes.bannerImage.data
                              .attributes.url
                          : "loading"
                      }`}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="video-Content">
                    <h2 style={{ textAlign: "center" }}>
                      {videoSec.data
                        ? videoSec.data[0].attributes.heading
                        : "loading"}
                    </h2>
                    <h4>
                      {videoSec.data
                        ? videoSec.data[0].attributes.heading2
                        : "loading"}
                    </h4>
                    <h6>
                      {videoSec.data
                        ? videoSec.data[0].attributes.boldText[0].children[0]
                            .text
                        : "loading"}
                    </h6>
                    <p>
                      {videoSec.data
                        ? videoSec.data[0].attributes.normalText[0].children[0]
                            .text
                        : "loading"}
                    </p>
                    <button className="radiusBtn">
                      {videoSec.data
                        ? videoSec.data[0].attributes.buttonText
                        : "loading"}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="logoSec">
              <div className="logo-container">
                <AbstractLogoCarousel slides={SLIDES} options={OPTIONS} />

                {/* <AdsSlider image={logo} imageStyles={{height:'100px', width:'200px'}}/> */}
              </div>
            </section>
          </div>

          <div className="section">
            <section className="Testimonial">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="title">
                      <h2>Testimonials</h2>
                    </div>
                    <div className="owl-carousel TestiCarousel owl-theme owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <div className="owl-item">
                            <div className="TestimonialItem">
                              <Testimonial />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="dots-assets">
                      <div className="line"></div>
                      <div className="orangeSquare"></div>
                      <div className="owl-slider-tabs">
                        <a className="one custom-dot active" href="#one">
                          <img
                            src={`http://localhost:1337${
                              testimonialImage.data
                                ? testimonialImage.data[0].attributes.toysaga
                                    .data.attributes.url
                                : "loading"
                            }`}
                            alt=""
                          />
                        </a>
                        <a className="two custom-dot" href="#two">
                          {" "}
                          <img
                            src={`http://localhost:1337${
                              testimonialImage.data
                                ? testimonialImage.data[0].attributes
                                    .bannerImage.data.attributes.url
                                : "loading"
                            }`}
                            alt=""
                          />
                        </a>
                        <a className="three custom-dot" href="#three">
                          {" "}
                          <img
                            src={`http://localhost:1337${
                              testimonialImage.data
                                ? testimonialImage.data[0].attributes
                                    .abstractLogo.data.attributes.url
                                : "loading"
                            }`}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="section">
            <div className="footerwrapper">
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
      </main>
    </div>
  );
};

export default Home;
