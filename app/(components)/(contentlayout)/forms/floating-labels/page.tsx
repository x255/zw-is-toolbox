"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, FloatingLabel, Form, Row } from 'react-bootstrap'

import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { floatinglabels1, floatinglabels2, floatinglabels3, floatinglabels4, floatinglabels5, floatinglabels6, floatinglabels7 } from '../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Floatinglabels = () => {
    return (
        <>
            <Seo title={"Floating Labels"} />

            <Pageheader title="Floating Labels" heading="Forms" active="Floating Labels" />

            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Examples" code={floatinglabels1}>
                        <div className="form-floating mb-3">
                            <Form.Control type="email" id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <Form.Control type="password" id="floatingPassword"
                                placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <ShowCode title="Readonly plain text" code={floatinglabels2}>
                        <div className="form-floating mb-3">
                            <input type="email" readOnly className="form-control-plaintext"
                                id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                            <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" readOnly className="form-control-plaintext"
                                id="floatingPlaintextInput" placeholder="name@example.com"
                                defaultValue="name@example.com" />
                            <label htmlFor="floatingPlaintextInput">Input with value</label>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Floating Labels With Pre Defined Values" code={floatinglabels3}>
                        <Form.Floating className="my-3">
                            <Form.Control type="email" className="" id="floatingInputValue"
                                placeholder="name@example.com" defaultValue="test@example.com" />
                            <Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
                        </Form.Floating>
                        <div className="form-flotin">
                            <Form.Control type="email" className="is-invalid"
                                id="floatingInputInvalid" placeholder="name@example.com"
                                defaultValue="test@example.com" />
                            <Form.Label className='fw-normal' htmlFor="floatingInputInvalid">Invalid input</Form.Label>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Textareas" code={floatinglabels4}>
                        <Form.Floating className=" mb-4">
                            <Form.Control as="textarea" className="" placeholder="Leave a comment here"
                                id="floatingTextarea"></Form.Control>
                            <label htmlFor="floatingTextarea">Description</label>
                        </Form.Floating>
                        <Form.Floating className="">
                            <Form.Control as="textarea" className="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea2" rows={1} disabled></Form.Control>
                            <Form.Label htmlFor="floatingTextarea2">Disabled</Form.Label>
                        </Form.Floating>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Floating Labels In Select" code={floatinglabels5}>
                        <div className="form-floating">
                            <Form.Select id="floatingSelect"
                                aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <label htmlFor="floatingSelect">Works with selects</label>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Floating Labels With Layouts" code={floatinglabels6}>
                        <div className="row g-2">
                            <div className="col-md">
                                <Form.Floating className="">
                                    <Form.Control type="email" className="form-control" id="floatingInputGrid"
                                        placeholder="name@example.com" defaultValue="mdo@example.com" />
                                    <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
                                </Form.Floating>
                            </div>
                            <div className="col-md">
                                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                    <Form.Select aria-label="Floating label select example" className='form-select'>
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>

                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Floating Label Colors" code={floatinglabels7}>
                        <Row className=" gy-4">
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-primary">
                                    <input type="email" className="form-control" id="floatingInputprimary" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputprimary">primary</label>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-secondary">
                                    <input type="email" className="form-control" id="floatingInputsecondary" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputsecondary">secondary</label>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-warning">
                                    <input type="email" className="form-control" id="floatingInputwarning" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputwarning">warning</label>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-info">
                                    <input type="email" className="form-control" id="floatingInputinfo" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputinfo">info</label>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-success">
                                    <input type="email" className="form-control" id="floatingInputsuccess" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputsuccess">success</label>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="form-floating mb-4 floating-danger">
                                    <input type="email" className="form-control" id="floatingInputdanger" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputdanger">danger</label>
                                </div>
                            </div>
                        </Row>
                    </ShowCode>

                </Col>
            </Row>

        </>
    )
}

export default Floatinglabels
