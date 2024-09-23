"use client";
import React from 'react'
import { Badge, Button, Card, Col, Form, ListGroup, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Subtaskdata } from '../../../../../shared/data/tasks/taskdetails'
import Link from 'next/link'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
const Taskdetails = () => {
    return (
        <>
            <Seo title={"Task Details"} />

            <Pageheader title="Task Details" heading="Task" active="Task Details" />
            <Row>
                <Col xl={9}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Task Summary</Card.Title>
                            <div className="btn-list">
                                <Button variant="success" size="sm" className="  btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="fw-semibold mb-4 task-title">
                                Update ynex new project design.
                            </h5>
                            <div className="fs-15 fw-semibold mb-2">Task Description :</div>
                            <p className="text-muted task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="fs-15 fw-semibold mb-2">Key tasks :</div>
                            <div>
                                <ul className="task-details-key-tasks mb-0">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned By</span>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-xs avatar-rounded">
                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <span className="d-block fs-14 fw-semibold">H.J.Taylor</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned Date</span>
                                    <span className="d-block fs-14 fw-semibold">24,June 2023</span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Due Date</span>
                                    <span className="d-block fs-14 fw-semibold">05,July 2023</span>
                                </div>
                                <div className="task-details-progress">
                                    <span className="d-block text-muted fs-12 mb-1">Progress</span>
                                    <div className="d-flex align-items-center">
                                        <div className="progress progress-xs progress-animate flex-fill me-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar bg-primary" style={{ width: "70%" }}></div>
                                        </div>
                                        <div className="text-muted fs-11">70%</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Efforts</span>
                                    <span className="d-block fs-14 fw-semibold">45H : 35M : 45S</span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Task Discussions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2">
                                            <b>You</b> Commented on <b>Work Process</b> in this task <a className="text-secondary" href="#!"><u>#New Task</u></a>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-muted mb-0">
                                            Task is important and need to be completed on time to meet company work flow.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>Json Smith</b> reacted to the task &#128077;</span>.<span className="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
                                        </p>
                                        <p className="text-muted mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../assets/images/faces/4.jpg" alt="" />
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="float-end fs-11 text-muted">21,Dec 2023 - 15:32</span>
                                        </p>
                                        <p className="profile-activity-media mb-0">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                            </Link>
                                            <span className="fs-11 text-muted">432.87KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                            P
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span className="float-end fs-11 text-muted">28,Dec 2023 - 18:46</span>
                                        </p>
                                        <p className="profile-activity-media mb-2">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../assets/images/media/media-18.jpg" alt="" />
                                            </Link>
                                        </p>
                                        <div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../assets/images/media/media-39.jpg" alt="" />
                                        </span>
                                        <p className="mb-1">
                                            <b>Json</b> Commented on Task post <a className="text-secondary" href="#!"><u>#UI Technologies</u></a>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                                        <p className="profile-activity-media mb-0">
                                            <Link href="#!" scroll={false}>
                                                <img src="../../assets/images/media/media-26.jpg" alt="" />
                                            </Link>
                                            <Link href="#!" scroll={false}>
                                                <img src="../../assets/images/media/media-29.jpg" alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-3 mb-2 mb-sm-0">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <img src="../../assets/images/faces/9.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill me-sm-2">
                                    <div className="input-group">
                                        <Form.Control type="text" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                        <Button variant='' className="  btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                        <Button variant='' className="  btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></Button>
                                        <Button variant='' className="  btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></Button>
                                        <Button variant='primary' className="  btn-wave waves-effect waves-light" type="button">Post</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Additional Details
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td><span className="fw-semibold">Task ID :</span></td>
                                            <td>SPK - 123</td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Task Tags :</span></td>
                                            <td>
                                                <Badge bg=" bg-primary-transparent">UI/Ux</Badge>
                                                <Badge bg=" bg-primary-transparent">Designing</Badge>
                                                <Badge bg=" bg-primary-transparent">Development</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Name :</span></td>
                                            <td>
                                                Ynex admin & dashboard template
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Status :</span></td>
                                            <td>
                                                <span className="fw-semibold text-secondary">Inprogress</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Priority :</span></td>
                                            <td>
                                                <Badge bg=" bg-danger-transparent">High</Badge>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Assigned To :</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <OverlayTrigger overlay={<Tooltip className="tooltip-primary">Simon</Tooltip>}>
                                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip className="tooltip-primary">Sasha</Tooltip>}>
                                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip className="tooltip-primary">Anagha</Tooltip>}>
                                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip className="tooltip-primary">Hishen</Tooltip>}>
                                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                    </OverlayTrigger>

                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Sub Tasks</Card.Title>
                            <div>
                                <Button variant='secondary-light' className="btn  btn-sm btn-wave"><i className="ri-add-line me-1 align-middle"></i>Sub Task</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {Subtaskdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2" >
                                                <input id={idx.id} className={`form-check-input form-checked-success form-checked-${idx.class === 'defaultChecked' ? 'success' : ''}`}
                                                    type="checkbox" value="" defaultChecked={idx.class === 'defaultChecked'} /></div>
                                            <div className="fw-semibold">{idx.text}</div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Attachments
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src="../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link href="#!" scroll={false}><span className="d-block fw-semibold">Full Project</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link href="#!" scroll={false}><span className="d-block fw-semibold">assets.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" size="sm" className=" btn-icon btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src="../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link href="#!" scroll={false}><span className="d-block fw-semibold">image-1.png</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" size="sm" className=" btn-icon btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link href="#!" scroll={false}><span className="d-block fw-semibold">documentation.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" size="sm" className="btn-icon btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link href="#!" scroll={false}><span className="d-block fw-semibold">landing.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" size="sm" className=" btn-icon  btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" size="sm" className="btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Taskdetails
