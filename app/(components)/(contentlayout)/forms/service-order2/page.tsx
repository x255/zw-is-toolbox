"use client";
import React, { useState, useRef } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SignatureCanvas from 'react-signature-canvas';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { floatinglabels1, floatinglabels2, floatinglabels3, floatinglabels4, floatinglabels5, floatinglabels6, floatinglabels7 } from '../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';

const ServiceOrderForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const sigCanvas = useRef({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Object.fromEntries(data.entries()));
        // Handle form submission
    };

    return (
        <>
            <Seo title="Service Order Form" />
            <Pageheader title="Service Order Form" />
            <Form onSubmit={handleSubmit}>
                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                            Customer Identification Information
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                        <Row className="mb-3">
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Title:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">First Name:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Surname:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">ID Number (Zimbabwean Nationals):</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Passport Number (Foreign Nationals Only):</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-date" className="form-label">Date of Birth</label>
                                <Form.Control type="date" id="input-date" />
                            </div>
                        </Row>
                        <Row className="mb-3">
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Gender:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-email" className="form-label">Type Email</label>
                                <Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
                            </div>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Residential Address:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Installation Area:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">GPS Coordinates for Installation Address:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Town/City:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Telephone number:</label>
                                <Form.Control type="number" id="input" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                        </Row>
                        <Row className="mb-3">
                        </Row>
                    </Card.Body>
                </Card>
                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                            KYC Documents
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Copy of ID</Form.Label>
                            <Form.Control type="file" name="copyOfID" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Passport</Form.Label>
                            <Form.Control type="file" name="passport" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Proof of Residence</Form.Label>
                            <Form.Control type="file" name="proofOfResidence" required />
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                            Service Requested
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                        <Row className="mb-3">
                            <Form.Group className="mb-3">
                                <Form.Label>WibroniX Pay As You Go Top Up</Form.Label>
                                <Form.Check type="checkbox" label="2GB" value="2GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="3GB" value="3GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="5GB" value="5GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="10GB" value="10GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="15GB" value="15GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="20GB" value="20GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="25GB" value="25GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="30GB" value="30GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="60GB" value="60GB" name="payAsYouGo" />
                                <Form.Check type="checkbox" label="100GB" value="100GB" name="payAsYouGo" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>WibroniX Unlimited</Form.Label>
                                <Form.Check type="checkbox" label="Unlimited" value="Unlimited" name="wibronixUnlimited" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Business Packages</Form.Label>
                            <Form.Check type="checkbox" label="Nano Office" value="Nano Office" name="businessPackage" />
                            <Form.Check type="checkbox" label="Micro Office" value="Micro Office" name="businessPackage" />
                            <Form.Check type="checkbox" label="Small Office" value="Small Office" name="businessPackage" />
                        </Form.Group>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                         Order Details
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                    <Row className="mb-3">
                    <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Order Number:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Serial Number:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Dealer Number:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                    </Row>
                    </Card.Body>
                </Card>
                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                        Installation Information (to be completed by Sales Representative)
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                    <Row className="mb-3">
                    <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">First Name:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Surname:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Company/Reseller:</label>
                                <Form.Control type="text" id="input" />
                            </Col>

                    </Row>
                    <Row className="mb-3">
                            <Col xl={4} lg={6} md={6} sm={12} >

                            <Form.Group className="mb-3">
                    <Form.Label>Payment Received</Form.Label>
                    <Form.Check type="checkbox" label="Yes" name="paymentReceived" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select name="paymentMethod" required>
                        <option value="EcoCash">EcoCash</option>
                        <option value="PayNow">PayNow</option>
                        <option value="EcoCash Bill Payment">EcoCash Bill Payment</option>
                        <option value="Econet Shops">Econet Shops</option>
                        <option value="Bank Deposit/Transfer">Bank Deposit/Transfer</option>
                        <option value="Cash">Cash</option>
                    </Form.Select>
                </Form.Group>

                            </Col>
                    </Row>

                    </Card.Body>
                </Card> 

                <Card className=" custom-card">
                    <Card.Header>
                        <Card.Title>
                            Declaration by Customer
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className="vstack gap-3">
                    1. I accept that as a condition of sale of this SIM card, I shall not dispose of it to any other person, for any reason
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;whatsoever, without the written consent of Liquid Home and in adherence to any conditions Liquid Home may stipulate.
                        <br />
                        <br />
                    2. I accept that should I lose this SIM card or damage it, Liquid Home shall not be obliged to replace it unless I produce
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;a copy of my ID/Passport/Driver’s Licence.
                        <br />
                        <br />
                    3. I confirm I have been informed that the WibroniX Services are only available in the areas outlined on the Liquid Home
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;website at https://zw.liquidhome.tech and I accept that I shall only be able to access the WibroniX Services from the
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Service Address provided to Liquid Home.
                        <br />
                        <br />
                    4. I confirm and declare that all information provided is correct and true.
                    <Row className="mb-3">
                    <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Name:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">ID/Passport Number:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-date" className="form-label">Date</label>
                                <Form.Control type="date" id="input-date" />
                            </div>
                    </Row>
                    <Row className="mb-3">
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>Sign in the below space:</strong>
                    <Form.Group className="mb-3">
                    <Form.Label>Signature</Form.Label>
                    <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
                </Form.Group>
                    </Row>
                    </Card.Body>
                </Card>                               
                <Card className="mb-3">
                <Card.Header>
                        <Card.Title>
                        Terms and Conditions
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>

                <h2>Signature</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Signature</Form.Label>
                    <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form >
        </>
    );
};

export default ServiceOrderForm;

