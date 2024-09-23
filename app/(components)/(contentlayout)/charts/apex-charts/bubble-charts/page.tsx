"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BubbleChart, DBubbleChart } from '../../../../../../shared/data/charts/apexcharts/bubblechartdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Bubblecharts = () => {
    return (
        <>
            <Seo title={"Apex Bubble Charts"} />
            <Pageheader title="Apex Bubble Charts" heading="Apex Charts" active="Apex Bubble Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Simple Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-simple"><BubbleChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>3D Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-3d">  <DBubbleChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Bubblecharts
