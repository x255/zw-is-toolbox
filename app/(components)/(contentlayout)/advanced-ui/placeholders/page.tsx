"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import Link from 'next/link';
import { placeholders1, placeholders2, placeholders3, placeholders4 } from '../../../../../shared/data/prismdata/advancedui/advancedui';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Placeholders = () => {
    return (
        <>
            <Seo title={"Placeholders"} />
            <Pageheader title="Placeholders" heading="Advanced Ui" active="Placeholders" />

            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Card className=" custom-card">
                                <img className="card-img-top" src="../../assets/images/media/media-60.jpg" alt="" />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up
                                        the bulk of the{` card's`} content.</p>
                                    <Link href="#!" scroll={false} className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Card aria-hidden="true">
                                <img className="card-img-top" src="../../assets/images/media/media-61.jpg" alt="" />
                                <Card.Body>
                                    <Card.Title className="h5 placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </Card.Title>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>&nbsp;
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>&nbsp;
                                        <span className="placeholder col-6"></span>
                                    </p>
                                    <Link href="#!" scroll={false} className="btn btn-primary disabled placeholder col-6"></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Animation" code={placeholders1}>
                                <p className="placeholder-glow mb-0">
                                    <span className="placeholder col-12"></span>
                                </p>
                                <p className="placeholder-wave mb-0">
                                    <span className="placeholder col-12"></span>
                                </p>
                            </ShowCode>

                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Row>
                                <Col xl={12}>
                                    <ShowCode title="Sizing" code={placeholders2}>
                                        <span className="placeholder col-12 placeholder-xl mb-1"></span>
                                        <span className="placeholder col-12 placeholder-lg"></span>
                                        <span className="placeholder col-12"></span>
                                        <span className="placeholder col-12 placeholder-sm"></span>
                                        <span className="placeholder col-12 placeholder-xs"></span>
                                    </ShowCode>

                                </Col>
                            </Row>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Colors" code={placeholders3}>
                                <span className="placeholder col-12"></span>
                                <span className="placeholder col-12 bg-primary"></span>
                                <span className="placeholder col-12 bg-secondary"></span>
                                <span className="placeholder col-12 bg-success"></span>
                                <span className="placeholder col-12 bg-danger"></span>
                                <span className="placeholder col-12 bg-warning"></span>
                                <span className="placeholder col-12 bg-info"></span>
                                <span className="placeholder col-12 bg-light"></span>
                                <span className="placeholder col-12 bg-dark"></span>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Width" code={placeholders4}>
                        <span className="placeholder bg-primary col-6"></span>
                        <span className="placeholder bg-primary w-75"></span><br />
                        <span className="placeholder bg-primary" style={{ width: "25%" }}></span>
                    </ShowCode>

                </Col>
            </Row>
        </>
    )
}

export default Placeholders;
