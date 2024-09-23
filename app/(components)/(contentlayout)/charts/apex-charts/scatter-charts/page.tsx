"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { DateTimeScatter, ImageFillScatter, ScatterChat } from '../../../../../../shared/data/charts/apexcharts/scatterchartdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Scattercharts = () => {
    return (
        <>
            <Seo title={"Apex Scatter Charts"} />
            <Pageheader title="Apex Scatter Charts" heading="Apex Charts" active="Apex Scatter Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-basic"><ScatterChat />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Datetime Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-datetime"><DateTimeScatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Image Fill Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-image"><ImageFillScatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Scattercharts
