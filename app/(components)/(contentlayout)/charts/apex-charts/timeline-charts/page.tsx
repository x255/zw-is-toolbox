"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { AdvanceTimeLine, CustomColor, GroupedRows, MultiSeriesTimeLine, TimeLine } from '../../../../../../shared/data/charts/apexcharts/timelinechartsdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Timelinecharts = () => {
    return (
        <>
            <Seo title={"Apex Timeline Charts"} />
            <Pageheader title="Apex Timeline Charts" heading="Apex Charts" active="Apex Timeline Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic TImeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-basic"><TimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Colored TImeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-colors"><CustomColor />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-multi"><MultiSeriesTimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Advanced Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-advanced"><AdvanceTimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Timeline-Grouped Rows</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-grouped"><GroupedRows />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Timelinecharts
