"use client";
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DayCounter } from '../../../../../shared/data/pages/comingsoondata'

const Undermaintainance = () => {

    return (
        <>
            <Row className="authentication under-maintenance mx-0 bg-white">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content text-center">
                            <Row className=" justify-content-center align-items-center h-100">
                                <Col xxl={6} xl={8} lg={8} md={12} sm={12} className="col-12">
                                    <div className="mb-2">
                                        <Link href="/dashboards/crm">
                                            <img src="../../assets/images/brand-logos/toggle-logo.png" alt="" className="authentication-brand" />
                                        </Link>
                                    </div>
                                    <p className="fw-semibold fs-12 mb-1 op-4">STAY TUNED</p>
                                    <h1 className="fw-bold mb-3">Under Maintenance</h1>
                                    <p className="mb-4">Our website is under maintenance, wait for some time.</p>
                                    <div className="row mt-4 gy-xxl-0 gy-3 mb-5" id="timer">
                                        <DayCounter />
                                    </div>
                                    <div className="mt-5">
                                        <div className="btn-list">
                                            <button className="btn btn-icon btn-primary btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </button>
                                            <button className="btn btn-icon btn-secondary btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-x-line fw-bold"></i>
                                            </button>
                                            <button className="btn btn-icon btn-warning btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </button>
                                            <button className="btn btn-icon btn-success btn-wave waves-effect waves-light">
                                                <i className="ri-github-line fw-bold"></i>
                                            </button>
                                            <button className="btn btn-icon btn-danger btn-wave waves-effect waves-light">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} className="d-lg-block d-none px-0">
                    <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center under-maintenance-image-container">
                        <img src="../../assets/images/media/media-88.svg" alt="" className="imig-fluid" />
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default Undermaintainance
