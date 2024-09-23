"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
import { formlayout1, formlayout2, formlayout3, formlayout4, formlayout5, formlayout6, formlayout7, formlayout8, formlayout9, formlayout10, formlayout11 } from '../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Formlayouts = () => {

    return (
        <>
            <Seo title={"Form Layouts"} />

            <Pageheader title="Form Layouts" heading="Forms" active="Form Layouts" />
            <Row>
                <Col xl={6}>
                    <ShowCode title="Vertical Forms" code={formlayout1}>
                        <div className="mb-3">
                            <label htmlFor="form-text" className="form-label fs-14 text-dark">Enter name</label>
                            <Form.Control type="text" id="form-text" placeholder="full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="form-password" className="form-label fs-14 text-dark">Enter
                                Password</label>
                            <Form.Control type="password" id="form-password" placeholder="password" />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                                required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Accept Policy
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Horizontal  Forms" code={formlayout2}>
                        <form>
                            <Row className=" mb-3">
                                <label htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <Form.Control type="email" id="inputEmail3" />
                                </div>
                            </Row>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3"
                                    className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <Form.Control type="password" id="inputPassword3" />
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios1" value="option1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Prelims
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios2" value="option3"
                                            disabled />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Mains
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                            id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Certified
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Vertical Forms with icon" code={formlayout3}>
                        <div className="mb-3">
                            <label htmlFor="form-text1" className="form-label fs-14 text-dark">Enter name</label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="ri-user-line"></i></div>
                                <Form.Control type="text" id="form-text1" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="form-password1" className="form-label fs-14 text-dark">Enter
                                Password</label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="ri-lock-line"></i></div>
                                <Form.Control type="password" id="form-password1" placeholder="" />
                            </div>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck1"
                                required />
                            <label className="form-check-label" htmlFor="invalidCheck1">
                                Accept Policy
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Horizontal form With Icons" code={formlayout4}>
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail1"
                                    className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <div className="input-group">
                                        <Form.Control type="email" id="inputEmail1" />
                                        <div className="input-group-text">
                                            <i className="ri-mail-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword1"
                                    className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <div className="input-group">
                                        <Form.Control type="password" id="inputPassword1" />
                                        <div className="input-group-text">
                                            <i className="ri-lock-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios4" value="option1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios4">
                                            Prelims
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios3" value="option3"
                                            disabled />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Mains
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                            id="gridCheck2" />
                                        <label className="form-check-label" htmlFor="gridCheck2">
                                            Certified
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Inline forms" code={formlayout5}>
                        <Row className=" row-cols-lg-auto g-3 align-items-center">
                            <div className="col-12">
                                <label className="visually-hidden"
                                    htmlFor="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <Form.Control type="text"
                                        id="inlineFormInputGroupUsername" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="visually-hidden"
                                    htmlFor="inlineFormSelectPref">Preference</label>
                                <Form.Select id="inlineFormSelectPref">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        id="inlineFormCheck" />
                                    <label className="form-check-label" htmlFor="inlineFormCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Row>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Column sizing" code={formlayout6}>
                        <div className="row g-3">
                            <div className="col-sm-7">
                                <Form.Control type="text" placeholder="City"
                                    aria-label="City" />
                            </div>
                            <div className="col-sm">
                                <Form.Control type="text" placeholder="State"
                                    aria-label="State" />
                            </div>
                            <div className="col-sm">
                                <Form.Control type="text" placeholder="Zip"
                                    aria-label="Zip" />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Utilities" code={formlayout7}>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                            <Form.Control type="text" id="formGroupExampleInput"
                                placeholder="Example input placeholder" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                            <Form.Control type="text" id="formGroupExampleInput2"
                                placeholder="Another input placeholder" />
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <ShowCode title="Horizontal form label sizing" code={formlayout8}>
                        <Row className=" mb-3">
                            <label htmlFor="colFormLabelSm"
                                className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                            <div className="col-sm-10">
                                <Form.Control type="email" className=" form-control-sm"
                                    id="colFormLabelSm" placeholder="col-form-label-sm" />
                            </div>
                        </Row>
                        <div className="row mb-3">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <Form.Control type="email" id="colFormLabel"
                                    placeholder="col-form-label" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="colFormLabelLg"
                                className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                            <div className="col-sm-10">
                                <Form.Control type="email" className="form-control-lg"
                                    id="colFormLabelLg" placeholder="col-form-label-lg" />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Auto sizing" code={formlayout9}>
                        <form className="row gy-2 gx-3 align-items-center mb-4">
                            <div className="col-auto">
                                <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
                                <Form.Control type="text" id="autoSizingInput"
                                    placeholder="Jane Doe" />
                            </div>
                            <div className="col-auto">
                                <label className="visually-hidden"
                                    htmlFor="autoSizingInputGroup">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <Form.Control type="text"
                                        id="autoSizingInputGroup" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <label className="visually-hidden"
                                    htmlFor="autoSizingSelect">Preference</label>
                                <Form.Select id="autoSizingSelect">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        id="autoSizingCheck" />
                                    <label className="form-check-label" htmlFor="autoSizingCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <span className="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
                            classes.</span>
                        <form className="row gx-3 gy-2 align-items-center mt-0">
                            <div className="col-sm-3">
                                <label className="visually-hidden"
                                    htmlFor="specificSizeInputName">Name</label>
                                <Form.Control type="text" id="specificSizeInputName"
                                    placeholder="Jane Doe" />
                            </div>
                            <div className="col-sm-3">
                                <label className="visually-hidden"
                                    htmlFor="specificSizeInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <Form.Control type="text"
                                        id="specificSizeInputGroupUsername" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <label className="visually-hidden"
                                    htmlFor="specificSizeSelect">Preference</label>
                                <Form.Select id="specificSizeSelect">
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        id="autoSizingCheck2" />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Form grid" code={formlayout10}>
                        <Row>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">First Name</label>
                                <Form.Control type="text" placeholder="First name"
                                    aria-label="First name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name</label>
                                <Form.Control type="text" placeholder="Last name"
                                    aria-label="Last name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Address</label>
                                <div className="row">
                                    <div className="col-xl-12 mb-3">
                                        <Form.Control type="text" placeholder="Street"
                                            aria-label="Street" />
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <Form.Control type="text" placeholder="Landmark"
                                            aria-label="Landmark" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-12 mb-3">
                                        <Form.Control type="text" placeholder="City"
                                            aria-label="City" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-12 mb-3">
                                        <Form.Select id="inputState1">
                                            <option>State</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </div>
                                    <div className="col-xxl-6 col-xl-12 mb-3">
                                        <input type="text" className="form-control" placeholder="Postal/Zip code"
                                            aria-label="Postal/Zip code" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-12 mb-3">
                                        <Form.Select id="inputCountry" >
                                            <option>Country</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Row>
                                    <div className="col-xl-12 mb-3">
                                        <label className="form-label">Email</label>
                                        <Form.Control type="email" placeholder="Email"
                                            aria-label="email" />
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <label className="form-label">D.O.B</label>
                                        <Form.Control type="date"
                                            aria-label="dateofbirth" />
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <div className="row">
                                            <label className="form-label mb-1">Maritial Status</label>
                                            <div className="col-xl-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Married
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        Single
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Col xl={12}>

                                    </Col>
                                </Row>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Contact Number</label>
                                <Form.Control type="number" placeholder="Phone number"
                                    aria-label="Phone number" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Alternative Contact</label>
                                <Form.Control type="number" placeholder="Phone number"
                                    aria-label="Phone number" />
                            </div>
                            <div className="col-md-12">
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </Row>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <ShowCode title="Gutters" code={formlayout11}>
                        <form className="row g-3 mt-0">
                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <Form.Control type="text" placeholder="First name"
                                    aria-label="First name" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Last Name</label>
                                <Form.Control type="text" placeholder="Last name"
                                    aria-label="Last name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <Form.Control type="email" id="inputEmail4" placeholder="Email id" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <Form.Control type="password" id="inputPassword4" placeholder="Password" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <Form.Control type="text" id="inputAddress"
                                    placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                <Form.Control type="text" id="inputAddress2"
                                    placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <Form.Control type="text" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <Form.Select id="inputState" className="form-select-lg">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <Form.Control type="text" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                    <label className="form-check-label" htmlFor="gridCheck3">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Formlayouts
