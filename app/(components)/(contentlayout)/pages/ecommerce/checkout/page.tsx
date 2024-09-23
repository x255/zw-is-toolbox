"use client";
import React, { useState } from 'react'
import { Card, Col, Form, Modal, Nav, Row, Tab, TabContainer } from 'react-bootstrap'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import { Basicwizard } from '../../../../../../shared/data/pages/checkoutdata';

const Citydata = [
    { value: 'Georgetown', label: 'Georgetown' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Rockville', label: 'Rockville' },
    { value: 'Frederick', label: 'Frederick' }
];
const Statedata = [
    { value: 'Washington,D.C', label: 'Washington,D.C' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Alaska', label: 'Alaska' }
];

const Checkout = () => {
    const [activeTab, setactiveTab] = useState(1);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedSteps, setPassedSteps] = useState([1]);

    function toggleTab(tab: any, value: any) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 6) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
        setprogressbarvalue(value);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Basic start
    const Wizard = ({ step: currentIndex, ...props }: any) => {
        const steps: any = React.Children.toArray(props.children);
        const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
        const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

        return (
            <div>
                <Seo title={"Checkout"} />
                <Pageheader title="Checkout" heading="Ecommerce" active="Checkout" />
                <nav className="btn-group steps basicsteps gap-xl-5 gap-sm-3 gap-1 flex-wrap">
                    {steps.map((step: any, index: any) => (
                        <Button
                            key={step.props.number}
                            onClick={() => props.onChange(index)}
                            className={getClsNavBtn(index === currentIndex)}
                        >
                            <span className="number me-2 ">{step.props.number}</span>
                            <i>{step.props.title}</i>
                        </Button>
                    ))}
                </nav>

                {steps[currentIndex]}

                {steps[currentIndex]}

                <div className=" p-3 d-flex justify-content-between  ">
                    <Button
                        visible={prevStep}
                        onClick={() => props.onChange(currentIndex - 1)}
                        title={prevStep.description}
                    >
                        Back
                    </Button>
                    <Button
                        visible={nextStep}
                        onClick={() => props.onChange(currentIndex + 1)}
                        title={nextStep.description}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    };
    const Step = ({ children }: any) => children;

    function getClsNavBtn(active: boolean) {
        return "btn" + (active ? " active" : "");
    }
    function Button({ visible, ...props }: any) {
        return (

            <button
                className={visible ? "btn btn-primary " : "invisible"}
                {...props}
            />

        );
    }
    return (

        <>
            <Seo title={"Checkout"} />
            <Pageheader title="Checkout" heading="Ecommerce" active="Checkout" />
            <div className="container">
                <Row>
                    <Col xl={9}>
                        <Card className=" custom-card">
                            <Card.Body className="card-body p-0 product-checkout">
                                <Basicwizard />
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className=" custom-card">
                            <Card.Header>
                                <Card.Title className=" me-1">Order Summary</Card.Title><span className="badge bg-primary-transparent rounded-pill">02</span>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ul className="list-group mb-0 border-0 rounded-0">
                                    <li className="list-group-item border-top-0 border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-semibold">Blue sweatshirt</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">30% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <a aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </a>
                                                </p>
                                                <p className="mb-0 fs-14 fw-semibold">$189<span className="ms-1 text-muted fs-11 d-inline-block"><s>$329</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../../assets/images/ecommerce/png/7.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-semibold">Denim Jacket</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <a aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </a>
                                                </p>
                                                <p className="mb-0 fs-14 fw-semibold">$129<span className="ms-1 text-muted fs-11 d-inline-block"><s>$139</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="fs-12 fw-semibold bg-primary-transparent p-1 rounded">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Sub Total</div>
                                        <div className="fw-semibold fs-14">$318</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Discount</div>
                                        <div className="fw-semibold fs-14 text-success">10% - $31.8</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Delivery Charges</div>
                                        <div className="fw-semibold fs-14 text-danger">- $29</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted op-7">Service Tax (18%)</div>
                                        <div className="fw-semibold fs-14">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="fs-15">Total :</div>
                                        <div className="fw-semibold fs-16 text-dark"> $1,387</div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>

        </>
    )
}

export default Checkout
