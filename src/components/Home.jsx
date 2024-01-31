import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import image1 from '../img/bg-img/r1.jpg'
import image2 from '../img/bg-img/r2.jpg'
import image3 from '../img/bg-img/r3.jpg'
import image4 from '../img/bg-img/r4.jpg'
import image5 from '../img/bg-img/r5.jpg'
import image6 from '../img/bg-img/r6.jpg'
import image7 from '../img/bg-img/bg1.jpg'
import image8 from '../img/bg-img/bg2.jpg'

import image9 from '../img/bg-img/bg3.jpg'
import Auth from "./user/Auth";

const Home = () => {
  return (
    <>
      {/* <div id="preloader">
        <i className="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="" />
      </div> */}

      <div className="search-wrapper">
        
        <div className="close-btn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <input
                  type="search"
                  name="search"
                  placeholder="Type any keywords..."
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {" "}
              <div className="col-12 col-sm-6">
              <Link  to='/sign-up'>Click to Become a Member?</Link>

              </div>
              <div className="col-12 col-sm-6">
                <div className="top-social-info text-right">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="delicious-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="deliciousNav"
              >
                <a className="nav-brand" href="index.html">
                  <img src="img/core-img/logo.png" alt="" />
                </a>

                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  <div className="classynav">
                    <ul>
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                       <Link  to='/about'>About Us</Link>
                    </li>
                    <li>
                            <Link to='/dailyrecipe'>Recipe recommendor</Link>
                          </li>
                        
                      
                      <li>
                            <Link to='/Ngoforms' >Ngo Form</Link>
                          </li>
                          <li>
                            <Link to='/blog'>Blog Post</Link>
                          </li>
                          <li>
                            <Link to='/chatAI'>chatAI</Link>
                          </li>

                </ul>
                          
                          
                      

                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-area">
        <div className="hero-slides owl-carousel">
          <div
            className="single-hero-slide bg-img"
            style={{backgroundImage:`url(${image7})`}}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-hero-slide bg-img"
            style={{backgroundImage:`url(${image1})`}}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="single-hero-slide bg-img"
            style={{backgroundImage:'url(img/bg-img/bg7.jpg)'}}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="hero-slides-content"
                    data-animation="fadeInUp"
                    data-delay="100ms"
                  >
                    <h2 data-animation="fadeInUp" data-delay="300ms">
                      Delicios Homemade Burger
                    </h2>
                    <p data-animation="fadeInUp" data-delay="700ms">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras tristique nisl vitae luctus sollicitudin. Fusce
                      consectetur sem eget dui tristique, ac posuere arcu
                      varius.
                    </p>
                    <a
                      href="#"
                      className="btn delicious-btn"
                      data-animation="fadeInUp"
                      data-delay="1000ms"
                    >
                      See Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src={image8} alt="" />
                <div className="top-cta-content">
                  <h3>Strawberry Cake</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">
                    See Full Receipe
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src={image9} alt="" />
                <div className="top-cta-content">
                  <h3>Chinesse Noodles</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">
                    See Full Receipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Receipies</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image1} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Sushi Easy Receipy</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image2} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Burger</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image3} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Vegan Smoothie</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best-receipe-area section-padding-80">
        <div className="container">
          <div className="row">
            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image4} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Calabasa soup</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image5} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Breakfast</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Best Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-best-receipe-area mb-30">
                <img src={image6} alt="" />
                <div className="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Healthy Fruit Desert</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best Receipe Area End */}

      {/* CTA Area Start */}
      <section
        className="cta-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/bg4.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              {/* Cta Content */}
              <div className="cta-content text-center">
                <h2>Gluten Free Receipies</h2>
                <p>
                  Fusce nec ante vitae lacus aliquet vulputate. Donec
                  scelerisque accumsan molestie. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae; Cras
                  sed accumsan neque. Ut vulputate, lectus vel aliquam congue,
                  risus leo elementum nibh
                </p>
                <a href="#" className="btn delicious-btn">
                  Discover all the receipies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}

      {/* Small Receipe Area Start */}
      <section className="small-receipe-area section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* Small Receipe Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-small-receipe-area d-flex">
                {/* Receipe Thumb */}
                <div className="receipe-thumb">
                  <img src="img/bg-img/sr1.jpg" alt="" />
                </div>
                {/* Receipe Content */}
                <div className="receipe-content">
                  <span>January 04, 2018</span>
                  <a href="receipe-post.html">
                    <h5>Homemade italian pasta</h5>
                  </a>
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>2 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Small Receipe Area End */}

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr2.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Baked Bread</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr3.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Scalops on salt</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr4.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Fruits on plate</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr5.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Macaroons</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr6.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Chocolate tart</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr7.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Berry Desert</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr8.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Zucchini Grilled on peper</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Small Receipe Area */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-small-receipe-area d-flex">
          {/* Receipe Thumb */}
          <div className="receipe-thumb">
            <img src="img/bg-img/sr9.jpg" alt="" />
          </div>
          {/* Receipe Content */}
          <div className="receipe-content">
            <span>January 04, 2018</span>
            <a href="receipe-post.html">
              <h5>Chicken Salad</h5>
            </a>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>2 Comments</p>
          </div>
        </div>
      </div>

      {/* Single Insta Feeds */}
      <div className="single-insta-feeds">
        <img src="img/bg-img/insta5.jpg" alt="" />
        {/* Icon */}
        <div className="insta-icon">
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Single Insta Feeds */}
      <div className="single-insta-feeds">
        <img src="img/bg-img/insta6.jpg" alt="" />
        {/* Icon */}
        <div className="insta-icon">
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Single Insta Feeds */}
      <div className="single-insta-feeds">
        <img src="img/bg-img/insta7.jpg" alt="" />
        {/* Icon */}
        <div className="insta-icon">
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="sticky-bottom">.Aditya.</div>
    </>
  );
};

export default Home;
