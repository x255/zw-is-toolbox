"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { Recentblogdata, Selectdata1, Selectdata2, Selectdata3 } from '../../../../../../shared/data/pages/blogs/createblogdata';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from 'react-datepicker';
import Seo from '../../../../../../shared/layout-components/seo/seo';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
const Createblog = () => {
    const defaultContent = `
    <h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
    <ol>
        <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
        <li class="">This is quill snow editor.</li>
        <li class="">Easy to customize and flexible.</li>
    </ol>
    <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
    `;
    const [value, setValue] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [files, setFiles] = useState<any>([]);
    return (
        <>
            <Seo title={"Create Blog"} />

            <Pageheader title="Create Blog" heading="Blog" active="Create Blog" />
            <Row>
                <Col xxl={9} xl={12} lg={12} md={12} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>New Blog</Card.Title>
                        </Card.Header>
                        <Card.Body className='new-blog'>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" className="form-label">Blog Title</Form.Label>
                                    <Form.Control type="text" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-category" className="form-label">Blog Category</Form.Label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="blog-author" className="form-label">Blog Author</label>
                                    <Form.Control type="text" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="blog-author-email" className="form-label">Email</label>
                                    <Form.Control type="text" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="publish-date" className="form-label">Publish Date</label>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
                                    <DatePicker className='form-control flatpickr-input'
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-tags" className="form-label">Blog Tags</Form.Label>
                                    <Select isMulti name="colors" options={Selectdata3} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Blog Content</label>
                                    <div id="blog-content">
                                        <SunEditor defaultValue={defaultContent} />
                                    </div>
                                </Col>
                                <div className="col-xl-12 blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" className="form-label">Blog Images</Form.Label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <Col xl={12}>
                                    <label className="form-label">Blog Type</label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <input type="radio" className="form-check-input" name="blog-type" id="blog-free1" defaultChecked />
                                            <label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" name="blog-type" id="blog-paid1" />
                                            <label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list text-end">
                                <button type="button" className="btn btn-sm btn-light">Save As Draft</button>
                                <button type="button" className="btn btn-sm btn-primary">Post Blog</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={12} lg={12} md={12} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Recent Blogs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                {Recentblogdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex gap-2 flex-wrap align-items-center">
                                            <span className="avatar avatar-xl me-1">
                                                <img src={idx.src} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill">
                                                <a href="#!" className="fs-14 fw-semibold mb-0">{idx.title}</a>
                                                <p className="mb-1 popular-blog-content text-truncate">{idx.text}
                                                </p>
                                                <span className="text-muted fs-11">{idx.time}</span>
                                            </div>
                                            <div>
                                                <Button variant='light' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item className="text-center">
                                    <Button variant='primary-light' type="button" className="btn">Load more</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
Createblog.layout = "Contentlayout"

export default Createblog
