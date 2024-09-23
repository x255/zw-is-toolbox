"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from 'react-datepicker';
import { addDays, setHours, setMinutes } from "date-fns";
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
const Createinvoice = () => {
    const [startDate1, setStartDate1] = useState(new Date());
    const initialValue = "Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    function dec(el: any) {
        const unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }
    const Currencyoptions = [
        { value: 'Select Currency', label: 'Select Currency' },
        { value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)' },
        { value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)' },
        { value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)' },
        { value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)' },
    ];

    const handleDateChange1 = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    return (
        <>
            <Seo title={"Create Invoice"} />

            <Pageheader title="Create Invoice" heading="Invoice" active="Create Invoice" />

            <Row>
                <Col xl={9}>
                    <Card className=" custom-card create-invoice">
                        <Card.Header className=" d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-block align-items-center">
                                <div>
                                    <img src="../../../assets/images/brand-logos/toggle-logo.png" alt="" />
                                </div>
                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">

                                    <Form.Control type="text" className=" form-control-light form-control-sm" placeholder="Invoice Title" defaultValue="INV TITLE" />
                                </div>
                                <div className="mx-2">:</div>
                                <div className="mt-sm-0 mt-2">
                                    <Form.Control type="text" className=" form-control-light form-control-sm" placeholder="Invoice ID" defaultValue="INV ID" />
                                </div>
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-primary me-2">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-secondary-light me-2"><i className="bi bi-plus-lg"></i></Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-success-light me-2"><i className="bi bi-download"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={4} lg={4} md={6} sm={6}>
                                            <p className="dw-semibold mb-2">
                                                Billing From :
                                            </p>
                                            <Row className=" gy-2">
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="Company-Name" placeholder="Company Name" defaultValue="SPRUKO TECHNOLOGIES" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as="textarea" className=" form-control-light" id="company-address" placeholder="Enter Address" rows={3} />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="company-mail" placeholder="Company Email" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="company-phone" placeholder="Phone Number" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as="textarea" className=" form-control-light" id="invoice-su bject" placeholder="Subject" rows={4} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} className=" ms-auto mt-sm-0 mt-3">
                                            <p className="dw-semibold mb-2">
                                                Billing To :
                                            </p>
                                            <Row className="gy-2">
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="customer-Name" placeholder="Customer Name" defaultValue="Json Taylor" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as='textarea' className=" form-control-light" id="customer-address" placeholder="Enter Address" rows={3} />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="customer-mail" placeholder="Customer Email" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="customer-phone" placeholder="Phone Number" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className=" form-control-light" id="zip-code" placeholder="Zip Code" defaultValue="" />
                                                </Col>
                                                <Col xl={12} className="choices-control">
                                                    <p className="dw-semibold mb-2 mt-2">
                                                        Currency :
                                                    </p>
                                                    <Select options={Currencyoptions} classNamePrefix='Select2' menuPlacement='auto' className="multi-select"
                                                        placeholder="Select Currency" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-number">Invoice ID</Form.Label>
                                    <Form.Control type="text" className=" form-control-light" id="invoice-number" placeholder="Inv No" defaultValue="#SPK120219890" />
                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-date-due">Date Issued</Form.Label>
                                    <DatePicker className=" form-control form-control-light flatpickr-input" onChange={handleDateChange1} showIcon selected={startDate1} />

                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-date-due">Due Date</Form.Label>

                                    <DatePicker placeholderText='Choose date' className=" form-control-light"
                                        selected={startDate}
                                        onChange={handleDateChange} />
                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-due-amount">Due Amount</Form.Label>
                                    <Form.Control type="text" className=" form-control-light"
                                        id="invoice-due-amount" placeholder="Enter Amount" defaultValue="$12,983.78" />
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <table className="table nowrap text-nowrap border mt-3">
                                            <thead>
                                                <tr>
                                                    <th>PRODUCT NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Control type="text" className=" form-control-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control form-control-light" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <Button variant='' className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus" onClick={dec}><i className="ri-subtract-line"></i></Button>
                                                            <Form.Control type="text" className=" form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity4" defaultValue="1" />
                                                            <Button variant='' className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus" onClick={inc}><i className="ri-add-line"></i></Button>
                                                        </div>
                                                    </td>
                                                    <td><Form.Control className=" form-control-light" placeholder="" type="text" defaultValue="$60.00" /></td>
                                                    <td><Form.Control className=" form-control-light" placeholder="" type="text" defaultValue="$120.00" /></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-icon btn-danger-light"><i className="ri-delete-bin-5-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Form.Control type="text" className=" form-control-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control form-control-light" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <Button variant='' className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus" onClick={dec}><i className="ri-subtract-line"></i></Button>
                                                            <Form.Control type="text" className=" form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity4" defaultValue="1" />
                                                            <Button variant='' className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus" onClick={inc}><i className="ri-add-line"></i></Button>
                                                        </div>
                                                    </td>
                                                    <td><Form.Control className=" form-control-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td><Form.Control className=" form-control-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-icon btn-danger-light"><i className="ri-delete-bin-5-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6} className="border-bottom-0"><Link href="#!" scroll={false} className="btn btn-light"><i className="bi bi-plus-lg"></i> Add Product</Link></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4}></td>
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-semibold">Sub Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className=" form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$1209.89" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-semibold">Avail Discount :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$29.98" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-semibold">Coupon Discount <span className="text-success">(10%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className=" form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$129.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-semibold">Vat <span className="text-danger">(20%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className=" form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$258.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-semibold">Due Till Date :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className=" form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$0.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fs-14 fw-semibold">Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className=" form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$1,071.89" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                                <div className="col-xl-12">
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control form-control-light" id="invoice-note" rows={3} defaultValue={initialValue}></textarea>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <Button variant='' className="btn btn-light m-1"><i className="ri-eye-line m-1 align-middle d-inline-block"></i>Preview</Button>
                            <Button className="btn btn-primary m-1">Send Invoice <i className="ri-send-plane-2-line m-1 align-middle d-inline-block"></i></Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Mode Of Payment
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                        <Form.Label className="btn btn-outline-light mt-sm-0 mt-1" htmlFor="btnradio2">UPI</Form.Label>
                                        <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                        <Form.Label className="btn btn-outline-light mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</Form.Label>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Form.Control type="text" className=" form-control-light" placeholder="Card Holder Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Control type="text" className=" form-control-light" id="invoice-payment-cardname" placeholder="Card Number" defaultValue="1234 5678 9087 XXXX" />
                                    <label htmlFor="invoice-payment-cardname" className="form-label mb-0"><Link className="text-danger fs-11" href="#!">Enter valid card number*</Link></label>
                                </Col>
                                <Col xl={12}>
                                    <Form.Control type="text" className=" form-control-light mb-2" placeholder="Enter OTP" />
                                </Col>
                                <Col xl={12}>
                                    <div className="alert alert-success" role="alert">
                                        Please Make sure to pay the invoice bill within 30 days.
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Createinvoice
