"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row, Offcanvas } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import {offcanvas1,offcanvas2,offcanvas3,offcanvas4,offcanvas5} from '../../../../../shared/data/prismdata/advancedui/advancedui';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Offcanvass = () => {

    //live demo
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //static backdrop
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //body Scrooling and backdrop
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    //Toggle Top
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    //toggle Right
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    //toggle Bottom
    //bottom

    const [showb, setShowb] = useState(false);

    const handleCloseb = () => setShowb(false);
    const handleShowb = () => setShowb(true);
    return (
        <>
             <Seo title={"Offcanvas"} />
            <Pageheader title="Offcanvas" heading="Advanced Ui" active="Offcanvas" />
            <Row>
                <Col xl={4}>
                             <ShowCode title="Live demo" code={offcanvas1}>
                            <Button className="btn mb-1 me-2" data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow} variant='primary'
                                role="button" aria-controls="offcanvasExample">
                                Link with href
                            </Button>
                            <Button className="btn me-2 mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow} variant='primary'
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Button with data-bs-target
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} backdrop={true} className=" offcanvas-start" tabIndex="-1" id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className=" p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there {`i'm`} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                             </ShowCode>

                </Col>
                <Col xl={4}>
                             <ShowCode title="Body scrolling" code={offcanvas2}>
                            <Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow1}
                                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
                                body scrolling
                            </Button>
                            <Offcanvas className=" offcanvas-start" show={show1} onHide={handleClose1} backdrop={true} data-bs-scroll="true"
                                data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling"
                                aria-labelledby="offcanvasScrollingLabel">
                                <Offcanvas.Header closeButton className=" border-bottom border-block-end-dashed">
                                    <Offcanvas.Title as='h5' id="offcanvasScrollingLabel">Notifications</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there {`i'm`} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                             </ShowCode>

                </Col>
                <Col xl={4}>
                             <ShowCode title="Static backdrop" code={offcanvas3}>
                            <Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow2}
                                data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                Toggle static offcanvas
                            </Button>
                            <Offcanvas className=" offcanvas-start" data-bs-backdrop="static" show={show2} onHide={handleClose2} tabIndex="-1"
                                id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <Offcanvas.Title as='h5' id="staticBackdropLabel">Notifications</Offcanvas.Title>

                                </Offcanvas.Header>
                                <Offcanvas.Body className=" p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there {`i'm`} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                             </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                             <ShowCode title="Body scrolling and backdrop" code={offcanvas4}>
                            <Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow4}
                                data-bs-target="#offcanvasWithBothOptions"
                                aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
                                backdrop</Button>
                            <Offcanvas className=" offcanvas-start" data-bs-scroll="true" tabIndex="-1" show={show4} onHide={handleClose4}
                                id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <Offcanvas.Title as='h5' id="offcanvasWithBothOptionsLabel">Notifications</Offcanvas.Title>

                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there {`i'm`} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                             </ShowCode>

                </Col>
                <Col xl={5}>
                             <ShowCode title="Placement" code={offcanvas5}>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow3}
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                                offcanvas</Button>
                            <Offcanvas placement='top' show={show3} onHide={handleClose3} className=" offcanvas-top" tabIndex={-1} id="offcanvasTop"
                                aria-labelledby="offcanvasTopLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow5}
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                                offcanvas</Button>
                            <Offcanvas placement='end' show={show5} onHide={handleClose5} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel1">
                                <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there {`i'm `}available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
                                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
                                bottom
                                offcanvas</Button>
                            <Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
                                aria-labelledby="offcanvasBottomLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="offcanvas-body small">
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                             </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Offcanvass
