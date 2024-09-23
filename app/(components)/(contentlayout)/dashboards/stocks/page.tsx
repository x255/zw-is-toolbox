"use client";
import React from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap'
import { NumberofInvested, Portfoliovalue, Returnsrate, TotalInvested, Totalinvestments } from '../../../../../shared/data/charts/dashboard1'
import Link from 'next/link'
import { CandleStick } from '../../../../../shared/data/charts/apexchart'
import { Marketmovers, Transactionhistory } from '../../../../../shared/data/dashboards/stocksdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Stocks = () => {
    return (
        <>
            <Seo title={"Stock"} />

            <Pageheader title="Stocks" heading="Dashboards" active="Stocks" />
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col xl={12}>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="d-md-flex d-block flex-wrap align-items-center justify-content-between">
                                    <div className="flex-fill">
                                        <Nav variant='pills' className="nav nav-pills nav-style-3" role="tablist">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" href="#stocks-portfolio">Portfolio</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" href="#stocks-market">Market</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center mt-md-0 mt-3 justify-content-evenly gap-4">
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Total Value</span>
                                            <span className="text-primary">$8.89k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Market Value</span>
                                            <span className="text-warning">$15.9k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Yield</span>
                                            <span className="text-danger">3.4%</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Dividend</span>
                                            <span className="text-info">$1.3k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Gain</span>
                                            <span className="text-success">$116</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane className=" p-0 border-0" id="stocks-portfolio" role="tabpanel" eventKey="1">
                                <Row>
                                    <Col xl={3} sm={6} >
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-primary">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Total amount Invested</span>
                                                            <span className="fs-16 fw-semibold">$23,8998.99</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="total-invested"><TotalInvested /></div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-secondary">
                                                                <i className="ti ti-arrow-big-up-line fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">No Of Investments</span>
                                                            <span className="fs-16 fw-semibold">116</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="total-investments"><NumberofInvested /></div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-warning">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Portfolio Value</span>
                                                            <span className="fs-16 fw-semibold">$12,920.20<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="portfolio-value"><Portfoliovalue /></div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-success">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Returns Rate</span>
                                                            <span className="fs-16 fw-semibold">+12.08%<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="returns-rate"><Returnsrate /></div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={8}>
                                        <Card className="custom-card">
                                            <Card.Header className=" justify-content-between">
                                                <Card.Title className=" mb-2 mb-sm-0">
                                                    Total Investments
                                                </Card.Title>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-primary btn-sm btn-wave">1D</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave">1W</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave">1M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave">3M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave">6M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</button>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="d-flex alilgn-items-center justify-content-between gap-3 flex-wrap">
                                                    <div className="d-flex flex-wrap flex-fill gap-3 ms-sm-5 ms-0">
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Invested Value</span>
                                                            <span className="d-block fw-semibold">$1,290.94<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>1.22%</span></span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Total Returns</span>
                                                            <span className="d-block fw-semibold">$25,458.20<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>10.14%</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-wrap gap-3 text-end">
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Today Change</span>
                                                            <span className="d-block fw-semibold">$112.09</span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Change In %</span>
                                                            <span className="d-block fw-semibold">+0.01%<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>0.21%</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="totalInvestmentsStats"><Totalinvestments /></div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={4}>
                                        <Card className=" custom-card">
                                            <Card.Header className=" justify-content-between">
                                                <Card.Title>
                                                    My Stocks
                                                </Card.Title>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <div className="mb-2 mb-sm-0">
                                                        <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                    </div>
                                                    <Dropdown className="">
                                                        <Dropdown.Toggle as='a' href="#!" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as='ul' role="menu">
                                                            <Dropdown.Item as='li' href="#!">New</Dropdown.Item>
                                                            <Dropdown.Item as='li' href="#!">Popular</Dropdown.Item>
                                                            <Dropdown.Item as='li' href="#!">Relevant</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className=" p-0">
                                                <ul className="list-unstyled my-stocks-ul mb-0">
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-github text-dark fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">GTHB (Gituhb, Demo Inc.)</span>
                                                                <span className="d-block text-muted fs-12">16 Shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $12,390.02
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>0.14%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-twitter-x text-info fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">TTR (Twiter.com, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">289 Shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $15,526.01
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>2.14%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-bootstrap-fill text-primary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">BS (Boostrap, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">325 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $30,500.15
                                                                </span>
                                                                <span className="d-block text-danger"><i className="ti ti-arrow-narrow-down"></i>2.73%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-windows text-success fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">MS (Micorsoft, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">1,523 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $1,80,520.02
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>8.63%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-apple text-warning fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">AAPL (Apple, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">30 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $21,093.20
                                                                </span>
                                                                <span className="d-block text-danger"><i className="ti ti-arrow-narrow-down"></i>4.10%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-currency-bitcoin text-danger fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">Bitcoin (Bioset Coin, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">118 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $14,245.23
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>0.79%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <h6 className="fw-semibold mb-3">
                                            Trending Stocks :
                                        </h6>
                                        <Row>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12} >
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-apple text-muted fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Apple</span>
                                                                <span className="d-block text-muted fs-12">$12,289.44</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$1,780.80</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-currency-bitcoin text-warning fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Bitcoin</span>
                                                                <span className="d-block text-muted fs-12">$58,151.02</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">2.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$5,745.62</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-card-list text-success fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Tesla</span>
                                                                <span className="d-block text-muted fs-12">$14,452.36</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">4.02%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$4,125.63</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-gift text-primary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Amazon</span>
                                                                <span className="d-block text-muted fs-12">$63,251.11</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">5.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$936.30</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-truck text-danger fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Aliexpress</span>
                                                                <span className="d-block text-muted fs-12">$5,401.50</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">3.32%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$4,360.65</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <Card className="p-3  custom-card border bg-white rounded">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-phone text-secondary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Samsung</span>
                                                                <span className="d-block text-muted fs-12">$10,732.12</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">1.24%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$3,221.29</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={5}>
                                        <Card className=" custom-card">
                                            <Card.Header className=" justify-content-between">
                                                <Card.Title>
                                                    Transaction History
                                                </Card.Title>
                                                <Dropdown className="dropdown">
                                                    <Dropdown.Toggle as='a' className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        All
                                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as='ul' role="menu">
                                                        <Dropdown.Item as='li'><Link href="#!" scroll={false}>Buy</Link></Dropdown.Item>
                                                        <Dropdown.Item as='li'><Link href="#!" scroll={false}>Sell</Link></Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="table-responsive">
                                                    <table className="table text-nowrap table-bordered border-primary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Symbol</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Type</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Shares</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Transactionhistory.map((idx) => (
                                                                <tr key={Math.random()}>
                                                                    <th scope="row">
                                                                        {idx.text1}
                                                                    </th>
                                                                    <td>
                                                                        {idx.text2}
                                                                    </td>
                                                                    <td>
                                                                        <Badge className={`bg-${idx.color1}`}> {idx.text3}</Badge>
                                                                    </td>
                                                                    <td>
                                                                        <span className={`text-${idx.color2}`}> {idx.text4}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className={`text-${idx.color3}`}> {idx.text5}</span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={7}>
                                        <Card className=" custom-card">
                                            <Card.Header className="justify-content-between">
                                                <Card.Title>
                                                    Market Movers
                                                </Card.Title>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <div className="me-2">
                                                        <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                    </div>
                                                    <Dropdown className="">
                                                        <Dropdown.Toggle as='a' className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                    <table className="table text-nowrap table-bordered border-primary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Symbol</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">1D Change</th>
                                                                <th scope="col">1D Return %</th>
                                                                <th scope="col">Volume</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Marketmovers.map((idx) => (
                                                                <tr key={Math.random()}>
                                                                    <th scope="row">
                                                                        {idx.text1}
                                                                    </th>
                                                                    <td>
                                                                        {idx.text2}<span className={`fw-normal text-${idx.color1} fs-10 ms-1`}>{idx.text3}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>{idx.text4}</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className={`text-${idx.color2}`}>{idx.text5}<i className={`ti ti-arrow-${idx.class}`}></i></span>
                                                                    </td>
                                                                    <td>
                                                                        <span className={`text-${idx.color2}`}>{idx.text6}</span>
                                                                    </td>
                                                                    <td>
                                                                        {idx.text7}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane className=" p-0 border-0" id="stocks-market" role="tabpanel" eventKey="2">
                                <Row>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-down fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">Nifty 50</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-down fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">SENSEX</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">DJIA</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">S&amp;P 500</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">NASDAQ</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">NIFTY IT</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <Card className=" custom-card">
                                            <Card.Header className=" justify-content-between">
                                                <Card.Title>
                                                    Market Cap
                                                </Card.Title>
                                                <div>
                                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search Any Stock Here" aria-label=".form-control-sm example" />
                                                </div>
                                            </Card.Header>
                                            <Card.Body className=" p-0">
                                                <Row>
                                                    <Col xl={7} className="border-end">
                                                        <div className="p-3">
                                                            <div className="d-flex flex-wrap alilgn-items-center justify-content-between">
                                                                <div className="d-flex flex-fill gap-3 ms-5">
                                                                    <div>
                                                                        <h5 className="fw-semibold text-primary">$12,390.02<span className="fs-12 ms-1 text-danger">0.14%<i className="ti ti-trending-down ms-1"></i></span></h5>
                                                                        <span className="d-block text-muted mb-1 fs-12"><span className="text-danger me-1">-89.75</span>. Today</span>
                                                                        <span className="d-block text-muted fs-11">Jun 17, 2023  11:25 AM  UTC +5:30</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex text-end">
                                                                    <div>
                                                                        <h6 className="fw-semibold">GITUHB</h6>
                                                                        <span className="d-block text-muted fs-11 mb-1">GTHB  INDEXNSE</span>
                                                                        <span className="d-block"><Link href="#!" scroll={false} className="text-primary fw-semibold">+ Compare</Link></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="stocks-marketcap"><CandleStick /></div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="p-3">
                                                            <div className="table-responsive mb-5">
                                                                <table className="table text-nowrap table-borderless table-sm text-muted">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Open</th>
                                                                            <td>125.80</td>
                                                                            <td>Volume</td>
                                                                            <td>1,253.20</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">High</th>
                                                                            <td>352.15</td>
                                                                            <td>Avg. Volume</td>
                                                                            <td>1.05M</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Low</th>
                                                                            <td>120.13</td>
                                                                            <td>52 Week High</td>
                                                                            <td>2569.25</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Dividend Yield</th>
                                                                            <td>3.5%</td>
                                                                            <td>52 Week Low</td>
                                                                            <td>1586.20</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">P/E Ratio</th>
                                                                            <td>25%</td>
                                                                            <td>Market Cap</td>
                                                                            <td>2.15Cr</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h6 className="fw-semibold mb-2">
                                                                    Market Depth:
                                                                </h6>
                                                                <Row>
                                                                    <Col xl={6}>
                                                                        <div className="table-responsive">
                                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                                <thead className="text-default bg-light">
                                                                                    <tr>
                                                                                        <th scope="col">Qty</th>
                                                                                        <th scope="col">Orders</th>
                                                                                        <th scope="col">Bid</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">20</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$12,908</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">12</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$20,632</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">36</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$19,102</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">10</span>
                                                                                        </th>
                                                                                        <td>3</td>
                                                                                        <td>$16,650</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">15</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$18,850</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <div className="table-responsive mb-3">
                                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                                <thead className="text-default bg-light">
                                                                                    <tr>
                                                                                        <th scope="col">Qty</th>
                                                                                        <th scope="col">Orders</th>
                                                                                        <th scope="col">Bid</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">20</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$12,908</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">12</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$20,632</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">36</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$19,102</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">10</span>
                                                                                        </th>
                                                                                        <td>3</td>
                                                                                        <td>$16,650</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">15</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$18,850</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className="d-flex gap-3">
                                                                            <button type="button" className="flex-fill btn btn-sm btn-primary btn-wave">Buy</button>
                                                                            <button type="button" className="flex-fill btn btn-sm btn-secondary btn-wave">Sell</button>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}
Stocks.layout = "Contentlayout"

export default Stocks
