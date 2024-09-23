"use client";
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { SwiperSlide, Swiper } from 'swiper/react';
import Seo from '../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

// import required modules
import {
    Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
    EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode
} from 'swiper/modules';

const Swiperjs = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Seo title={"SwiperJS"} />
            <Pageheader title="SwiperJS" heading="Advanced Ui" active="SwiperJS" />
            <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                                <SwiperSlide><img src="../../assets/images/media/media-27.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-26.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Swiper with Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-33.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Dynamic Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-21.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-17.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pagination With Progress
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper pagination={{ type: 'progressbar', }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-12.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-5.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pagination Fraction
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper pagination={{ type: 'fraction', }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
                                <SwiperSlide><img src="../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Custom Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                     
                            <Swiper pagination={pagination} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
                                <SwiperSlide><img src="../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Scrollbar Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
                                <SwiperSlide><img src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper direction={'vertical'} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper swiper vertical swiper-vertical">
                                <SwiperSlide><img src="../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-17.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Mouse Wheel Control
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper swiper vertical vertical-mouse-control">
                                <SwiperSlide><img src="../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Keyboard Control
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-12.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Nested Swiper</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                                <SwiperSlide><img src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide>
                                    <Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true, }}
                                        modules={[Pagination]}>
                                        <SwiperSlide><img src="../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><img src="../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                    </Swiper>
                                </SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Cube
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                pagination={{ clickable: true, }} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
                                <SwiperSlide><img src="../../assets/images/media/media-62.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-63.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-64.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Fade
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade">
                                <SwiperSlide><img src="../../assets/images/media/media-18.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-19.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-20.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Flip
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper effect={'flip'} grabCursor={true} pagination={{ clickable: true, }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../assets/images/media/media-20.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-62.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-63.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Coverflow
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper effect={'coverflow'}
                                grabCursor={true}
                                slidesPerView={4}
                                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{ clickable: true, }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="mySwiper swiper swiper-overflow">
                                <SwiperSlide><img src="../../assets/images/media/media-40.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-41.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-42.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-43.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-44.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-59.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-46.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../assets/images/media/media-61.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Thumbs Gallery
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <Swiper
                                    spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-1.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-2.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-3.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-6.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-7.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-10.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-11.jpg" alt="img" />
                                    </SwiperSlide>

                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view mt-2">
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-1.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-2.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-3.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-6.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-7.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-10.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="img-fluid rounded" src="../../assets/images/media/media-11.jpg" alt="img" />
                                    </SwiperSlide>
                                </Swiper>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Swiperjs;
