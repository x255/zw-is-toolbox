"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import { inputs1, inputs2, inputs3, inputs4, inputs5, inputs6, inputs7, inputs8 } from '../../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Inputs = () => {
    return (
        <>
            <Seo title={"Inputs"} />

            <Pageheader title="Inputs" heading="Form Elements" active="Inputs" />
            <Row>
                <Col xl={12}>
                    <ShowCode title="Input Types" code={inputs1}>
                        <Row className="gy-4">
                            <Col xl={4} lg={6} md={6} sm={12} >
                                <label htmlFor="input-label" className="form-label">Basic Input:</label>
                                <Form.Control type="text" id="input" />
                            </Col>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-label" className="form-label">Form Input With Label</label>
                                <Form.Control type="text" id="input-label" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-placeholder" className="form-label">Form Input With Placeholder</label>
                                <Form.Control type="text" id="input-placeholder" placeholder="Placeholder" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-text" className="form-label">Type Text</label>
                                <Form.Control type="text" id="input-text" placeholder="Text" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-number" className="form-label">Type Number</label>
                                <Form.Control type="number" id="input-number" placeholder="Number" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-password" className="form-label">Type Password</label>
                                <Form.Control type="password" id="input-password" placeholder="Password" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-email" className="form-label">Type Email</label>
                                <Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-tel" className="form-label">Type Tel</label>
                                <Form.Control type="tel" id="input-tel" placeholder="+1100-2031-1233" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-date" className="form-label">Type Date</label>
                                <Form.Control type="date" id="input-date" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-week" className="form-label">Type Week</label>
                                <Form.Control type="week" id="input-week" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-month" className="form-label">Type Month</label>
                                <Form.Control type="month" id="input-month" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-time" className="form-label">Type Time</label>
                                <Form.Control type="time" id="input-time" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-datetime-local" className="form-label">Type datetime-local</label>
                                <Form.Control type="datetime-local" id="input-datetime-local" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-search" className="form-label">Type Search</label>
                                <Form.Control type="search" id="input-search" placeholder="Search" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-submit" className="form-label">Type Submit</label>
                                <Form.Control type="submit" id="input-submit" defaultValue="Submit" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-reset" className="form-label">Type Reset</label>
                                <Form.Control type="reset" id="input-reset" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-button" className="form-label">Type Button</label>
                                <Form.Control type="button" className=" btn btn-primary" id="input-button" defaultValue="Button" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <Row>
                                    <Col xl={3}>

                                        <Form.Label>Type Color</Form.Label>
                                        <Form.Control className="form-control form-input-color m-0" type="color" defaultValue="#136bd0" />
                                    </Col>
                                    <Col xl={5}>
                                        <Form.Check>
                                            <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                                            <Form.Check className="ms-2" type="checkbox"
                                                defaultValue="" defaultChecked />
                                        </Form.Check>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="form-check">
                                            <p className="mb-3 px-0 text-muted">Type Radio</p>
                                            <Form.Check
                                                className="ms-2" type="radio" defaultChecked />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-file" className="form-label">Type File</label>
                                <Form.Control type="file" id="input-file" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label">Type Url</label>
                                <Form.Control type="url" name="website" placeholder="http://example.com" />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-disabled" className="form-label">Type Disabled</label>
                                <Form.Control type="text" id="input-disabled" placeholder="Disabled input" disabled />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-readonlytext" className="form-label">Input Readonly Text</label>
                                <input type="text" readOnly className="form-control-plaintext"
                                    id="input-readonlytext" defaultValue="email@example.com" />

                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="disabled-readonlytext" className="form-label">Disabled Readonly Input</label>
                                <Form.Control type="text" defaultValue="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled readOnly />
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <Form.Label>Type Readonly Input</Form.Label>
                                <Form.Control type="text" defaultValue="Readonly input here..." aria-label="readonly input example" readOnly />
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="text-area" className="form-label">Textarea</label>
                                <textarea className="form-control" id="text-area" rows={1}></textarea>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="input-DataList" className="form-label">Datalist example</label>
                                <Form.Control list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
                                <datalist id="datalistOptions">
                                    <option defaultValue="San Francisco">
                                    </option>
                                    <option defaultValue="New York">
                                    </option>
                                    <option defaultValue="Seattle">
                                    </option>
                                    <option defaultValue="Los Angeles">
                                    </option>
                                    <option defaultValue="Chicago">
                                    </option>
                                </datalist>
                            </div>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Input shapes" code={inputs2}>
                        <div className="row gy-3">
                            <div className="col-xl-12">
                                <label htmlFor="input-noradius" className="form-label">Input With No Radius</label>
                                <Form.Control type="text" className="form-control rounded-0" id="input-noradius" placeholder="No Radius" />
                            </div>
                            <div className="col-xl-12">
                                <label htmlFor="input-rounded" className="form-label">Input With Radius</label>
                                <Form.Control type="text" className="form-control" id="input-rounded" placeholder="Default Radius" />
                            </div>
                            <div className="col-xl-12">
                                <label htmlFor="input-rounded-pill" className="form-label">Rounded Input</label>
                                <Form.Control type="text" className="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Input border Styles" code={inputs3}>
                        <div className="row gy-3">
                            <div className="col-xl-12">
                                <label htmlFor="input-rounded1" className="form-label">Default</label>
                                <Form.Control type="text" id="input-rounded1" placeholder="Default" />
                            </div>
                            <div className="col-xl-12">
                                <label htmlFor="input-rounded2" className="form-label">Dotted Input</label>
                                <Form.Control type="text" className=" border-dotted" id="input-rounded2" placeholder="Dotted" />
                            </div>
                            <div className="col-xl-12">
                                <label htmlFor="input-rounded3" className="form-label">Dashed Input</label>
                                <Form.Control type="text" className=" border-dashed" id="input-rounded3" placeholder="Dashed" />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Input Sizing" code={inputs4}>
                        <Form.Control className="form-control-sm mb-3" type="text"
                            placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                        <input className="form-control mb-3" type="text" placeholder="Default input"
                            aria-label="default input example" />
                        <Form.Control className=" form-control-lg" type="text"
                            placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Overview" code={inputs5}>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email
                                    address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">{`We'll`}
                                    never share your email
                                    with
                                    anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check
                                    me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Form text" code={inputs6}>
                                <label htmlFor="inputPassword5" className="form-label">Password</label>
                                <input type="password" id="inputPassword5" className="form-control"
                                    aria-describedby="passwordHelpBlock" />
                                <div id="passwordHelpBlock" className="form-text">
                                    Your password must be 8-20 characters long, contain letters and
                                    numbers,
                                    and
                                    must not contain spaces, special characters, or emoji.
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="  Inline text can use any typical inline HTML element with nothing more
                                        than
                                        the .form-text class." code={inputs7}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="password" id="inputPassword6" className="form-control"
                                            aria-describedby="passwordHelpInline" />
                                    </div>
                                    <div className="col-auto">
                                        <span id="passwordHelpInline" className="form-text">
                                            Must be 8-20 characters long.
                                        </span>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Disabled forms" code={inputs8}>
                        <form>
                            <fieldset disabled>
                                <legend>Disabled fieldset example</legend>
                                <div className="mb-3">
                                    <label htmlFor="disabledTextInput" className="form-label  ">Disabled
                                        input</label>
                                    <input type="text" id="disabledTextInput" disabled className="form-control"
                                        placeholder="Disabled input" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Disabled select
                                        menu</label>
                                    <select id="disabledSelect" disabled className="form-select">
                                        <option>Disabled select</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                            id="disabledFieldsetCheck" disabled />
                                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                            {`  Can't`} check this
                                        </label>
                                    </div>
                                </div>
                                <Button type="submit" className="btn btn-primary">Submit</Button>
                            </fieldset>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Inputs
