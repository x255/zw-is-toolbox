"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { ObjectFit1, ObjectFit2, ObjectFit3, ObjectFit4, ObjectFit5, ObjectFit6, ObjectFit7, ObjectFit8, ObjectFit9, ObjectFit10, ObjectFit11, ObjectFit12, ObjectFit13, ObjectFit14, ObjectFit15 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const ObjectFit = () => {

    return (
        <>
            <Seo title={"Object Fit"} />

            <Pageheader title="Object Fit" heading="Ui Elements" active="Object Fit" />
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain" code={ObjectFit1} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-contain border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Cover" code={ObjectFit2} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-cover border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Fill" code={ObjectFit3} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-fill border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Scale Down" code={ObjectFit4} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-scale border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit None" code={ObjectFit5} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-none border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain (SM - responsive)" code={ObjectFit6} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-sm-contain border rounded" alt="..." />
                    </ShowCode>


                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain (MD - responsive)" code={ObjectFit7} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-md-contain border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain (LG - responsive)" code={ObjectFit8} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-lg-contain border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain (XL - responsive)" code={ObjectFit9} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-xl-contain border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain (XXL - responsive)" code={ObjectFit10} customCardBodyClass="object-fit-container">
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-xxl-contain border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Contain Video" code={ObjectFit11} customCardBodyClass="object-fit-container">
                        <video src="../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title=" Object Fit Cover Video" code={ObjectFit12} customCardBodyClass="object-fit-container">
                        <video src="../../assets/video/1.mp4" className="object-fit-cover rounded border" autoPlay loop muted></video>
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title=" Object Fit Fill Video" code={ObjectFit13} customCardBodyClass="object-fit-container">
                        <video src="../../assets/video/1.mp4" className="object-fit-fill rounded border" autoPlay loop muted></video>
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit Scale Video" code={ObjectFit14} customCardBodyClass="object-fit-container">
                        <video src="../../assets/video/1.mp4" className="object-fit-scale rounded border" autoPlay loop muted></video>
                    </ShowCode>

                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>

                    <ShowCode title="Object Fit None Video" code={ObjectFit15} customCardBodyClass="object-fit-container">
                        <video src="../../assets/video/1.mp4" className="object-fit-none rounded border" autoPlay loop muted></video>
                    </ShowCode>

                </Col>
            </Row>

        </>
    )
}
ObjectFit.layout = "Contentlayout"

export default ObjectFit
