"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Basicpolararea, PolarAreaMonoChrome } from '../../../../../../shared/data/charts/apexchart'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Polarareacharts = () => {
    return (
        <>
            <Seo title={"Apex Polar Area Charts"} />
            <Pageheader title="Apex Polar Area Charts" heading="Apex Charts" active="Apex Polar Area Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Polar Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-basic"> <Basicpolararea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Polar Area Monochrome Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-monochrome"><PolarAreaMonoChrome />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Polarareacharts
