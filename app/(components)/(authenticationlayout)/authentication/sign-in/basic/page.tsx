"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'

const Basic = () => {

    const [passwordshow, setpasswordshow] = useState(false);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link href="/dashboards/crm">
                                <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className=" custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                                        <input type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name" />
                                    </div>
                                    <div className="col-xl-12 mb-2">
                                        <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link href="/authentication/reset-password/basic/" className="float-end text-danger">Forget password ?</Link></label>
                                        <InputGroup>
                                            <Form.Control className="form-control-lg" id="signin-password" type={(passwordshow) ? 'text' : "password"} placeholder="Password" name='password' />
                                            <Button variant='light' onClick={() => setpasswordshow(!passwordshow)} className="btn" type="button" id="button-addon2">
                                                <i className={`ri ${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                            </Button>
                                        </InputGroup>

                                        <div className="mt-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 d-grid mt-3">
                                            <Link href="/dashboards/crm" className="btn btn-lg btn-primary">Sign In</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3">Dont have an account? <Link href="/authentication/sign-up/basic/" className="text-primary">Sign Up</Link></p>
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
                    </div>
                </div>
            </div>

        </>
    )
}
export default Basic
