"use client";
import React from 'react'
import { Button, Card, CardFooter, Col, Dropdown, Form, Row, Pagination } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Projectslist = () => {
    const Optionsdata = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'A - Z', label: 'A - Z' },
        { value: 'Type', label: 'Type' },
    ];
    return (
        <>
            <Seo title={"Project List"} />
            <Pageheader title="Project List" heading="Projects" active="Project List" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1">
                                    <Link href="/apps/projects/create-project" className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-semibold align-middle"></i>New Project</Link>

                                    <Select name="colors" options={Optionsdata} className="basic-multi-select project-list"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Sort By"
                                    />
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                    </span>
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                        +8
                                    </Link>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <Button variant='light' className="btn btn-light" type="submit">Search</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-danger-transparent">
                                    <img src="../../../assets/images/company-logos/1.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Design & Developing New Project</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">18/22</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">80%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">24,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">12,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-warning-transparent">
                                    <img src="../../../assets/images/company-logos/2.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Content Management System (CMS) Integration</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">26/68</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +4
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "45%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">45%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">20,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">10,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-secondary-transparent">
                                    <img src="../../../assets/images/company-logos/3.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Task Scheduler and Automation</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">21/45</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={66} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "66%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">66%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">31,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">10,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className=" align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                    <img src="../../../assets/images/company-logos/5.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Advanced Search and Filtering</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">45/54</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul' className='dropdown-position'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger-transparent">High</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "89%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">89%</span> Completed</div>
                            </div>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">02,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">15,Jun 2023</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <div className="col-xxl-3">
                    <div className="card custom-card">
                        <div className="card-header align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-primary-transparent">
                                    <img src="../../../assets/images/company-logos/8.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Data Export and Reporting</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">14/26</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "60%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">60%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">29,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">08,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </div>
                </div>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                    <img src="../../../assets/images/company-logos/10.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Activity Log and Audit Trail</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">28/64</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "45%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">45%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">04,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">15,Jun 2023</span>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-info-transparent">
                                    <img src="../../../assets/images/company-logos/9.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Role-Based Access Control (RBAC) Implementation</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">86/122</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger-transparent">High</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "65%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">65%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">24,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">05,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-teal-transparent">
                                    <img src="../../../assets/images/company-logos/6.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link href="#!" scroll={false} className="fw-semibold fs-14 d-block text-truncate project-list-title">Customizable Themes and Layouts</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">20/26</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as='a' aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="progress-bar bg-primary" style={{ width: "75%" }}></div>
                                </div>
                                <div className="mt-1"><span className="text-primary fw-semibold">75%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">20,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">18,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Pagination className="pagination justify-content-end">
                <Pagination.Item className=" disabled">
                    Previous
                </Pagination.Item>
                <Pagination.Item className="">1</Pagination.Item>
                <Pagination.Item className="">2</Pagination.Item>
                <Pagination.Item className="">3</Pagination.Item>
                <Pagination.Item className="">
                    Next
                </Pagination.Item>
            </Pagination>
        </>
    )
}
Projectslist.layout = "Contentlayout"

export default Projectslist
