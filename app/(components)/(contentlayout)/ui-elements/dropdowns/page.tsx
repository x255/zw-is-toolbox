"use client";
import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Collapse, Dropdown, Row } from 'react-bootstrap'
import Link from 'next/link'
import { AlignmentButtons, AutocloseButtons, CustomButtons, SingleButtons, SplitButtons } from '../../../../../shared/data/ui/dropdownsdata'
import { GhostButtons, OutlineButtons } from '../../../../../shared/data/ui/buttonsdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import {
    dropdown1, dropdown2, dropdown3, dropdown4, dropdown5, dropdown6, dropdown7, dropdown8, dropdown9, dropdown10, dropdown11, dropdown12, dropdown13, dropdown14, dropdown15, dropdown16, dropdown17, dropdown18, dropdown19,
    dropdown20, dropdown21, dropdown22, dropdown23, dropdown24, dropdown25, dropdown26, dropdown27, dropdown28, dropdown29
} from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Dropdowns = () => {
    return (
        <>
            <Seo title={"Dropdowns"} />
            <Pageheader title="Dropdowns" heading="Ui Elements" active="Dropdowns" />

            {/* Row-1-Start */}
            <Row>
                <Col xl={12}>

                    <ShowCode title="Dropdowns" code={dropdown1}>
                        <div className="btn-list d-flex align-items-center flex-wrap">
                            <Dropdown>
                                <Dropdown.Toggle className='a dropdown-toggle-drop'>
                                    Dropdown button
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle as='a' className="btn btn-secondary dropdown-toggle-drop " role="button"
                                    id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul' aria-labelledby="dropdownMenuLink">
                                    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-1-End */}
            {/* Row-2-Start */}
            <Row>
                <Col xl={6}>

                    <ShowCode title="Single dropdown buttons" code={dropdown2}>
                        <div className="btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle type="button" variant={idx.class} className="btn dropdown-toggle-drop"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Rounded Button Dropdowns" code={dropdown3}>
                        <div className="btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill dropdown-toggle-drop"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-2-End */}
            {/* Row-3-Start */}
            <Row>
                <Col xl={6}>

                    <ShowCode title="Outline Button Dropdowns" code={dropdown4}>
                        <div className="btn-list">
                            {OutlineButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle dropdown-toggle-drop"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Rounded Outline Dropdowns" code={dropdown5}>
                        <div className="btn-list">

                            {OutlineButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill dropdown-toggle-drop"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider className="dropdown-divider" />
                                            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-3-End */}
            {/* Row-4-Start */}
            <Row>
                <Col xl={6}>

                    <ShowCode title="Split Buttons" code={dropdown6}>
                        {SplitButtons.map((idx) => (
                            <Dropdown className="btn-group my-1" key={Math.random()}>
                                <Button variant={idx.class} type="button" className="btn btn-primary ">Action</Button>
                                <Dropdown.Toggle variant={idx.class} type="button"
                                    className="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ))}
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title=" Dropdown Sizing" code={dropdown7}>
                        <Dropdown className="btn-group my-1 me-2">
                            <Dropdown.Toggle className="btn btn-primary btn-lg dropdown-toggle dropdown-toggle-drop" type="button">
                                Large button
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Item as='li' className='px-0 pb-0'>
                                    <hr className="dropdown-divider" />
                                </Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="btn-group my-1 me-2">
                            <button className="btn btn-light btn-lg" type="button">
                                Large split button
                            </button>
                            <Dropdown.Toggle type="button" variant=''
                                className="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Item as='li' className='px-0'>
                                    <hr className="dropdown-divider" />
                                </Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="btn-group my-1 me-2">
                            <Dropdown.Toggle className=" btn-sm dropdown-toggle dropdown-toggle-drop"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Small button
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Item as='li' className='px-0'>
                                    <hr className="dropdown-divider" />
                                </Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="btn-group my-1">
                            <button className="btn btn-light btn-sm" type="button">
                                Small split button
                            </button>
                            <Dropdown.Toggle type="button" variant=''
                                className="btn btn-sm btn-light dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Item as='li' className='px-0'>
                                    <hr className="dropdown-divider" />
                                </Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
            </Row>
            {/* Row-4-End */}
            {/* Row-5-Start */}
            <Row>
                <Col xl={3}>

                    <ShowCode title="Dropup" code={dropdown8}>
                        <Dropdown drop="up" className="btn-group dropup my-1 me-2">
                            <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropup
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Divider className="dropdown-divider" />
                                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown drop="up" className="btn-group dropup my-1">
                            <Button variant='' type="button" className="btn btn-info">
                                Split dropup
                            </Button>
                            <Dropdown.Toggle variant='' type="button"
                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Divider className="dropdown-divider" />
                                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title=" Dropup right" code={dropdown9}>
                        <Dropdown className="btn-group dropend my-1 me-2" drop="end">
                            <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropright
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Divider className="dropdown-divider" />
                                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown drop="end" className="btn-group dropend my-1">
                            <Button variant='' type="button" className="btn btn-info">
                                Split dropend
                            </Button>
                            <Dropdown.Toggle variant='' type="button"
                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropright</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Divider className="dropdown-divider" />
                                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title="Dropup left" code={dropdown10}>
                        <Dropdown className="btn-group dropstart my-1 me-2">
                            <Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle">
                                Dropleft
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="btn-group">
                            <div className="btn-group dropstart my-1" role="group">
                                <Dropdown.Toggle type="button"
                                    className="btn btn-info  dropdown-toggle-split"
                                >
                                    <span className="visually-hidden">Toggle Dropstart</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                            <button type="button" className="btn btn-info my-1">
                                Split dropleft
                            </button>
                        </Dropdown>
                    </ShowCode>



                </Col>
                <Col xl={3}>

                    <ShowCode title="Active" code={dropdown11}>
                        <Dropdown>
                            <Dropdown.Toggle as='a' type="button" className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropstart
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Regular link</Dropdown.Item>
                                <Dropdown.Item as='li' className='active' href="#!">Active link</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-5-End */}
            {/* Row-6-Start */}
            <Row>
                <Col xl={3}>

                    <ShowCode title="Disabled" code={dropdown12}>
                        <Dropdown>
                            <Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-drop"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropstart
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li'>Regular link</Dropdown.Item>
                                <Dropdown.Item as='li' className="dropdown-item disabled text-muted" href="#!" aria-current="true">Active
                                    link</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Auto close behavior" code={dropdown13}>
                        <div className="btn-list">
                            {AutocloseButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle  dropdown-toggle-drop " type="button"
                                            id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                                            aria-expanded="false">
                                            {idx.text}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="dropdowns with Forms" code={dropdown14}>
                        <Dropdown>
                            <Dropdown.Toggle className="btn btn-secondary dropdown-toggle dropdown-toggle-drop  " type="button" id="dropdownMenu2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <form className="px-4 py-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                                            address</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                                            placeholder="email@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleDropdownFormPassword1"
                                            className="form-label">Password</label>
                                        <input type="password" className="form-control"
                                            id="exampleDropdownFormPassword1" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                            <label className="form-check-label" htmlFor="dropdownCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Sign in</button>
                                </form>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item href="#!">New around here? Sign up</Dropdown.Item>
                                <Dropdown.Item href="#!">Forgot password?</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-6-End */}
            {/* Row-7-Start */}
            <Row>
                <Col xl={3}>
                    <ShowCode title="Dropdown menu centered" code={dropdown15}>
                        <p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
                        </p>
                        <Dropdown className="dropdown-center">
                            <Dropdown.Toggle className="btn btn-primary dropdown-toggle dropdown-toggle-drop " type="button"
                                id="dropdownCenterBtn">
                                Centered dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' aria-labelledby="dropdownCenterBtn">
                                <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Action two</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Action three</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Dropup centered" code={dropdown16}>
                        <p className="card-title mb-3">Use <code>.dropup-center</code>
                            on the parent element.
                        </p>
                        <Dropdown className="dropup-center dropup" drop="up">
                            <Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                Centered dropup
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Menu items" code={dropdown17}>
                        <p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
                            dropdown items.</p>
                        <Dropdown>
                            <Dropdown.Toggle className="btn btn-info dropdown-toggle dropdown-toggle-drop " type="button"
                                id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' aria-labelledby="dropdownMenu1">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button>
                                </li>
                                <li><button className="dropdown-item" type="button">Something else
                                    here</button>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title=" Dropdowns options" code={dropdown18}>
                        <p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
                            the location of the dropdown.</p>
                        <div className="d-flex align-items-center flex-wrap">
                            <Dropdown className="dropdown me-1 mt-1">
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
                                    data-bs-offset="10,20">
                                    Offset
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
                                    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <ButtonGroup className="btn-group custom-btn-group mt-1">
                                <Button variant='' type="button" className="btn btn-info">Reference</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' type="button"
                                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        id="dropdownMenuReference" data-bs-toggle="dropdown"
                                        aria-expanded="false" data-bs-reference="parent">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
                                        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ButtonGroup>
                        </div>
                    </ShowCode>

                </Col>
            </Row>
            {/* Row-7-End */}
            {/* Row-8-Start */}
            <Row>
                <Col xl={9}>

                    <ShowCode title=" Alignment options" code={dropdown19}>
                        <div className="btn-list">
                            {AlignmentButtons.map((idx: any) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown drop={idx.dir}>
                                        <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
                                            id="dropdownMenuButton" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            {idx.text}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Dark Dropdowns" code={dropdown20}>
                        <Dropdown>
                            <Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
                                id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-8-End */}
            {/* Row-9-Start */}
            <Row>
                <Col xl={4}>

                    <ShowCode title="Menu alignment" code={dropdown21}>
                        <Dropdown className="btn-group">
                            <Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-drop "
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Right-aligned menu example
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' className=" dropdown-menu-end">
                                <li><button className="dropdown-item" type="button">Action</button>
                                </li>
                                <li><button className="dropdown-item" type="button">Another
                                    action</button></li>
                                <li><button className="dropdown-item" type="button">Something else
                                    here</button>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Responsive alignment end" code={dropdown22}>
                        <Dropdown className="btn-group">
                            <Dropdown.Toggle type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-drop  text-wrap"
                                data-bs-toggle="dropdown" data-bs-display="static"
                                aria-expanded="false">
                                Left-aligned but right aligned when large screen
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' className=" dropdown-menu-lg-end">
                                <li><button className="dropdown-item" type="button">Action</button>
                                </li>
                                <li><button className="dropdown-item" type="button">Another
                                    action</button></li>
                                <li><button className="dropdown-item" type="button">Something else
                                    here</button>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Responsive alignment left" code={dropdown23}>
                        <Dropdown className="btn-group">
                            <Dropdown.Toggle type="button" className="btn btn-info dropdown-toggle dropdown-toggle-drop  text-wrap"
                                data-bs-toggle="dropdown" data-bs-display="static"
                                aria-expanded="false">
                                Left-aligned but right aligned when large screen
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' className="dropdown-menu-lg-start">
                                <li><button className="dropdown-item" type="button">Action</button>
                                </li>
                                <li><button className="dropdown-item" type="button">Another
                                    action</button></li>
                                <li><button className="dropdown-item" type="button">Something else
                                    here</button></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShowCode>


                </Col>
            </Row>
            {/* Row-9-End */}
            {/* Row-10-Start */}
            <Row>
                <Col xl={6}>

                    <ShowCode title=" Custom Dropdown Menu's" code={dropdown24}>
                        <div className="btn-list">
                            {CustomButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {idx.text}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className={`dropdown-menu dropdown-${idx.class1} dropmenu-${idx.class2}`}>
                                            <Dropdown.Item className={`${idx.class3} `} href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item className={idx.class3} href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item className={idx.class3} href="#!">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Ghost Button Dropdowns" code={dropdown25}>
                        <div className="btn-list">
                            {GhostButtons.map((idx) => (
                                <div className="btn-group" key={Math.random()}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle dropdown-toggle-drop "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            {idx.text}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider className="dropdown-divider" />
                                            <Dropdown.Item className="dropdown-item" href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </ShowCode>

                </Col>
            </Row>
            {/* Row-10-End */}
            {/* Row-11-Start */}
            <Row>
                <Col xl={3}>
                    <ShowCode title="non-interactive dropdown items" code={dropdown26}>
                        <p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu">
                                <li><span className="dropdown-item-text">Dropdown item text</span>
                                </li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link>
                                </li>
                            </ul>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Dropdown Headers" code={dropdown27}>
                        <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu">
                                <li>
                                    <h6 className="dropdown-header">Dropdown header</h6>
                                </li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title=" Dropdown Dividers" code={dropdown28}>
                        <div className="bd-example">
                            <ul className="dropdown-menu">
                                <li><Link href="#!" scroll={false} className="dropdown-item dropdown-header">Heading</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link href="#!" scroll={false} className="dropdown-item" >Separated link</Link></li>
                            </ul>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title=" Dropdown Menu Text" code={dropdown28}>
                        <div className="bd-example">
                            <div className="dropdown-menu p-4 text-muted" style={{ maxWidth: "200px" }}>
                                <p>
                                    Some example text {`that's`} free-flowing within the dropdown menu.
                                </p>
                                <p className="mb-0">
                                    And this is more example text.
                                </p>
                            </div>
                        </div>
                    </ShowCode>

                </Col>
            </Row>
            {/* Row-11-End */}
        </>
    )
}

export default Dropdowns
