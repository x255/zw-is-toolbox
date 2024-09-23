"use client";
import React, { useState } from 'react'
import { Card, Button, Row, Col, Collapse, Badge } from 'react-bootstrap';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
import { badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, badge10, badge11, badge12 } from '../../../../../shared/data/prismdata/uielements';
const Badges = () => {

    return (
        <>
            <Seo title={"Badge"} />

            <Pageheader title="Badge" heading="Ui Elements" active="Badge" />

            <Row>
                <Col xl={6}>
                    <ShowCode title="Badges" code={badge1}>
                        <Badge bg="primary">Primary</Badge>
                        <Badge bg="secondary">Secondary</Badge>
                        <Badge bg="success">Success</Badge>
                        <Badge bg="danger">Danger</Badge>
                        <Badge bg="warning">Warning</Badge>
                        <Badge bg="info">Info</Badge>
                        <Badge bg="light" text="dark">Light</Badge>
                        <Badge bg="dark" text="white">Dark</Badge>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Pill badges" code={badge2} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" rounded-pill bg-primary">Primary</Badge>
                        <Badge bg=" rounded-pill bg-secondary">Secondary</Badge>
                        <Badge bg=" rounded-pill bg-success">Success</Badge>
                        <Badge bg=" rounded-pill bg-danger">Danger</Badge>
                        <Badge bg=" rounded-pill bg-warning">Warning</Badge>
                        <Badge bg=" rounded-pill bg-info">Info</Badge>
                        <Badge bg=" rounded-pill bg-light text-dark">Light</Badge>
                        <Badge bg=" rounded-pill bg-dark text-white">Dark</Badge>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Light Badges" code={badge3} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" bg-primary-transparent">Primary</Badge>
                        <Badge bg=" bg-secondary-transparent">Secondary</Badge>
                        <Badge bg=" bg-success-transparent">Success</Badge>
                        <Badge bg=" bg-danger-transparent">Danger</Badge>
                        <Badge bg=" bg-warning-transparent">Warning</Badge>
                        <Badge bg=" bg-info-transparent">Info</Badge>
                        <Badge bg=" bg-light-transparent text-dark">Light</Badge>
                        <Badge bg=" bg-dark-transparent">Dark</Badge>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Light Pill Badges" code={badge4} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" rounded-pill bg-primary-transparent">Primary</Badge>
                        <Badge bg=" rounded-pill bg-secondary-transparent">Secondary</Badge>
                        <Badge bg=" rounded-pill bg-success-transparent">Success</Badge>
                        <Badge bg=" rounded-pill bg-danger-transparent">Danger</Badge>
                        <Badge bg=" rounded-pill bg-warning-transparent">Warning</Badge>
                        <Badge bg=" rounded-pill bg-info-transparent">Info</Badge>
                        <Badge bg=" rounded-pill bg-light-transparent text-dark">Light</Badge>
                        <Badge bg=" rounded-pill bg-dark-transparent">Dark</Badge>
                    </ShowCode>


                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Gradient Badges" code={badge5} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" bg-primary-gradient">Primary</Badge>
                        <Badge bg=" bg-secondary-gradient">Secondary</Badge>
                        <Badge bg=" bg-success-gradient">Success</Badge>
                        <Badge bg=" bg-danger-gradient">Danger</Badge>
                        <Badge bg=" bg-warning-gradient">Warning</Badge>
                        <Badge bg=" bg-info-gradient">Info</Badge>
                        <Badge bg=" bg-orange-gradient">orange</Badge>
                        <Badge bg=" bg-purple-gradient">purple</Badge>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Gradient Pill Badges" code={badge6} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" rounded-pill bg-primary-gradient">Primary</Badge>
                        <Badge bg=" rounded-pill bg-secondary-gradient">Secondary</Badge>
                        <Badge bg=" rounded-pill bg-success-gradient">Success</Badge>
                        <Badge bg=" rounded-pill bg-danger-gradient">Danger</Badge>
                        <Badge bg=" rounded-pill bg-warning-gradient">Warning</Badge>
                        <Badge bg=" rounded-pill bg-info-gradient">Info</Badge>
                        <Badge bg=" rounded-pill bg-orange-gradient">orange</Badge>
                        <Badge bg=" rounded-pill bg-purple-gradient">purple</Badge>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Outline Badges" code={badge7} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" bg-outline-primary">Primary</Badge>
                        <Badge bg=" bg-outline-secondary">Secondary</Badge>
                        <Badge bg=" bg-outline-success">Success</Badge>
                        <Badge bg=" bg-outline-danger">Danger</Badge>
                        <Badge bg=" bg-outline-warning">Warning</Badge>
                        <Badge bg=" bg-outline-info">Info</Badge>
                        <Badge bg=" bg-outline-light text-dark">Light</Badge>
                        <Badge bg=" bg-outline-dark">Dark</Badge>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title=" Outline Pill Badges" code={badge7} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Badge bg=" rounded-pill bg-outline-primary">Primary</Badge>
                        <Badge bg=" rounded-pill bg-outline-secondary">Secondary</Badge>
                        <Badge bg=" rounded-pill bg-outline-success">Success</Badge>
                        <Badge bg=" rounded-pill bg-outline-danger">Danger</Badge>
                        <Badge bg=" rounded-pill bg-outline-warning">Warning</Badge>
                        <Badge bg=" rounded-pill bg-outline-info">Info</Badge>
                        <Badge bg=" rounded-pill bg-outline-light text-dark">Light</Badge>
                        <Badge bg=" rounded-pill bg-outline-dark">Dark</Badge>
                    </ShowCode>



                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Buttons With Badges" code={badge8} customCardBodyClass="d-flex flex-wrap gap-2">
                        <Button variant="primary" className="my-1 me-2">
                            Notifications <Badge bg=" ms-2 bg-secondary">4</Badge>
                        </Button>
                        <Button variant="secondary" className="my-1 me-2">
                            Notifications <Badge bg=" ms-2 bg-primary">7</Badge>
                        </Button>
                        <Button variant="success" className="my-1 me-2">
                            Notifications <Badge bg=" ms-2 bg-danger">12</Badge>
                        </Button>
                        <Button variant="info" className="my-1 me-2">
                            Notifications <Badge bg=" ms-2 bg-warning">32</Badge>
                        </Button>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Outline Button Badges" code={badge9} customCardBodyClass="d-flex flex-wrap gap-2">

                        <Button variant="outline-primary" type="button" className=" my-1 me-2">
                            Notifications <Badge bg=" ms-2">4</Badge>
                        </Button>
                        <Button variant="outline-secondary" type="button" className=" my-1 me-2">
                            Notifications <Badge bg=" ms-2">7</Badge>
                        </Button>
                        <Button variant="outline-success" type="button" className=" my-1 me-2">
                            Notifications <Badge bg=" ms-2">12</Badge>
                        </Button>
                        <Button variant="outline-info" type="button" className=" my-1 me-2">
                            Notifications <Badge bg=" ms-2">32</Badge>
                        </Button>
                    </ShowCode>


                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Headings" code={badge10} >
                        <h1>Example heading <Badge bg=" bg-primary">New</Badge></h1>
                        <h2>Example heading <Badge bg=" bg-primary">New</Badge></h2>
                        <h3>Example heading <Badge bg=" bg-primary">New</Badge></h3>
                        <h4>Example heading <Badge bg=" bg-primary">New</Badge></h4>
                        <h5>Example heading <Badge bg=" bg-primary">New</Badge></h5>
                        <h6>Example heading <Badge bg=" bg-primary">New</Badge></h6>
                    </ShowCode>



                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>

                            <ShowCode title="Positioned Badges" code={badge11} customCardBodyClass="d-flex flex-wrap gap-4">

                                <button type="button" className="btn btn-primary position-relative">
                                    Inbox
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <button type="button" className="btn btn-secondary position-relative">
                                    Profile
                                    <span
                                        className="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </button>
                                <span className="avatar">
                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                    <span className="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/10.jpg" alt="img" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </span>
                            </ShowCode>


                        </Col>
                        <Col xl={12}>

                            <ShowCode title="Custom Badges" code={badge12} customCardBodyClass="d-flex flex-wrap gap-2">
                                <div className="d-flex align-items-center gap-5 flex-wrap">
                                    <div>
                                        <Badge bg=" bg-outline-secondary custom-badge fs-15 d-inline-flex align-items-center"><i className="ti ti-flame me-1"></i>Hot</Badge>
                                    </div>
                                    <div>
                                        <span className="icon-badge">
                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                                            <Badge bg=" rounded-pill bg-success">14</Badge>
                                        </span>
                                    </div>
                                    <div>
                                        <Badge bg=" border bg-light text-default custom-badge"><i className="fe fe-eye me-2 d-inline-block"></i>13.2k</Badge>
                                    </div>
                                    <div>
                                        <span className="text-badge">
                                            <span className="text fs-18">Inbox</span>
                                            <Badge bg=" rounded-pill bg-success">32</Badge>
                                        </span>
                                    </div>
                                </div>
                            </ShowCode>


                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Badges
