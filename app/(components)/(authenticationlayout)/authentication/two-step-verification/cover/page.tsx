"use client";
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Cover = () => {
  const [inputValues, setInputValues] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  const handleChange = (currentId: string, nextId: any, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [currentId]: value,
    }));

    const nextInput = document.getElementById(nextId);

    if (nextInput) {
      nextInput.focus();
    }
  };
  return (
    <>
   
<HelmetProvider>
      <Helmet>
                <body className="bg-white"></body>
            </Helmet>
        <Row className=" authentication mx-0">

          <Col xxl={7} xl={7} lg={12}>
            <Row className=" justify-content-center align-items-center h-100">
              <Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
                <div className="p-5">
                  <div className="mb-3">
                    <Link href="/dashboards/crm">
                      <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand desktop-logo" />
                      <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark" />
                    </Link>
                  </div>
                  <p className="h5 fw-semibold mb-1">Verify Your Account</p>
                  <p className="mb-4 text-muted op-7 fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
                  <div className="row">
                    <div className="col-xl-12 mb-4">
                      <div className="row">
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            id="one"
                            maxLength={1}
                            value={inputValues.one}
                            onChange={(e) => handleChange('one', 'two', e.target.value)}
                          />
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            id="two"
                            maxLength={1}
                            value={inputValues.two}
                            onChange={(e) => handleChange('two', 'three', e.target.value)}
                          />
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            id="three"
                            maxLength={1}
                            value={inputValues.three}
                            onChange={(e) => handleChange('three', 'four', e.target.value)}
                          />
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            id="four"
                            maxLength={1}
                            value={inputValues.four}
                            onChange={(e) => handleChange('four', null, e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-check mt-2 mb-0">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                          Did not recieve a code ?<Link href="/pages/email/mail-app" className="text-primary ms-2 d-inline-block">Resend</Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-12 d-grid">
                      <Link href="/dashboards/crm" className="btn btn-lg btn-primary">Verify</Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="fs-12 text-danger mt-3"><sup><i className="ri-asterisk"></i></sup>{`Don't`} share the verification code with anyone !</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={5} xl={5} lg={5} className="d-xl-block d-none px-0">
            <div className="authentication-cover">
              <div className="aunthentication-cover-content rounded">
                <div className="swiper keyboard-control">
                  <Swiper spaceBetween={30} navigation={true} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                        <div>
                          <div className="mb-5">
                            <img src="../../../assets/images/authentication/2.png" className="authentication-image" alt="" />
                          </div>
                          <h6 className="fw-semibold text-fixed-white">Verify Your Account</h6>
                          <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                        <div>
                          <div className="mb-5">
                            <img src="../../../assets/images/authentication/3.png" className="authentication-image" alt="" />
                          </div>
                          <h6 className="fw-semibold text-fixed-white">Verify Your Account</h6>
                          <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                        <div>
                          <div className="mb-5">
                            <img src="../../../assets/images/authentication/2.png" className="authentication-image" alt="" />
                          </div>
                          <h6 className="fw-semibold text-fixed-white">Verify Your Account</h6>
                          <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </Col>

        </Row>
        </HelmetProvider>
    </>
  )
}
export default Cover
