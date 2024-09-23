"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { imagefigure1, imagefigure2, imagefigure3, imagefigure4, imagefigure5, imagefigure6, imagefigure7, imagefigure8, imagefigure9 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Images$figures = () => {

    return (
        <>
            <Seo title={"Images & Figures"} />

            <Pageheader title="Images & Figures" heading="Ui Elements" active="Images & Figures" />
            <Row>
                <Col xl={4}>

                    <ShowCode title="Responsive image" code={imagefigure1}>
                        <p className="card-title mb-3">Use <code> .img-fluid </code>className to the img tag to get responsive image.</p>
                        <div className="text-center">
                            <img src="../../assets/images/media/media-48.jpg" className="img-fluid" alt="..." />
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Image With Radius" code={imagefigure2}>
                        <p className="card-title mb-3">Use <code>.rounded</code> className along with <code>.img-fluid</code> to get border radius.</p>
                        <div className="text-center">
                            <img src="../../assets/images/media/media-49.jpg" className="img-fluid rounded" alt="..." />
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Image With Radius" code={imagefigure3}>
                        <p className="card-title mb-3">Use <code>.rounded-pill</code> className to <code>img</code> tag to get rounded image.</p>
                        <div className="text-center">
                            <img src="../../assets/images/media/media-50.jpg" className="img-fluid rounded-pill" alt="..." />
                        </div>
                    </ShowCode>


                </Col>
            </Row>
            <Row>
                <Col xl={4}>

                    <ShowCode title="Image Left Align" code={imagefigure4}>
                        <img className="rounded float-start" src="../../assets/images/media/media-53.jpg" alt="..." />

                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Image Center Align" code={imagefigure5}>
                        <img className="rounded mx-auto d-block" src="../../assets/images/media/media-55.jpg" alt="..." />
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Image Right Align" code={imagefigure6}>
                        <img className="rounded float-end" src="../../assets/images/media/media-54.jpg" alt="..." />
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Figures" code={imagefigure7}>
                        <figure className="figure">
                            <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../assets/images/media/media-56.jpg" alt="..." />
                            <figcaption className="figure-caption mt-2">A caption for the above image.
                            </figcaption>
                        </figure>
                        <figure className="figure float-end">
                            <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../assets/images/media/media-57.jpg" alt="..." />
                            <figcaption className="figure-caption text-end mt-2">A caption for the above image.
                            </figcaption>
                        </figure>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Image Thumbnail" code={imagefigure8}>
                        <p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
                        <div className="text-center">
                            <img src="../../assets/images/media/media-51.jpg" className="img-thumbnail" alt="..." />
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title=" Rounded Thumbnail" code={imagefigure9}>
                        <p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
                        <div className="text-center">
                            <img src="../../assets/images/media/media-52.jpg" className="img-thumbnail rounded-pill" alt="..." />
                        </div>
                    </ShowCode>

                </Col>
            </Row>
        </>
    )
}

export default Images$figures
