"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { DistributedTree, MultiDimensions, TreeMapChart, TreeMapWithColorScale } from '../../../../../../shared/data/charts/apexcharts/treemapdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Treemapcharts = () => {
    return (
        <>
            <Seo title={"Apex Treemap Charts"} />
            <Pageheader title="Apex Treemap Charts" heading="Apex Charts" active="Apex Treemap Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-basic"><TreeMapChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multi Dimensional Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-multi"><MultiDimensions />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Distributed Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-distributed"><DistributedTree />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Treemap with color ranges</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-colorranges"><TreeMapWithColorScale />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Treemapcharts
