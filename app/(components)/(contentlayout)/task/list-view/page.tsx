"use client";
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, InputGroup, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { InvoiceStats, Manageinvoices } from '../../../../../shared/data/charts/invoice';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import CountUp from "react-countup";
import Link from 'next/link';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
const Listview = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [allData, setAllData] = useState(Manageinvoices);
    function handleRemove(id: number) {
        const newList = allData.filter((idx) => idx.id !== id);
        setAllData(newList);
    }
    //Datepicker function
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };
    const [selected1, setSelected1] = useState([]);
    const Selectdata = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const Option1 = [
        { value: 'New', label: 'New' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Pending', label: 'Pending' }
    ];
    const Option2 = [
        { value: 'High', label: 'High' },
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Seo title={"List View"} />

            <Pageheader title="List View" heading="Task" active="List View" />
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Total Tasks
                            </Card.Title>
                            <div className="d-flex">
                                <Button variant='primary' size="sm" onClick={handleShow} className=" btn-wave waves-light" data-bs-toggle="modal" data-bs-target="#create-task"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Task</Button>
                                <Modal show={show} onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1} aria-hidden="true">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title">Add Task</h6>
                                    </Modal.Header>
                                    <Modal.Body className="px-4">
                                        <div className="row gy-2">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-name">Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-id">Task ID</Form.Label>
                                                <Form.Control type="text" id="task-id" placeholder="Task ID" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
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
                                                <Form.Label>Due Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
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
                                                <Form.Label>Status</Form.Label>
                                                <Select name="colors" options={Option1} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option1[0]]}
                                                />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Priority</Form.Label>
                                                <Select name="colors" options={Option2} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option2[0]]}
                                                />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label>Assigned To</Form.Label>
                                                <Select isMulti name="colors" options={Selectdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder=""
                                                />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='' type="button" className="btn btn-light" onClick={handleClose}>Cancel</Button>
                                        <Button variant='' type="button" className="btn btn-primary">Add Task</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Dropdown className=" ms-2">
                                    <Dropdown.Toggle variant='' size="sm" className="btn btn-icon btn-secondary-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical "></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!">New Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Pending Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Completed Tasks</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Inprogress Tasks</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>

                                        <tr >

                                            <th>
                                                <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Assigned Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Assigned To</th>
                                            <th scope="col">Action</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {allData.map((idx) => (
                                            <tr className="task-list" key={Math.random()}>
                                                <td className="task-checkbox"> {idx.ckeck}</td>
                                                <td>
                                                    <span className="fw-semibold">{idx.task}</span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">{idx.taskid}</span>
                                                </td>
                                                <td>
                                                    {idx.assigndate}
                                                </td>
                                                <td>
                                                    <span className={`fw-semibold text-${idx.color1}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <Badge bg={`${idx.color}-transparent`}>{idx.priority}</Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        {Array.isArray(idx.avatarImages) && idx.avatarImages.length > 0 ? (
                                                            idx.avatarImages.map((src, index) => (
                                                                <span className="avatar avatar-sm avatar-rounded" key={index}>
                                                                    <img src={src} alt={`avatar-${index}`} />
                                                                </span>
                                                            ))
                                                        ) : (
                                                            <span></span>
                                                        )}
                                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            {idx.number}
                                                        </Link>
                                                    </div>


                                                </td>
                                                <td>
                                                    <OverlayTrigger placement='top' overlay={<Tooltip>Edit</Tooltip>}>
                                                        <Button variant='primary-light' size="sm" className=" btn-icon ">
                                                            <i className="ri-edit-line"></i></Button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement='top' overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Button variant="danger-light" size="sm" className=" btn-icon ms-1 task-delete-btn" onClick={() => handleRemove(idx.id)}>
                                                            <i className="ri-delete-bin-5-line"></i></Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link" href="#!">2</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card">
                        <Card.Body className="p-0">
                            <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                                <div className="svg-icon-background bg-primary-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">New Tasks
                                        <Badge bg=" bg-primary fw-semibold float-end">
                                            12,345
                                        </Badge>
                                    </h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="42">
                                                <CountUp
                                                    end={42}
                                                    start={0}
                                                    duration={4.94}
                                                /></span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                            <p className="text-muted fs-11 mb-0 lh-1 d-flex">
                                                <span className="text-success me-1 fw-semibold d-inline-flex">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                                <div className="svg-icon-background bg-success-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Completed Tasks
                                        <span className="badge bg-success fw-semibold float-end">
                                            4,176
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="319">
                                            <CountUp
                                                end={320}
                                                start={0}
                                                duration={4.94}
                                            /></span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1 d-flex">
                                            <span className="text-danger me-1 fw-semibold d-inline-flex">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                                <div className="svg-icon-background bg-warning-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Pending Tasks
                                        <Badge bg=" bg-warning fw-semibold float-end">
                                            7,064
                                        </Badge>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="81"><CountUp
                                            end={82}
                                            start={0}
                                            duration={7.94}
                                        /></span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1 d-flex">
                                            <span className="text-success me-1 fw-semibold d-inline-flex">
                                                <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                                <div className="svg-icon-background bg-secondary-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Inprogress Tasks
                                        <span className="badge bg-secondary fw-semibold float-end">
                                            1,105
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="32"><CountUp
                                            end={33}
                                            start={0}
                                            duration={5.94}
                                        /></span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1 d-flex">
                                            <span className="text-success me-1 fw-semibFold d-inline-flex">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 pb-2">
                                <p className="fs-15 fw-semibold">Tasks Statistics <span className="text-muted fw-normal">(Last 6 months) :</span></p>
                                <div id="task-list-stats"><InvoiceStats /></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Listview
