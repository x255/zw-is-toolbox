"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Colorrange, HeatMapChart, MultiSeriesHeatMap, Shadesheatmap } from '../../../../../../shared/data/charts/apexcharts/heatmapadata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Heatmapcharts = () => {
    return (
        <>
            <Seo title={"Apex Heatmap Charts"} />
            <Pageheader title="Apex Heatmap Charts" heading="Apex Charts" active="Apex Heatmap Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-basic">
                                <HeatMapChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-multiseries"><MultiSeriesHeatMap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Color Range Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-colorrange"><Colorrange /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Heatmap Range Without Shades</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-range"><Shadesheatmap /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Heatmapcharts
