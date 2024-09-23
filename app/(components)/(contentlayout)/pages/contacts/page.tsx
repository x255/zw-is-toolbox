"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Contactlistdata } from '../../../../../shared/data/pages/contactdata'
import Seo from '../../../../../shared/layout-components/seo/seo';

const Contacts = () => {
    const [Data, setData] = useState(Contactlistdata);

    const userdata: any[] = [];

    const myfunction = (idx: string) => {
        let Data;
        for (Data of Contactlistdata) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };
    return (
        <>
            <Seo title={"Contacts"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card mt-4">
                        <Card.Body>
                            <div className="contact-header">
                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                    <div className="h5 fw-semibold mb-0">Contacts</div>
                                    <div className="d-flex mt-sm-0 mt-2 align-items-center">
                                        <div className="input-group">
                                            <Form.Control type="text" className=" bg-light border-0" placeholder="Search Contact" aria-describedby="search-contact-member" />
                                            <button className="btn btn-light" type="button" id="search-contact-member"><i className="ri-search-line text-muted"></i></button>
                                        </div>
                                        <Dropdown className=" ms-2">
                                            <Dropdown.Toggle variant='' className="btn btn-icon btn-primary-light my-1 btn-wave waves-light ms-2 no-caret">
                                                <i className="ti ti-dots-vertical no-caret"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                <Dropdown.Item as='li' href="#!">Delete All</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Copy All</Dropdown.Item>
                                                <Dropdown.Item as='li' href="#!">Move To</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add Contact </Tooltip>}>
                                            <Button variant='' className="btn btn-icon btn-secondary-light ms-2">
                                                <i className="ri-add-line"></i>
                                            </Button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {Data.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                        <Card className="custom-card">
                            <Card.Body className="contact-action">
                                <div className="contact-overlay"></div>
                                <div className="d-flex align-items-top ">
                                    <div className="d-flex flex-fill flex-wrap gap-2">
                                        <div className="avatar avatar-xl avatar-rounded me-3">
                                            <img src={idx.src} alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fw-semibold">
                                                {idx.name}
                                            </h6>
                                            <p className="mb-1 text-muted contact-mail text-truncate">{idx.mail}</p>
                                            <p className="fw-semibold fs-11 mb-0 text-primary">
                                                {idx.cell}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className={`ri-heart-3-${idx.class} fs-16 text-${idx.color}`}></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                    <Button variant='' type="button" className="btn btn-sm btn-light contact-hover-btn">
                                        View Contact
                                    </Button>
                                    <Dropdown className="contact-hover-dropdown">
                                        <Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-2-fill"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                            <Dropdown.Item href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                            <Dropdown.Item href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                            <Dropdown.Item href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                            <Dropdown.Item href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant='' aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                        <i className="ri-heart-3-fill text-danger"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-39.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Dwayne Happy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">dwaynehappy235@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 985 2893
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/5.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Meisha Tite
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">meishatite456@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 675 4680
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/10.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Andrew Gerfield
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">andrewgerfield00@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 765 8937
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Samantha Melon
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">samanthamelon@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 890 5687
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/11.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Elisha Smith
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">elishasmith@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 972 9883
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-63.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Devon Convoy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy65@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 693 7836
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className="contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded bg-primary">
                                        SJ
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Shensovic Jeremy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">shensovicjeremy@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 238 2342
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className="contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/12.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Jason Mama
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">jasonmama96@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 875 6789
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className="contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Monika Karen
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">monikakaren@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 568 9234
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-13.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Tom Holland
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">tomholland98@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 892 4334
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-36.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Anelica Julie
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">angelicajulie@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 882 3445
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/8.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Aneera Khan
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">aneerakhan@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 973 8734
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Linda Simson
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">lindasimson@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 234 9345
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/14.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Umaga Nigel
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 783 0213
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-8.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Json Taylor
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">jsontaylor@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 234 2452
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/7.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Karizma Tope
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">Karizmatope@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 890 2455
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-34.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Gahaskar Shaik
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">gahaskarshaik@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 982 7648
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/media/media-21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Balvinder Singh
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">balvindersingh@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 002 1239
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className=" custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-3">
                                    <div className="avatar avatar-xl avatar-rounded">
                                        <img src="../../assets/images/faces/6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Ramika Missi
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">ramikamissi@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 982 4834
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className=" contact-hover-dropdown">
                                    <Dropdown.Toggle as='a' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled"><Link className="page-link" href="#!" scroll={false}>Previous</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                        <li className="page-item"><Link className="page-link" href="#!" scroll={false}>Next</Link></li>
                    </ul>
                </nav>
            </Row>
        </>
    )
}
export default Contacts
