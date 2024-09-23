"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Seo from '../../../../../../shared/layout-components/seo/seo';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Cover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <>
            <Seo title={"CreatePassword-Cover"} />
            <div className='bg-white'>
                <Row className=" authentication mx-0">

                    <Col xxl={7} xl={7} lg={12}>
                        <Row className=" justify-content-center align-items-center h-100">
                            <Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
                                <div className="p-5">
                                    <div className="mb-3">
                                        <Link href={`/dashboards/crm/`}>
                                            <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand desktop-logo" />
                                            <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark" />
                                        </Link>
                                    </div>
                                    <p className="h5 fw-semibold mb-2">Create Password</p>
                                    <p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
                                    <div className="btn-list">
                                        <button className="btn btn-lg btn-light"><svg className="google-svg" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>Sign In with google</button>
                                        <button className="btn btn-icon btn-primary-light"><i className="ri-facebook-fill"></i></button>
                                        <button className="btn btn-icon btn-info-light"><i className="ri-twitter-x-fill"></i></button>
                                    </div>
                                    <div className="text-center my-5 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <Row className=" gy-3">
                                        <Col xl={12} className="mt-0">
                                            <label htmlFor="create-password" className="form-label text-default">Password</label>
                                            <InputGroup>
                                                <Form.Control type={(passwordshow1) ? 'text' : 'password'} className="form-control-lg" id="create-password" placeholder="password" />
                                                <Button onClick={() => setpasswordshow1(!passwordshow1)} variant='light' className="btn" type="button">
                                                    <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                            </InputGroup>
                                        </Col>
                                        <Col xl={12} className="mb-3">
                                            <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                            <InputGroup>
                                                <Form.Control type={(passwordshow2) ? 'text' : "password"} className=" form-control-lg" id="create-confirmpassword" placeholder="password" />
                                                <Button variant='light' onClick={() => setpasswordshow2(!passwordshow2)} className="btn" type="button">
                                                    <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                            </InputGroup>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12} className=" d-grid mt-2">
                                            <button className="btn btn-lg btn-primary">Save Password</button>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <p className="fs-12 text-muted mt-4">Back to home ? <Link href="/dashboards/crm" className="text-primary">Click Here</Link></p>
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
                                                    <h6 className="fw-semibold text-fixed-white">Create Password</h6>
                                                    <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                                    <div>
                                                        <div className="mb-5">
                                                            <img src="../../../assets/images/authentication/3.png" className="authentication-image" alt="" />
                                                        </div>
                                                        <h6 className="fw-semibold  text-fixed-white">Create Password</h6>
                                                        <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                                <div>
                                                    <div className="mb-5">
                                                        <img src="../../../assets/images/authentication/2.png" className="authentication-image" alt="" />
                                                    </div>
                                                    <h6 className="fw-semibold text-fixed-white">Create Password</h6>
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
            </div>
        </>
    )
}
export default Cover;
