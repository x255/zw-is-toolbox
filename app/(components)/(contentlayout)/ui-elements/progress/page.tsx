"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, ProgressBar, Row } from 'react-bootstrap'
import { CustomProgress2data, CustomProgress4data, Multipleprogress } from '../../../../../shared/data/ui/progressbardata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { progress1, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9, progress10, progress11, progress12, progress13, progress14 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Progress = () => {
    return (
        <>
            <Seo title={"Progress"} />
            <Pageheader title="Progress" heading="Ui Elements" active="Progress" />
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Progress" code={progress1} >
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" ></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" ></div>
                            <div className="basic-progress progress-bar" style={{ width: "25%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="basic-progress progress-bar" style={{ width: "50%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                            <div className="basic-progress progress-bar" style={{ width: "75%" }}></div>
                        </div>
                        <div className="progress mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                            <div className="basic-progress progress-bar" style={{ width: "100%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Different Colored Progress" code={progress2} >
                        <div className="progress mb-3" role="progressbar" aria-valuenow={20} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar bg-secondary" style={{ width: "20%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-warning" style={{ width: "40%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-info" style={{ width: "60%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: "80%" }}></div>
                        </div>
                        <div className="progress" role="progressbar"
                            aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-danger" style={{ width: "100%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Striped Progress" code={progress3} >
                        <div className="progress mb-3" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped" style={{ width: "10%" }}>
                            </div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped bg-secondary" style={{ width: "25%" }}>
                            </div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped bg-success" style={{ width: "50%" }}>
                            </div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped bg-info" style={{ width: "75%" }}>
                            </div>
                        </div>
                        <div className="progress" role="progressbar" aria-valuenow={100} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped bg-warning" style={{ width: "100%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Progress Height" code={progress4} >

                        <div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary" style={{ width: "10%" }}>
                            </div>
                        </div>
                        <div className="progress progress-sm mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary" style={{ width: "25%" }}>
                            </div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary" style={{ width: "50%" }}>
                            </div>
                        </div>
                        <div className="progress progress-lg mb-3" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary" style={{ width: "75%" }}>
                            </div>
                        </div>
                        <div className="progress progress-xl" role="progressbar" aria-valuenow={100} aria-valuemin={0}
                            aria-valuemax={100}>
                            <div className="progress-bar bg-primary" style={{ width: "100%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Progress With Labels" code={progress5} >

                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: "10%" }}>10%</div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-secondary" style={{ width: "20%" }}>20%</div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: "40%" }}>40%</div>
                        </div>
                        <div className="progress mb-3" role="progressbar"
                            aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-info" style={{ width: "60%" }}>60%</div>
                        </div>
                        <div className="progress mb-0" role="progressbar"
                            aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-warning" style={{ width: "80%" }}>80%</div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Multiple bars With Sizes" code={progress6} >
                        {Multipleprogress.map((idx) => (
                            <ProgressBar className={`progress-stacked progress-${idx.size} mb-3`} key={Math.random()}>
                                <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
                                <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
                                <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
                            </ProgressBar>
                        ))}
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Animated Stripped Progress" code={progress7} >
                        <div className="progress mb-3" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ width: "10%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{ width: "20%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "40%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title=" Gradient Progress" code={progress8} >

                        <div className="progress mb-3" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
                        </div>
                        <div className="progress mb-3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
                        </div>
                        <div className="progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Animated Progress" code={progress9} >
                        <div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
                        </div>
                        <div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
                        </div>
                        <div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
                        </div>
                        <div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
                        </div>
                        <div className="progress progress-animate" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-1" code={progress10} >
                        <div className="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title">Mobiles</h6>
                            <div className="progress-bar" style={{ width: "50%" }}>
                                <div className="progress-bar-value">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title bg-secondary">Watches</h6>
                            <div className="progress-bar bg-secondary" style={{ width: "60%" }}>
                                <div className="progress-bar-value bg-secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom progress-animate" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                            <h6 className="progress-bar-title bg-success">Shirts</h6>
                            <div className="progress-bar bg-success" style={{ width: "70%" }}>
                                <div className="progress-bar-value bg-success">70%</div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-2" code={progress11} >

                        {CustomProgress2data.map((idx) => (
                            <div className="progress progress-bar progress-sm mb-4" key={Math.random()} >
                                <div className={`progress-item-1 bg-${idx.class}`}></div>
                                <div className={`progress-item-3 bg-${idx.class1}`}></div>
                                <ProgressBar variant={idx.class} now={idx.now} />
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-3" code={progress12} >
                        <div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: "50%" }}>
                                <div className="progress-bar-value">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-secondary" style={{ width: "60%" }}>
                                <div className="progress-bar-value secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: "70%" }}>
                                <div className="progress-bar-value success">70%</div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-4" code={progress13} >
                    <div className="progress progress-xl mb-3 progress-animate custom-progress-4" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
<div className="progress-bar-label">10%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 secondary" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
<div className="progress-bar-label">20%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
<div className="progress-bar-label">40%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 info" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
<div className="progress-bar-label">60%</div>
</div>
<div className="progress progress-xl mb-3 progress-animate custom-progress-4 warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
<div className="progress-bar-label">80%</div>
</div>
<div className="progress progress-xl progress-animate custom-progress-4 danger" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
<div className="progress-bar bg-danger-gradient" style={{ width: "100%" }}></div>
<div className="progress-bar-label text-fixed-white">100%</div>
</div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Custom Progress-5" code={progress14} >
                        <h6 className="fw-semibold mb-2">Project Dependencies</h6>
                        <div className="progress-stacked progress-xl mb-5">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }}
                                aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "35%" }}
                                aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>35%</div>
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "40%" }}
                                aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                        </div>
                        <Row className=" justify-content-center">
                            <Col xl={5}>
                                <div className="border p-3">
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%</span></p>
                                    <div className="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-primary" style={{ width: "25%" }}>
                                        </div>
                                    </div>
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%</span></p>
                                    <div className="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-secondary" style={{ width: "35%" }}>
                                        </div>
                                    </div>
                                    <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%</span></p>
                                    <div className="progress progress-xs mb-0 progress-animate" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-danger" style={{ width: "40%" }}>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Progress
