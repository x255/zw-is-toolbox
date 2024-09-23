"use client";
import React, { useState } from 'react'
import { Button, Card, Carousel, Col, Collapse, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from '../../../../../shared/data/prismdata/advancedui/advancedui';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Carousel1 = () => {
    return (
        <>
            <Seo title={"Carousel"} />
            <Pageheader title="Carousel" heading="Advanced Ui" active="Carousel" />
              {/* Row-1-Start */}
            <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Slides Only" code={carousel1}>
                        <Carousel id="carouselExampleSlidesOnly1" className="carousel slide carousel-icons" indicators={false}>
                            <Carousel.Item className="active">
                                <img src="../../assets/images/media/media-26.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="../../assets/images/media/media-27.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="../../assets/images/media/media-33.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With controls" code={carousel2}>
                        <Carousel slide id="carouselExampleControls" data-bs-ride="carousel">
                            <Carousel.Item className="carousel-item active">
                                <img src="../../assets/images/media/media-28.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img src="../../assets/images/media/media-31.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img src="../../assets/images/media/media-32.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With indicators" code={carousel3}>
                        <Carousel slide id="carouselExampleIndicators" data-bs-ride="carousel">
                            <Carousel.Item className="active">
                                <img src="../../assets/images/media/media-25.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="../../assets/images/media/media-30.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>

                        </Carousel>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With captions" code={carousel4}>
                        <Carousel slide id="carouselExampleCaptions" data-bs-ride="carousel">
                            <Carousel.Item className="active">
                                <img src="../../assets/images/media/media-59.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item  >
                                <img src="../../assets/images/media/media-60.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="../../assets/images/media/media-61.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Crossfade" code={carousel5}>
                        <Carousel slide id="carouselExampleFade" className=" carousel-fade" data-bs-ride="carousel">
                            <Carousel.Item className="active">
                                <img src="../../assets/images/media/media-43.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="../../assets/images/media/media-44.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src="../../assets/images/media/media-45.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>

                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Individual .carousel-item interval" code={carousel6}>
                        <Carousel slide id="carouselExampleInterval" data-bs-ride="carousel">
                            <Carousel.Item className=" active" data-bs-interval="10000">
                                <img src="../../assets/images/media/media-40.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="" data-bs-interval="2000">
                                <img src="../../assets/images/media/media-41.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <img src="../../assets/images/media/media-42.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>

                        </Carousel>
                    </ShowCode>
                </Col>
            </Row>
               {/* Row-1-End */}
            {/* Row-2-Start */}
            <Row>
                <Col xxl={4} md={6}>
                    <ShowCode title="Disable touch swiping" code={carousel7}>
                        <Carousel slide id="carouselExampleControlsNoTouching" className="" data-bs-touch="false"
                            data-bs-interval="false">
                            <Carousel.Item className=" active">
                                <img src="../../assets/images/media/media-13.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <img src="../../assets/images/media/media-14.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <img src="../../assets/images/media/media-18.jpg" className="d-block w-100" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>
                </Col>
                <Col xxl={4} md={6}>
                    <ShowCode title="Dark variant" code={carousel8}>
                        <Carousel slide id="carouselExampleDark" data-bs-ride="carousel">
                            <Carousel.Item className=" active" data-bs-interval="10000">
                                <img src="../../assets/images/media/media-63.jpg" className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">First slide label</h5>
                                    <p className="op-7">Some representative placeholder content for the first slide.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="" data-bs-interval="2000">
                                <img src="../../assets/images/media/media-64.jpg" className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">Second slide label</h5>
                                    <p className="op-7">Some representative placeholder content for the second slide.</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <img src="../../assets/images/media/media-62.jpg" className="d-block w-100"
                                    alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-fixed-white">Third slide label</h5>
                                    <p className="op-7">Some representative placeholder content for the third slide.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </ShowCode>
                </Col>
            </Row>
               {/* Row-2-End */}
        </>
    )
}


export default Carousel1;
