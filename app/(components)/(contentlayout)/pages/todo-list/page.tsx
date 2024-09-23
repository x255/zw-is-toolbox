"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, Pagination, Row, Tab } from 'react-bootstrap'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Todolist = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Option1 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];

    const Multipleselectdata = [
        { value: 1, label: 'Select' },
        { value: 2, label: 'Critical' },
        { value: 3, label: 'High' },
        { value: 4, label: 'Low' },
        { value: 5, label: 'Medium' },
    ];
    return (
        <>
            <Seo title={"To Do List"} />

            <Pageheader title="To Do List" heading="Pages" active="To Do List" />

            <Row>
                <Col xl={3}>
                    <Card className=" custom-card ">
                        <Card.Body className=" p-0">
                            <div className="p-3 d-grid border-bottom border-block-end-dashed">
                                <Button className="btn btn-primary d-flex align-items-center justify-content-center" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#addtask">
                                    <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                                </Button>
                                <Modal show={show} onHide={handleClose} className="modal fade" id="addtask" tabIndex={-1} aria-hidden="true">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title" id="mail-ComposeLabel">Create Task</h6>
                                    </Modal.Header>
                                    <Modal.Body className="modal-body px-4">
                                        <div className="row gy-2">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="task-name" >Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label className="form-label">Assigned To</Form.Label>
                                                <Select isMulti name="colors" options={Option1} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Option1[0]]} />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label className="form-label">Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label className="form-label">Target Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label className="form-label">Priority</Form.Label>
                                                <Select name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]} />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='light' type="button" className="btn" onClick={handleClose}>Cancel</Button>
                                        <Button variant='primary' type="button" className="btn">Create</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="input-group">
                                    <Form.Control type="text" className="bg-light border-0" placeholder="Search Task Here" aria-describedby="button-addon2" />
                                    <button className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line text-muted"></i></button>
                                </div>
                            </div>
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed ">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-semibold">TASKS</span>
                                    </li>
                                    <li className="active">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-task-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    All Tasks
                                                </span>
                                                <span className="badge bg-success-transparent rounded-pill">167</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-star-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Starred
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-delete-bin-5-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-0 pt-2">
                                        <span className="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Health & Fitness
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Daily Goals
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Financial Management
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 text-center">
                                <img src="../../assets/images/media/media-66.png" alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Row>
                        <Tab.Container defaultActiveKey="one">
                            <Col xl={12}>
                                <Card className="custom-card  ">
                                    <Card.Body className=" p-0">
                                        <div className="d-flex p-3 align-items-center justify-content-between">
                                            <div>
                                                <h6 className="fw-semibold mb-0">Tasks</h6>
                                            </div>
                                            <div>
                                                <Nav className="nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link eventKey="one"
                                                            href="#all-tasks" aria-selected="true">All Tasks</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="two"
                                                            href="#pending" aria-selected="true">Pending</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="three"
                                                            href="#in-progress" aria-selected="true">In Progress</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="four"
                                                            href="#completed" aria-selected="true">Completed</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div>
                                                <Dropdown as="ul">
                                                    <Dropdown.Toggle as="a" className="btn btn-icon btn-sm btn-light btn-wave waves-light waves-effect no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="true"> <i className="ti ti-dots-vertical"></i> </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <li><a className="dropdown-item" >Select All</a></li>
                                                        <li><a className="dropdown-item" >Share All</a></li>
                                                        <li><a className="dropdown-item" >Delete All</a></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Tab.Content className="task-tabs-container">
                                <Tab.Pane className="p-0" id="all-tasks" role="tabpanel" eventKey="one">
                                    <Row id="tasks-container">
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">13,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
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
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='primary-light' className="btn btn-sm btn-icon btn-wave "><i className="ri-edit-line"></i></Button>
                                                                <Button variant='danger-light' className="btn btn-sm btn-icon btn-wave  me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">26,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">5,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">21,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Plugin Development</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">28,Oct 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">25,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-danger-transparent d-block">Critical</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">30,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">1,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">4,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="pending" role="tabpanel" eventKey="two">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">13,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
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
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">30,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="in-progress" role="tabpanel" eventKey="three">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">21,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">26,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">4,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="completed" role="tabpanel" eventKey="four">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Plugin Development</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">28,Oct 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">25,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-danger-transparent d-block">Critical</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">5,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link href="#!" scroll={false}><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">1,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Row>
                    <Pagination className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <Link href="#!" scroll={false} className="page-link">Previous</Link>
                        </li>
                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">3</Link></li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link" href="#!">Next</Link>
                        </li>
                    </Pagination>
                </Col>
            </Row>

        </>
    )
}

export default Todolist
