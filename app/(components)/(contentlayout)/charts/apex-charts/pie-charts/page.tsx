"use client";
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Basicpiechart, DonutChatrsWithPatterns, DonutUpdate, GradientDonut, ImageFilledChart, MonoChromePie, SimpleDonut, SimplePie } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Piecharts = () => {
    return (
        <>
            <Seo title={"Apex Pie Charts"} />
            <Pageheader title="Apex Pie Charts" heading="Apex Charts" active="Apex Pie Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-basic">
                                <Basicpiechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Simple Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-simple"><SimpleDonut />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Updating Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-update"><DonutUpdate />
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Monochrome Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-monochrome"><MonoChromePie />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-gradient"><GradientDonut />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Donut Chart With Patterns</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-pattern"><DonutChatrsWithPatterns />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Image Filled Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-image"><ImageFilledChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Piecharts
