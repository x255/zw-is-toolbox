"use client";
import React from 'react'
import { Badge, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { Sleeptracking, Watertracking } from '../../../../../shared/data/charts/dashboard1'
import Link from 'next/link'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Personal = () => {
    return (
        <>
            <Seo title={"Personal"} />
            <Pageheader title="Personal" heading="Dashboards" active="Personal" />
            <Row>
                <Col xxl={9} xl={12}>
                    <Row>
                        <Col xl={7}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={6} className="col-12">
                                    <Card className=" custom-card overflow-hidden">
                                        <Card.Body className=" p-0">
                                            <div className="p-4">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="mb-3">
                                                        <span className="d-block fw-semibold fs-15">Water Tracking</span>
                                                        <span className="text-muted fs-12 d-block">87 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-primary">
                                                            <i className="bi bi-droplet fs-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="fs-24 fw-semibold">8.1</span>
                                                        <span className="text-muted fs-12 ms-1 d-inline-flex">Lt</span>
                                                    </p>
                                                    <span className="text-muted">0.9 Lt more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="waterTrack"><Watertracking /></div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} className=" col-12">
                                    <Card className=" custom-card overflow-hidden">
                                        <Card.Body className=" p-0">
                                            <div className="p-4">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="mb-3">
                                                        <span className="d-block fw-semibold fs-15">Sleep Tracking</span>
                                                        <span className="text-muted fs-12 d-block">54 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-success">
                                                            <i className="bi bi-alarm fs-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="fs-24 fw-semibold">5.2</span>
                                                        <span className="text-muted fs-12 ms-1 d-inline-flex">Hrs</span>
                                                    </p>
                                                    <span className="text-muted">2.8 Hrs more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="sleepTrack"><Sleeptracking /></div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={5}>
                            <Card className=" custom-card">
                                <Card.Body className=" p-0">
                                    <div className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed">
                                        <div className="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Instagram</p>
                                                <div className="ms-0">
                                                    <span className="avatar bg-light text-danger"><i className="bi bi-instagram fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">121K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">6 min ago</span>
                                                <span className="text-danger d-inline-block ms-1"><i className="bi bi-arrow-down-right me-1 fs-10"></i>1.5%</span>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 flex-fill border-bottom-dashed border-start-dashed">
                                            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Facebook</p>
                                                <div>
                                                    <span className="avatar bg-light text-warning"><i className="bi bi-facebook fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 hr ago</span>
                                                <span className="text-warning d-inline-block ms-1"><i className="bi bi-arrow-down-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Youtube</p>
                                                <div className="ms-1">
                                                    <span className="avatar bg-light text-info"><i className="bi bi-youtube fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">1.1M</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 day ago</span>
                                                <span className="text-info d-inline-block ms-1"><i className="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 flex-fill border-start-dashed">
                                            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Twitter</p>
                                                <div>
                                                    <span className="avatar bg-light text-purple"><i className="bi bi-twitter-x fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 week ago</span>
                                                <span className="text-purple d-inline-block ms-1"><i className="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Row>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="me-1">
                                                    <h6 className="fs-15 mg-b-3">Primary Account</h6>
                                                    <a href="#!" className="fs-12 text-primary op-8">Change<i className="bi bi-box-arrow-up-right fs-11 ms-1"></i></a>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <div className="avatar bg-primary-transparent">
                                                        <i className="ri-paypal-fill fs-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="fs-24 fw-semibold">$1,29,389.00</p>
                                            <p className="mb-1 fs-14">Sarah Jahn SP</p>
                                            <div className="d-flex justify-content-between text-muted">
                                                <span>XXXX XXXX XXXX 1116</span>
                                                <span>12/24</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <div className="card-title">Quick Transfer</div>
                                            <a href="#!" className="text-primary">View History<i className="bi bi-box-arrow-up-right fs-11 ms-2"></i></a>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="avatar-list-stacked mb-4">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                </span>
                                                <a aria-label="anchor" className="avatar bg-light text-default avatar-rounded" href="#!">
                                                    <i className="ri-arrow-right-s-line fs-18"></i>
                                                </a>
                                            </div>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <label className="text-muted mb-0">Send / Receive</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text">Send To</span>
                                                        <input type="text" defaultValue="11167731611" aria-label="First name" className="form-control" />
                                                        <button className="btn btn-light" type="button">Check</button>
                                                    </div>
                                                    <label className="text-success fs-12">Say Hii</label>
                                                </div>
                                                <div className="input-group mt-3">
                                                    <span className="input-group-text">Amount</span>
                                                    <input type="text" defaultValue="2000" aria-label="First name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex gap-3 mt-4">
                                                <button type="button" aria-label="button" className="btn btn-icon btn-wave btn-primary-light"><i className="bi bi-arrow-down-up"></i></button>
                                                <button type="button" className="btn btn-primary btn-wave flex-fill">Proceed To Pay</button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={8}>
                            <Row>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Discover
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="row gy-sm-0 gy-3">
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-info-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-cash-coin fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Bills</a>
                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-primary-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-shop-window fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Shopping</a>
                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-warning-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-compass fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Travel</a>
                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-secondary-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-gift fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Food</a>
                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-danger-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-currency-bitcoin fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Stocks</a>
                                                </div>
                                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                                    <a aria-label="anchor" href="#!" className="btn btn-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-three-dots fs-22"></i>
                                                    </a>
                                                    <a href="#!" className="d-block pt-2 text-muted fw-semibold">Others</a>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className=" custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <Card.Title>
                                                Upcoming Events
                                            </Card.Title>
                                            <button type="button" className="btn btn-sm btn-light">View All</button>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-unstyled mb-0 personal-upcoming-events">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-calendar2-heart fs-16 text-primary"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Meeting with <span className="text-primary fw-semibold">Umar Xai</span></span>
                                                            <span className="d-block text-muted fs-12">2 Hours</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary-transparent">11-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span><span className="text-primary fw-semibold">Shin Map</span> Birthday Party</span>
                                                            <span className="d-block text-muted fs-12">5 Hours</span>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-success-transparent">15-06-2023</Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-compass fs-16 text-pink"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Holiday Trip To Italy</span>
                                                            <span className="d-block text-muted fs-12">1 Week</span>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-danger-transparent">20-06-2023</Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-balloon-heart fs-16 text-success"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Wedding Anniversary</span>
                                                            <span className="d-block text-muted fs-12">1 Day</span>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-secondary-transparent">24-07-2023</Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src="../../assets/images/faces/7.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Meeting with <span className="text-primary fw-semibold">Irav Ert</span></span>
                                                            <span className="d-block text-muted fs-12">45 Minutes</span>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-warning-transparent">15-06-2023</Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className=" custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <Card.Title>
                                                Recent Messages
                                            </Card.Title>
                                            <button type="button" className="btn btn-light btn-sm btn-wave">View All</button>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="avatar-list-stacked mb-4">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                </span>
                                                <a aria-label="anchor" className="avatar bg-light text-default avatar-rounded" href="#!">
                                                    <i className="ri-arrow-right-s-line fs-18"></i>
                                                </a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="fw-semibold">Messages</div>
                                                <div><i className="ri-check-double-line me-1 align-middle text-muted d-inline-flex"></i>Mark as read</div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="list-unstyled mb-0 personal-messages-list">
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src="../../assets/images/faces/12.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Elin Misk</span>
                                                                <span className="fs-12 text-muted d-block message">Hello there! How are you doing? Call me when...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">2 min</span>
                                                                <Badge bg=" bg-primary rounded-pill">2</Badge>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Shakira Shen</span>
                                                                <span className="fs-12 text-muted d-block message">I would like to discuss about that assets...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">9:43Pm</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar bg-primary-transparent avatar-rounded">
                                                                    <i className="ri-user-line fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Sebastian</span>
                                                                <span className="fs-12 text-muted d-block message">Shall we go to the cafe at downtown...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">Yesterday</span>
                                                                <Badge bg=" bg-primary rounded-pill">2</Badge>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={12}>
                    <Row>
                        <Col xxl={12} xl={4}>
                            <Card className="overflow-hidden custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top justify-content-between mb-4">
                                        <div>
                                            <span className="d-block fs-15 fw-semibold">My Profile</span>
                                            <span className="d-block fs-12 text-muted">67% Completed - <a href="#!" className="text-center text-primary">Click Here<i className="bi bi-box-arrow-up-right fs-10 ms-2 align-middle"></i></a></span>
                                        </div>
                                        <Dropdown className="">
                                            <Dropdown.Toggle as='a' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                                <i className="fe fe-more-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as='ul'>
                                                <Dropdown.Item as='li' href="#!">Week</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                                <img src="../../assets/images/faces/9.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-semibold mb-0">Json Taylor</h5>
                                            <span className="fs-13 text-muted">jsontaylor345@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="btn-list text-center">
                                        <Link href="/pages/profile" className="btn btn-primary-light btn-sm">
                                            Edit Profile
                                        </Link>
                                        <Link href="/pages/profile" className="btn btn-primary btn-sm">
                                            View Profile
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={4}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>My Goals</Card.Title>
                                    <button type="button" className="btn btn-sm btn-light">View All</button>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled personal-goals-list mb-0">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-secondary-transparent">
                                                        <i className="bi bi-globe2 fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Maldives Trip</span>
                                                        <span className="d-block text-secondary">80%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-secondary" style={{ width: "80%" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-warning-transparent">
                                                        <i className="bi bi-balloon-heart fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Savings For Birthday</span>
                                                        <span className="d-block text-warning">90%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-warning" style={{ width: "90%" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-primary-transparent">
                                                        <i className="bi bi-lightning fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Join Guitar className</span>
                                                        <span className="d-block text-primary">40%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped bg-primary" style={{ width: "40%" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={4}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Favourite Contacts
                                    </Card.Title>
                                    <button type="button" className="btn btn-sm btn-light">View All</button>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled personal-favourite-contacts mb-0">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../assets/images/faces/2.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Kiara Advain</span>
                                                    <span className="text-muted d-block fs-12">+(72)-8765700876</span>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown>
                                                        <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-position'>
                                                            <Dropdown.Item className="mb-0" href="#!" >Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Jason Mama</span>
                                                    <span className="text-muted d-block fs-12">+(72)-234226333</span>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown>
                                                        <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-position'>
                                                            <Dropdown.Item className="mb-0" href="#!" >Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../assets/images/faces/10.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Stuart Edward</span>
                                                    <span className="text-muted d-block fs-12">+(11)-16743256</span>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Link aria-label="anchor" href="#!" scroll={false} className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown>
                                                        <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-position'>
                                                            <Dropdown.Item className="mb-0" href="#!" >Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#!" >Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
Personal.layout = "Contentlayout"

export default Personal
