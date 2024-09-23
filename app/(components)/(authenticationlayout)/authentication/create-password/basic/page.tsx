"use client";
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';

const Basic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <Seo title={"CreatePassword-Basic"} />
            <div className="container-lg">
                <Row className=" justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className='col-12'>
                        <div className="my-5 d-flex justify-content-center">
                            <Link href="/dashboards/crm/">
                                <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className=" custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Create Password</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <label htmlFor="create-password" className="form-label text-default">Password</label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control-lg" id="create-password" placeholder="password" />
                                            <Button variant='light' className="btn" type="button" onClick={() => setpasswordshow1(!passwordshow1)}>
                                                <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow2) ? 'text' : 'password'} className="form-control-lg" id="create-confirmpassword" placeholder="password" />
                                            <Button variant='light' className="btn" onClick={() => setpasswordshow2(!passwordshow2)} type="button">
                                                <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                        </InputGroup>
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid mt-2">
                                        <button className="btn btn-lg btn-primary">Save Password</button>
                                    </Col>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3">Back to home ? <Link href="/dashboards/crm" className="text-primary">Click Here</Link></p>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="btn-list text-center">
                                    <button className="btn btn-icon btn-light">
                                        <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                    </button>
                                    <button className="btn btn-icon btn-light">
                                        <i className="ri-google-line fw-bold text-dark op-7"></i>
                                    </button>
                                    <button className="btn btn-icon btn-light">
                                        <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Basic;
