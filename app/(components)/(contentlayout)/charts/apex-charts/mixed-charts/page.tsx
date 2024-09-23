"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { LineColoumAreaChart, LineColoumn, MixedYaxis } from '../../../../../../shared/data/charts/apexcharts/mixedchartsdata'
import { Linearea } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Mixedcharts = () => {
    return (
        <>
            <Seo title={"Apex Mixed Charts"} />
            <Pageheader title="Apex Mixed Charts" heading="Apex Charts" active="Apex Mixed Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line & Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linecolumn"><LineColoumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Y-Axis Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-multiple-y"><MixedYaxis /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linearea"><Linearea /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line,Column & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-all"><LineColoumAreaChart /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Mixedcharts
