"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Comborangearea, RangeArea } from '../../../../../../shared/data/charts/apexcharts/rangechartdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Rangeareacharts = () => {
    return (
        <>
            <Seo title={"Apex Range Area Charts"} />
            <Pageheader title="Apex Range Area Charts" heading="Apex Charts" active="Apex Range Area Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-basic"><RangeArea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Combo Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-combo"><Comborangearea /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Rangeareacharts
