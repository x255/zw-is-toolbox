"use client";
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { AudienceReport, Bouncerate, Clicks, Impressions, Sessionbydevice, Sessionduration, TopCountries, Totalusers } from '../../../../../shared/data/charts/dashboard1'
import Link from 'next/link'
import { Visitorsbychannel, Visitorsbycountries } from '../../../../../shared/data/dashboards/analyticsdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader'

const Analytics = () => {
    // for User search function
    const [Data, setData] = useState(Visitorsbychannel);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Visitorsbychannel) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };
    return (
        <>
            <Seo title={"Analytics"} />

            <Pageheader title="Analytics" heading="Dashboards" active="Analytics" />
            <Row>
                <Col xl={7}>
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12}>
                            <Card className=" custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div>
                                            <h6 className="fw-semibold mb-3">Total Users</h6>
                                            <span className="fs-25 fw-semibold">9,789</span>
                                            <span className="d-block text-success fs-12">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
                                        </div>
                                        <div id="analytics-users"><Totalusers /></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6}>
                            <Card className=" custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h6 className="fw-semibold mb-3">Live Visitors</h6>
                                            <span className="fs-25 fw-semibold">12,240</span>
                                            <span className="d-block text-danger fs-12">+0.59<i className="ti ti-trending-down ms-1 d-inline-flex"></i></span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary">
                                                <i className="ri-user-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Body className=" mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h6 className="fw-semibold text-primary mb-3">Bounce Rate</h6>
                                            <span className="fs-25 d-flex align-items-center">77.3% <span className="fs-12 text-warning op-7 ms-2">+0.59<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div id="analytics-bouncerate" className="mt-1 w-100"><Bouncerate /></div>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Audience Report
                                    </Card.Title>
                                    <div>
                                        <button type="button" className="btn btn-primary-light btn-wave"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export</button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div id="audienceReport"><AudienceReport /></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Top Countries Sessions vs Bounce Rate
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                            View All
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Day</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div id="country-sessions"><TopCountries /></div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6} xl={12}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Traffic Sources
                                    </Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                            View All
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <div className=" p-0">
                                    <Card.Body className="table-responsive px-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Browser</th>
                                                    <th scope="col">Sessions</th>
                                                    <th scope="col">Traffic</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-google-fill fs-18 text-primary"></i>
                                                            </span>
                                                            <div className="fw-semibold">Google</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "78%" }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-safari-line fs-18 text-secondary"></i>
                                                            </span>
                                                            <div className="fw-semibold">Safari</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "32%" }} aria-valuenow={32} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-opera-fill fs-18 text-success"></i>
                                                            </span>
                                                            <div className="fw-semibold">Opera</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>12,457</span>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-edge-fill fs-18 text-info"></i>
                                                            </span>
                                                            <div className="fw-semibold">Edge</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-firefox-fill fs-18 text-warning"></i>
                                                            </span>
                                                            <div className="fw-semibold">Firefox</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span><i className="ri-arrow-down-s-fill me-1 text-danger align-middle fs-18"></i>6,135</span>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                                                <i className="ri-ubuntu-fill fs-18 text-danger"></i>
                                                            </span>
                                                            <div className="fw-semibold">Ubuntu</div>
                                                        </div>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>4,789</span>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "12%" }} aria-valuenow={12} aria-valuemin={0} aria-valuemax={100}>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={5}>
                    <Row>
                        <Col xxl={5} xl={12}>
                            <Row>
                                <Col xl={12} lg={12} >
                                    <Card className=" custom-card upgrade-card text-fixed-white">
                                        <Card.Body className=" text-fixed-white">
                                            <span className="avatar avatar-xxl">
                                                <img src="../../assets/images/media/media-84.png" alt="" />
                                            </span>
                                            <div className="upgrade-card-content">
                                                <span className="op-7 fw-normal mb-1">Plan is expiring !</span>
                                                <span className="fs-15 fw-semibold d-block mb-5 upgrade-text">Upgrade to premium</span>
                                                <button type="button" className="btn btn-sm btn-light btn-wave">Upgrade Now</button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12} lg={6} md={6} sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className=" p-1">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div id="analytics-followers"><Impressions /></div>
                                                <div className="p-2">
                                                    <p className="mb-1 text-muted">Impressions</p>
                                                    <h5 className="fw-semibold mb-0">9,903</h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12} lg={6} md={6} sm={6}>
                                    <Card className=" custom-card">
                                        <Card.Body className=" p-1">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div id="analytics-views"><Clicks /></div>
                                                <div className="p-2">
                                                    <p className="mb-1 text-muted">Clicks</p>
                                                    <h5 className="fw-semibold mb-0">16,789</h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={7} xl={12} >
                            <Card className=" custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Sessions By Device
                                    </Card.Title>
                                    <div>
                                        <button type="button" className="btn btn-primary-light">View All</button>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" my-2 py-4 px-0">
                                    <div id="sessions"><Sessionbydevice /></div>
                                </Card.Body>
                                <Card.Footer className=" p-0">
                                    <Row className=" row-cols-12 justify-content-center">
                                        <Col className=" pe-0 text-center">
                                            <div className="p-sm-3 p-2 ">
                                                <span className="text-muted fs-11">Mobile</span>
                                                <span className="d-block fs-16 fw-semibold">68.3%</span>
                                            </div>
                                        </Col>
                                        <div className="col px-0 text-center">
                                            <div className="p-sm-3 p-2 ">
                                                <span className="text-muted fs-11">Tablet</span>
                                                <span className="d-block fs-16 fw-semibold">17.68%</span>
                                            </div>
                                        </div>
                                        <div className="col px-0 text-center">
                                            <div className="p-sm-3 p-2 ">
                                                <span className="text-muted fs-11">Desktop</span>
                                                <span className="d-block fs-16 fw-semibold">10.5%</span>
                                            </div>
                                        </div>
                                        <div className="col ps-0 text-center">
                                            <div className="p-sm-3 p-2">
                                                <span className="text-muted fs-11">Others</span>
                                                <span className="d-block fs-16 fw-semibold">5.16%</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Sessions Duration By New Users</Card.Title>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                            View All
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' role="menu">
                                            <Dropdown.Item as='li' href="#!">Download</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Import</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div id="session-users"><Sessionduration /></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Visitors By Channel Report
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className=" my-1">
                                    <Dropdown.Toggle as='a' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                        <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as='ul' className='dropdown-position'>
                                        <Dropdown.Item as='li' href="#!">New</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Popular</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Relevant</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Channel</th>
                                            <th scope="col">Sessions</th>
                                            <th scope="col">Bounce Rate</th>
                                            <th scope="col">Avg Session Duration</th>
                                            <th scope="col">Goal Completed</th>
                                            <th scope="col">Pages Per Session</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.id}
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className={`avatar avatar-sm bg-${idx.color}-transparent avatar-rounded`}>
                                                            <i className={`ri-${idx.icon} fs-15 fw-semibiold text-${idx.color}`}></i>
                                                        </span>
                                                        <span className="ms-2">
                                                            {idx.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>{idx.session}</td>
                                                <td>{idx.rate}</td>
                                                <td>
                                                    {idx.avg}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.goal}</span>
                                                </td>
                                                <td>
                                                    {idx.pages}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link href="#!" scroll={false} className="page-link">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link href="#!" scroll={false} className="page-link" >1</Link></li>
                                            <li className="page-item"><Link href="#!" scroll={false} className="page-link" >2</Link></li>
                                            <li className="page-item">
                                                <Link href="#!" scroll={false} className="page-link text-primary">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Visitors By Countries
                            </Card.Title>
                            <Dropdown className="">
                                <Dropdown.Toggle as='a' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                    View All
                                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul' role="menu">
                                    <Dropdown.Item as='li' href="#!">Day</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Month</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled mb-0 analytics-visitors-countries">
                                {Visitorsbycountries.map((idx) => (
                                    <li key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded text-default">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-3 flex-fill lh-1">
                                                <span className="fs-12">{idx.city}</span>
                                            </div>
                                            <div>
                                                <span className="text-default badge bg-light fw-semibold mt-2">{idx.badge}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Analytics
