"use client";
import Link from 'next/link'
import React from 'react'
import { Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap'
import { Loopingdata, Loopingdata1 } from '../../../../../../shared/data/apps/nft/liveacuationdata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Liveauction = () => {
    return (
        <>
            <Seo title={"Live Auction"} />
            <Pageheader title="Live Auction" heading="NFT" active="Live Auction" />

            <Row>
                <Col xxl={9} xl={9} lg={8}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                        <div className="nft-tag nft-tag-primary active">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-world fs-20"></i></span>
                            <span className="nft-tag-text">All</span>
                        </div>
                        <div className="nft-tag nft-tag-secondary">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-flame fs-20"></i></span>
                            <span className="nft-tag-text">New Trends</span>
                        </div>
                        <div className="nft-tag nft-tag-info">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-palette fs-20"></i></span>
                            <span className="nft-tag-text">Art Work</span>
                        </div>
                        <div className="nft-tag nft-tag-success">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 fs-20"></i></span>
                            <span className="nft-tag-text">Games</span>
                        </div>
                        <div className="nft-tag nft-tag-danger">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-tie fs-20"></i></span>
                            <span className="nft-tag-text">Fashion</span>
                        </div>
                        <div className="nft-tag nft-tag-warning">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-music fs-20"></i></span>
                            <span className="nft-tag-text">Music</span>
                        </div>
                        <div className="nft-tag nft-tag-dark">
                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-gift fs-20"></i></span>
                            <span className="nft-tag-text">Others</span>
                        </div>
                    </div>
                    <Row>
                        <h6 className="fw-semibold mb-3">Live Auction:</h6>
                        {Loopingdata.map((idx) => (
                            <Col xxl={3} xl={4} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body p-3">
                                        <div className="mb-3 overflow-hidden position-relative">
                                            <Link href="#!" scroll={false} className="stretched-link"></Link>
                                            <img src={idx.src1} alt="img" className="nft-img img-fluid" />
                                            <Link href="#!" scroll={false} className="nft-btn" data-bs-toggle="tooltip" aria-label="Like"><i className="ti ti-heart"></i></Link>
                                            <span className="nft-timer-container">
                                                <i className="ti ti-bolt fs-14"></i>
                                                <span className="nft-timer ms-1 fs-11">04 Days 03 : 44 : 04</span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
                                            <div className="d-inline-flex align-items-start position-relative">
                                                <Link href="/pages/profile" className="stretched-link"></Link>
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded">
                                                        <img src={idx.src2} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="mb-0 d-block fs-14 fw-semibold">{idx.name}</span>
                                                    <span className="fs-13 text-muted">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-1 fs-15"></i></span>
                                                </div>
                                            </div>
                                            <span className="fs-13 text-muted">{idx.text2}</span>
                                        </div>
                                        <div className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>{idx.heading}</Link></div>
                                        <div className="d-flex align-items-end flex-wrap gap-2">
                                            <div className="flex-fill">
                                                <p className="fs-14 mb-1 text-muted">Highest Bid</p>
                                                <div className="fs-16 mb-0 d-flex align-items-center fw-semibold">
                                                    <span className="avatar avatar-xs me-1"><img src="../../../assets/images/nft-images/34.png" alt="" /></span>
                                                    {idx.text3}
                                                </div>
                                            </div>
                                            <Link href="#!" scroll={false} className="btn btn-primary-light btn-wave">Place Bid</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end mb-4">
                                <li className="page-item disabled">
                                    <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#!">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </Row>
                </Col>
                <Col xxl={3} xl={3} lg={4}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Featured Creators
                                    </Card.Title>
                                    <div>
                                        <button className="btn btn-primary-light btn-sm btn-wave">View All</button>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup variant="flush" className="list-group-flush">
                                        {Loopingdata1.map((idx) => (
                                            <ListGroup.Item key={Math.random()}>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md avatar-rounded me-2">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                            <span className="fs-12 text-muted">{idx.text2}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="d-block fw-semibold text-success">{idx.text3}</span>
                                                        <span className="d-block text-muted fs-11">{`${idx.text4}'s`}</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Activity
                                    </Card.Title>
                                    <Dropdown >
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Today
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Today</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">This Week</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/nft-images/31.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><Link href="#!" scroll={false} className="fw-semibold">DreamSpace</Link><span className="fs-12 text-muted ms-2 d-inline-block">24 mins ago</span></div>
                                                    <div className="fs-13">Purchsed from you by <Link className="text-decoration-underline" href="#!" scroll={false}>Mitchell</Link> for <span className="text-success fw-semibold fs-12">0.57ETH</span>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/nft-images/25.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">DreamSpace</span><span className="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                                    <div className="fs-13">You started following mark zensberg.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/nft-images/21.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">Neo Nebulae</span><span className="fs-12 text-muted ms-2 d-inline-block">5 mins ago</span></div>
                                                    <div className="fs-13">You showed interest in purchasing <Link href="#!" scroll={false} className="fs-12 text-warning fw-semibold">NeoNebulae</Link>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/nft-images/26.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">Neo Nebulae</span><span className="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                                    <div className="fs-13">Purchased from <Link href="#!" scroll={false} className="text-decoration-underline">CyberCanvas</Link> for <span className="fw-semibold fs-12 text-pink">1.345ETH</span>.</div>
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

export default Liveauction
