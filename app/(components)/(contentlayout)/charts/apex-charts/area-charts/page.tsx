"use client";
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Basicarea, Datetimexaxis, Github, Irregular, Negative, Nullarea, Spiline, Stacked } from '../../../../../../shared/data/charts/apexcharts/areachartdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Areacharts = () => {
    return (
        <>
            <Seo title={"Apex Area Charts"} />
            <Pageheader title="Apex Area Charts" heading="Apex Charts" active="Apex Area Charts" />
            <Row>
                <Col xl={6} >
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Basicarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Spline Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline"><Spiline /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative"><Negative /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Selection-Github Style Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="chart-months"></div>
                            <div className="github-style d-flex align-items-center">
                                <div className="me-2">
                                    <img className="userimg rounded" src="../../../assets/images/faces/1.jpg"
                                        data-hovercard-user-id="634573" alt="" width="38" height="38" />
                                </div>
                                <div className="userdetails lh-1">
                                    <a className="username fw-semibold fs-14">coder</a>
                                    <span className="cmeta d-block mt-1">
                                        <span className="commits"></span> commits
                                    </span>
                                </div>
                            </div>
                            <div id="chart-years"><Github /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked"><Stacked /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Irregular Time Series Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-irregular"><Irregular /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Null Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null"><Nullarea /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header className="d-flex">
                            <Card.Title>Area Chart-Datetime X-Axis Chart</Card.Title>
                            <div className="btn-group ms-auto">
                                <Button variant="primary" size="sm" id="one_month">1M</Button>
                                <Button variant="primary" size="sm" id="six_months">6M</Button>
                                <Button variant="primary" size="sm" id="one_year">1Y</Button>
                                <Button variant="primary" size="sm" id="all">ALL</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-datetime"><Datetimexaxis /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
Areacharts.layout = "Contentlayout"

export default Areacharts
