"use client";
import React, { useState } from 'react'
import { Button, Card, CloseButton, Col, Collapse, Row, Toast, ToastContainer } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { toast1, toast2, toast3, toast4, toast5, toast6, toast7, toast8, toast9, toast10 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Toasts = () => {
    //live example
    const [show, setShow] = useState(false);
    //Color Variants Live
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);
    //basic example
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    //Translucent
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);
    //color schemes
    const [showC, setShowC] = useState(true);
    const toggleShowC = () => setShowC(!showC);

    const [showD, setShowD] = useState(true);
    const toggleShowD = () => setShowD(!showD);

    const [showE, setShowE] = useState(true);
    const toggleShowE = () => setShowE(!showE);

    const [showF, setShowF] = useState(true);
    const toggleShowF = () => setShowF(!showF);
    //Stacking
    const [showG, setShowG] = useState(true);
    const toggleShowG = () => setShowG(!showG);

    const [showH, setShowH] = useState(true);
    const toggleShowH = () => setShowH(!showH);
    //Custom Content
    const [showI, setShowI] = useState(true);
    const toggleShowI = () => setShowI(!showI);

    const [showJ, setShowJ] = useState(true);
    const toggleShowJ = () => setShowJ(!showJ);

    const [showK, setShowK] = useState(true);
    const toggleShowK = () => setShowK(!showK);

    return (
        <>
            <Seo title={"Toasts"} />

<Pageheader title="Toasts" heading="Ui Elements" active="Toasts" />
            <Row>
                <Col xl={4}>
                
                        <ShowCode title="Live example" code={toast1} >
                            <Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
                                toast</Button>
                            <Toast className="position-fixed top-0 end-0 p-0 me-4 mt-4 toast-zindex" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header className="text-default mb-0">
                                    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
                                    <strong className="me-auto">Ynex</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                            </Toast>
                            </ShowCode>
                   
                        <ShowCode title="Color schemes" code={toast2} >
                            <Toast className=" align-items-center text-bg-primary border-0 fade show mb-4"
                                role="alert" aria-live="assertive" aria-atomic="true" show={showC}>
                                <div className="d-flex">
                                    <Toast.Body>
                                        Hello, world! This is the Primary toast message.
                                    </Toast.Body>
                                    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowC}></CloseButton>
                                </div>
                            </Toast>
                            <Toast className=" align-items-center text-bg-secondary border-0 fade show mb-4"
                                role="alert" aria-live="assertive" aria-atomic="true" show={showD}>
                                <div className="d-flex">
                                    <Toast.Body>
                                        Hello, world! This is the Secondary toast.
                                    </Toast.Body>
                                    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowD}></CloseButton>
                                </div>
                            </Toast>
                            <Toast className=" align-items-center text-bg-success border-0 fade show mb-4"
                                role="alert" aria-live="assertive" aria-atomic="true" show={showE}>
                                <div className="d-flex">
                                    <Toast.Body>
                                        Hello, world! This is the Success toast message.
                                    </Toast.Body>
                                    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowE}></CloseButton>
                                </div>
                            </Toast>
                            <Toast className=" align-items-center text-bg-info border-0 fade show"
                                role="alert" aria-live="assertive" aria-atomic="true" show={showF}>
                                <div className="d-flex">
                                    <Toast.Body>
                                        Hello, world! This is the info toast message.
                                    </Toast.Body>
                                    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
                                        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowF}></CloseButton>
                                </div>
                            </Toast>
                        </ShowCode>
                      
                </Col>
                <Col xl={4}>
                   
                        <ShowCode title="Basic example" code={toast3} >
                            <Toast show={showA} onClose={toggleShowA} className="fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <Toast.Header className="text-default">
                                    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

                                    <strong className="me-auto">Ynex</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                            </Toast>
                           </ShowCode>
                       
                
                        <ShowCode title="Stacking" code={toast4} >
                            <ToastContainer className="position-static">
                                <Toast className=" fade show" role="alert" aria-live="assertive"
                                    aria-atomic="true" show={showG} onClose={toggleShowG}>
                                    <Toast.Header className="text-default">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

                                        <strong className="me-auto">Ynex</strong>
                                        <small className="text-muted">just now</small>

                                    </Toast.Header>
                                    <Toast.Body>
                                        See? Just like this.
                                    </Toast.Body>
                                </Toast>
                                <Toast className=" fade show" role="alert" aria-live="assertive"
                                    aria-atomic="true" show={showH} onClose={toggleShowH}>
                                    <Toast.Header className="text-default">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

                                        <strong className="me-auto">Ynex</strong>
                                        <small className="text-muted">2 seconds ago</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Heads up, toasts will stack automatically
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                           </ShowCode>
                   
                      
                </Col>
                <Col xl={4}>
              
                        <ShowCode title="Translucent" code={toast5} >
                            <Toast className="fade show" role="alert" aria-live="assertive" aria-atomic="true" show={showB} onClose={toggleShowB}>
                                <Toast.Header className="text-default">
                                    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
                                    <strong className="me-auto">Ynex</strong>
                                    <small className="text-muted">11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                            </Toast>
                         </ShowCode>
                        
                  
              
                        <ShowCode title="Custom content" code={toast6} >
                            <Toast className=" align-items-center fade show mb-3" role="alert"
                                aria-live="assertive" aria-atomic="true" show={showI}>
                                <div className="d-flex">
                                    <Toast.Body>
                                        Hello, world! This is a toast message.
                                    </Toast.Body>
                                    <CloseButton type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast"
                                        aria-label="Close" onClick={toggleShowI}>
                                    </CloseButton>
                                </div>
                            </Toast>
                            <div>
                                <span className="my-4 text-muted">
                                    Alternatively, you can also add additional controls and components to
                                    toasts.
                                </span>
                            </div>
                            <Toast className=" fade show mt-2" role="alert" aria-live="assertive"
                                aria-atomic="true" show={showJ}>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                    <div className="mt-2 pt-2 border-top">
                                        <Button type="button" className="btn btn-primary btn-sm btn-wave me-2">Take
                                            action</Button>
                                        <Button type="button" className="btn btn-secondary btn-sm btn-wave"
                                            data-bs-dismiss="toast" onClick={toggleShowJ}>Close</Button>
                                    </div>
                                </Toast.Body>
                            </Toast>
                         </ShowCode>
                  
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
            
                        <ShowCode title="Color Variants Live" code={toast7} >
                            <div className="btn-list">
                                <button type="button" className="btn btn-primary-light me-2 btn-wave waves-effect waves-light" id="primaryToastBtn" onClick={() => setShow1(true)}>Primary</button>
                                <button type="button" className="btn btn-secondary-light me-2 btn-wave waves-effect waves-light" id="secondaryToastBtn" onClick={() => setShow2(true)}>secondary</button>
                                <button type="button" className="btn btn-warning-light me-2 btn-wave waves-effect waves-light" id="warningToastBtn" onClick={() => setShow3(true)}>warning</button>
                                <button type="button" className="btn btn-info-light me-2 btn-wave waves-effect waves-light" id="infoToastBtn" onClick={() => setShow4(true)}>info</button>
                                <button type="button" className="btn btn-success-light me-2 btn-wave waves-effect waves-light" id="successToastBtn" onClick={() => setShow5(true)}>success</button>
                                <button type="button" className="btn btn-danger-light me-2 btn-wave waves-effect waves-light" id="dangerToastBtn" onClick={() => setShow6(true)}>danger</button>
                            </div>
                            <ToastContainer className="position-fixed top-0 end-0 p-3">
                                <Toast id="primaryToast" className=" colored-toast bg-primary-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="secondaryToast" className=" colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                                    <Toast.Header className=" bg-secondary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="warningToast" className=" colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow3(false)} show={show3} delay={3000} autohide>
                                    <Toast.Header className="bg-warning text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="infoToast" className=" colored-toast bg-info-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow4(false)} show={show4} delay={3000} autohide>
                                    <Toast.Header className="bg-info text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="successToast" className=" colored-toast bg-success-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow5(false)} show={show5} delay={3000} autohide>
                                    <Toast.Header className=" bg-success text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="dangerToast" className=" colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow6(false)} show={show6} delay={3000} autohide>
                                    <Toast.Header className="bg-danger text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            </ShowCode>
                       
                       
                </Col>
                <Col xl={6}>
              
                        <ShowCode title="Solid Background Toasts" code={toast8} >
                            <div className="btn-list">

                                <Button type="button" className="btn btn-primary-light me-2 btn-wave waves-effect waves-light" id="primaryToastBtn" onClick={() => setShow7(true)}>Primary</Button>
                                <Button type="button" className="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn" onClick={() => setShow8(true)}>secondary</Button>
                                <Button type="button" className="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn" onClick={() => setShow9(true)}>warning</Button>
                                <Button type="button" className="btn btn-info me-2 btn-wave" id="solidinfoToastBtn" onClick={() => setShow10(true)}>info</Button>
                                <Button type="button" className="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn" onClick={() => setShow11(true)}>success</Button>
                                <Button type="button" className="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn" onClick={() => setShow12(true)}>danger</Button>
                            </div>
                            <ToastContainer className="position-fixed top-0 end-0 p-3">
                                <Toast id="solid-primaryToast" className=" colored-toast bg-primary text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-secondaryToast" className=" colored-toast bg-secondary text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow8(false)} show={show8} delay={3000} autohide>
                                    <Toast.Header className="bg-secondary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-warningToast" className=" colored-toast bg-warning text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
                                    <Toast.Header className="bg-warning text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-infoToast" className=" colored-toast bg-info text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
                                    <Toast.Header className="bg-info text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-successToast" className=" colored-toast bg-success text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
                                    <Toast.Header className="bg-success text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-dangerToast" className=" colored-toast bg-danger text-fixed-white" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
                                    <Toast.Header className="bg-danger text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </ShowCode>
                     
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
               
                        <ShowCode title=" Toast Placements" code={toast9} >
                            <div className="btn-list">
                                <Button variant='' type="button" className=" btn-outline-primary me-2 btn-wave " id="topleftToastBtn" onClick={() => setShow13(true)}>Top Left</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" onClick={() => setShow14(true)}>Top Center</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" onClick={() => setShow15(true)}>Top Right</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" onClick={() => setShow16(true)}>Middle Left</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" onClick={() => setShow17(true)}>Middle Center</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" onClick={() => setShow18(true)}>Middle Right</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" onClick={() => setShow19(true)}>Bottom Left</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" onClick={() => setShow20(true)}>Bottom Center</Button>
                                <Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" onClick={() => setShow21(true)}>Bottom Right</Button>
                            </div>
                            <ToastContainer className=" position-fixed top-0 start-0 p-3">
                                <Toast id="topleft-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                     
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className=" position-fixed top-0 start-50 translate-middle-x p-3">
                                <Toast id="topcenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow14(false)} show={show14} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="position-fixed top-0 end-0 p-3">
                                <Toast id="topright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow15(false)} show={show15} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="position-fixed top-50 start-0 translate-middle-y p-3">
                                <Toast id="middleleft-Toast" className="colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow16(false)} show={show16} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
                                <Toast id="middlecenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow17(false)} show={show17} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                                <Toast id="middleright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow18(false)} show={show18} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="position-fixed bottom-0 start-0 p-3">
                                <Toast id="bottomleft-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow19(false)} show={show19} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="position-fixed bottom-0 start-50 translate-middle-x p-3">
                                <Toast id="bottomcenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow20(false)} show={show20} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className=" position-fixed bottom-0 end-0 p-3">
                                <Toast id="bottomright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow21(false)} show={show21} delay={3000} autohide>
                                    <Toast.Header className="bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                           </ShowCode>
                       
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                <ShowCode title="Aligning Toast Using Flexbox" code={toast10} >
                            <div className="bd-example bg-light bd-example-toasts d-flex p-0">
                                <div aria-live="polite" aria-atomic="true"
                                    className="d-flex justify-content-center align-items-center w-100">
                                    <Toast show={showK} onClose={toggleShowK} className=" fade show shadow-lg" role="alert" aria-live="assertive"
                                        aria-atomic="true">
                                        <Toast.Header className="text-default">
                                            <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
                                            <strong className="me-auto">Ynex</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>
                                            Hello, world! This is a toast message.
                                        </Toast.Body>
                                    </Toast>
                                </div>
                            </div>
                          </ShowCode>
                       
                </Col>
            </Row>
        </>
    )
}

export default Toasts
