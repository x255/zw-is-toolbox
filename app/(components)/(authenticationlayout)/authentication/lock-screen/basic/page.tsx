"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';

const Basic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);

    return (
        <>
            <Seo title={"LockScreen-Basic"} />
            <div className="container-lg">
                <Row className="row justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link href={`/dashboards/crm/`}>
                                <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className=" custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Lock Screen</p>
                                <p className="mb-3 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                                    </div>
                                </div>
                                <Row className=" gy-3">
                                    <Col xl={12} className=" mb-2">
                                        <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow1) ? 'text' : 'password'} className="form-control-lg" id="lockscreen-password" placeholder="password" />
                                            <Button variant='light' className="btn" onClick={() => setpasswordshow1(!passwordshow1)} type="button" id="button-addon2">
                                                <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
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
                                    <Col xl={12} className=" d-grid mt-2">
                                        <Link href="/dashboards/crm" className="btn btn-lg btn-primary">Unlock</Link>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3 mb-0">Try unlock with different methods <Link className="text-success" href="#!" scroll={false}><u>Finger print</u></Link> / <Link className="text-success" href="#!"><u>Face Id</u></Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Basic
