"use client";
import React from 'react'
import { Badge, Card, Col, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap'
import { Earning } from '../../../../../shared/data/charts/dashboard'
import Link from 'next/link'
import { Countries, Recentorders, Topsellingproducts, carddata } from '../../../../../shared/data/dashboards/ecommercedata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Ecommerce = () => {
    return (
        <>
            <Seo title={"Ecommerce"} />

            <Pageheader title="Ecommerce" heading="Dashboards" active="Ecommerce" />

            <Row>
                <Col xxl={6} xl={12}>
                    <Row>
                        {carddata.map((idx) => (
                            <Col lg={6} sm={6} md={6} xl={6} key={Math.random()} >
                                <Card className=" custom-card">
                                    <Card.Body>
                                        <Row>
                                            <Col xxl={3} xl={2} lg={3} md={3} sm={4} className="col-4 d-flex align-items-center justify-content-center ecommerce-icon px-0">
                                                <span className={`rounded p-3 bg-${idx.color}`}>
                                                    {idx.icon}
                                                </span>
                                            </Col>
                                            <Col xxl={9} xl={10} lg={9} md={9} sm={8} className=" col-8 px-0">
                                                <div className="mb-2">{idx.text1}</div>
                                                <div className="text-muted mb-1 fs-12">
                                                    <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                                                        {idx.text2}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fs-12 mb-0">{idx.text3}<Badge className={`bg-${idx.color2} mx-1`} >{idx.text4}</Badge>{idx.text5}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col lg={6} sm={6} md={6} xl={6}>
                            <Card className=" custom-card overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src="../../assets/images/ecommerce/png/35.png" className="card-img-top" alt="..." />
                                    <div className="card-img-overlay d-flex flex-column p-4 text-fixed-white">
                                        <p className="mb-1 op-7 fs-12">Spruko Official.Inc</p>
                                        <h6 className="fw-semibold mb-4 text-fixed-white">BIG SAVING DAYS</h6>
                                        <p className="ecommerce-bankoffer-details">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <Link href="#!" scroll={false} className="text-decoration-underline text-fixed-white">T&amp;C</Link></p>
                                        <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="d-block fs-15 lh-1 fw-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Link href="#!" scroll={false} className="text-primary fs-15 fw-semibold">Biggest sale is back.</Link>
                                    <p className="mb-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <button type="button" className="btn btn-primary btn-wave me-2">Notify Me</button>
                                    <button type="button" className="btn btn-outline-primary btn-wave">Offers</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Orders
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle aria-label="anchor" as="a" className="btn btn-icon btn-sm btn-light no-caret" aria-expanded="false">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" className='dropdown-position'>
                                            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0" >

                                        {Recentorders.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex algn-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="fw-semibold mb-0">{idx.text1}</p>
                                                            <p className="fs-12 text-muted mb-0">{idx.text2}</p>
                                                        </div>
                                                        <div>
                                                            <span className={`text-${idx.color} fw-semibold`}>{idx.text3}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Tab.Container defaultActiveKey='0'>
                                    <Card.Header className=" justify-content-between d-sm-flex d-block">
                                        <Card.Title>
                                            Orders
                                        </Card.Title>
                                        <Nav className=" nav-tabs justify-content-end nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2" >
                                            <Nav.Item as='li'>
                                                <Nav.Link className="nav-link " eventKey='0'
                                                    href="#active-orders" aria-selected="true">Active Orders</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link className="nav-link" eventKey='1'
                                                    href="#completed-orders" aria-selected="true">Completed</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link className="nav-link" eventKey='2'
                                                    href="#cancelled-orders" aria-selected="true">Cancelled</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body className=" p-0">

                                        <Tab.Content>
                                            <Tab.Pane className="border-0 p-0" eventKey='0'
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/4.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Amanda Nanes</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$229.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">24 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/1.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/10.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Peter Parkour</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$135.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">18 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/2.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/12.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Jackie Chen</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1,299.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">29 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/3.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/5.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Ryan Gercia</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$249.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">05 Jun 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/4.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/14.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Hugh Jackma</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$499.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">15 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/5.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane className=" border-0 p-0" eventKey='1'
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Lisa Rebecca</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">24 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/6.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/13.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Matt Martin</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$799.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delived On</span>
                                                                        <p className="mb-0">18 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/7.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/7.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Mitchell Osama</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$279.00</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivery On</span>
                                                                        <p className="mb-0">29 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/8.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/12.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Cornor Mcgood</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$79.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">05 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/9.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Kishan Patel</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1449.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">20 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/10.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted  border-0 p-0" eventKey='2'
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/6.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Hailey Bobber</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">09 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/11.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/14.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Anthony Mansion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$179.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">28 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/12.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/16.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Simon Carter</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$149.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">30 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/13.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/3.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Sofia Sekh</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1439.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">03 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/14.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src="../../assets/images/faces/9.jpg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Kimura Kai</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1092.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">02 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../../assets/images/ecommerce/png/15.png" alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" href="#!" scroll={false}>
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Card.Body>
                                </Tab.Container>

                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Earnings</Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as="a" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <Row className=" ps-lg-5 mb-4 pb-4 gy-sm-0 gy-3">
                                        <Col xl={4} lg={4} md={4} sm={4} >
                                            <div className="mb-1 earning first-half ms-3">First Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$51.94k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <Badge bg=" bg-success-transparent text-success px-1 py-2 fs-10">+0.9%</Badge></span>
                                            </div>
                                        </Col>
                                        <Col xl={4} lg={4} md={4} sm={4} >
                                            <div className="mb-1 earning top-gross ms-3">Top Gross</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$18.32k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <Badge bg=" bg-success-transparent text-success px-1 py-2 fs-10">+0.39%</Badge></span>
                                            </div>
                                        </Col>
                                        <Col xl={4} lg={4} md={4} sm={4}>
                                            <div className="mb-1 earning second-half ms-3">Second Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$38k</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <Badge bg=" bg-danger-transparent text-danger px-1 py-2 fs-10">-0.15%</Badge></span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div id="earnings"><Earning /></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>Top Selling Products</Card.Title>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">S.no</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody className="top-selling">
                                                <tr>
                                                    <td className="text-center lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/ecommerce/png/36.png" className="p-2 rounded-pill bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Ethnic School bag for children (24L)</td>
                                                    <td>Bags</td>
                                                    <td><Badge bg=" badge-sm bg-success-transparent text-success">In Stock</Badge></td>
                                                    <td>
                                                        <span className="fw-semibold">5,093</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/ecommerce/png/38.png" className="p-2 rounded-pill bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Leather jacket for men (S,M,L,XL)</td>
                                                    <td>Clothing</td>
                                                    <td><Badge bg=" badge-sm bg-success-transparent text-success">In Stock</Badge></td>
                                                    <td>
                                                        <span className="fw-semibold">6,890</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/ecommerce/png/39.png" className="p-2 rounded-pill bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Childrens Teddy toy of high quality</td>
                                                    <td>Toys</td>
                                                    <td><Badge bg=" badge-sm bg-danger-transparent text-danger">Out Of Stock</Badge></td>
                                                    <td>
                                                        <span className="fw-semibold">5,423</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/ecommerce/png/40.png" className="p-2 rounded-pill bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Orange smart watch with square dial (24mm)</td>
                                                    <td>Fashion</td>
                                                    <td><Badge bg=" badge-sm bg-danger-transparent text-danger">Out Of Stock</Badge></td>
                                                    <td>
                                                        <span className="fw-semibold">10,234</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Top Countries By Sales
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle aria-label="anchor" as="a" className="btn btn-icon btn-sm btn-light no-caret" aria-expanded="false">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" align="end">
                                            <Dropdown.Item as="li" href="#!">Another</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h4 className="mb-0 lh-1">38,256</h4>
                                        </div>
                                        <div><span className="badge bg-primary-transparent mx-1">12.24%</span><span className="text-muted fs-11">Since last week</span></div>
                                    </div>
                                    <ul className="mb-0  list-unstyled">
                                        {Countries.map((idx) => (
                                            <li className={idx.class2} key={Math.random()}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                        <span className="top-country-name">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <i className={`ti ti-trending-${idx.class1} fs-16 text-${idx.color}`}></i>
                                                    </div>
                                                    <div className="fs-14">{idx.price}</div>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Top Customers
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                            View All
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item >
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0">
                                        <li className="">
                                            <Link href="#!" scroll={false}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../assets/images/faces/4.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Emma Wilson</p>
                                                            <p className="mb-0 text-muted fs-12">15 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$1,835</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="#!" scroll={false}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Robert Lewis</p>
                                                            <p className="mb-0 text-muted fs-12">18 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$2,415</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="#!" scroll={false}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Angelina Hose</p>
                                                            <p className="mb-0 text-muted fs-12">21 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$2,341</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="#!" scroll={false}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Samantha Sam</p>
                                                            <p className="mb-0 text-muted fs-12">24 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">2,624</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Products Overview
                            </Card.Title>
                            <div className="d-sm-flex">
                                <div className="me-3 mb-3 mb-sm-0">
                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul' role="menu">
                                        <Dropdown.Item as='li' href="#!">New</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Popular</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Relevant</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Product Id</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Sales</th>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Topsellingproducts.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">{idx.text2}</span>
                                                </td>
                                                <td>
                                                    {idx.text3}
                                                </td>
                                                <td>
                                                    <Badge className={` bg-${idx.color}`}>{idx.text4}</Badge>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text5}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text6}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link href="#!" scroll={false} className="page-link">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link href="#!" scroll={false} className="page-link">1</Link></li>
                                            <li className="page-item"><Link href="#!" scroll={false} className="page-link">2</Link></li>
                                            <li className="page-item">
                                                <Link href="#!" scroll={false} className="page-link text-primary">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
Ecommerce.layout = "Contentlayout"

export default Ecommerce
