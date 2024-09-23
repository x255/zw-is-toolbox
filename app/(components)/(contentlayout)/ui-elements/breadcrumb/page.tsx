"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Col, Collapse, ListGroup, Navbar, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6, breadcrumb7 } from '../../../../../shared/data/prismdata/uielements';
const Breadcrumbs = () => {

    return (
        <>
            <Seo title={"Breadcrumb"} />

            <Pageheader title="Breadcrumb" heading="Ui Elements" active="Breadcrumb" />
            <Row>

                <Col xl={6}>
                    <ShowCode title="Example" code={breadcrumb1}>
                        <Navbar aria-label="breadcrumb" className='py-0'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </Navbar>

                        <nav aria-label="breadcrumb mb-0">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Library</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Example1" code={breadcrumb2}>
                        <Navbar aria-label="breadcrumb" className='py-0'>
                            <ol className="breadcrumb breadcrumb-example1">
                                <li className="breadcrumb-item active" aria-current="page">Home</li>
                            </ol>
                        </Navbar>

                        <Navbar aria-label="breadcrumb" className='py-0'>
                            <ol className="breadcrumb breadcrumb-example1">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </Navbar>

                        <Navbar aria-label="breadcrumb" className='py-0'>
                            <ol className="breadcrumb breadcrumb-example1 mb-0">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Library</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </Navbar>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title=" Dividers " code={breadcrumb3}>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Embedded SVG icon" code={breadcrumb4}>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                            <li className="breadcrumb-item active embedded-breadcrumb" aria-current="page">Library</li>
                        </ol>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Breadcrumb Style-1" code={breadcrumb5}>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-style1 mb-0">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                                <li className="breadcrumb-item"><Link href="#!" scroll={false}>Library</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Breadcrumb Style-2" code={breadcrumb6}>
                        <nav aria-label="breadcrumb">
                            <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
                                <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                            </Breadcrumb>
                        </nav>
                    </ShowCode>

                </Col>
                <Col xl={12}>

                    <ShowCode title=" Background colors" code={breadcrumb7}>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Library</li>
                        </ol>
                    </ShowCode>


                </Col>

            </Row>
        </>
    )
}

export default Breadcrumbs
