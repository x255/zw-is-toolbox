
"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import dynamic from 'next/dynamic';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Select = dynamic(() => import('react-select'), { ssr: false });
import Editor2, { option1, option2, option3, option4, option5, option6, option7, option8 } from '../../../../../../shared/data/pages/editproductdata'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Editproducts = () => {
    const [value, setValue] = useState('');
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const handleDateChange1 = (date1: any) => {
        // Ensure date is defined before setting it
        if (date1) {
            setStartDate1(date1);
        }
    };
    return (
        <>
            <Seo title={"Edit Products"} />

            <Pageheader title="Edit Products" heading="Ecommerce" active="Edit Products" />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Body className="add-products p-0">
                            <div className="p-4">
                                <div className="row gx-5">
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className=" custom-card shadow-none mb-0">
                                            <Card.Body className="p-0">
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <label htmlFor="product-name-add" className="form-label">Product Name</label>
                                                        <input type="text" className="form-control" id="product-name-add" placeholder="Name" defaultValue="Light Blue Sweat Shirt" />
                                                        <label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-category-add" className="form-label">Category</label>
                                                        <Select isSearchable name="colors" options={option1} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[option1[5]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-gender-add" className="form-label">Gender</Form.Label>
                                                        <Select name="colors" options={option2} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[option2[1]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-size-add" className="form-label">Size</Form.Label>
                                                        <Select name="colors" options={option3} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[option3[3]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-brand-add" className="form-label">Brand</Form.Label>
                                                        <Select name="colors" options={option4} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[option4[5]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6} className="color-selection">
                                                        <Form.Label htmlFor="product-color-add" className="form-label">Colors</Form.Label>
                                                        <Select isMulti name="colors" options={option5} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[option5[7]]}
                                                        />

                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-cost-add" className="form-label">Enter Cost</label>
                                                        <input type="text" className="form-control" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                        <label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label htmlFor="product-description-add" className="form-label">Product Description</label>
                                                        <textarea defaultValue="Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours" className="form-control" id="product-description-add" rows={2} />
                                                        <label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label className="form-label">Product Features</label>
                                                        <div id="product-features">
                                                            <Editor2 />
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6} className='mt-4 mt-xxl-0'>
                                        <Card className=" custom-card shadow-none mb-0">
                                            <Card.Body className="p-0">
                                                <div className="row gy-4">
                                                    <Col xl={4}>
                                                        <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                        <input type="text" className="form-control" id="product-actual-price" placeholder="Actual Price" defaultValue="$1,499.90" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                        <input type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price" defaultValue="$1,299.99" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="product-discount" className="form-label">Discount</label>
                                                        <input type="text" className="form-control" id="product-discount" placeholder="Discount in %" defaultValue="0.75%" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-type" className="form-label">Product Type</label>
                                                        <input type="text" className="form-control" id="product-type" placeholder="Type" defaultValue="Watch" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-weight" className="form-label">Item Weight</label>
                                                        <input type="text" className="form-control" id="product-weight" placeholder="Weight in gms" defaultValue="180gms" />
                                                    </Col>
                                                    <Col xl={12} className=" product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Product Images :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </Col>
                                                    <label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
                                                    <Col xl={12} className=" product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Warrenty Documents :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files1}
                                                            onupdatefiles={setFiles1}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="publish-date" className="form-label me-2">Publish Date</label>
                                                        <DatePicker selected={startDate} onChange={handleDateChange} className='form-control flatpickr-input active' />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="publish-time" className="form-label  me-2">Publish Time</label>
                                                        <DatePicker className='form-control flatpickr-input'
                                                            selected={startDate1}
                                                            onChange={handleDateChange1}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                                        <Select name="colors" options={option6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[option6[2]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-tags" className="form-label">Product Tags</Form.Label>

                                                        <Select isMulti name="colors" options={option7} defaultValue={[option7[0], option7[3]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-availability" className="form-label">Availability</Form.Label>
                                                        <Select name="colors" options={option8}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>

                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <Button variant='' className="btn btn-primary-light m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></Button>
                                <Button variant='' className="btn btn-success-light m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Editproducts
