"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Basic = () => {
  const [inputValues, setInputValues] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  const handleChange = (currentId: string, nextId: any, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [currentId]: value,
    }));

    const nextInput = document.getElementById(nextId);

    if (nextInput) {
      nextInput.focus();
    }
  };
  return (
    <>
      <div className="container-lg">
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
            <div className="my-5 d-flex justify-content-center">
              <Link href="/dashboards/crm">
                <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
              </Link>
            </div>
            <Card className="custom-card">
              <Card.Body className="p-5">
                <p className="h5 fw-semibold mb-2 text-center">Verify Your Account</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">Enter the 4 digit code sent to the registered email Id.</p>
                <div className="row gy-3">
                  <div className="col-xl-12 mb-2">
                    <div className="row">
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control form-control-lg text-center"
                          id="one"
                          maxLength={1}
                          value={inputValues.one}
                          onChange={(e) => handleChange('one', 'two', e.target.value)}
                        />
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control form-control-lg text-center"
                          id="two"
                          maxLength={1}
                          value={inputValues.two}
                          onChange={(e) => handleChange('two', 'three', e.target.value)}
                        />
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control form-control-lg text-center"
                          id="three"
                          maxLength={1}
                          value={inputValues.three}
                          onChange={(e) => handleChange('three', 'four', e.target.value)}
                        />
                      </div>
                      <div className="col-3">
                        <input
                          type="text"
                          className="form-control form-control-lg text-center"
                          id="four"
                          maxLength={1}
                          value={inputValues.four}
                          onChange={(e) => handleChange('four', null, e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-check mt-2">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label className="form-check-label">
                        Did not recieve a code ?<Link href="/pages/email/mail-app" className="text-primary ms-2 d-inline-block">Resend</Link>
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-12 d-grid mt-2">
                    <Link href="/dashboards/crm" className="btn btn-lg btn-primary">Verify</Link>
                  </div>
                </div>
                <div className="text-center">
                  <p className="fs-12 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>{`Don't`} share the verification code with anyone !</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Basic;
