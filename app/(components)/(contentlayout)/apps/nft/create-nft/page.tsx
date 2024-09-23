"use client";
import React from 'react'
import { Badge, Card, Col, Form, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Createnft = () => {
    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];
    return (
        <>
            <Seo title={"Create Nft"} />
            <Pageheader title="Create Nft" heading="NFT" active="Create Nft" />
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Create NFT</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3 justify-content-between">
                                <Col xxl={3} xl={12}>
                                    <div className="create-nft-item">
                                        <Form.Label className="form-label">Upload NFT</Form.Label>
                                        <FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </Col>
                                <Col xxl={8} xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="input-placeholder" className="form-label">NFT Title</Form.Label>
                                            <input type="text" className="form-control" id="input-placeholder" placeholder="eg:Neo-Nebulae" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-description" className="form-label">NFT Description</Form.Label>
                                            <textarea className="form-control" id="nft-description" rows={3} placeholder="Enter Description"></textarea>
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="nft-link" className="form-label">External Link</label>
                                            <input type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Row className=" gy-3">
                                        <div className="col-xl-6">
                                            <label htmlFor="nft-creator-name" className="form-label">Creator Name</label>
                                            <Form.Control type="text" id="nft-creator-name" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-xl-6">
                                            <label htmlFor="nft-price" className="form-label">NFT Price</label>
                                            <Form.Control type="text" id="nft-price" placeholder="Enter Price" />
                                        </div>
                                        <div className="col-xl-4">
                                            <label htmlFor="nft-size" className="form-label">NFT Size</label>
                                            <Form.Control type="text" id="nft-size" placeholder="Enter Size" />
                                        </div>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-royality" className="form-label">Royality</Form.Label>
                                            <Select options={Data1} classNamePrefix='Select2' menuPlacement='auto' className="multi-select"
                                                placeholder="Choose Royalities" />
                                        </Col>
                                        <Col xl={4}>
                                            <label htmlFor="nft-property" className="form-label">Property</label>
                                            <Form.Control type="text" id="nft-property" placeholder="Enter Property" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className="form-label d-block">Method</Form.Label>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</Form.Label>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className=" text-end">
                            <Link href="#!" scroll={false} className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                NFT Preview Here
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="card custom-card mb-0 shadow-none border">
                                <img src="../../../assets/images/nft-images/18.png" className="card-img-top" alt="..." />
                                <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                    <div className="flex-fill">
                                        <button type="button" aria-label="anchor" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
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
                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between">
                                        <div className="fw-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                            <span className="avatar avatar-xs me-1">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>0.24ETH
                                        </div>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Createnft
