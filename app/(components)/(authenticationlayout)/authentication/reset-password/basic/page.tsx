"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';

const Basic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const [passwordshow3, setpasswordshow3] = useState(false);

    return (
        <>
            <Seo title={"ResetPassword-Basic"} />
            <div className="container-lg">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link href={`/dashboards/crm/`}>
                                <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className=" custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Reset Password</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <label htmlFor="reset-password" className="form-label text-default">Current Password</label>
                                        <InputGroup>
                                            <FormControl type={(passwordshow1) ? 'text' : "password"} className="form-control-lg" id="reset-password" placeholder="current password" />
                                            <Button variant='light' className="btn " type="button" onClick={() => setpasswordshow1(!passwordshow1)}>
                                                <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                        </InputGroup>
                                    </div>
                                    <div className="col-xl-12">
                                        <label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow2) ? 'text' : "password"} className="form-control-lg" id="reset-newpassword" placeholder="new password" />
                                            <Button variant='light' className="btn" onClick={() => setpasswordshow2(!passwordshow2)}>
                                                <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                        </InputGroup>
                                    </div>
                                    <div className="col-xl-12 mb-2">
                                        <label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow3) ? 'text' : "password"} className="form-control-lg" id="reset-confirmpassword" placeholder="confirm password" />
                                            <Button variant='light' className="btn" onClick={() => setpasswordshow3(!passwordshow3)}>
                                                <i className={`${passwordshow3 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
                                            </Button>
                                        </InputGroup>
                                        <div className="mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 d-grid mt-2">
                                        <Link href="/authentication/sign-in/basic" className="btn btn-lg btn-primary">Create</Link>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3">Already have an account? <Link href="/authentication/sign-in/basic" className="text-primary">Sign In</Link></p>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="btn-list text-center">
                                    <Button variant='light' className="btn btn-icon">
                                        <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                    </Button>
                                    <Button variant='light' className="btn btn-icon">
                                        <i className="ri-google-line fw-bold text-dark op-7"></i>
                                    </Button>
                                    <Button variant='light' className="btn btn-icon">
                                        <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
Basic.layout = "AuthenticationLayout"
export default Basic
