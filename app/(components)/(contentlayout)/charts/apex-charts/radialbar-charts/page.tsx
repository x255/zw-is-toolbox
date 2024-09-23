"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CircleWithImage, CustomAngleCircle, Gradient, MultipleRadilBar, Piechart, SemiCircle, StrokedCircle } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Radialbarcharts = () => {
    return (
        <>
            <Seo title={"Apex Radialbar Charts"} />
            <Pageheader title="Apex Radialbar Charts" heading="Apex Charts" active="Apex Radialbar Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-basic"><Piechart /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Radialbar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-multiple"><MultipleRadilBar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart - Custom Angle</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-custom"><CustomAngleCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Circle Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-circle"><Gradient />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Stroked Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-stroked"><StrokedCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart With Image</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-image"><CircleWithImage />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Semi Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-semi"><SemiCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Radialbarcharts
