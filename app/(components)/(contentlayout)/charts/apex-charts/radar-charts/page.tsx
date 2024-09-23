"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { RadarChartPoygon, RadarChat, RadarChatMulti } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Radarcharts = () => {
    return (
        <>
            <Seo title={"Apex Radar Charts"} />
            <Pageheader title="Apex Radar Charts" heading="Apex Charts" active="Apex Radar Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Radar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-basic"><RadarChat />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart-Multiple Series</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-multiple"><RadarChatMulti />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart Polygon Fill</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-polygon"><RadarChartPoygon />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Radarcharts
