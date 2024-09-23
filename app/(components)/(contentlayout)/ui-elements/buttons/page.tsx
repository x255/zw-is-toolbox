"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import { ColoredButtons, DefaultButtons, GhostButtons, GradientButtons, LightButtons, OutlineButtons, SocialIconButtons } from '../../../../../shared/data/ui/buttonsdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import Link from 'next/link';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
import {
    button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19,
    button20, button21, button22, button23, button24
} from '../../../../../shared/data/prismdata/uielements';
const Buttons = () => {


    return (
        <>
            <Seo title={"Buttons"} />

            <Pageheader title="Buttons" heading="Ui Elements" active="Buttons" />

            <Row>
                <Col xl={6}>

                    <ShowCode title=" Default Buttons" code={button1}>

                        <div className="btn-list">
                            {DefaultButtons.map((idx) => (
                                <Button variant={idx.class} type="button" className="btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Rounded Buttons" code={button2}>
                        <div className="btn-list">
                            {DefaultButtons.map((idx) => (
                                <Button variant={idx.class} type="button" className="rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Light Buttons" code={button3}>

                        <div className="btn-list">
                            {LightButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Light Rounded Buttons" code={button4}>
                        <div className="btn-list">
                            {LightButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Outline Buttons" code={button5}>
                        <div className="btn-list">
                            {OutlineButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn  btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Rounded Outline Buttons" code={button6}>
                        <div className="btn-list">
                            {OutlineButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn rounded-pill  btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Gradient Buttons" code={button7}>
                        <div className="btn-list">
                            {GradientButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Rounded Gradient Buttons" code={button8}>
                        <div className="btn-list">
                            {GradientButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Ghost Buttons" code={button9}>
                        <div className="btn-list">
                            {GhostButtons.map((idx) => (
                                <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Button tags" code={button10}>
                        <div className="btn-list">
                            <Link href="#!" scroll={false} className="btn btn-primary btn-wave" role="button">Link</Link>
                            <button className="btn btn-secondary btn-wave" type="submit">Button</button>
                            <input className="btn btn-info" type="button" value="Input" />
                            <input className="btn btn-warning" type="submit" value="Submit" />
                            <input className="btn btn-success" type="reset" value="Reset" />
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" disabled state with anchor tags " code={button11}>
                        <div className="btn-list">
                            <div className="mb-4">
                                <Button type="button" className="btn btn-primary disabled" disabled>Primary
                                    button</Button>
                                <button type="button" className="btn btn-secondary disabled" disabled>Button</button>
                                <button type="button" className="btn btn-outline-primary disabled" disabled>Primary
                                    button</button>
                                <button type="button" className="btn btn-outline-secondary disabled" disabled>Button</button>
                            </div>

                            <div>
                                <Link href="#!" scroll={false} className="btn btn-primary disabled" role="button" aria-disabled="true">Primary
                                    link</Link>
                                <Link href="#!" scroll={false} className="btn btn-secondary disabled" role="button" aria-disabled="true">Link</Link>
                            </div>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="button plugin toggle states" code={button12}>
                        <div className="btn-list">
                            <div className="mb-4">
                                <button type="button" className="btn btn-primary btn-wave" data-bs-toggle="button"
                                >Toggle button</button>
                                <button type="button" className="btn btn-secondary active btn-wave" data-bs-toggle="button"
                                    aria-pressed="true">Active toggle button</button>
                                <button type="button" className="btn btn-teal btn-wave" disabled data-bs-toggle="button"
                                >Disabled toggle
                                    button</button>
                            </div>
                            <div>
                                <Link href="#!" scroll={false} className="btn btn-primary btn-wave" role="button" data-bs-toggle="button">Toggle
                                    link</Link>
                                <Link href="#!" scroll={false} className="btn btn-secondary active btn-wave" role="button" data-bs-toggle="button"
                                    aria-pressed="true">Active toggle link</Link>
                                <Link href="#!" scroll={false} className="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
                                    data-bs-toggle="button">Disabled toggle link</Link>
                            </div>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Link functionally caveat" code={button13}>
                        <div className="btn-list">
                            <Link href="#!" scroll={false} className="btn btn-primary disabled" tabIndex={-1} role="button"
                                aria-disabled="true">Primary link</Link>
                            <Link href="#!" scroll={false} className="btn btn-secondary disabled" tabIndex={-1} role="button"
                                aria-disabled="true">Link</Link>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Loading Buttons" code={button14}>
                        <div className="btn-list d-md-flex flex-wrap">
                            <button className="btn btn-primary btn-loader">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                            </button>
                            <button className="btn btn-outline-secondary btn-loader">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                            </button>
                            <button className="btn btn-info-transparent btn-loader">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                            <button className="btn btn-warning-transparent btn-loader">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
                            </button>
                            <button className="btn btn-success btn-loader disabled">
                                <span className="me-2">Disabled</span>
                                <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
                            </button>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Icon Buttons" code={button15}>
                        <div className="btn-list d-md-flex d-block">
                            <div className="mb-md-0 mb-2">
                                <button className="btn btn-icon btn-primary btn-wave">
                                    <i className="ri-bank-fill"></i>
                                </button>
                                <button className="btn btn-icon btn-info btn-wave">
                                    <i className="ri-medal-line"></i>
                                </button>
                                <button className="btn btn-icon btn-danger btn-wave">
                                    <i className="ri-archive-line"></i>
                                </button>
                                <button className="btn btn-icon btn-warning btn-wave me-5">
                                    <i className="ri-calendar-2-line"></i>
                                </button>
                            </div>
                            <div className="mb-md-0 mb-2">
                                <button className="btn btn-icon btn-primary-transparent rounded-pill btn-wave">
                                    <i className="ri-home-smile-line"></i>
                                </button>
                                <button className="btn btn-icon btn-secondary-transparent rounded-pill btn-wave">
                                    <i className="ri-delete-bin-line"></i>
                                </button>
                                <button className="btn btn-icon btn-success-transparent rounded-pill btn-wave">
                                    <i className="ri-notification-3-line"></i>
                                </button>
                                <button className="btn btn-icon btn-danger-transparent rounded-pill btn-wave me-5">
                                    <i className="ri-chat-settings-line"></i>
                                </button>
                            </div>
                            <div className="">
                                <button className="btn btn-icon btn-outline-primary rounded-pill btn-wave">
                                    <i className="ri-phone-line"></i>
                                </button>
                                <button className="btn btn-icon btn-outline-teal rounded-pill btn-wave">
                                    <i className="ri-customer-service-2-line"></i>
                                </button>
                                <button className="btn btn-icon btn-outline-success rounded-pill btn-wave">
                                    <i className="ri-live-line"></i>
                                </button>
                                <button className="btn btn-icon btn-outline-secondary rounded-pill btn-wave">
                                    <i className="ri-save-line"></i>
                                </button>
                            </div>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Social Buttons" code={button16}>
                        <div className="btn-list">
                            {SocialIconButtons.map((idx) => (
                                <Button variant={idx.class} className="btn btn-icon btn-wave waves-effect waves-light" key={Math.random()}>
                                    <i className={`ri-${idx.class}-line`}></i>
                                </Button>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Sizes" code={button17}>
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary btn-sm btn-wave">Small
                                        button</button>
                                    <button type="button" className="btn btn-secondary btn-wave">Default
                                        button</button>
                                    <button type="button" className="btn btn-success btn-lg btn-wave">Large
                                        button</button>
                                </div>
                            </ShowCode>

                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>

                            <ShowCode title="Button Widths" code={button18}>
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary btn-w-xs btn-wave">XS</button>
                                    <button type="button" className="btn btn-secondary btn-w-sm btn-wave">SM</button>
                                    <button type="button" className="btn btn-warning btn-w-md btn-wave">MD</button>
                                    <button type="button" className="btn btn-info btn-w-lg btn-wave">LG</button>
                                </div>
                            </ShowCode>


                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>

                    <ShowCode title="Buttons With Different Shadows" code={button19}>
                        <div className="btn-list d-flex">
                            <div className="me-5">
                                <button className="btn btn-primary shadow-sm btn-wave">Button</button>
                                <button className="btn btn-primary shadow btn-wave">Button</button>
                                <button className="btn btn-primary shadow-lg btn-wave">Button</button>
                            </div>
                            <div>
                                <button className="btn btn-secondary btn-sm shadow-sm btn-wave">Button</button>
                                <button className="btn btn-info shadow btn-wave">Button</button>
                                <button className="btn btn-lg btn-success shadow-lg btn-wave">Button</button>
                            </div>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Different Colored Buttons With Shadows" code={button20}>

                        <div className="btn-list">
                            {ColoredButtons.map((idx) => (
                                <Button variant={idx.class} className={`btn shadow-${idx.class} btn-wave`} key={Math.random()}>Button</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Raised Buttons" code={button21}>
                        <div className="btn-list">
                            {ColoredButtons.map((idx) => (
                                <Button variant={idx.class} className="btn  btn-raised-shadow btn-wave" key={Math.random()}>Button</Button>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Label Buttons" code={button22}>

                        <div className="btn-list">
                            <button className="btn btn-primary label-btn">
                                <i className="ri-chat-smile-line label-btn-icon me-2"></i>
                                Primary
                            </button>
                            <button className="btn btn-secondary label-btn">
                                <i className="ri-settings-4-line label-btn-icon me-2"></i>
                                Secondary
                            </button>
                            <button className="btn btn-warning label-btn rounded-pill">
                                <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
                                Warning
                            </button>
                            <button className="btn btn-info label-btn rounded-pill">
                                <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
                                Info
                            </button>
                            <button className="btn btn-success label-btn label-end">
                                Success
                                <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
                            </button>
                            <button className="btn btn-danger label-btn label-end rounded-pill">
                                Cancel
                                <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
                            </button>
                        </div>

                    </ShowCode>

                </Col>
                <Col xl={12}>

                    <ShowCode title="Custom Buttons" code={button23}>

                        <div className="btn-list">
                            <button className="btn btn-info custom-button rounded-pill">
                                <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
                                Twitter
                            </button>
                            <button className="btn btn-teal-light btn-border-down">Border</button>
                            <button className="btn btn-secondary-light btn-border-start">Border</button>
                            <button className="btn btn-purple-light btn-border-end">Border</button>
                            <button className="btn btn-warning-light btn-border-top">Border</button>
                            <button className="btn btn-secondary btn-glare"><span>Glare Button</span></button>
                            <button className="btn btn-danger btn-hover btn-hover-animate">Like</button>
                            <button className="btn btn-success btn-darken-hover">Hover</button>
                            <button className="btn btn-orange btn-custom-border">Hover</button>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={12}>

                    <ShowCode title="Block Buttons" code={button24}>
                        <div className="btn-list">
                            <div className="d-grid gap-2 mb-4">
                                <button className="btn btn-primary btn-wave" type="button">Button</button>
                                <button className="btn btn-secondary btn-wave" type="button">Button</button>
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-info btn-wave" type="button">Button</button>
                                <button className="btn btn-success btn-wave" type="button">Button</button>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-danger btn-wave" type="button">Button</button>
                                <button className="btn btn-warning btn-wave" type="button">Button</button>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-teal me-md-2 btn-wave" type="button">Button</button>
                                <button className="btn btn-purple btn-wave" type="button">Button</button>
                            </div>
                        </div>
                    </ShowCode>

                </Col>
            </Row>

        </>
    )
}

export default Buttons
