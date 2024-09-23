"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Container, Form, Modal, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap'
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { model1, model2, model3, model4, model5, model6, model7, model8, model9, model10, model11, model12, model13, model14, model15 } from '../../../../../shared/data/prismdata/advancedui/advancedui';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Modalscloses = () => {
    //vertically centered scrollable
    const [modalShow1, setModalShow1] = useState(false);
    //  Twomodals
    const [showt1, setShowt1] = useState(false);
    const [showt2, setShowt2] = useState(false);
    const handleCloset1 = () => setShowt1(false);
    const handleShowt1 = () => setShowt1(true);
    const handleCloset2 = () => setShowt2(false);

    const Handleclose1 = () => {
        setShowt1(false);
        setShowt2(true);
    };
    const Handleclose2 = () => {
        setShowt2(false);
        setShowt1(true);
    };
    //fullscreen modals
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
    const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [showf, setShowf] = useState(false);

    function handleShowf(breakpoint: any, _color: string) {
        setFullscreen(breakpoint);
        setShowf(true);
    }
    //grid
    const [modalShow2, setModalShow2] = useState(false);
    // small modal
    const [smShow, setSmShow] = useState(false);

    //large modal
    const [lgShow, setLgShow] = useState(false);

    //large modal
    const [xlShow, setXlShow] = useState(false);

    //Basic Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Static Backdrop
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //Scrolling Long Content
    const [show2, setShow2] = useState(false);
    //vertically centered modal
    const [modalShow, setModalShow] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    //Vertically Centered Modal
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    //Vertical Centered Scrollable
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    //Tooltips And Popovers
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    //Grid
    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    //FullScreen Model
    
    const [show16, setShow16] = useState(false);

    const handleClose16 = () => setShow16(false);
    const handleShow16 = () => setShow16(true);
    const [, setVisible] = useState(false);
    const [animation1, setanimation1] = useState(false);
    const [animation2, setanimation2] = useState(false);
    const [animation3, setanimation3] = useState(false);
    const [animation4, setanimation4] = useState(false);
    const [animation5, setanimation5] = useState(false);
    const [animation6, setanimation6] = useState(false);
    const [animation7, setanimation7] = useState(false);
    const [animation8, setanimation8] = useState(false);
    const [animation9, setanimation9] = useState(false);
    const hide = () => {
        setVisible(false);
    };

    const viewDemoShow1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(true);
                break;
            case "show2":
                setanimation2(true);
                break;
            case "show3":
                setanimation3(true);
                break;
            case "show4":
                setanimation4(true);
                break;
            case "show5":
                setanimation5(true);
                break;
            case "show6":
                setanimation6(true);
                break;
            case "show7":
                setanimation7(true);
                break;
            case "show8":
                setanimation8(true);
                break;
            case "show9":
                setanimation9(true);
                break;
        }
    };

    const viewDemoClose1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(false);
                break;
            case "show2":
                setanimation2(false);
                break;
            case "show3":
                setanimation3(false);
                break;
            case "show4":
                setanimation4(false);
                break;
            case "show5":
                setanimation5(false);
                break;
            case "show6":
                setanimation6(false);
                break;
            case "show7":
                setanimation7(false);
                break;
            case "show8":
                setanimation8(false);
                break;
            case "show9":
                setanimation9(false);
                break;
        }
    };
    return (
        <>
            <Seo title={"Modals & Closes"} />
            <Pageheader title="Modals & Closes" heading="Advanced Ui" active="Modals & Closes" />
            <Row>
                <Col xl={4}>
                    <ShowCode title="Basic Modal" code={model1}>
                        <Button variant='primary' onClick={handleShow}>
                            Launch demo modal
                        </Button>
                        <Modal
                            show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='secondary' onClick={handleClose}>Close</Button>
                                <Button variant='primary'
                                    onClick={handleClose}>Save
                                    changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>

                </Col>

                <Col xl={4}>
                    <ShowCode title="Static backdrop" code={model2}>
                        <Button variant='primary'
                            onClick={handleShow1}>
                            Launch static backdrop modal
                        </Button>
                        <Modal className=" fade" backdrop="static" keyboard={false} show={show1} onHide={handleClose1}
                        >
                            <div className="modal-content">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title
                                    </Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. {`Don't `}even try to
                                    press
                                    escape key.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose1}
                                        data-bs-dismiss="modal">Close</Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </div>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Scrolling long content" code={model3}>
                        <Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleShow2}
                            data-bs-target="#exampleModalScrollable">
                            Scrolling long content
                        </Button>
                        <Modal className=" fade" id="exampleModalScrollable" tabIndex="-1" show={show2} onHide={handleClose2}
                            aria-labelledby="exampleModalScrollable" data-bs-keyboard="false"
                            aria-hidden="true">
                            <div className="modal-dialog-scrollable">
                                <div className="modal-content">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title" id="staticBackdropLabel1">Modal title
                                        </h6>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Libero
                                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                        nisi
                                        ipsa maiores fugiat deleniti quis reiciendis veritatis.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                        ex
                                        tempore fuga similique ipsa blanditiis et accusamus
                                        temporibus
                                        commodi voluptas! Nobis veniam illo architecto expedita quam
                                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                                        deleniti
                                        quis ad nemo ipsam officia temporibus, doloribus fuga
                                        asperiores
                                        ratione distinctio velit alias hic modi praesentium aperiam
                                        officiis eaque, accusamus aut. Accusantium assumenda,
                                        commodi
                                        nulla provident asperiores fugit inventore iste amet aut
                                        placeat
                                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                                        aperiam dolores magni iusto distinctio voluptatibus minus a
                                        unde
                                        at! Consequatur voluptatum in eaque obcaecati, impedit
                                        accusantium ea soluta, excepturi, quasi quia commodi
                                        blanditiis?
                                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                                        accusamus recusandae est consequuntur iure.
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal" onClick={handleClose2}>Close</Button>
                                        <Button type="button" className="btn btn-primary">Save
                                            Changes</Button>
                                    </Modal.Footer>
                                </div>
                            </div>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Vertically centered modal" code={model4}>
                        <Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => setModalShow(true)}
                            data-bs-target="#exampleModalScrollable2">
                            Vertically centered modal
                        </Button>
                        <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                    nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setModalShow(false)}>
                                    Close
                                </Button>
                                <Button variant="primary">Save Changes</Button>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Vertical Centered Scrollable" code={model5}>
                        <Button variant='primary' type="button" className="btn" onClick={() => setModalShow1(true)}>
                            Vertically centered scrollable modal
                        </Button>
                        <div className="modal fade" id="exampleModalScrollable3" tabIndex={-1}
                            aria-labelledby="exampleModalScrollable3" data-bs-keyboard="false"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6 className="modal-title" id="staticBackdropLabel3">Modal title
                                        </h6>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                            voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                            ex
                                            tempore fuga similique ipsa blanditiis et accusamus
                                            temporibus
                                            commodi voluptas! Nobis veniam illo architecto expedita quam
                                            ratione quaerat omnis. In, recusandae eos! Pariatur,
                                            deleniti
                                            quis ad nemo ipsam officia temporibus, doloribus fuga
                                            asperiores
                                            ratione distinctio velit alias hic modi praesentium aperiam
                                            officiis eaque, accusamus aut. Accusantium assumenda,
                                            commodi
                                            nulla provident asperiores fugit inventore iste amet aut
                                            placeat
                                            consequatur reprehenderit. Ratione tenetur eligendi, quis
                                            aperiam dolores magni iusto distinctio voluptatibus minus a
                                            unde
                                            at! Consequatur voluptatum in eaque obcaecati, impedit
                                            accusantium ea soluta, excepturi, quasi quia commodi
                                            blanditiis?
                                            Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                            consequuntur quod quo veniam? Labore dignissimos reiciendis
                                            accusamus recusandae est consequuntur iure.</p>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save
                                            Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal centered show={modalShow1} onHide={() => setModalShow1(false)}
                            keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                ex
                                tempore fuga similique ipsa blanditiis et accusamus
                                temporibus
                                commodi voluptas! Nobis veniam illo architecto expedita quam
                                ratione quaerat omnis. In, recusandae eos! Pariatur,
                                deleniti
                                quis ad nemo ipsam officia temporibus, doloribus fuga
                                asperiores
                                ratione distinctio velit alias hic modi praesentium aperiam
                                officiis eaque, accusamus aut. Accusantium assumenda,
                                commodi
                                nulla provident asperiores fugit inventore iste amet aut
                                placeat
                                consequatur reprehenderit. Ratione tenetur eligendi, quis
                                aperiam dolores magni iusto distinctio voluptatibus minus a
                                unde
                                at! Consequatur voluptatum in eaque obcaecati, impedit
                                accusantium ea soluta, excepturi, quasi quia commodi
                                blanditiis?
                                Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                consequuntur quod quo veniam? Labore dignissimos reiciendis
                                accusamus recusandae est consequuntur iure.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setModalShow1(false)}>
                                    Close
                                </Button>
                                <Button variant="primary">Save Changes</Button>
                            </Modal.Footer>
                        </Modal>

                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Tooltips and popovers" code={model6}>
                        <Button variant='primary' type="button" className="" onClick={handleShow16}>
                            Launch demo modal
                        </Button>
                        <Modal show={show16} onHide={handleClose16} centered className='popover-modal'>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6"> Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <h5>Popover in a modal</h5>
                                <p> This
                                    <OverlayTrigger trigger="click"
                                        placement='right'
                                        overlay={
                                            <Popover placement='bottom'>
                                                <Popover.Header> Popover bottom</Popover.Header>
                                                <Popover.Body>
                                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                                </Popover.Body>
                                            </Popover>
                                        }>
                                        <Button variant="secondary" className="me-2 ms-2">button</Button>
                                    </OverlayTrigger>
                                    triggers a popover on click.
                                </p>
                                <hr />
                                <h5>Tooltips in a modal</h5>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Tooltip</Tooltip>}>
                                    <Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link</Link>
                                </OverlayTrigger> and <OverlayTrigger placement="top" overlay={<Tooltip>Tooltip</Tooltip>}>
                                    <Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip" title="Tooltip">that link</Link>
                                </OverlayTrigger> have tooltips on hover.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose16}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="modal fade" id="exampleModalScrollable4" tabIndex={-1}
                            aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6 className="modal-title" id="staticBackdropLabel4">Modal title
                                        </h6>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h5>Popover in a modal</h5>
                                        <p>This <Link href="#!" scroll={false} role="button" className="btn btn-secondary"
                                            data-bs-toggle="popover" title="Popover title"
                                            data-bs-content="Popover body content is set in this attribute.">button</Link>
                                            triggers a popover on click.</p>
                                        <hr />
                                        <h5>Tooltips in a modal</h5>
                                        <p><Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This
                                            link</Link> and <Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip"
                                                title="Tooltip">that link</Link> have tooltips on hover.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save
                                            Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Using the grid" code={model7}>
                        <Button variant='' type="button" className="btn btn-primary" onClick={() => setModalShow2(true)}>
                            Launch demo modal
                        </Button>
                        <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6"> Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={4} className=" bg-light border">.col-md-4</Col>
                                        <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                            .ms-auto</Col>
                                        <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col sm={9} className=" bg-light border">
                                            Level 1: .col-sm-9
                                            <Row>
                                                <Col sm={6} className="col-8 bg-light border">
                                                    Level 2: .col-8 .col-sm-6
                                                </Col>
                                                <Col sm={6} className="col-4 bg-light border">
                                                    Level 2: .col-4 .col-sm-6
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setModalShow2(false)}>
                                    Close
                                </Button>
                                <Button variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="modal fade" id="exampleModalScrollable5" tabIndex={-1}
                            aria-labelledby="exampleModalScrollable5" data-bs-keyboard="false"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6 className="modal-title" id="staticBackdropLabel5">Modal title
                                        </h6>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close">
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container-fluid">
                                            <Row>
                                                <Col md={4} className=" bg-light border">.col-md-4</Col>
                                                <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                                    .ms-auto</Col>
                                            </Row>
                                            <Row className="row mt-3">
                                                <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                                    .ms-auto</Col>
                                                <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                                    .ms-auto</Col>
                                            </Row>
                                            <Row className="row mt-3">
                                                <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                                    .ms-auto</Col>
                                            </Row>
                                            <Row className="row mt-3">
                                                <Col sm={9} className=" bg-light border">
                                                    Level 1: .col-sm-9
                                                    <Row>
                                                        <Col sm={6} className="col-8 bg-light border">
                                                            Level 2: .col-8 .col-sm-6
                                                        </Col>
                                                        <Col sm={6} className="col-4 bg-light border">
                                                            Level 2: .col-4 .col-sm-6
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save
                                            Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Toggle between modals" code={model8}>
                        <Button className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" onClick={handleShowt1}
                            role="button">Open first modal
                        </Button>
                        <Modal className=" fade" id="exampleModalToggle" show={showt1} onHide={handleCloset1}
                            aria-labelledby="exampleModalToggleLabel" tabIndex="-1" aria-hidden="true"
                        >
                            <div className="">
                                <div className="modal-content">
                                    <Modal.Header closeButton>
                                        <Modal.Title as='h6' id="exampleModalToggleLabel">Modal 1
                                        </Modal.Title>

                                    </Modal.Header>
                                    <Modal.Body>
                                        Show a second modal and hide this one with the button below.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="btn btn-primary" onClick={Handleclose1}
                                            data-bs-target="#exampleModalToggle2"
                                            data-bs-toggle="modal">Open second modal</Button>
                                    </Modal.Footer>
                                </div>
                            </div>
                        </Modal>
                        <Modal className=" fade" id="exampleModalToggle2" show={showt2} onHide={handleCloset2}
                            aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" aria-hidden="true"
                        >
                            <div className="modal-dialog-centered">
                                <div className="modal-content">
                                    <Modal.Header>
                                        <Modal.Title as='h6' id="exampleModalToggleLabel2">Modal 2
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Hide this modal and show the first with the button below.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="btn btn-primary" data-bs-target="#exampleModalToggle" onClick={Handleclose2}
                                            data-bs-toggle="modal">Back to first</Button>
                                    </Modal.Footer>
                                </div>
                            </div>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Optional sizes" code={model9}>
                        <Button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" onClick={() => setXlShow(true)}
                            data-bs-target="#exampleModalXl">Extra large modal</Button>
                        <Button type="button" className="btn btn-secondary m-1" data-bs-toggle="modal" onClick={() => setLgShow(true)}
                            data-bs-target="#exampleModalLg">Large modal</Button>
                        <Button type="button" className="btn btn-warning m-1" data-bs-toggle="modal" onClick={() => setSmShow(true)}
                            data-bs-target="#exampleModalSm">Small modal</Button>
                        <Modal className=" fade" id="exampleModalXl" tabIndex="-1" size="xl" show={xlShow} onHide={() => setXlShow(false)}
                            aria-labelledby="exampleModalXlLabel" aria-hidden="true">
                            <Modal.Header closeButton>
                                <Modal.Title as='h6' id="exampleModalXlLabel">Extra large
                                    modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>
                        <Modal className=" fade" id="exampleModalLg" tabIndex="-1" size="lg" show={lgShow} onHide={() => setLgShow(false)}
                            aria-labelledby="exampleModalLgLabel" aria-hidden="true">
                            <Modal.Header closeButton>
                                <Modal.Title as='h6' id="exampleModalLgLabel">Large modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>
                        <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
                            aria-labelledby="example-modal-sizes-title-sm">
                            <Modal.Header closeButton>
                                <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                    Small Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Fullscreen modal" code={model10}>
                        {values.map((v, idx) => (
                            <Button
                                key={idx}
                                className={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
                                onClick={() => handleShowf(v, colors[idx % colors.length])}
                            >
                                Full screen {typeof v === 'string' && `below ${v.split('-')[0]}`}
                            </Button>
                        ))}
                        <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Full Screen Modal</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                            <Modal.Footer><Button className='btn btn-secondary' onClick={() => setShowf(false)}>close</Button></Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Varying modal content" code={model11}>
                        <Button variant='primary' type="button" className="btn  mb-1 me-2" onClick={handleShow4}>Open modal for
                            @mdo</Button>
                        <Modal show={show4} onHide={handleClose4}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @mdo
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose4}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button variant='secondary' type="button" className="btn mb-1 me-2" onClick={handleShow5}>Open modal for
                            @fat</Button>
                        <Modal show={show5} onHide={handleClose5}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @fat
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" placeholder="@fat" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose5}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button variant='light' type="button" className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
                            @getbootstrap</Button>
                        <Modal show={show6} onHide={handleClose6}>
                            <Modal.Header closeButton >
                                <Modal.Title as="h6">Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder=" @getbootstrap"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose6}>
                                    Close
                                </Button>
                                <Button variant="primary">Send message</Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="modal fade" id="formmodal" tabIndex={-1}
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6 className="modal-title" id="exampleModalLabel">New message</h6>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name"
                                                    className="col-form-label">Recipient:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message-text"
                                                    className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send
                                            message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Modal Animation Effects" code={model12}>
                        <Row className="row-sm">
                            <Col sm={6} md={4} xl={3}>
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
                                <Rodal onClose={() => viewDemoClose1("Basic")} visible={animation1} animation='Scale' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic"); }}>
                                            <i className='fe fe-x ms-auto'></i>
                                        </span>
                                        </Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button className='' variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
                                <Rodal onClose={() => viewDemoClose1("show2")} visible={animation2} animation='fade' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
                                <Rodal onClose={() => viewDemoClose1("show3")} visible={animation3} animation='flip' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
                                <Rodal onClose={() => viewDemoClose1("show4")} visible={animation4} animation='door' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false} ><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
                                <Rodal onClose={() => viewDemoClose1("show5")} visible={animation5} animation='rotate' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
                                <Rodal onClose={() => viewDemoClose1("show6")} visible={animation6} animation='slideUp' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
                                <Rodal onClose={() => viewDemoClose1("show7")} visible={animation7} animation='slideDown' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary" >Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
                                <Rodal onClose={() => viewDemoClose1("show8")} visible={animation8} animation='slideLeft' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                            <Col sm={6} md={4} xl={3} className="mg-t-20">
                                <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
                                <Rodal onClose={() => viewDemoClose1("show9")} visible={animation9} animation='slideRight' height={310}>
                                    <h6 className='modal-header'>Message Preview
                                        <Link href='#!' scroll={false}><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                    </h6>
                                    <div className='modal-body p-3'>
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content here, content here'`}, making it look like readable English.</div>
                                    <div className='modal-footer'>
                                        <Button className="me-2" variant="primary">Save Changes</Button>
                                        <Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
                                    </div>
                                </Rodal>
                            </Col>
                        </Row>
                        <Rodal className="modal fade" visible={animation1} animation='Scale' height={300}>
                            <div className="modal-dialog modal-dialog-centered text-center" role="document">
                                <div className="modal-content modal-content-demo">
                                    <div className="modal-header">
                                        <h6 className="modal-title">Message Preview</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body text-start">
                                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                        <p className="text-muted mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content`} here, content{` here'`}, making it look like readable English.</p>
                                    </div>
                                    <div className="modal-footer">
                                        <Button className="btn btn-primary">Save changes</Button>
                                        <Button className="btn btn-light" data-bs-dismiss="modal" onClick={() => viewDemoClose1("Basic")} >Close</Button>
                                    </div>
                                </div>
                            </div>
                        </Rodal>
                    </ShowCode>

                </Col>
            </Row>
            <h6 className="mb-3">Close Buttons:</h6>
            <Row>
                <Col xl={4}>
                    <ShowCode title=" Basic Close" code={model13}>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabel state" code={model14}>
                        <button type="button" className="btn-close" disabled aria-label="Close"></button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="White variant" code={model15} customCardBodyClass="bg-black">
                        <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                        <button type="button" className="btn-close btn-close-white" disabled
                            aria-label="Close"></button>
                    </ShowCode>

                </Col>
            </Row>

        </>
    )
}

export default Modalscloses
