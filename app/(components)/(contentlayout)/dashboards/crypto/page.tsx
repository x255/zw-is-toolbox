"use client";
import React from 'react'
import { Card, Col, Dropdown, Form, Nav, Row, Tab, TabContainer } from 'react-bootstrap'
import { Recentactivity, Recenttransactions, Selectdata1, Selectdata2 } from '../../../../../shared/data/dashboards/cryptodata'
import { CryptoBTC, CryptoDASH, CryptoETH, CryptoStatistics, Cryptobitcoin, Cryptodash, Cryptoetherium, Cryptoiota, Cryptoneo, Cryptoripple } from '../../../../../shared/data/charts/dashboard'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Link from "next/link";
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'
const Crypto = () => {
    return (
        <>
            <Seo title={"Crypto"} />

            <Pageheader title="Crypto" heading="Dashboards" active="Crypto" />
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xxl={4} xl={4} lg={12} >
                            <Card className=" custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-semibold">
                                                Bitcoin - BTC
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="btc-chart"><CryptoBTC /></div>
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
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={12}>
                            <Card className=" custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-semibold">
                                                Etherium - ETH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="eth-chart"><CryptoETH /></div>
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
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={12}>
                            <Card className=" custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-semibold">
                                                Dash - DASH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="dash-chart"><CryptoDASH /></div>
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
                            </Card>
                        </Col>
                        <Col xxl={8} xl={7} >
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title>
                                        Crypto Statistics
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
                                <Card.Body className=" p-0">
                                    <div className="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
                                        <div className="me-3">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                <img src="../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-sm-evenly flex-fill">
                                            <div className="m-sm-0 m-2">
                                                <span>Symbol</span>
                                                <p className="fw-semibold mb-0">BTC</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Price Benchmark</span>
                                                <p className="fw-semibold mb-0">128.00%</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Price (USD)</span>
                                                <p className="text-success fe-semibold mb-0">$4,253.49</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Change (24H)</span>
                                                <p className="text-danger fw-semibold mb-0">-0.24%</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Market Cap</span>
                                                <p className="fw-semibold mb-0">$179.12B</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="crypto" className="p-2"><CryptoStatistics /></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={5} >
                            <Card className=" custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Recent Transactions</Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' className='dropdown-position'>
                                            <Dropdown.Item as='li'>Week</Dropdown.Item >
                                            <Dropdown.Item as='li'>Month</Dropdown.Item >
                                            <Dropdown.Item as='li'>Year</Dropdown.Item >
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0" >
                                        {Recenttransactions.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fw-semibold">{idx.text1}</p>
                                                                <p className={`mb-0 fs-11 text-${idx.color} fw-semibold`}>{idx.text2}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fw-semibold">
                                                                {idx.text3}
                                                            </p>
                                                            <p className="mb-0 op-7 text-muted fs-11">
                                                                {idx.text4}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <div>
                                        <div className="mb-1">Wallet Value<span className="fs-10 badge bg-success-transparent text-success p-1 ms-2"><i className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
                                        <div className="fs-20 fw-semibold">$132,12933.000</div>
                                        <small className="text-muted fw-semibold">12 BTC</small>
                                    </div>
                                    <div className="ms-auto">
                                        <span className="avatar avatar-xxl">
                                            <img className="buy-sell-image" src="../../assets/images/media/media-82.png" alt="" />
                                        </span>
                                    </div>
                                </Card.Header>
                                <TabContainer defaultActiveKey='1'>
                                    <Card.Body className='crypto-data'>
                                        <Nav className="nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
                                            <Nav.Item className="me-sm-2 me-0 ">
                                                <Nav.Link eventKey="1" data-bs-toggle="tab" data-bs-target="#buy-crypto"
                                                    aria-current="page" href="#buy-crypto">Buy</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" data-bs-toggle="tab" data-bs-target="#sell-crypto"
                                                    href="#sell-crypto">Sell</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane className="border-0 p-0" eventKey="1" id="buy-crypto" role="tabpanel"
                                                aria-labelledby="buy-crypto">
                                                <div className="input-group mb-3 d-flex flex-nowrap">
                                                    <Form.Control type="text" className=" form-control-sm crypto-buy-sell-input no-caret" aria-label="crypto buy select" placeholder="Select Currency" />
                                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                    />
                                                </div>
                                                <div className="input-group mb-3 d-flex flex-nowrap">
                                                    <Form.Control type="text" className=" form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                                                    <Select name="colors" options={Selectdata2}
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                                    <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                                    <div className="fw-semibold fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                                    <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                                    <label className="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                                    <div className="row g-2">
                                                        <div className="col-xl-6">
                                                            <div className="p-2 border rounded">
                                                                <div className="form-check mb-0">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                                    <label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
                                                                        Credit / Debit Cards
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="p-2 border rounded">
                                                                <div className="form-check mb-0">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                    <label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
                                                                        Paypal
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4 pt-1">
                                                    <button type="button" className="btn btn-primary btn-wave">BUY</button>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane className=" border-0 p-0" eventKey="2" id="sell-crypto" role="tabpanel"
                                                aria-labelledby="sell-crypto">
                                                <div className="input-group mb-3 d-flex flex-nowrap">
                                                    <Form.Control type="text" className=" form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
                                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                    />
                                                </div>
                                                <div className="input-group mb-3 d-flex flex-nowrap">
                                                    <Form.Control type="text" className=" form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                                    <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                                    <div className="fw-semibold fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                                    <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                                    <label className="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                                    <div className="row g-2">
                                                        <div className="col-xl-6">
                                                            <div className="p-2 border rounded">
                                                                <div className="form-check mb-0">
                                                                    <input className="form-check-input" type="radio" name="sellcrypto" id="sellcrypto1" />
                                                                    <label className="form-check-label fs-12" htmlFor="sellcrypto1">
                                                                        Credit / Debit Cards
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Col xl={6}>
                                                            <div className="p-2 border rounded">
                                                                <div className="form-check mb-0">
                                                                    <input className="form-check-input" type="radio" name="sellcrypto" id="sellcrypto2" defaultChecked />
                                                                    <label className="form-check-label fs-12" htmlFor="sellcrypto2">
                                                                        Paypal
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4 pt-1">
                                                    <button type="button" className="btn btn-danger btn-wave">SELL</button>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </TabContainer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={5} xl={12} >
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Recent Activity
                            </Card.Title>
                            <Dropdown className="">
                                <Dropdown.Toggle as='a' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul' className='dropdown-position'>
                                    <Dropdown.Item as='li' href="#!">Week</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table card-table table-vcenter text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-center">Date</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">From / To</th>
                                            <th scope="col">Time &amp; Status</th>
                                        </tr>
                                    </thead>
                                    {Recentactivity.map((idx) => (
                                        <tbody className="active-tab" key={Math.random()}>
                                            <tr>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-muted mb-0 fw-semibold">{idx.text1}</p>
                                                        <span className="fs-12 text-muted">{idx.text2}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <span className="fs-12 text-muted">{idx.text3}</span>
                                                            <p className="mb-0">{idx.textx}<span className="text-muted">{idx.text4}</span></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center text-center">
                                                        <div className="d-flex align-items-center fw-semibold">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                            <span className="ms-2">{idx.text5}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted mb-1">{idx.text6}</span>
                                                        <p className="mb-0">{idx.text7}
                                                            <span className={`fs-11 text-${idx.color} fw-semibold`}>{idx.text8}</span></p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} >
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between flex-wrap">
                            <Card.Title>
                                Bitcoin Price Statistics
                            </Card.Title>
                            <div className="d-flex">
                                <button type="button" className="btn btn-success btn-wave btn-sm me-2">Buy Now</button>
                                <Dropdown className="">
                                    <Dropdown.Toggle as='a' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                        <i className="fe fe-more-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul' className='dropdown-position'>
                                        <Dropdown.Item as='li' href="#!">Week</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="list-group border-0 crypto-list">
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Bitcoin value in USD</p>
                                        <p className="text-dark mb-0 font-weight-normal tx-15">
                                            <span className="numberfont">$29,472.60</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+280.30(0.96%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-normal text-dark">Trade Value</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">$245,36,465.652</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span className="badge bg-secondary-transparent ms-3">3 Years</span></p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#1</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">This Week High</p>
                                        <p className="text-success mb-0 tx-15">
                                            <span className="numberfont">$68,990.90</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">This Week Low</p>
                                        <p className="text-danger mb-0 tx-15">
                                            <span className="numberfont">$28,825.76</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Dominance</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">70%</span>
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false} className="list-group-item flex-column align-items-start border-0">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Alltime High</p>
                                        <p className="text-info mb-0 tx-15">
                                            <span className="numberfont">$68,990.90</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} >
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Top Traders
                            </Card.Title>
                            <Dropdown>
                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                                    View All
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">This Week</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Last Week</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled my-1">
                                <li className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/11.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Json Taylor</p>
                                                <p className="mb-0 text-muted fs-12">Bought 0.008213 Bitcoin using ****9808</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                0.09251821409 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $1,203.92
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/4.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Alicia Smith</p>
                                                <p className="mb-0 text-muted fs-12">Sold - 0.7902400 Litecoin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                0.2362333001 <span className="text-default">- LTC</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $19,092.56
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Branco Eliga</p>
                                                <p className="mb-0 text-muted fs-12">Bought +12.9092 Euro coin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                0.009823487 <span className="text-default">- EUROC</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $8,977.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/12.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Alec Carey</p>
                                                <p className="mb-0 text-muted fs-12">Bought 32.09472944 Dash using wallet</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                8.88234590 <span className="text-default">- DASH</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/5.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Sia Linda</p>
                                                <p className="mb-0 text-muted fs-12">Sent 0.00662 Bitcoin to Ravos Chan</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                58.6225600 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../assets/images/faces/10.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-semibold">Ryan Ranolds</p>
                                                <p className="mb-0 text-muted fs-12">Bought 2.098123 Etherium</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 fw-semibold text-success">
                                                190.0092773 <span className="text-default">- ETH</span>
                                            </p>
                                            <p className="mb-0 op-7 text-muted fs-11">
                                                $18,283982.00
                                            </p>
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
                        <Card.Header className="c justify-content-between flex-wrap">
                            <Card.Title className=" mb-2 mb-sm-0">
                                Crypto currencies Market Value
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
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Symbol</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Market Cap</th>
                                            <th scope="col">Price Graph</th>
                                            <th scope="col">Volume</th>
                                            <th scope="col">Price Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                    </span> - BTC
                                                </div>
                                            </td>
                                            <td>
                                                $16,839.10
                                            </td>
                                            <td>
                                                324.01B
                                            </td>
                                            <td>
                                                <div id="bitcoin-price-graph"><Cryptobitcoin /></div>
                                            </td>
                                            <td>
                                                14,674,311,168
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Etherium</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                    </span> - ETH
                                                </div>
                                            </td>
                                            <td>
                                                1,217.96
                                            </td>
                                            <td>
                                                $149,316,232,699
                                            </td>
                                            <td>
                                                <div id="etherium-price-graph"><Cryptoetherium /></div>
                                            </td>
                                            <td>
                                                $4,758,554,801
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Dash</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                                    </span> - DASH
                                                </div>
                                            </td>
                                            <td>
                                                $43.49
                                            </td>
                                            <td>
                                                $480,799,847
                                            </td>
                                            <td>
                                                <div id="dash-price-graph"><Cryptodash /></div>
                                            </td>
                                            <td>
                                                $52,626,563
                                            </td>
                                            <td>
                                                <span className="text-success">0.45% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Ripple</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Ripple.svg" alt="" />
                                                    </span> - XRP
                                                </div>
                                            </td>
                                            <td>
                                                $0.3531
                                            </td>
                                            <td>
                                                $17,791,969,465
                                            </td>
                                            <td>
                                                <div id="ripple-price-graph"><Cryptoripple /></div>
                                            </td>
                                            <td>
                                                $511,598,941
                                            </td>
                                            <td>
                                                <span className="text-success">0.97% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Iota</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/IOTA.svg" alt="" />
                                                    </span> - IOTA
                                                </div>
                                            </td>
                                            <td>
                                                $0.169741
                                            </td>
                                            <td>
                                                $471,800,600
                                            </td>
                                            <td>
                                                <div id="iota-price-graph"><Cryptoiota /></div>
                                            </td>
                                            <td>
                                                $5,524,385
                                            </td>
                                            <td>
                                                <span className="text-success">0.93% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Neo</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Neo.svg" alt="" />
                                                    </span> - NEO
                                                </div>
                                            </td>
                                            <td>
                                                $6.43
                                            </td>
                                            <td>
                                                $453,601,667
                                            </td>
                                            <td>
                                                <div id="neo-price-graph"><Cryptoneo /></div>
                                            </td>
                                            <td>
                                                $12,904,320
                                            </td>
                                            <td>
                                                <span className="text-danger">0.49% <i className="ti ti-arrow-big-down-lines ms-1"></i></span>
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
Crypto.layout = "Contentlayout"

export default Crypto
