"use client";
import Link from 'next/link'
import React from 'react'
import { Badge, Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';

const Orders = () => {
    return (
        <>
            <Seo title={"Orders"} />

            <Pageheader title="Orders" heading="Ecommerce" active="Orders" />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Body className="d-flex align-items-center flex-wrap">
                            <div className="flex-fill">
                                <span className="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span className="fw-semibold text-success">28</span></span>
                            </div>
                            <Dropdown className=' '>
                                <Dropdown.Toggle as='button' className="btn btn-light m-1  dropdown-toggle-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul' aria-labelledby="dropdownMenuButton1">
                                    <Dropdown.Item as='li' href="#!">Date</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Price</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Category</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-flex align-items-center m-1" role="search">
                                <Form.Control className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-light ms-2" type="submit">Search</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Denim Zep.Co Sweat Shirt</span>
                                    </Link>
                                    <span className="d-block text-success">$1,299</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1203</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">13</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/2.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Jimmy Lolfiger Jacket</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-2936</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">25</span>
                                    <span className="fw-semibold">Nov</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div>
                                <span className="text-muted me-2">Status:</span>
                                <Badge bg=" bg-primary-transparent">Confirmed</Badge>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/3.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Louie Phillippe Coat</span>
                                    </Link>
                                    <span className="d-block text-success">$1,899</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1855</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-success">Delivered</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold ms-1">29,Oct 2022 - 12:47PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/4.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Denim Corp</span>
                                    </Link>
                                    <span className="d-block text-success">$2,499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1234</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-danger">Cancelled</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="float-end">
                                <button className="btn btn-sm btn-light">Buy Now</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/13.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Orange Watch</span>
                                    </Link>
                                    <span className="d-block text-success">$249</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1645</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-success">Delivered</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold ms-1">4,Nov 2022 - 10:24AM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/8.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Pufa Sweat Shirt</span>
                                    </Link>
                                    <span className="d-block text-success">$2,399</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1346</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">16</span>
                                    <span className="fw-semibold">Jan</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/9.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Bluberry Co.In</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-2936</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">19</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-warning-transparent">Out For Delivery</span></div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/11.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Garage & Co</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1376</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">24</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/14.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Hadimo Smart Watch(44mm)</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-2903</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">16</span>
                                    <span className="fw-semibold">Nov</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block align-items-center justify-content-between">
                            <div>
                                <span className="text-muted me-2">Status:</span>
                                <Badge bg=" bg-primary-transparent">Confirmed</Badge>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-danger-light">Cancel Order</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className="d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/7.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">BMW Denim JAcket</span>
                                    </Link>
                                    <span className="d-block text-success">$1,899</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1976</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-success">Delivered</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold ms-1">04,Nov 2022 - 03:12PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/16.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Totoya Watch For Kids</span>
                                    </Link>
                                    <span className="d-block text-success">$799</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-8765</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-danger">Cancelled</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="float-end">
                                <button className="btn btn-sm btn-light">Buy Now</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" d-block">
                            <div className="d-sm-flex align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src="../../../assets/images/ecommerce/png/10.png" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link href="#!" scroll={false}>
                                        <span className="fs-14 fw-semibold">Garage & Co</span>
                                    </Link>
                                    <span className="d-block text-success">$249</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block ms-1">#SPK-1645</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Badge bg=" bg-success">Delivered</Badge>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold ms-1">22,Oct 2022 - 05:15PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <button className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <ul className="pagination justify-content-end">
                <li className="page-item disabled"> <Link className="page-link" href="#!" scroll={false}>Previous</Link> </li>
                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                <li className="page-item"> <Link className="page-link" href="#!" scroll={false}>Next</Link> </li>
            </ul>
        </>
    )
}

export default Orders
