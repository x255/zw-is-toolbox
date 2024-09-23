"use client";
import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Contactus = () => {
    return (
        <>
            <Seo title={"Contactus"} />

            <Pageheader title="Contact Us" heading="Pages" active="Contact Us" />
            <Row className=" justify-content-center">
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Body className=" p-0">
                            <div className="contact-page-banner">
                                <div className="text-center">
                                    <h3 className="fw-semibold text-fixed-white">Contact US !</h3>
                                    <h6 className="text-fixed-white mb-4 px-sm-0 px-3">Have any questions ? We would love to hear from you. </h6>
                                    <button className="btn btn-success btn-wave">Contact <i className="ri-phone-line ms-1 align-middle"></i></button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={10} xl={10} lg={10} md={10} sm={10} className="col-12">
                    <Row>
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12}>
                            <Card className=" custom-card contactus-form overflow-hidden">
                                <Card.Header>
                                    <Card.Title>
                                        Get In Touch !
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="contact-address-firstname" className="form-label">First Name :</label>
                                            <Form.Control type="text" className="l form-control-light" id="contact-address-firstname" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="contact-address-lastname" className="form-label">Last Name :</label>
                                            <Form.Control type="text" className=" form-control-light" id="contact-address-lastname" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="contact-address-phone" className="form-label">Phone No :</label>
                                            <Form.Control type="text" className="form-control-light" id="contact-address-phone" placeholder="Enter Phone No" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="contact-address-email" className="form-label">Email Id :</label>
                                            <Form.Control type="email" className=" form-control-light" id="contact-address-email" placeholder="Enter Email Id" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="contact-address-address" className="form-label">Address :</label>
                                            <textarea className="form-control form-control-light" id="contact-address-address" rows={2}></textarea>
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="contact-mail-message" className="form-label">Message :</label>
                                            <textarea className="form-control form-control-light" id="contact-mail-message" rows={2}></textarea>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="text-center">
                                        <button className="btn btn-primary-light btn-wave">Send Message</button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={12} md={12} sm={12}>
                            <Card className=" custom-card contactus-form overflow-hidden">
                                <Card.Body>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin" height="370" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}

export default Contactus
