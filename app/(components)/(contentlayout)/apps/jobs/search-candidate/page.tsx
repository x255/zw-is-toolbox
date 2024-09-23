"use client";
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import 'react-range-slider-input/dist/style.css';
import LabeledTwoThumbs1 from '../../../../../../shared/data/pages/productsdata';
import { connect } from 'react-redux';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Searchcandidate = ({ local_varaiable }: any) => {
    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
                boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',

                marginLeft: 1,
                marginRight: 1,
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 3,
        },
    }));
    function AirbnbThumbComponent(props: any) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Dveloper', label: 'Software Dveloper' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
    const Data2 = [
        { value: 'Fresher', label: 'Fresher' },
        { value: '1 Year Exp', label: '1 Year Exp' },
        { value: '2 Year Exp', label: '2 Year Exp' },
        { value: '3 Year Exp', label: '3 Year Exp' },
        { value: '4 Year Exp', label: '4 Year Exp' },
        { value: '5+ Year Exp', label: '5+ Year Exp' },
    ];
    return (
        <>

            <Seo title={"Search Candidate"} />
            <Pageheader title="Search Candidate" heading="Jobs" active="Search Candidate" />
            <div className="container-lg">
                <Row>
                    <Col xxl={3} xl={4}>
                        <Card className=" custom-card products-navigation-card">
                            <Card.Body className="p-0">
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Categories</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-1">
                                                Research & Developement
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">2,712</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="c-2" />
                                            <Form.Label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">536</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">18,289</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">3,453</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="c-5" />
                                            <Form.Label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">7,165</Badge>
                                        </div>
                                        <Collapse in={open}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="me-2" type="checkbox" value="" id="c-6" />
                                                    <Form.Label className="form-check-label" htmlFor="c-6">
                                                        Human Resources
                                                    </Form.Label>
                                                    <Badge bg="light" className="badge bg-light text-default fw-500 float-end">5,964</Badge>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="me-2" type="checkbox" value="" id="c-7" />
                                                    <Form.Label className="form-check-label" htmlFor="c-7">
                                                        Marketing
                                                    </Form.Label>
                                                    <Badge bg="light" className="badge bg-light text-default fw-500 float-end">2,123</Badge>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" href="#category-more" role="button" onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text" aria-expanded={open} scroll={false}
                                        >MORE</Link>

                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Availability</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="available-1">
                                                Immediate
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">512</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                            <label className="form-check-label" htmlFor="available-2">
                                                30 Days
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">2,186</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                            <label className="form-check-label" htmlFor="available-3">
                                                3 Months
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">734</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Bond Agreement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="bond-1">
                                                1 Year
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">512</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="bond-2" />
                                            <label className="form-check-label" htmlFor="bond-2">
                                                2 Years
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">512</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="bond-3" />
                                            <label className="form-check-label" htmlFor="bond-3">
                                                3 Years
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">512</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Languages</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="languages-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="languages-1">
                                                English
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">13</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="languages-2" />
                                            <label className="form-check-label" htmlFor="languages-2">
                                                Hindi
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">67</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="languages-3" />
                                            <label className="form-check-label" htmlFor="languages-3">
                                                Telugu
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">58</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Job Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">512</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">2,186</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">734</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <Badge bg="= bg-light text-default fw-500 float-end">16</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">1,432</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Salary Range</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div id="nonlinear">
                                            <div id="slider">
                                                <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4 justify-content-center">
                                            <div className="fw-semibold h6 mb-0">$<span id="lower-value">80,000</span></div>
                                            &nbsp; -- &nbsp;
                                            <div className="fw-semibold h6 mb-0">$<span id="upper-value">40,000</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Qualification</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="q-1" />
                                            <label className="form-check-label" htmlFor="q-1">
                                                All Education Levels
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">16,563</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="q-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-2">
                                                10th Pass and Above
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">15,234</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="q-3" />
                                            <label className="form-check-label" htmlFor="q-3">
                                                12th Pass and Above
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">6,278</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="q-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-4">
                                                Diploma and Graduate
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">4,531</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="q-5" />
                                            <label className="form-check-label" htmlFor="q-5">
                                                Post Graduate
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">2,405</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Experience</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="e-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-1">
                                                Fresher
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">23,156</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="e-2" />
                                            <label className="form-check-label" htmlFor="e-2">
                                                Less than 1 year
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">15,632</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="e-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-3">
                                                Less than 2 year
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">15,032</Badge>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="e-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-4">
                                                More than 3 years
                                            </label>
                                            <Badge bg=" bg-light text-default fw-500 float-end">7,154</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 py-4 px-sm-4">
                                    <h6 className="fw-semibold mb-0">Skills</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="s-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="s-1">
                                                HTML5
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">23,156</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="s-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="s-2">
                                                Javascript
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">15,632</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="s-3" />
                                            <Form.Label className="form-check-label" htmlFor="s-3">
                                                PHP
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">15,032</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="me-2" type="checkbox" value="" id="s-4" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="s-4">
                                                CSS3
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default fw-500 float-end">7,154</Badge>
                                        </div>
                                        <Collapse in={open1}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="me-2" type="checkbox" value="" id="s-5" />
                                                    <Form.Label className="form-check-label" htmlFor="s-5">
                                                        Bootstrap
                                                    </Form.Label>
                                                    <Badge bg="light" className="badge bg-light text-default fw-500 float-end">5,946</Badge>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="me-2" type="checkbox" value="" id="s-6" />
                                                    <Form.Label className="form-check-label" htmlFor="s-6">
                                                        Angular
                                                    </Form.Label>
                                                    <Badge bg="light" className="badge bg-light text-default fw-500 float-end">3,267</Badge>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="me-2" type="checkbox" value="" id="s-7" />
                                                    <Form.Label className="form-check-label" htmlFor="s-7">
                                                        React
                                                    </Form.Label>
                                                    <Badge bg="light" className="badge bg-light text-default fw-500 float-end">578</Badge>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" href="#category-more" role="button" onClick={() => setOpen1(!open1)}
                                            aria-controls="example-collapse-text" aria-expanded={open1} scroll={false}
                                        >MORE</Link>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={9} xl={8}>
                        <Row className=" align-items-center mb-4">
                            <Col lg={12}>
                                <div className="input-group companies-search-input">
                                    <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />

                                    <Select name="state" options={Data} className="basic-multi-select " isSearchable
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data[0]]}
                                    />
                                    <input type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <Select name="state" options={Data2} className="basic-multi-select custom-select-searchcompany" isSearchable
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data2[0]]}
                                    />
                                    <Button variant='' type="button" className="btn btn-primary"><i className="ri-search-line"></i></Button>
                                </div>
                            </Col>
                        </Row>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                    <h5 className="fw-semibold mb-0 flex-grow-1">1287 <span className="fw-normal fs-18">Candidates match your job search</span> </h5>
                                    <Dropdown className="btn-group">
                                        <Dropdown.Toggle variant='' className="btn btn-outline-light border dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Premium</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Newest</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Most Relevant</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Fresher</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Experienced</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Bond Agreement</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Flexible Shift</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Day Shift</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href="#!" scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span><i className="bi bi-download"></i></span></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Brenda Simpson
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>Software Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="ms-1 min-w-fit-content text-muted">
                                                <span>(142)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Immediate Joinee</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Current</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Current"> $2,300</span>
                                        </OverlayTrigger>
                                        -
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected"> $3,678</span>
                                        </OverlayTrigger> </p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">HTML</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">CSS</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Javascript</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent me-2">More</Link>
                                    </div>
                                    <div>
                                        <OverlayTrigger overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                        </OverlayTrigger>
                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href="#!" scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span> <i className="bi bi-download"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Dwayne Stort
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>Web Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                <span>(35)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> Post Graduate</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Within 10 Days</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Current</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Current"> $3,600</span>
                                        </OverlayTrigger>
                                        -
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected"> $4,700</span>
                                        </OverlayTrigger>
                                    </p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Telugu</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">React</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">React Native</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent">More</Link>
                                    </div>
                                    <div>
                                        <OverlayTrigger overlay={<Tooltip>2 years bond accepted</Tooltip>}>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                        </OverlayTrigger>

                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span><i className="bi bi-download"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/21.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Jasmine Kova
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>Python Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                <span>(56)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> MBA</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> Day-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Avg at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Current</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Current">$4,300</span>
                                        </OverlayTrigger>
                                        -
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected"> $5,000</span>
                                        </OverlayTrigger>
                                    </p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Hindi</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Python</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Java</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">React</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent">More</Link>
                                    </div>
                                    <div>
                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span><i className="bi bi-download"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Kiara Advain
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>Java Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Banglore</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                <span>(13)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> MBA</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> Day-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected"> $3,678</span>
                                        </OverlayTrigger> </p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Java</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Core Java</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent">More</Link>
                                    </div>
                                    <div>
                                        <OverlayTrigger overlay={<Tooltip>2 years bond accepted</Tooltip>}>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                        </OverlayTrigger>
                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span><i className="bi bi-download"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Json Taylor
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>Angular Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Nellore</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                <span>(18)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> MCA</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Within 15 Days</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Fluent at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Current</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Current">$3,600</span>
                                        </OverlayTrigger>
                                        -
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected">$4,700</span>
                                        </OverlayTrigger>
                                    </p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Telugu</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Angular</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Advanced Java</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent">More</Link>
                                    </div>
                                    <div>
                                        <OverlayTrigger overlay={<Tooltip>2 years bond accepted</Tooltip>}>
                                            <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                        </OverlayTrigger>
                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className=" custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Download Resume</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                            <span><i className="bi bi-download"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-heart"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement='top' overlay={<Tooltip>View Profile</Tooltip>}>
                                        <Link href='#!' scroll={false} className="avatar avatar-rounded avatar-sm bg-light text-default">
                                            <span><i className="bi bi-eye"></i></span>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/21.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link href="/apps/jobs/candidate-details/"> Diego Sanch
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate </Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <Link href="#!" scroll={false}>AWS Developer</Link>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kukatpally, Hyderabad</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" scroll={false} className="mb-0 ms-1 min-w-fit-content text-muted">
                                                <span>(13)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-mortarboard text-muted me-1"></i> MBA</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-moon-stars text-muted me-1"></i> Day-shift</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-clock text-muted me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 flex-grow-1"><span className="text-muted">Package (Yearly) :</span>
                                        <OverlayTrigger overlay={<Tooltip>Expected</Tooltip>}>
                                            <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected"> $8,900</span>
                                        </OverlayTrigger></p>
                                    <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <h6 className="mb-0 fw-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow-1">
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">AWS Lambda</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Athena</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-light text-default me-2">Linux</Link>
                                        <Link href="#!" scroll={false} className="badge rounded-pill bg-primary-transparent">More</Link>
                                    </div>
                                    <div>
                                        <Link href="#!" scroll={false} className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <ul className="pagination mb-4 justify-content-end">
                            <li className="page-item disabled">
                                <Link className="page-link" href="#!">
                                    Prev
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                            <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link text-primary" href="#!">
                                    next
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Searchcandidate);
