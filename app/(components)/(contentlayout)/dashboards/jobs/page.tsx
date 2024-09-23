"use client";
import React from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, ProgressBar, Row } from 'react-bootstrap'
import { Candidatesdata, Subscriptions } from '../../../../../shared/data/charts/dashboard'
import Link from 'next/link'
import { Recentemployers, Registersbycountry, TopCompanies, carddata } from '../../../../../shared/data/dashboards/jobsdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
import SimpleBar from 'simplebar-react';
const Jobs = () => {
    return (
        <>
            <Seo title={"Jobs"} />

            <Pageheader title="Jobs" heading="Dashboards" active="Jobs" />
            <Row>
                <Col xxl={6} xl={12}>
                    <Row className=" row-cols-12">
                        {carddata.map((idx) => (
                            <Col key={Math.random()}>
                                <Card className=" custom-card" >
                                    <Card.Body>
                                        <div className="d-flex align-items-top" >
                                            <div className="me-3">
                                                <span className={`avatar avatar-md p-2 bg-${idx.color1}`}>
                                                    {idx.icon}
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex mb-1 align-items-top justify-content-between">
                                                    <h5 className="fw-semibold mb-0 lh-1">{idx.text1}</h5>
                                                    <div className={`text-${idx.color} fw-semibold`}><i
                                                        className={`ri-arrow-${idx.class}-s-fill me-1 align-middle`}></i>{idx.text2}</div>
                                                </div>
                                                <p className="mb-0 fs-10 op-7 text-muted fw-semibold">{idx.text3}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Subscriptions Overview</Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle >
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">This Week
                                            </Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Last Week
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <Row className=" border-bottom border-block-end-dashed">
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className=" col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Subscriptions</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className=" col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-muted">Basic Subscriptions</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-3 text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-muted">Pro Subscriptions</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div id="subscriptionOverview" className="px-3 mt-sm-0 mt-3"><Subscriptions /></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12}>
                    <Row>
                        <Col xxl={6} xl={6}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Jobs
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle >
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">This Week
                                            </Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Last Week
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <SimpleBar >
                                        <ul className="list-group list-group-flush" id="recent-jobs">
                                            <li className="list-group-item border-top-0 border-start-0 border-end-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                                AC
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Ui Developer</p>
                                                            <p className="fs-12 text-muted mb-0">Achies - 12 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <Badge bg=" bg-success-transparent">Fresher</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-group-item border-start-0 border-end-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                                SI
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">AWS Engineer</p>
                                                            <p className="fs-12 text-muted mb-0">Siachles - 2 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Part Time</p>
                                                            <Badge bg=" bg-info-transparent">+1 yrs - Experience</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-group-item border-start-0 border-end-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-success">
                                                                LS
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">React Developer</p>
                                                            <p className="fs-12 text-muted mb-0">LifeSpace - 6 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12 text-primary fw-semibold">Freelancer</p>
                                                            <Badge bg=" bg-success-transparent">Fresher</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-group-item border-start-0 border-end-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                                MS
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Angular Developer</p>
                                                            <p className="fs-12 text-muted mb-0">MegaSoft - 14 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <Badge bg=" bg-info-transparent">+2 yrs - Experience</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-group-item border-start-0 border-end-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-danger-transparent">
                                                                J
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">UI Tester</p>
                                                            <p className="fs-12 text-muted mb-0">Joggle - 2 days ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <Badge bg=" bg-info-transparent">+3 yrs - Experience</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-group-item border-start-0 border-end-0 border-bottom-0">
                                                <a href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-info-transparent">
                                                                NL
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Php - Laravel Develope</p>
                                                            <p className="fs-12 text-muted mb-0">Nirlog - 2 days ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Part Time Time</p>
                                                            <Badge bg=" bg-success-transparent">Fresher</Badge>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Candidates</Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle >
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">This Week
                                            </Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Last Week
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div id="candidates-chart" className="p-3"><Candidatesdata /></div>
                                    <Row className=" row-cols-12 border-top border-block-start-dashed">
                                        <div className="col">
                                            <div className="p-3 border-end border-inline-end-dashed">
                                                <div className="text-muted fs-12 text-center mb-1">Male Candidates
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center"> <span
                                                    className="me-3 fs-26 fw-semibold">1,234</span> <span
                                                        className="text-success fw-semibold"><i
                                                            className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3">
                                                <div className="text-muted fs-12 text-center mb-1">Female Candidates
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center"> <span
                                                    className="me-3 fs-26 fw-semibold">1,754</span> <span
                                                        className="text-danger fw-semibold"><i
                                                            className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Recruiter Registrations
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle >
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">This Week
                                            </Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Last Week
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0 recruiter">
                                    <Row className=" row-cols-12">
                                        <div className="col">
                                            <div className="p-3 border-md-end border-inline-end-dashed">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <a href="#!" className="fw-semibold mb-0 text-truncate">Hr@Spruko</a>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">hr.spruko@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button aria-label="button" type="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        07
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-info-transparent">Aws Engineer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3 border-md-end border-inline-end-dashed">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/21.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <a href="#!" className="fw-semibold mb-0 text-truncate">Hr@Nicero</a>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">nicero.help@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        16
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-warning-transparent">React Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <a href="#!" className="fw-semibold mb-0 text-truncate">JosephSmith</a>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">josephsmith@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        32
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary-transparent">UI Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Registers By Country
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Country</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Total Registers</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registersbycountry.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-semibold">
                                                                {idx.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td>{idx.total}</td>
                                                <td>
                                                    <Button variant='' type="button" className="btn btn-success-light btn-wave btn-sm">View</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Top Companies
                            </Card.Title>
                            <Dropdown className="">
                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle >
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">This Week
                                    </Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Last Week
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Subscription</th>
                                            <th scope="col">Total Employees</th>
                                            <th scope="col">Recruiter Since</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TopCompanies.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">{idx.text1}</p>
                                                            <p className="fs-12 text-muted mb-0">Remote/Onsite</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className={`badge bg-${idx.color}`}>{idx.text2}</span>
                                                </td>
                                                <td>{idx.total}</td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Acquisitions
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="progress progress-lg mb-4" >
                                <ProgressBar variant="primary" now={52} key={1} label={`${52}%`} />
                                <ProgressBar variant="secondary" now={12} key={2} label={`${12}%`} />
                                <ProgressBar variant="success" now={16} key={3} label={`${16}%`} />
                                <ProgressBar variant="warning" now={12} key={4} label={`${12}%`} />
                                <ProgressBar variant="danger" now={8} key={5} label={`${8}%`} />
                            </ProgressBar>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Total Applications
                                    <Badge className=" float-end bg-primary-transparent">1,982</Badge>
                                </li>
                                <li className="list-group-item">
                                    Recruited
                                    <Badge className=" float-end bg-secondary-transparent">214</Badge>
                                </li>
                                <li className="list-group-item">
                                    Short Listed
                                    <Badge className=" float-end bg-success-transparent">262</Badge>
                                </li>
                                <li className="list-group-item">
                                    Rejected
                                    <Badge className=" float-end bg-warning-transparent">395</Badge>
                                </li>
                                <li className="list-group-item">
                                    Blocked
                                    <Badge className=" float-end bg-danger-transparent">79</Badge>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="overflow-hidden custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Recent Employers
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as='a' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!">New</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Popular</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Relevant</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-hover border table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <th scope="col">Employer</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Mail</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Recentemployers.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row" className="ps-4"> {idx.ckeck}</th>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.text1}
                                                    </div>
                                                </td>
                                                <td>{idx.text2}</td>
                                                <td><Badge className={`bg-${idx.color}`}>{idx.text3}</Badge></td>
                                                <td>{idx.text4}</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                        <span className="ms-1">{idx.text5}</span>
                                                    </div>
                                                </td>
                                                <td>{idx.text6}</td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"><i className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
                                                    </div>
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
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link">1</a></li>
                                            <li className="page-item"><a className="page-link">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link text-primary">
                                                    next
                                                </a>
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
Jobs.layout = "Contentlayout"

export default Jobs;
