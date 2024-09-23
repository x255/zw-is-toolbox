"use client";
import React from 'react'
import { Badge, Button, Card, Col, Dropdown, FormControl, Row } from 'react-bootstrap'
import { CryptoBTC, CryptoDASH, CryptoETH } from '../../../../../../shared/data/charts/dashboard'
import { Bitcoin, Etherium } from '../../../../../../shared/data/apps/crypto/cryp'
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Marketcap = () => {
    return (
        <>
            <Seo title={"Marketcap"} />
            <Pageheader title="Marketcap" heading="Crypto" active="Marketcap" />
            <Row>
                <Col xxl={3} xl={6} lg={12}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-semibold">
                                        Bitcoin - BTC
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="bitcoin-chart"><CryptoBTC /></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1">BTC / USD</p>
                                    <p className="fs-20 mb-0 fw-semibold lh-1 text-primary">$35,876.29</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$0.04</p>
                                    <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+2.33%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" p-0">
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <Badge bg="badge bg-primary-transparent ms-3 text-primary">Increased</Badge></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+280.30(0.96%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<Badge bg="badge bg-secondary-transparent ms-3">3 Years</Badge></p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#1</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={12}>
                    <Card className=" custom-card">
                        <Card.Body >
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-semibold">
                                        Etherium - ETH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="etherium-chart"><CryptoETH /></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1">ETH / USD</p>
                                    <p className="fs-20 mb-0 fw-semibold lh-1 text-primary">$31,244.12</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$2.57</p>
                                    <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+13.45%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" p-0">
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+2,044.24(1.32%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#2</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={12}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 fw-semibold">
                                        Dash - DASH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="dashcoin-chart"><CryptoDASH /></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-end">
                                <div>
                                    <p className="mb-1">DASH / USD</p>
                                    <p className="fs-20 mb-0 fw-semibold lh-1 text-primary">$26,345.000</p>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="mb-0">$12.32</p>
                                    <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+112.95%)</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-0">
                            <div className="list-group border-0">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+40.17 (1.52%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#105</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={12}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                My Top Currencies
                            </Card.Title>
                            <div>
                                <Button className="btn btn-info-light btn-sm btn-wave">View All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between  flex-wrap">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Bitcoin</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$29,948.80</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-semibold d-block">50 BTC</span>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-semibold d-block">31.2450 BTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between  flex-wrap">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Litecon</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$9332.98</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-semibold d-block">200 LTC</span>
                                        </div>
                                        <div className="text-end">
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-semibold d-block">38.0023 LTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center justify-content-between  flex-wrap">
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Etherium</span>
                                                <span className="d-block text-muted fs-12 fw-normal">$1,895.96</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">Max Limit</span>
                                            <span className="fw-semibold d-block">100 ETH</span>
                                        </div>
                                        <div>
                                            <span className="fs-12 text-muted">My Volume</span>
                                            <span className="fw-semibold d-block">69.2412 BTC</span>
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
                    <Card className=" custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Crypto MarketCap</Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <FormControl type="text" className="form-control-sm" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" size="sm" className="btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Market Cap</Dropdown.Item>
                                        <Dropdown.Item>Price</Dropdown.Item>
                                        <Dropdown.Item>Trading Volume</Dropdown.Item>
                                        <Dropdown.Item>Price Change (24h)</Dropdown.Item>
                                        <Dropdown.Item>Rank</Dropdown.Item>
                                        <Dropdown.Item>A - Z</Dropdown.Item>
                                        <Dropdown.Item>All-Time High (ATH)</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div>
                                    <Button variant="secondary" size="sm" className="btn-wave waves-effect waves-light">View All</Button>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th scope="col" className="fw-semibold">#</th>
                                            <th scope="col">Crypto Name</th>
                                            <th scope="col">MarketCap</th>
                                            <th scope="col">Price<span className="text-muted ms-1">(USD)</span></th>
                                            <th scope="col">1h Change</th>
                                            <th scope="col">24h Change</th>
                                            <th scope="col">Volume (24h)</th>
                                            <th scope="col">Circulating Supply</th>
                                            <th scope="col">last 1Week</th>
                                            <th scope="col">Trade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>1</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Bitcoin (BTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$582.23B</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$29,948.80</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.483%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.239%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$11.79B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        19.43M of (21M)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "88%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "12%" }}
                                                            aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="btc-chart"><Bitcoin /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>2</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Etherium (ETH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$226.91B</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$1,895.96</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.87%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.29%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$2.83B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block">
                                                        120M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eth-chart"><Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>3</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Golem (GLM)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$202.07M</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$0.201472</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>34.96%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$2,112,645 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        1,000M
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "100%" }}
                                                            aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="glm-chart"><Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>4</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Dash (DASH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$365.877M</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$32.13</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.59%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>1.24%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$3.61M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        11.37M of (18.92M)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "56%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "44%" }}
                                                            aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="dash-chart"><Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>5</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Litecoin (LTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$6.80B</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$92.98</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.90%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>2.22%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$11.46B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        73.40M
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar"
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="lite-chart"><Bitcoin /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>6</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Ripple (XRP)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$42.48B</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$0.83</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.01%</span>
                                            </td>
                                            <td>
                                                <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>0.91%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$2.99B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        52.54B of (100B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "52%" }}
                                                            aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "48%" }}
                                                            aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="ripple-chart"><Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>7</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/EOS.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>EOS</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$85.2M</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$0.765957</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>20.65%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$116.91M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        10.1B of (105B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "10%" }}
                                                            aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "90%" }}
                                                            aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eos-chart"><Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>8</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Bytecoin (BCN)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$6.2M</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$0.00039</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>25.24%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>27.12%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$6,184 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block mb-2">
                                                        184.02B of (184.07B)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-75">
                                                        <div className="progress-bar bg-success op-5" role="progressbar" style={{ width: "99%" }}
                                                            aria-valuenow={99} aria-valuemin={0} aria-valuemax={100}></div>
                                                        <div className="progress-bar bg-danger op-5" role="progressbar" style={{ width: "1%" }}
                                                            aria-valuenow={1} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="bytecoin-chart"> <Bitcoin /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>9</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/IOTA.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>IOTA</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$510.429M</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$0.184992</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>1.08%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>1.41%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$7.50M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block">
                                                        2.78B
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="iota-chart"><Bitcoin /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <Link href="#!" scroll={false}><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                            <td>10</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold"><Link href="#!" scroll={false}>Monero</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">$3.062B</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">
                                                    <Link href="#!" scroll={false}>$165.76</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up fs-15 fw-semibold"></i>3.22%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-down fs-15 fw-semibold"></i>3.48%</span>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="d-block fw-semibold">$105.8M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-semibold d-block">
                                                        18.15M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="monero-chart"> <Etherium /></div>
                                            </td>
                                            <td>
                                                <button className="btn btn-success-light btn-sm">Trade</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-top-0">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!" scroll={false}>Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link" href="#!" scroll={false}>2</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Marketcap
