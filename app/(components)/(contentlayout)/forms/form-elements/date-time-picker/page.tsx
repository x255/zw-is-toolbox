"use client";
import React, { useState } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import { setHours, setMinutes } from "date-fns";
const DateTimePicker = () => {

    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 17));
    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const handleDateChange1 = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [dateRange, setDateRange] = useState([null, null]);
    const [startsDate5, endDate] = dateRange;
    const [startDate5, setStartDate5] = useState(new Date());
    const handleDateChange5 = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate5(date);
        }
    };
    const [startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate4(date);
        }
    };
    const [startDatei, setStartDatei] = useState(new Date());
    const [startDate6, setStartDate6] = useState(new Date());
    const handleDateChange6 = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate6(date);
        }
    };
    const currentDate = new Date();
    const [startDate8, setStartDate8] = useState(new Date());
    const [startDate7, setStartDate7] = useState(startTime);

    return (
        <>
            <Seo title={"Date & Time Pickers"} />

            <Pageheader title="Date & Time Pickers" heading="Form Elements" active="Date & Time Pickers" />
            <Row>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Date picker
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <DatePicker selected={startDate} onChange={handleDateChange} className="form-control flatpickr-input" />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date picker With Time
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>

                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date: any) => setStartTime(date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Human Friendly dates
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <DatePicker selected={startDate} onChange={handleDateChange} className='form-control input' dateFormat="MMMM d, yyyy" />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date range picker
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    {/* <DatePicker selected={startDate} onChange={handleDateChange} className='form-control flatpickr-input' /> */}
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate5} endDate={endDate} onChange={(update: any) => { setDateRange(update); }} isClearable={true} />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Time picker
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <DatePicker className='form-control flatpickr-input'
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={4}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Time picker with 24hr Format
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate6} onChange={(date: any) => setStartDate6(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

            </Row>
            <Row>


                <Col xl={6}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Time Picker with Limits
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate4} onChange={(date: any) => setStartDate4(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </InputGroup>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-time-line"></i> </div>
                                    <DatePicker
                                        selected={startDate7}
                                        onChange={(date: any) => setStartDate7(date)}
                                        showTimeSelect
                                        minTime={new Date(currentDate.setHours(17, 0, 0, 0))}
                                        maxTime={new Date(currentDate.setHours(20, 30, 0, 0))}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xl-6">
                    <Card className=" custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Inline Calendar
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="form-group overflow-auto">
                                <DatePicker selected={startDatei} onChange={(date: any) => setStartDatei(date)} inline />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-xl-6">
                    <Row>
                        <div className="col-xl-12">
                            <Card className=" custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Header>
                                    <div className="card-title">
                                        Inline Time Picker
                                    </div>
                                </Card.Header>
                                <div className="card-body">
                                    <div className="form-group mb-0">
                                        <DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date: any) =>
                                            setStartDate5(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </div>
            </Row>
        </>
    )
}

export default DateTimePicker
