"use client";
import React from 'react'
import { Card, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Reviewslist } from '../../../../../shared/data/pages/reviewsdata'
import Link from 'next/link'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Reviews = () => {
    return (
        <>
            <Seo title={"Reviews"} />

            <Pageheader title="Reviews" heading="Pages" active="Reviews" />

            <div className='container-lg reviews-container'>
                <Row className=" justify-content-center">
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12}>
                        <Row className="gy-4">
                            {Reviewslist.map((idx) => (
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold fs-14 text-primary">{idx.name}</p>
                                                    <p className="mb-0 fs-10 fw-semibold text-muted">{idx.title}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- </span>
                                                <OverlayTrigger overlay={<Tooltip placement='top' className='tooltip-primary' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio</Tooltip>}>

                                                    <Link href="#!" scroll={false} className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</Link>
                                                </OverlayTrigger>

                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-muted">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className={`ri-star-${idx.class}`}></i>
                                                    </span>
                                                </div>
                                                <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                    <span>{idx.text}</span>
                                                    <span className="d-block fw-normal fs-12 text-success"><i>{idx.name}</i></span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <ul className="pagination mb-5 justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#!">
                                        Prev
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                <li className="page-item">
                                    <a className="page-link text-primary" href="#!">
                                        next
                                    </a>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Reviews
