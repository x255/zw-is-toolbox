"use client";
import Link from 'next/link'
import React from 'react'
import { Accordion, Badge, Button, Card, Col, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Orderdetails = () => {
    const print = () => {
        window.print();
    };
    return (
        <>
            <Seo title={"OrderDetails"} />

            <Pageheader title="Order Details" heading="Ecommerce" active="Order Details" />
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" d-flex justify-content-between">
                                    <Card.Title>
                                        Order No - <span className="text-primary">#SPK-1023</span>
                                    </Card.Title>
                                    <div>
                                        <Badge bg=" bg-primary-transparent">
                                            Estimated delivery : 30,Nov 2022
                                        </Badge>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Tracking No</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/png/14.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <a href="#!">Orange Watch Series 4</a>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Dial Size:</span><span className="text-muted"> 44mm</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Metallic Black</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><a href="#!" className="text-primary">SPK1218153635</a></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$1,249</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$1,249</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <a href="#!">DapZem & Co Sweat Shirt</a>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Size:</span><span className="text-muted"> Large</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Grey<span className="badge bg-success ms-3">In Offer</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><a href="#!" className="text-primary">SPK3789423789</a></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$499</span>
                                                    </td>
                                                    <td>2</td>
                                                    <td>$998</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src="../../../assets/images/ecommerce/png/11.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <a href="#!">Denim Corporation Sweat Shirt</a>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Size:</span><span className="text-muted"> Large</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Orange<span className="badge bg-info ms-3">32% Off</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><a href="#!" className="text-primary">SPK1120324532</a></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$799</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$799</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Items :</div>
                                                    </td>
                                                    <td>
                                                        04
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Sub Total :</div>
                                                    </td>
                                                    <td>
                                                        $3,100
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Applied Coupon :</div>
                                                    </td>
                                                    <td>
                                                        <Badge bg=" bg-success-transparent">SPKFIR</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Delivery Fees :</div>
                                                    </td>
                                                    <td>
                                                        <span className="text-danger">+$29</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Saved :</div>
                                                    </td>
                                                    <td>
                                                        <span className="fs-14 fw-semibold text-success">$3,799</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Price :</div>
                                                    </td>
                                                    <td>
                                                        <span className="fs-16 fw-semibold">$3,129</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <div className="btn-list float-end">
                                        <Button variant='' className="btn btn-primary btn-wave btn-sm"
                                            onClick={() => print()}
                                        ><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</Button>
                                        <Button variant='' className="btn btn-secondary btn-wave btn-sm"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        User Details
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="d-flex align-items-center border-bottom border-block-end-dashed p-3 flex-wrap">
                                        <div className="me-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <img src="../../../assets/images/faces/9.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="mb-0">Json Taylor</p>
                                            <p className="mb-0 text-muted fs-12">jsontaylor2135@gmail.com</p>
                                        </div>
                                        <div>
                                            <Badge bg="= bg-primary-transparent">Prime User</Badge>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span className="fs-14 fw-semibold">Delivery address :</span>
                                            <button className="btn btn-icon btn-wave btn-primary btn-sm"><i className="ri-pencil-line"></i></button>
                                        </div>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Landmark : </span>MIG-1-11</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Street : </span>Monroe Street</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">City : </span>Georgetown</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">State : </span>Washington,D.C</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Country : </span>USA</p>
                                        <p className="mb-0 text-muted"><span className="fw-semibold text-default">Zipcode : </span>200071</p>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="mb-3">
                                            <span className="fs-14 fw-semibold">Send updates to :</span>
                                        </div>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Phone : </span>
                                            (555)-0123-1210
                                        </p>
                                        <p className="mb-0 text-muted">
                                            <span className="fw-semibold text-default">Email : </span>
                                            jsontaylor2134@gmail.com
                                        </p>
                                    </div>
                                    <div className="p-3">
                                        <div className="mb-3">
                                            <span className="fs-14 fw-semibold">Order Summary</span>
                                        </div>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Ordered Date </span>
                                            24,Nov 2022
                                        </p>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Ordered Time :</span>
                                            11:47AM
                                        </p>
                                        <p className="mb-0 text-muted">
                                            <span className="fw-semibold text-default">Payment Interface :</span>
                                            UPI
                                        </p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>Total
                                    <span className="text-success"> 294 items</span> purchased upto now
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Order Tracking
                            </Card.Title>
                            <div className="ms-auto text-success">#SPK1218153635</div>
                        </Card.Header>
                        <Card.Body className='px-0'>
                            <div className="order-track">
                                <Accordion alwaysOpen defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingOne">
                                            <Link className="px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/32.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Order Placed</p>
                                                        <span className="fs-11 text-success">Nov 03, 2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicOne" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Order placed successfully by <Link href="#!" scroll={false} className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingTwo">
                                            <Link className="px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/33.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Picked</p>
                                                        <span className="fs-12">Nov 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicTwo" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className=" border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingThree">
                                            <Link className="px-0 pt-0" href="#!" role="button" scroll={false} data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/ecommerce/png/34.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Shipping</p>
                                                        <span className="fs-12">Nov 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicThree" className="accordion-body pt-0">
                                            <div className="fs-11 mb-3">
                                                <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                            <div className="fs-11 mb-3">
                                                <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                            <div className="fs-11">
                                                <p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="border-0 bg-transparent next-step">
                                        <Accordion.Header className="accordion-header" id="headingFour">
                                            <Link className="collapsed px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour">
                                                <div className="d-flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Out For Delivery</p>
                                                        <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicFour" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Your order is out for devlivery</p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36 (expected)</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className="border-0 bg-transparent next-step">
                                        <Accordion.Header id="headingFive">
                                            <Link className="collapsed px-0 pt-0" href="#!" scroll={false} role="button" data-bs-toggle="collapse" aria-expanded="true" >
                                                <div className="d-flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Delivered</p>
                                                        <span className="fs-12 text-muted">Nov 03, 18:42</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Orderdetails