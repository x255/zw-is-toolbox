"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import RangeSlider from 'react-range-slider-input';
import Box from '@mui/material/Box';
import 'react-range-slider-input/dist/style.css';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import { rangeslider1, rangeslider2, rangeslider3, rangeslider4 } from '../../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Rangeslider = () => {

    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
                boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',

                marginLeft: 1,
                marginRight: 1,
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 3,
        },
    }));
    function AirbnbThumbComponent(props: { [x: string]: any; children: any; }) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }
    const marks = [
        {
            value: 0,
        },
        {
            value: 20,
        },
        {
            value: 37,
        },
        {
            value: 100,
        },
    ];
    const aa = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 75,
            label: '75',
        },
        {
            value: 100,
            label: '100',
        },
    ];

    return (
        <>
            <Seo title={"Range Slider"} />

            <Pageheader title="Range Slider" heading="Form Elements" active="Range Slider" />
            <Row>
                <Col xl={3}>
                    <ShowCode title="Default Range" code={rangeslider1}>
                        <Form.Range className="" id="customRange1" />
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Disabled Range" code={rangeslider2}>
                        <Form.Range className="" id="disabledRange" disabled />
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode title="Range With Min and Max Values" code={rangeslider3}>
                        <Form.Range className="" min="0" max="5" id="customRange2" />
                    </ShowCode>

                </Col>
                <Col xl={3}>
                    <ShowCode title="Range With Steps" code={rangeslider4}>
                        <Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
                    </ShowCode>
                </Col>
            </Row>
            <h6 className="mb-3">noUiSlider:</h6>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Default-Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="pt-0">
                            <div id="slider">
                                <Box sx={{ m: 3 }} />
                                <AirbnbSlider
                                    slots={{ thumb: AirbnbThumbComponent }}
                                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                    defaultValue={[10, 90]}
                                />
                            </div>

                        </Card.Body>
                    </Card>

                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Fit Handles
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="slider-fit">
                                <AirbnbSlider
                                    slots={{ thumb: AirbnbThumbComponent }}
                                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                    defaultValue={[10, 90]}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Rounded Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="slider-round" className="my-2">
                                <RangeSlider
                                    className="single-thumb"
                                    defaultValue={[0, 50]}
                                    thumbsDisabled={[true, false]}
                                    rangeSlideDisabled={true}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Square Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="slider-square" className="my-2">
                                <RangeSlider
                                    className="square-thumb"
                                    defaultValue={[0, 50]}
                                    thumbsDisabled={[true, false]}
                                    rangeSlideDisabled={true}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">noUiSlider Colors:</h6>
            <Row>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Primary
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="primary-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={50.00}
                                    color="primary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Secondary
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="secondary-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    color="secondary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Warning
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="warning-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    color="secondary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Info
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="info-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    color="secondary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Success
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="success-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    color="secondary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Danger
                            </Card.Title>
                        </Card.Header>
                        <Card.Footer>
                            <div id="danger-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    color="secondary"
                                />
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Rangeslider
