"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BoxPlot, BoxPlotWithScatter, HorizontalBoxPlot } from '../../../../../../shared/data/charts/apexcharts/boxplotdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Boxplotcharts = () => {
    return (
        <>
            <Seo title={"Apex Boxplot Charts"} />
            <Pageheader title="Apex Boxplot Charts" heading="Apex Charts" active="Apex Boxplot Charts" />

            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-basic"><BoxPlot />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Boxplot With Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-scatter"><BoxPlotWithScatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Horizontal Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-horizontal"><HorizontalBoxPlot />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Boxplotcharts
