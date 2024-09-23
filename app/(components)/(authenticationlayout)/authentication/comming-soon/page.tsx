"use client";
import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Link from 'next/link';
import { DayCounter } from '../../../../../shared/data/pages/comingsoondata'
import Seo from '../../../../../shared/layout-components/seo/seo';

const Comingsoon = () => {
    return (
        <>
            <Seo title={"CommingSoon"} />
            <Row className="authentication coming-soon mx-0">
                <Col xxl={8} xl={8} lg={8} className="col-12 px-0">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content text-center">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="mb-2">
                                        <Link href="/dashboards/crm/">
                                            <img src="../../assets/images/brand-logos/toggle-logo.png" alt="" className="authentication-brand" />
                                        </Link>
                                    </div>
                                    <p className="fw-semibold fs-12 mb-1 op-4">STAY TUNED</p>
                                    <h1 className="fw-bold mb-3">Coming Soon</h1>
                                    <p className="mb-4">Our website is currently under construction, enter your email id to get latest updates and notifications about the website.</p>
                                    <InputGroup className="input-group mb-5">
                                        <Form.Control type="email" className="form-control form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                                    </InputGroup>
                                    <div className="row mt-4 mb-5 gy-xxl-0 gy-3 justify-content-center" id="timer">
                                        <DayCounter />
                                    </div>
                                    <div className="mt-5">
                                        <div className="btn-list">
                                            <Button className="btn btn-icon btn-primary btn-wave">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <Button className="btn btn-icon btn-secondary btn-wave">
                                                <i className="ri-twitter-x-line fw-bold"></i>
                                            </Button>
                                            <Button className="btn btn-icon btn-warning btn-wave">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <Button className="btn btn-icon btn-success btn-wave">
                                                <i className="ri-github-line fw-bold"></i>
                                            </Button>
                                            <Button className="btn btn-icon btn-danger btn-wave">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none px-0">
                    <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center coming-soom-image-container">
                        <img src="../../assets/images/media/media-87.svg" alt="" className="imig-fluid" />
                    </div>
                </div>

            </Row>
        </>
    )
}

export default Comingsoon;
