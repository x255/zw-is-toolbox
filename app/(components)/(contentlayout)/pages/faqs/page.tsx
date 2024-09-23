"use client";
import React from 'react'
import { Accordion, Card, Col, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
const Faqs = () => {
    return (
        <>
            <Seo title={"Faq's"} />

            <Pageheader title="Faq's" heading="Pages" active="Faq's" />
            <Row className=" justify-content-center mb-5">
                <Col xl={12}>
                    <Row className=" justify-content-center">
                        <Col xl={6}>
                            <div className="text-center p-3 faq-header mb-4">
                                <h5 className="mb-1 text-primary op-5 fw-semibold">{`F.A.Q's`}</h5>
                                <h4 className="mb-1 fw-semibold">Frequently Asked Questions</h4>
                                <p className="fs-15 text-muted op-7">We have shared some of the most frequently asked questions to help you out! </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={10}>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        General Topics ?
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion className=" accordion-customicon1 accordion-primary" id="accordionFAQ1" defaultActiveKey='0'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header as='h2' id="headingcustomicon2One">
                                                Where can I subscribe to your newsletter?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header as='h2' id="headingcustomicon2Two">
                                                Where can in edit my address?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first{` item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header as='h2' id="headingcustomicon2Three">
                                                What are your opening hours?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's `}accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='3'>
                                            <Accordion.Header as='h2' id="headingcustomicon2Four">
                                                Do I have the right to return an item?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Customer Support ?
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion className="accordion-customicon1 accordion-primary" id="accordionFAQ3" defaultActiveKey='1'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header as='h2' id="headingcustomicon3One">
                                                What is the order procedure?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header as='h2' id="headingcustomicon3Two">
                                                How and when do I receive the invoices?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header as='h2' id="headingcustomicon3Three">
                                                Which method of ordering is best for me?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first{`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='3'>
                                            <Accordion.Header as='h2' id="headingcustomicon3Four">
                                                What does an order cost?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classNamees that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Still Have Questions ?
                                        <span className="subtitle fw-normal text-muted d-block fs-12">
                                            You can post your questions here,our support team is always active.
                                        </span>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="user-name" className="form-label">Your Name</label>
                                            <Form.Control type="text" className="l form-control-light" id="user-name" placeholder="Enter Your Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="user-email" className="form-label">Email Id</label>
                                            <Form.Control type="text" className=" form-control-light" id="user-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="text-area" className="form-label">Textarea</label>
                                            <textarea className="form-control form-control-light" placeholder="Enter your question here" id="text-area" rows={2}></textarea>
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-primary btn-wave float-end">Send</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Faqs
