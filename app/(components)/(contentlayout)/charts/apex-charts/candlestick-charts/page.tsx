"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ApexCharts, CandleStick, Candleline } from '../../../../../../shared/data/charts/apexchart'
import { CandleStickSynced } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Candlestickcharts = () => {
    return (
        <>
            <Seo title={"Apex Candlestick Charts"} />
            <Pageheader title="Apex Candlestick Charts" heading="Apex Charts" active="Apex Candlestick Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Candlestick Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="candlestick-basic"><CandleStick />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CandleStickSynced />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Cateory X-axis</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="candlestick-categoryx"><ApexCharts /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="candlestick-line"><Candleline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Candlestickcharts
