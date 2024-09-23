"use client";
import React from 'react'
import { Badge, Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { ProjectAnalysis, Teammembers1, Teammembers2, Teammembers3, Teammembers4, Teammembers5 } from '../../../../../shared/data/charts/dashboard1'
import Link from 'next/link'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Projects = () => {
    return (
        <>
            <Seo title={"Project"} />

            <Pageheader title="Projects" heading="Dashboards" active="Projects" />
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xxl={5}>
                            <Row>
                                <Col sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className=" d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-2">Completed Projects</p>
                                                <h4 className="mb-0 fw-semibold mb-2">109</h4>
                                                <Badge bg=" bg-success-transparent">1.5% <i className="ti ti-trending-up"></i></Badge><span className="text-muted fs-11 ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-primary p-2">
                                                    <i className="ti ti-file-check fs-20 op-7"></i>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className=" d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-2">Overdue Projects</p>
                                                <h4 className="mb-0 fw-semibold mb-2">18</h4>
                                                <span className="badge bg-danger-transparent">0.23% <i className="ti ti-trending-down"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-secondary p-2">
                                                    <i className="ti ti-briefcase fs-20 op-7"></i>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className=" d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-2">Total Projects</p>
                                                <h4 className="mb-0 fw-semibold mb-2">389</h4>
                                                <Badge bg=" bg-success-transparent">0.67% <i className="ti ti-trending-up"></i></Badge><span className="text-muted fs-11 ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-success p-2">
                                                    <i className="ti ti-album fs-20 op-7"></i>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-2">Pending Projects</p>
                                                <h4 className="mb-0 fw-semibold mb-2">227</h4>
                                                <span className="badge bg-success-transparent">0.53% <i className="ti ti-trending-up"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-warning p-2">
                                                    <i className="ti ti-chart-pie-2 fs-20 op-7"></i>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title>
                                                Project Analysis
                                            </Card.Title>
                                            <Dropdown className="">
                                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                                    View All
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' role="menu">
                                                    <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Header>
                                        <Card.Body>
                                            <div id="projectAnalysis"><ProjectAnalysis /></div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={4}>
                            <Row>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <Card.Title>
                                                Team Members
                                            </Card.Title>
                                            <Dropdown className="">
                                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                                    View All
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' role="menu">
                                                    <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-unstyled team-members-card mb-0">
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-top">
                                                                <span className="avatar avatar-sm lh-1">
                                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                                </span>
                                                                <div className="ms-3 lh-1">
                                                                    <span className="fw-semibold">Melissa Smith</span>
                                                                    <span className="d-block fs-11 text-muted mt-2">Ui Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user1"><Teammembers1 /></div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-top">
                                                                <span className="avatar avatar-sm lh-1">
                                                                    <img src="../../assets/images/faces/12.jpg" alt="" />
                                                                </span>
                                                                <div className="ms-3 lh-1">
                                                                    <span className="fw-semibold">Jason Momoa</span>
                                                                    <span className="d-block fs-11 text-muted mt-2">React Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user2"><Teammembers2 /></div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-top">
                                                                <span className="avatar avatar-sm lh-1">
                                                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                                                </span>
                                                                <div className="ms-3 lh-1">
                                                                    <span className="fw-semibold">Kamala Hars</span>
                                                                    <span className="d-block fs-11 text-muted mt-2">Testing</span>
                                                                </div>
                                                            </div>
                                                            <div id="user3"><Teammembers3 /></div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-top">
                                                                <span className="avatar avatar-sm lh-1">
                                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                                </span>
                                                                <div className="ms-3 lh-1">
                                                                    <span className="fw-semibold">Diego Sanch</span>
                                                                    <span className="d-block fs-11 text-muted mt-2">Angular Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user4"><Teammembers4 /></div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-top">
                                                                <span className="avatar avatar-sm lh-1">
                                                                    <img src="../../assets/images/faces/10.jpg" alt="" />
                                                                </span>
                                                                <div className="ms-3 lh-1">
                                                                    <span className="fw-semibold">Jake Sully</span>
                                                                    <span className="d-block fs-11 text-muted mt-2">Web Designer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user5"><Teammembers5 /></div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className=" custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <Card.Title>
                                                Main Tasks
                                            </Card.Title>
                                            <Dropdown className="">
                                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted " data-bs-toggle="dropdown" aria-expanded="false">
                                                    Today
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' role="menu">
                                                    <Dropdown.Item as='li' href="#!">Week</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                                    <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-unstyled projects-maintask-card">
                                                <li>
                                                    <div className="d-flex align-items-top">
                                                        <div className="d-flex align-items-top flex-fill">
                                                            <span className="me-3">
                                                                <input type="checkbox" className="form-check-input" id="checkboxNoLabel1" value="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-fill">
                                                                <span>
                                                                    Designing a landing page
                                                                </span>
                                                                <span className="d-block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-primary-transparent">
                                                                In progress
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-top">
                                                        <div className="d-flex align-items-top flex-fill">
                                                            <span className="me-3">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-fill">
                                                                <span>
                                                                    Testing of new project ui
                                                                </span>
                                                                <span className="d-block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-success-transparent">
                                                                Completed
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-top">
                                                        <div className="d-flex align-items-top flex-fill">
                                                            <span className="me-3">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-fill">
                                                                <span>
                                                                    Fixing bugs in registration page
                                                                </span>
                                                                <span className="d-block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-warning-transparent">
                                                                pending
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-top">
                                                        <div className="d-flex align-items-top flex-fill">
                                                            <span className="me-3">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel4" value="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-fill">
                                                                <span>
                                                                    Designing new dashboard
                                                                </span>
                                                                <span className="d-block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Badge bg=" bg-primary-transparent">
                                                                In progress
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={3}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Daily Tasks
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                            View All
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled daily-task-card">
                                        <li>
                                            <div className="card border border-primary border-opacity-25 shadow-none custom-card mb-0">
                                                <Card.Body>
                                                    <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">Home Page Design
                                                        <Link aria-label="anchor" href="#!" scroll={false}><i className="bi bi-plus-square float-end text-primary fs-18"></i></Link>
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                                        <Badge bg=" bg-primary-transparent">Framework</Badge>
                                                        <Badge bg=" bg-secondary-transparent">Angular</Badge>
                                                        <Badge bg=" bg-info-transparent">Php</Badge>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card border border-warning border-opacity-25 shadow-none custom-card">
                                                <Card.Body>
                                                    <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">About Us Page redesign
                                                        <Link aria-label="anchor" href="#!" scroll={false}><i className="bi bi-plus-square float-end text-warning fs-18"></i></Link>
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                                        <Badge bg=" bg-danger-transparent">Html</Badge>
                                                        <Badge bg=" bg-warning-transparent">Symphony</Badge>
                                                        <Badge bg=" bg-success-transparent">Php</Badge>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card border border-success border-opacity-25 shadow-none custom-card">
                                                <Card.Body>
                                                    <p className="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">About Us Page redesign
                                                        <Link aria-label="anchor" href="#!" scroll={false}><i className="bi bi-plus-square float-end text-success fs-18"></i></Link>
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                                        <Badge bg=" bg-danger-transparent">Html</Badge>
                                                        <Badge bg=" bg-warning-transparent">Symphony</Badge>
                                                        <Badge bg=" bg-success-transparent">Php</Badge>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card border border-secondary border-opacity-25 shadow-none custom-card">
                                                <Card.Body>
                                                    <p className="fs-14 fw-semibold mb-2 lh-1">New Project Discussion
                                                        <Link aria-label="anchor" href="#!" scroll={false}><i className="bi bi-plus-square float-end text-secondary fs-18"></i></Link>
                                                    </p>
                                                    <div className="d-flex flex-wrap gap-2 mb-4">
                                                        <Badge bg=" bg-info-transparent">React</Badge>
                                                        <Badge bg=" bg-primary-transparent">Typescript</Badge>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xxl={12}>
                            <Card className=" custom-card shadow-none projects-tracking-card overflow-hidden text-center">
                                <Card.Body>
                                    <img src="../../assets/images/media/media-86.svg" alt="" className="mb-1" />
                                    <div>
                                        <span className="fs-15 fw-semibold d-block mt-4 mb-3">Track your work progress here</span>
                                        <button type="button" className="btn btn-primary btn-sm btn-wave">Track Here</button>
                                    </div>
                                    <span className="shape-1 text-primary"><i className="ti ti-circle fs-20 fw-bold"></i></span>
                                    <span className="shape-2 text-secondary"><i className="ti ti-triangle fs-20 fw-bold"></i></span>
                                    <span className="shape-3 text-warning"><i className="ti ti-square fs-20 fw-bold"></i></span>
                                    <span className="shape-4 text-info"><i className="ti ti-square-rotated fs-20 fw-bold"></i></span>
                                    <span className="shape-5 text-success"><i className="ti ti-pentagon fs-20 fw-bold"></i></span>
                                    <span className="shape-6 text-danger"><i className="ti ti-star fs-20 fw-bold"></i></span>
                                    <span className="shape-7 text-pink"><i className="ti ti-hexagon fs-20 fw-bold"></i></span>
                                    <span className="shape-8 text-teal"><i className="ti ti-octagon fs-20 fw-bold"></i></span>
                                    <span className="shape-9 text-primary"><i className="ti ti-circle fs-20 fw-bold"></i></span>
                                    <span className="shape-10 text-secondary"><i className="ti ti-triangle fs-20 fw-bold"></i></span>
                                    <span className="shape-11 text-warning"><i className="ti ti-square fs-20 fw-bold"></i></span>
                                    <span className="shape-12 text-info"><i className="ti ti-square-rotated fs-20 fw-bold"></i></span>
                                    <span className="shape-13 text-success"><i className="ti ti-pentagon fs-20 fw-bold"></i></span>
                                    <span className="shape-14 text-danger"><i className="ti ti-star fs-20 fw-bold"></i></span>
                                    <span className="shape-15 text-pink"><i className="ti ti-hexagon fs-20 fw-bold"></i></span>
                                    <span className="shape-16 text-teal"><i className="ti ti-octagon fs-20 fw-bold"></i></span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Transactions
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                            View All
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled project-transactions-card">
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded fw-bold avatar-md bg-primary-transparent">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">Simon Cowall</span>
                                                    <span className="d-block text-muted fs-11">Feb 28,2023 - 12:54PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$21,442</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded fw-bold avatar-md bg-secondary-transparent">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">Melissa Blue</span>
                                                    <span className="d-block text-muted fs-11">Mar 28,2023 - 10:14AM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$8,789</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded fw-bold avatar-md bg-success-transparent">
                                                        G
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">Gabriel Shin</span>
                                                    <span className="d-block text-muted fs-11">Mar 16,2023 - 05:27PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$13,677</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded fw-bold avatar-md bg-warning-transparent">
                                                        Y
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">Yohasimi Nakiyaro</span>
                                                    <span className="d-block text-muted fs-11">Mar 19,2023 - 04:45PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$3,543</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded fw-bold avatar-md bg-info-transparent">
                                                        B
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-semibold">Brenda Lynn</span>
                                                    <span className="d-block text-muted fs-11">Mar 10,2023 - 05:25PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold">$7,890</h6>
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
            <Row>
                <Col xxl={12}>
                    <Card className=" custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Projects Summary
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as='a' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
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
                                <table className="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Assigned To</th>
                                            <th scope="col">Tasks</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                1
                                            </th>
                                            <td>
                                                Home Page
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>110/180</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: "0%" }}></div>
                                                    </div>
                                                    <div className="ms-2">0%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-primary-transparent">In Progress</Badge>
                                            </td>
                                            <td>
                                                14-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                2
                                            </th>
                                            <td>
                                                Landing Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>95/100</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: " 95%" }}></div>
                                                    </div>
                                                    <div className="ms-2">95%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-primary-transparent">In Progress</Badge>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                3
                                            </th>
                                            <td>
                                                New Template Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>90/100</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: "0%" }}></div>
                                                    </div>
                                                    <div className="ms-2">0%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-warning-transparent">Pending</Badge>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                4
                                            </th>
                                            <td>
                                                HR Management Template Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>26/71</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: " 35%" }}></div>
                                                    </div>
                                                    <div className="ms-2">35%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-primary-transparent">In Progress</Badge>
                                            </td>
                                            <td>
                                                18-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                5
                                            </th>
                                            <td>
                                                Designing New Template
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>26/71</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: " 100%" }}></div>
                                                    </div>
                                                    <div className="ms-2">100%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-success-transparent">Completed</Badge>
                                            </td>
                                            <td>
                                                11-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                6
                                            </th>
                                            <td>
                                                Documentation Project
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>45/90</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: "50%" }}></div>
                                                    </div>
                                                    <div className="ms-2">50%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Badge bg=" bg-primary-transparent">In Progress</Badge>
                                            </td>
                                            <td>
                                                18-04-2023
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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
Projects.layout = "Contentlayout"

export default Projects
