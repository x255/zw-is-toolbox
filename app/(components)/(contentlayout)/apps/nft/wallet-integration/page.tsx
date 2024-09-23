"use client";
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Walletintegration = () => {
    return (
        <>

            <Seo title={"Wallet Integration"} />
            <Pageheader title="Wallet Integration" heading="NFT" active="Wallet Integration" />
            <div className="container">
                <Row>
                    <Col xl={3}>
                        <Card className=" custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Choose Network
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <ul className="list-group list-group-flush nft-list">
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/34.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Etherium</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/35.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Binance</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/36.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Solana</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/39.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Tezos</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/37.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Avalanche</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/38.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Cardano</div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Card className=" custom-card">
                            <Card.Header className=" justify-content-between">
                                <Card.Title>
                                    Choose Wallet
                                </Card.Title>
                                <div>
                                    <button className="btn btn-secondary btn-wave">Add New Wallet</button>
                                </div>
                            </Card.Header>
                            <Card.Body className=" p-4">
                                <Row className=" justify-content-center">
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet active">
                                            <Card.Body className="p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/42.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">MetaMask</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet">
                                            <Card.Body className=" p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/41.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Enjin Wallet</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/43.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Trust Wallet</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/40.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Coinbase Wallet</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/44.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Lido</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className=" custom-card nft-wallet">
                                            <Card.Body className=" p-3">
                                                <Link href="#!" scroll={false} className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/45.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-semibold mb-0">Huobi Wallet</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                    <button className="btn btn-success float-end btn-wave">Connect</button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Walletintegration
