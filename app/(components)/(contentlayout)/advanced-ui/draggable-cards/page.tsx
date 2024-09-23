"use client";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Collapse, Modal, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Draggablecards = () => {

    //fullscreen
    const [fullScreen, setFullscreen] = useState('true');
    const [fullscreenshow, setfullscreenShow] = useState(false);

    const fullscreenmodalClose = () => setfullscreenShow(false);
    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setfullscreenShow(true);
    }
    // Card With Collapse Button
    const [BasicExpanded, setBasicExpanded] = useState(true);

    const BasicHandleExpandClick = () => {
        setBasicExpanded(!BasicExpanded);
    };
    //Card With Close Button
    const [Basicshow, setBasicshow] = useState(true);
    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);
    useEffect(() => {
        // Check if window is defined (to prevent issues during server-side rendering)
        if (typeof window !== 'undefined') {
            // Import the dragula library here (make sure it's installed first)
            const dragula = require('dragula');
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current
                ];

                // Initialize dragula on the containers
                const drake = dragula(containers);

                // Your other dragula-related logic here...

                if (document.querySelector('.firstdrag')?.classList.contains('task-Null')) {
                    document.querySelector('.view-more-button')?.classList.add('d-none');
                }
            }

            OnDivChange();
        }
    }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
    ];
    const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
            const element: any = elementId.current;
            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
            } else {
                element?.classList.remove("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
            }
        });
    };

    //Card With Close Button
    const CloseButton = () => (
        document.querySelector(".close-button-content")?.classList.add("d-none")
    )

    return (
        <>
            <Seo title={"Draggablecards"} />
            <Pageheader title="Draggable Cards" heading="Advanced Ui" active="Draggable Cards" />
              {/* Row-1-Start */}
            <Row>
                <Col xl={6} id="draggable-left" ref={leftContainerRef}>
                    <div onMouseEnter={OnDivChange} className='firstdrag'
                        id="new-tasks-draggable"
                        data-view-btn="new-tasks">
                        <Card className=" custom-card card-bg-primary">
                            <Link href="#!" scroll={false} className="card-anchor"></Link>
                            <Card.Body>
                                <blockquote className="blockquote mb-0 text-center">
                                    <h6 className="text-fixed-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
                                    <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                    <div
                        id="todo-tasks-draggable"
                        data-view-btn="todo-tasks">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Card With Fullscreen Button
                                </Card.Title>
                                <Link href="#!" scroll={false} data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}>
                                    <i className="ri-fullscreen-line"></i>
                                </Link>
                                <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                                    <Modal.Header>
                                        <Modal.Title>Fullscreen Button</Modal.Title>
                                        <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                                    </Modal.Header>
                                    <Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={fullscreenmodalClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary">
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Header>
                            <Card.Body>
                                <h6 className="card-text fw-semibold">FullScreen Card</h6>
                                <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-primary">Read More</button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <Card className=" custom-card overlay-card text-fixed-white">
                        <img src="../../assets/images/media/media-35.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0">
                            <Card.Header className="text-fixed-white">
                                <Card.Title className='text-fixed-white'>
                                    Image Overlays Are Awesome!
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="overflow-auto text-fixed-white">
                                <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't `}look even.</div>
                                <div className="card-text">Last updated 3 mins ago</div>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className=" custom-card">
                        <Link href="#!" scroll={false} className="card-anchor"></Link>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="avatar avatar-md">
                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
                                    <div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card border border-info">
                        <Link href="#!" scroll={false} className="card-anchor"></Link>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="avatar avatar-xl">
                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
                                    <div className="card-title fs-12 mb-1">Department Of Commerce</div>
                                    <div className="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} id="draggable-right" ref={rightContainerRef}>
                    <Card className=" custom-card overlay-card">
                        <img src="../../assets/images/media/media-36.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom top-0">
                            <Card.Body className=" overflow-auto text-fixed-white">
                                <div className="card-text">
                                    Image Overlays Are Awesome!
                                </div>
                                <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't `}look even.</div>
                            </Card.Body>
                            <Card.Footer className="text-fixed-white">Last updated 3 mins ago</Card.Footer>
                        </div>
                    </Card>
                    <Card className=" custom-card card-bg-success">
                        <Card.Body>
                            <div className="d-flex align-items-center w-100">
                                <div className="me-2">
                                    <span className="avatar avatar-rounded">
                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                    </span>
                                </div>
                                <div className="">
                                    <div className="fs-15 fw-semibold">Samantha sid</div>
                                    <p className="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" border-bottom-0 justify-content-between">
                            <Card.Title>
                                Card With Collapse Button
                            </Card.Title>
                            <Link href="#!" scroll={false} onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-down' : 'fe-chevron-up'}`}></i>
                            </Link>
                        </Card.Header>
                        <Collapse className="border-top" in={BasicExpanded} timeout={3000}>
                            <div>
                                <Card.Body>
                                    <h6 className="card-text fw-semibold">Collapsible Card</h6>
                                    <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Button className="btn btn-primary">Read More</Button>
                                </Card.Footer>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="custom-card close-button-content">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Card With Close Button
                            </Card.Title>
                            <Link href="#!" onClick={CloseButton} scroll={false} data-bs-toggle="card-remove">
                                <i className="ri-close-line fs-18"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="card-text fw-semibold">Closed Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-primary">Read More</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
               {/* Row-1-End */}
        </>
    )
}

export default Draggablecards
