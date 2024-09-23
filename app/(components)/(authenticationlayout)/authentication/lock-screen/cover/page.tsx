"use client";
import React, { useState } from 'react'
import { Button, Form, InputGroup, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Seo from '../../../../../../shared/layout-components/seo/seo';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Cover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);

    return (
        <>
            <Seo title={"LockScreen-Cover"} />
            <div className='bg-white'>
                <Row className=" authentication mx-0">

                    <div className="col-xxl-7 col-xl-7 col-lg-12">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12">
                                <div className="p-5">
                                    <div className="mb-3">
                                        <Link href={`/dashboards/crm/`}>
                                            <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand desktop-logo" />
                                            <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark" />
                                        </Link>
                                    </div>
                                    <p className="h5 fw-semibold mb-2">Lock Screen</p>
                                    <p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="lh-1">
                                            <span className="avatar avatar-md avatar-rounded">
                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row gy-3">
                                        <div className="col-xl-12 mb-3">
                                            <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>

                                            <InputGroup>
                                                <Form.Control type={(passwordshow1) ? 'text' : 'password'} className="form-control-lg" id="lockscreen-password" placeholder="password" />
                                                <Button variant='light' className="btn" onClick={() => setpasswordshow1(!passwordshow1)} type="button" id="button-addon2">
                                                    <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                            </InputGroup>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 d-grid mt-2">
                                            <Link href="/dashboards/crm" className="btn btn-lg btn-primary">Unlock</Link>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="fs-12 text-muted mt-4">Try unlock with different methods <Link className="text-success" href="#!" scroll={false}><u>Finger print</u></Link> / <a className="text-success" href="#!"><u>Face Id</u></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 d-xl-block d-none px-0">
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
                                                    <h6 className="fw-semibold text-fixed-white">Lockscreen</h6>
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
                                                        <h6 className="fw-semibold text-fixed-white">Lockscreen</h6>
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
                                                    <h6 className="fw-semibold text-fixed-white">Lockscreen</h6>
                                                    <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                </Row>
            </div>
        </>
    )
}
export default Cover
