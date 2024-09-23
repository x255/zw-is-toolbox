"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
const Select = dynamic(() => import('react-select'), { ssr: false });
import dynamic from 'next/dynamic';
import DatePicker from 'react-datepicker';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import { Productoptions1, Productoptions2, Productoptions3, Productoptions4, Productoptions5, Productoptions6, Productoptions7, Productoptions8 } from '../../../../../../shared/data/pages/addproductdata'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Editors = dynamic(() => import('../../../../../../shared/data/pages/addproductdata1'), { ssr: false });

const Addproducts = () => {
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    return (
        <>
            <Seo title={"AddProducts"} />

            <Pageheader title="Add Product" heading="Ecommerce" active="Add Product" />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" add-products p-0">
                            <div className="p-4">
                                <Row gx={5}>
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className=" custom-card shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <Row className=" gy-3">

                                                    <Col xl={12}>
                                                        <label htmlFor="product-name-add" className="form-label">Product Name</label>
                                                        <Form.Control type="text" id="product-name-add" placeholder="Name" />
                                                        <label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-category-add" className="form-label">Category</Form.Label>
                                                        <Select name="colors" options={Productoptions1} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Category"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-gender-add" className="form-label">Gender</Form.Label>
                                                        <Select name="colors" options={Productoptions2} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-size-add" className="form-label">Size</Form.Label>
                                                        <Select name="colors" options={Productoptions3} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-brand-add" className="form-label">Brand</Form.Label>
                                                        <Select name="colors" options={Productoptions4} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6} className=" color-selection">
                                                        <Form.Label htmlFor="product-color-add" className="form-label">Colors</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions5} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-cost-add" className="form-label">Enter Cost</Form.Label>
                                                        <Form.Control type="text" id="product-cost-add" placeholder="Cost" />
                                                        <Form.Label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-description-add" className="form-label">Product Description</Form.Label>
                                                        <Form.Control as="textarea" className="form-control" id="product-description-add" rows={2}></Form.Control>
                                                        <Form.Label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label className="">Product Features</Form.Label>
                                                        <Editors />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className=" custom-card shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <Row className=" gy-4">
                                                    <Col xl={4}>
                                                        <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                        <Form.Control type="text" id="product-actual-price" placeholder="Actual Price" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                        <Form.Control type="text" id="product-dealer-price" placeholder="Dealer Price" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="product-discount" className="form-label">Discount</label>
                                                        <Form.Control type="text" id="product-discount" placeholder="Discount in %" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-type" className="form-label">Product Type</label>
                                                        <Form.Control type="text" id="product-type" placeholder="Type" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="product-discount" className="form-label">Item Weight</label>
                                                        <Form.Control type="text" id="product-discount1" placeholder="Weight in gms" />
                                                    </Col>
                                                    <Col xl={12} className="product-documents-container">
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
                                                    <Form.Label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </Form.Label>
                                                    <Col xl={12} className="product-documents-container">
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
                                                        <Form.Label htmlFor="publish-date" className="form-label">Publish Date</Form.Label>
                                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
                                                        <DatePicker
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
                                                        <Select name="colors" options={Productoptions6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-tags" className="form-label">Product Tags</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions7} defaultValue={[Productoptions7[0], Productoptions7[3]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-status-add1" className="form-label">Availability</Form.Label>
                                                        <Select name="colors" options={Productoptions8}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <Button variant="primary-light m-1" >Add Product<i className="bi bi-plus-lg ms-2"></i></Button>
                                <Button variant="success-light m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Addproducts
