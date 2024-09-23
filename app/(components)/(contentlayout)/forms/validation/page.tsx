"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { validation1, validation2, validation3, validation4, validation5 } from '../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode'
const Validation = () => {
    return (
        <>
            <Seo title={"Validation"} />

            <Pageheader title="Validation" heading="Forms" active="Validation" />
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Validation" code={validation1}>
                        <form className="row g-3 needs-validation" noValidate>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">First name</label>
                                <Form.Control type="text" id="validationCustom01" defaultValue="Mark"
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                <Form.Control type="text" id="validationCustom02" defaultValue="Otto"
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    <Form.Control type="text" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationCustom03" className="form-label">City</label>
                                <Form.Control type="text" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom04" className="form-label">State</label>
                                <Form.Select id="validationCustom04" required defaultValue="Choose...">
                                    <option disabled>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                <Form.Control type="text" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue=""
                                        id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <ShowCode title="Browser Default Validation" code={validation2}>
                        <form className="row g-3">
                            <div className="col-md-4">
                                <label htmlFor="validationDefault01" className="form-label">First name</label>
                                <Form.Control type="text" id="validationDefault01"
                                    defaultValue="Mark" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                <Form.Control type="text" id="validationDefault02"
                                    defaultValue="Otto" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <Form.Control type="text" id="validationDefaultUsername"
                                        aria-describedby="inputGroupPrepend2" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                <Form.Control type="text" id="validationDefault03" required />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationDefault04" className="form-label">State</label>
                                <Form.Select id="validationDefault04" required defaultValue="Choose...">
                                    <option disabled >Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                <Form.Control type="text" id="validationDefault05" required />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue=""
                                        id="invalidCheck2" required />
                                    <label className="form-check-label" htmlFor="invalidCheck2">
                                        Agree to terms and conditions
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Server side Validation" code={validation3}>
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <label htmlFor="validationServer01" className="form-label">First
                                            name</label>
                                        <Form.Control type="text" className=" is-valid"
                                            id="validationServer01" defaultValue="Mark" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationServer02" className="form-label">Last
                                            name</label>
                                        <Form.Control type="text" className=" is-valid"
                                            id="validationServer02" defaultValue="Otto" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <Col md={4}>
                                        <Form.Label htmlFor="validationServerUsername"
                                        >Username</Form.Label>
                                        <InputGroup className="has-validation flex-wrap">
                                            <InputGroup.Text className="input-group-text" id="inputGroupPrepend3">@</InputGroup.Text>
                                            <Form.Control type="text" className="form-control is-invalid"
                                                id="validationServerUsername"
                                                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                                required />
                                            <Form.Control.Feedback id="validationServerUsernameFeedback"
                                                className="invalid-feedback">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Col>
                                    <div className="col-md-6">
                                        <label htmlFor="validationServer03" className="form-label">City</label>
                                        <Form.Control type="text" className=" is-invalid"
                                            id="validationServer03"
                                            aria-describedby="validationServer03Feedback" required />
                                        <div id="validationServer03Feedback" className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <Col md={3}>
                                        <Form.Label htmlFor="validationServer04">State</Form.Label>
                                        <Form.Select className="form-select is-invalid" id="validationServer04" defaultValue="Choose..."
                                            aria-describedby="validationServer04Feedback" required>
                                            <option disabled >Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                        <Form.Control.Feedback id="validationServer04Feedback" className="invalid-feedback">
                                            Please select a valid state.
                                        </Form.Control.Feedback>
                                    </Col>
                                    <div className="col-md-3">
                                        <label htmlFor="validationServer05" className="form-label">Zip</label>
                                        <Form.Control type="text" className="is-invalid"
                                            id="validationServer05"
                                            aria-describedby="validationServer05Feedback" required />
                                        <div id="validationServer05Feedback" className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input is-invalid" type="checkbox"
                                                defaultValue="" id="invalidCheck3"
                                                aria-describedby="invalidCheck3Feedback" required />
                                            <label className="form-check-label" htmlFor="invalidCheck3">
                                                Agree to terms and conditions
                                            </label>
                                            <div id="invalidCheck3Feedback" className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit
                                            form</button>
                                    </div>
                                </form>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Tooltips" code={validation4}>
                                <form className="row g-3 needs-validation" noValidate>
                                    <div className="col-md-4 position-relative">
                                        <label htmlFor="validationTooltip01" className="form-label">First
                                            name</label>
                                        <Form.Control type="text" id="validationTooltip01"
                                            defaultValue="Mark" required />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4 position-relative">
                                        <label htmlFor="validationTooltip02" className="form-label">Last
                                            name</label>
                                        <Form.Control type="text" id="validationTooltip02"
                                            defaultValue="Otto" required />
                                        <div className="valid-tooltip">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4 position-relative">
                                        <label htmlFor="validationTooltipUsername"
                                            className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text"
                                                id="validationTooltipUsernamePrepend">@</span>
                                            <Form.Control type="text"
                                                id="validationTooltipUsername"
                                                aria-describedby="validationTooltipUsernamePrepend"
                                                required />
                                            <div className="invalid-tooltip">
                                                Please choose a unique and valid username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 position-relative">
                                        <label htmlFor="validationTooltip03" className="form-label">City</label>
                                        <Form.Control type="text" id="validationTooltip03"
                                            required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <div className="col-md-3 position-relative">
                                        <label htmlFor="validationTooltip04" className="form-label">State</label>
                                        <Form.Select id="validationTooltip04" required defaultValue="Choose...">
                                            <option disabled >Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                        <div className="invalid-tooltip">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 position-relative">
                                        <label htmlFor="validationTooltip05" className="form-label">Zip</label>
                                        <Form.Control type="text" id="validationTooltip05"
                                            required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit
                                            form</button>
                                    </div>
                                </form>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Supported elements" code={validation5}>
                        <Form className="was-validated">
                            <div className="mb-3">
                                <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                                <Form.Control as="textarea" isInvalid className="" id="validationTextarea"
                                    placeholder="Required example textarea" required></Form.Control>
                                <Form.Control.Feedback>
                                    Please enter a message in the textarea.
                                </Form.Control.Feedback>
                            </div>
                            <Form.Check type="checkbox" className="form-check mb-3" id="validationFormCheck1"
                                required isInvalid label="Check this checkbox" feedback="Example invalid feedback text" feedbackType='invalid' />
                            <Form.Check type="radio" className="" id="validationFormCheck2" name="radio-stacked"
                                required isInvalid label="Toggle this radio" />
                            <Form.Check type="radio" className="form-check mb-3" id="validationFormCheck3" name="radio-stacked"
                                required isInvalid label="Or toggle this other radio" feedback="More example invalid feedback textt" feedbackType='invalid' />
                            <Form.Group className="mb-3" >
                                <Form.Select className="" required aria-label="select example" isInvalid>
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback>Example invalid select feedback</Form.Control.Feedback>
                            </Form.Group>

                            <div className="mb-3">
                                <Form.Control type="file" aria-label="file example"
                                    required />
                                <Form.Control.Feedback>Example invalid form file feedback</Form.Control.Feedback>
                            </div>

                            <div className="mb-3">
                                <Button variant='primary' className="btn " type="submit" disabled>Submit
                                    form</Button>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Validation
