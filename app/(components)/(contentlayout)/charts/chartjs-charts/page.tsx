"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import * as chart from "../../../../../shared/data/charts/chartjsdata";
import { Bar, Pie, Line, Doughnut, Scatter, PolarArea, Radar, Bubble, } from "react-chartjs-2";
import Seo from '../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Chartjscharts = () => {
    return (
        <>
            <Seo title={"Chartjs Charts"} />
            <Pageheader title="Chartjs Charts" heading="Charts" active="Chartjs Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Line options={chart.Option1} data={chart.Data1} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Bar options={chart.Option2} data={chart.Data2} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Pie options={chart.Option3} data={chart.Data3} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Doughnut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Doughnut options={chart.Option4} data={chart.Data4} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Mixed Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Scatter options={chart.Option5} data={chart.Data5} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Polar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PolarArea options={chart.Option6} data={chart.Data6} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Radial Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Radar options={chart.Option7} data={chart.Data7} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Scatter options={chart.Option8} data={chart.Data8} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Bubble options={chart.Option9} data={chart.Data9} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Chartjscharts
