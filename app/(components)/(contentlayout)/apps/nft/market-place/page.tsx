"use client";
import React from 'react'
import { Badge, Button, Card, Col, Dropdown, Nav, Row, Tab, TabPane } from 'react-bootstrap'
import Link from 'next/link';
import { Tabpane1data } from '../../../../../../shared/data/apps/nft/marcketplacedata'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Marketplace = () => {
    return (
        <>
            <Seo title={"Market Place"} />
            <Pageheader title="Market Place" heading="NFT" active="Market Place" />
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col xl={12}>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav className=" nav-tabs nav-tabs-header mb-0" role="tablist">
                                            <Nav.Item role="presentation">
                                                <Nav.Link className=" " eventKey="first" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-all" aria-selected="true">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="2" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="3" role="tab" aria-current="page" href="#nft-gaming" aria-selected="false" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="4" role="tab" aria-current="page" href="#nft-domain" aria-selected="false" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="5" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="6" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="7" role="tab" aria-current="page" href="#nft-sports" aria-selected="false" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="8" role="tab" aria-current="page" href="#nft-fashion" aria-selected="false" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="9" role="tab" aria-current="page" href="#nft-avatars" aria-selected="false" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link data-bs-toggle="tab" eventKey="10" role="tab" aria-current="page" href="#nft-memes" aria-selected="false" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Dropdown className="btn-list">
                                        <Button type="button" className="btn btn-sm btn-secondary btn-wave">Filters</Button>
                                        <Dropdown.Toggle as='a' className="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Link className='dropdown-item' href="#!">New Collection</Link>
                                            <Link className='dropdown-item' href="#!">High - Low</Link>
                                            <Link className='dropdown-item' href="#!">Low - High</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="p-0 border-0" id="nft-all" role="tabpanel">
                                <Row>
                                    {Tabpane1data.map((idx) => (
                                        <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12" key={Math.random()}>
                                            <Card className="custom-card">
                                                <img src={idx.src1}
                                                    className="card-img-top" alt="..." />
                                                <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                    <div className="flex-fill">
                                                        <Button variant='success' className="btn btn-sm btn-icon  rounded-pill btn-wave waves-effect waves-light">
                                                            <i className="ri-heart-fill"></i>
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <span className="badge nft-like-badge text-fixed-white">
                                                            <i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>{idx.badge}</span>
                                                    </div>
                                                </div>
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-rounded avatar-md">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">{idx.text1}</p>
                                                            <p className="fs-12 text-muted mb-0">{idx.text2}</p>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                                        {idx.time}
                                                    </p>
                                                    <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>{idx.heading}</Link></p>
                                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                        <div className="fw-semibold">
                                                            {idx.text3}
                                                        </div>
                                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                                            <span className="avatar avatar-xs me-1">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                            </span>{idx.text4}
                                                        </div>
                                                    </div>
                                                    <div className="d-grid">
                                                        <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className="p-0 border-0" id="nft-art" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/21.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.19k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">CyberCanvas</p>
                                                        <p className="fs-12 text-muted mb-0">@cybercanvas</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Surreal Synthesis</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.11ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className=" col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/25.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.75k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">PixelMaestro</p>
                                                        <p className="fs-12 text-muted mb-0">@pixelmaestro</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Pixel Prism</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.23ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/26.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.83k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">BitBard</p>
                                                        <p className="fs-12 text-muted mb-0">@bitbard</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Meta-Morphosis</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.38ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className=" col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/20.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.05k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">BitMaster</p>
                                                        <p className="fs-12 text-muted mb-0">@bit_master</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Chromatic Chaos</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.19ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5" className="p-0 border-0" id="nft-music" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="6" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className=" col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="7" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>
                                                        0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="8" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="9" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="10" className=" p-0 border-0" id="nft-memes" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className=" custom-card">
                                            <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <button type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </button>
                                                </div>
                                                <div>
                                                    <Badge bg=" nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</Badge>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link href="#!" scroll={false}>Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</button>
                                                </div>
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

export default Marketplace
