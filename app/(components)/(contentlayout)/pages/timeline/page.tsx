"use client";
import React from 'react'
import { Badge } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Timeline = () => {
    return (
        <>
            <Seo title={"Timeline"} />

            <Pageheader title="Timeline" heading="Pages" active="Timeline" />

            <div className="container">
                <ul className="timeline list-unstyled">
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">FRIDAY</span>
                            <span className="time d-inline-block">02:31</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/4.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Emperio</p>
                                            <p className="mb-0 text-muted">Project assigned by the manager all<span className="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span className="badge bg-primary-transparent fw-semibold mx-1">folders</span>were included</p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                24,Oct 2022
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">MONDAY</span>
                            <span className="time d-inline-block">08:47</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md offline me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/15.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
                                            <p className="mb-0 text-muted">Admin and other team accepted your work request</p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                30,Sep 2022
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">YESTERDAY</span>
                            <span className="time d-inline-block">18:43</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md offline me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/11.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Alister Chuk</p>
                                            <p className="mb-0 text-muted">Temporary data will be <span className="badge bg-danger-transparent fw-semibold mx-1">deleted</span> once dedicated time complated</p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                11,Sep 2021
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time d-inline-block">03:18</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/5.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Melissa Blue</p>
                                            <p className="mb-0 text-muted">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                18,Sep 2021
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time d-inline-block">12:24</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/10.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Zack Slayer</p>
                                            <p className="mb-0 text-muted">Social network accounts are at risk check your <span className="badge bg-success-transparent fw-semibold mx-1">login</span> details</p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                15,Sep 2021
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time d-inline-block">04:11</span>
                        </div>
                        <div className="timeline-icon">
                            <a href="#!"></a>
                        </div>
                        <div className="timeline-body">
                            <div className="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                                    <img alt="avatar" src="../../assets/images/faces/2.jpg" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex align-items-center">
                                        <div className="mt-sm-0 mt-2">
                                            <p className="mb-0 fs-14 fw-semibold">Monika Karen</p>
                                            <p className="mb-0 text-muted">Changed the password of gmail 4 hrs ago. <span className="badge bg-secondary">Update</span></p>
                                        </div>
                                        <div className="ms-auto">
                                            <Badge bg="float-end  bg-light text-muted timeline-badge">
                                                12,Sep 2021
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="timeline-loadmore-container">
                    <button className="btn btn-info-transparent btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Timeline
