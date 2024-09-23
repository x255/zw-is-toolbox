"use client";
import React, { useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { MultiSelect } from 'react-multi-select-component'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from 'react-datepicker';
import { Data1, Data10, Data11, Data12, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9 } from '../../../../../../shared/data/apps/jobs/jobpostdata';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Jobpost = () => {
    const [startDate, setStartDate] = useState(new Date());

    //Datepicker function
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    return (
        <>
            <Seo title={"Job Post"} />
            <Pageheader title="Job Post" heading="Jobs" active="Job Post" />
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Post New Job
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4 mb-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="job-title" className="form-label">Job Title</Form.Label>
                                    <Form.Control type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="Web Developer" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Job Category</Form.Label>
                                    <Select name="colors" options={Data1} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Working Experience</Form.Label>
                                    <Select name="colors" options={Data2} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data2[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Job Type</Form.Label>
                                    <Select name="colors" options={Data12} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data12[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Priority</Form.Label>

                                    <Select options={Data3} classNamePrefix='Select2' menuPlacement='auto' className="multi-select"
                                        placeholder="" defaultValue={[Data3[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Vacancies</Form.Label>
                                    <Select name="colors" options={Data4} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data4[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Salary</Form.Label>
                                    <Select options={Data5} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" placeholder="" defaultValue={[Data5[0]]} />
                                </Col>
                                <Col xl={6} >
                                    <Form.Label htmlFor="skills" className="form-label">Skills :</Form.Label>
                                    <Select isMulti name="colors" options={Data6} className="basic-multi-select" classNamePrefix="Select2"
                                        defaultValue={[Data6[0], Data6[1], Data6[2]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="job-deadline" className="form-label">Job Deadline</Form.Label>
                                    <DatePicker selected={startDate} onChange={handleDateChange} placeholderText="Job Deadline" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Gender Requirement</Form.Label>
                                    <Select name="colors" options={Data7} className="basic-multi-select" classNamePrefix="Select2"
                                        defaultValue={[Data7[0]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="language" className="form-label">Languages :</Form.Label>
                                    <Select isMulti name="colors" options={Data8} className="choices__item choices__item--selectable    " classNamePrefix="Select2"
                                        defaultValue={[Data8[0], Data8[3]]} />
                                </Col>
                                <Col xl={6} className='job-qualification'>
                                    <Form.Label htmlFor="qualification" className="form-label">Qualification :</Form.Label>
                                    <Select isMulti name="colors" options={Data9} className="basic-multi-select bg-primary" classNamePrefix="Select2"
                                        defaultValue={[Data9[0], Data9[2], Data9[3]]} />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="job-description" className="form-label">Job Description :</Form.Label>
                                    <Form.Control as="textarea" className="form-control" id="job-description" rows={4} defaultValue=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe  voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!">
                                    </Form.Control>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" text-end">
                            <a href="#!" className="btn btn-primary btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Assign To Employer</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Col xl={12}>
                                <Form.Label className="form-label">Employer Name</Form.Label>
                                <Select name="colors" options={Data10} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data10[0]]}
                                />
                            </Col>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Company Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <label htmlFor="Company-Name" className="form-label">Company Name</label>
                                    <Form.Control type="text" id="Company-Name" placeholder="Company Name" defaultValue="Obligation Pvt.Ltd" />
                                </Col>
                                <div className="col-xl-12">
                                    <label htmlFor="Company-Website" className="form-label">Company Website</label>
                                    <Form.Control type="text" id="Company-Website" placeholder="Company Website" defaultValue="http//www.obligationpvtltd.com" />
                                </div>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Country</Form.Label>
                                    <Select name="colors" options={Data11} className="basic-multi-select" classNamePrefix="Select2" defaultValue={[Data11[0]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="Company-Address" className="form-label">Address</label>
                                    <Form.Control type="text" id="Company-Address" placeholder="Company Address" defaultValue="USA" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Jobpost