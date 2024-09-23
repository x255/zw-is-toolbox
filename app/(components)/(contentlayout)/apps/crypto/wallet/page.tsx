"use client";
import React from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Wallet = () => {
    return (
        <>
            <Seo title={"Wallet"} />
            <Pageheader title="Wallet" heading="Crypto" active="Wallet" />

            <div className="container">
                <Row>
                    <Col xl={4}>
                        <Card className=" custom-card">
                            <Card.Header>
                                <Card.Title>
                                    BTC WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available BTC</span>
                                            <span className="fw-semibold">0.05437 BTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-semibold">$1646.94 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <button className="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                    <button className="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Header>
                                <Card.Title>
                                    ETH WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available ETH</span>
                                            <span className="fw-semibold">2.3892 ETH</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-semibold">$4581.24 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <button className="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                    <button className="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Header>
                                <Card.Title>
                                    XRP WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available XRP</span>
                                            <span className="fw-semibold">234.943 XRP</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-semibold">$192.29 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <button className="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                    <button className="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Header>
                                <Card.Title>
                                    LTC WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available LTC</span>
                                            <span className="fw-semibold">37.254 LTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-semibold">$3519.01 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <button className="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                                    <button className="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Row>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header className=" justify-content-between">
                                        <Card.Title>
                                            BTC Wallet Address
                                        </Card.Title>
                                        <div>
                                            <button className="btn btn-primary-ghost btn-wave">Connect</button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <Form.Label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</Form.Label>
                                                <InputGroup >
                                                    <Form.Control type="text" className="form-control" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <Button className="btn btn-primary">Copy</Button>
                                                </InputGroup>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <Row className=" gy-3">
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-semibold">6.2834 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-semibold">2.7382 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <div className="col-xl-4">
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-semibold">12.5232 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className=" custom-card">
                                    <Card.Header className=" justify-content-between">
                                        <Card.Title>
                                            ETH Wallet Address
                                        </Card.Title>
                                        <div>
                                            <button className="btn btn-primary-ghost btn-wave">Connect</button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <Form.Label htmlFor="btc-wallet-address2" className="form-label">Wallet Address</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" className="form-control" id="btc-wallet-address2" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <Button className="btn btn-primary">Copy</Button>
                                                </InputGroup>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <Row className=" gy-3">
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-semibold">6.2834 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-semibold">2.7382 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-semibold">12.5232 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className=" custom-card">
                                    <Card.Header className=" justify-content-between">
                                        <Card.Title>
                                            LTC Wallet Address
                                        </Card.Title>
                                        <div>
                                            <button className="btn btn-primary-ghost btn-wave">Connect</button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <Form.Label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="text" className="form-control" id="btc-wallet-address3" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <Button className="btn btn-primary">Copy</Button>
                                                </InputGroup>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <Row className=" gy-3">
                                            <div className="col-xl-4">
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-semibold">6.2834 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-semibold">2.7382 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-semibold">12.5232 <span className="fs-12 text-muted fw-normal">LTC</span></span>
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
            </div>
        </>
    )
}

export default Wallet
