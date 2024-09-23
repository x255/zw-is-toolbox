"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Dropdown, Form, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
import { buttongroup1, buttongroup2, buttongroup3, buttongroup4, buttongroup5, buttongroup6, buttongroup7, buttongroup8, buttongroup9, buttongroup10 } from '../../../../../shared/data/prismdata/uielements';
const Buttongroup = () => {

    return (
        <>
            <Seo title={"Button Group"} />

            <Pageheader title="Button Group" heading="Ui Elements" active="Button Group" />
            <Row>
                <Col xl={3}>

                    <ShowCode title="Basic example" code={buttongroup1}>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info btn-wave"><i className="bi bi-skip-backward"></i></button>
                            <button type="button" className="btn btn-info btn-wave"><i className="bi bi-pause"></i></button>
                            <button type="button" className="btn btn-info btn-wave"><i className="bi bi-skip-forward"></i></button>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title="Navigation" code={buttongroup2}>
                        <div className="btn-group">
                            <Link href="#!" scroll={false} className="btn btn-primary active btn-wave" aria-current="page">Active
                                link</Link>
                            <Link href="#!" scroll={false} className="btn btn-primary">Link</Link>
                            <Link href="#!" scroll={false} className="btn btn-primary">Link</Link>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3}>

                    <ShowCode title="Mixed style" code={buttongroup3}>
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger btn-wave">Left</button>
                            <button type="button" className="btn btn-warning btn-wave">Middle</button>
                            <button type="button" className="btn btn-success btn-wave">Right</button>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={3}>

                    <ShowCode title="Outline styled" code={buttongroup4}>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary btn-wave">Left</button>
                            <button type="button" className="btn btn-outline-primary btn-wave">Middle</button>
                            <button type="button" className="btn btn-outline-primary btn-wave">Right</button>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Checkbox button groups" code={buttongroup5} customCardBodyClass="checkbox-button-group">

                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                            <Form.Control type="checkbox" className="btn-check" id="btncheck1" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                            <Form.Control type="checkbox" className="btn-check" id="btncheck2" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                            <Form.Control type="checkbox" className="btn-check" id="btncheck3" />
                            <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
                        </div>
                    </ShowCode>


                </Col>
                <Col xl={6}>

                    <ShowCode title="Radio button groups" code={buttongroup6} customCardBodyClass=" radio-button-group">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                            <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                            <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>

                            <ShowCode title="Sizing" code={buttongroup7}>
                                <div className="btn-group btn-group-lg my-1 me-1" role="group" aria-label="Large button group">
                                    <button type="button" className="btn btn-outline-success">Left</button>
                                    <button type="button" className="btn btn-outline-success">Middle</button>
                                    <button type="button" className="btn btn-outline-success">Right</button>
                                </div>
                                <div className="btn-group my-1 me-1" role="group" aria-label="Default button group">
                                    <button type="button" className="btn btn-outline-success">Left</button>
                                    <button type="button" className="btn btn-outline-success">Middle</button>
                                    <button type="button" className="btn btn-outline-success">Right</button>
                                </div>
                                <div className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
                                    <button type="button" className="btn btn-outline-success">Left</button>
                                    <button type="button" className="btn btn-outline-success">Middle</button>
                                    <button type="button" className="btn btn-outline-success">Right</button>
                                </div>
                            </ShowCode>

                        </Col> <Col xl={12}>

                            <ShowCode title="Button toolbar" code={buttongroup7}>
                                <div className="btn-toolbar mb-4" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <div className="btn-group me-2 my-1" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-primary">1</button>
                                        <button type="button" className="btn btn-primary">2</button>
                                        <button type="button" className="btn btn-primary">3</button>
                                        <button type="button" className="btn btn-primary">4</button>
                                    </div>
                                    <div className="btn-group me-2 my-1" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-secondary">5</button>
                                        <button type="button" className="btn btn-secondary">6</button>
                                        <button type="button" className="btn btn-secondary">7</button>
                                    </div>
                                    <div className="btn-group my-1" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-info">8</button>
                                    </div>
                                </div>
                                <div className="btn-toolbar mb-3" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <div className="btn-group me-2 my-1" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-outline-secondary">1</button>
                                        <button type="button" className="btn btn-outline-secondary">2</button>
                                        <button type="button" className="btn btn-outline-secondary">3</button>
                                        <button type="button" className="btn btn-outline-secondary">4</button>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-text" id="btnGroupAddon">@</div>
                                        <input type="text" className="form-control"
                                            placeholder="Input group example"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon" />
                                    </div>
                                </div>
                                <div className="btn-toolbar justify-content-between d-sm-flex d-block" role="toolbar"
                                    aria-label="Toolbar with button groups">
                                    <div className="btn-group my-1" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-outline-secondary">1</button>
                                        <button type="button" className="btn btn-outline-secondary">2</button>
                                        <button type="button" className="btn btn-outline-secondary">3</button>
                                        <button type="button" className="btn btn-outline-secondary">4</button>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-text" id="btnGroupAddon2">@</div>
                                        <input type="text" className="form-control"
                                            placeholder="Input group example"
                                            aria-label="Input group example"
                                            aria-describedby="btnGroupAddon2" />
                                    </div>
                                </div>

                            </ShowCode>

                        </Col>
                        <Col xl={12}>

                            <ShowCode title="Nesting" code={buttongroup8}>
                                <div className="btn-group" role="group"
                                    aria-label="Button group with nested dropdown">
                                    <button type="button" className="btn btn-primary">1</button>
                                    <button type="button" className="btn btn-primary">2</button>

                                    <Dropdown className="btn-group" role="group">
                                        <Dropdown.Toggle id="btnGroupDrop1" type="button"
                                            className="btn btn-primary dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false"> Dropdown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul' aria-labelledby="btnGroupDrop1">
                                            <Dropdown.Item as='li' href="#;">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#;">Dropdown link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </ShowCode>


                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>

                            <ShowCode title="Vertical variation" code={buttongroup9}>
                                <Row className=" gap-2">
                                    <Col sm={3}>
                                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <button type="button" className="btn btn-primary">Button</button>
                                            <button type="button" className="btn btn-primary">Button</button>
                                            <Dropdown className="btn-group" role="group">
                                                <Dropdown.Toggle id="btnGroupVerticalDrop1" type="button"
                                                    className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                                    aria-expanded="false"> Dropdown
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop1">
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <button type="button" className="btn btn-primary">Button</button>
                                            <button type="button" className="btn btn-primary">Button</button>
                                            <Dropdown className="btn-group" role="group">
                                                <Dropdown.Toggle id="btnGroupVerticalDrop2" type="button"
                                                    className="btn btn-primary" data-bs-toggle="dropdown"
                                                    aria-expanded="false"> Dropdown
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop2">
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="btn-group" role="group">
                                                <Dropdown.Toggle id="btnGroupVerticalDrop3" type="button"
                                                    className="btn btn-primary" data-bs-toggle="dropdown"
                                                    aria-expanded="false"> Dropdown
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop3">
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="btn-group" role="group">
                                                <Dropdown.Toggle id="btnGroupVerticalDrop4" type="button"
                                                    className="btn btn-primary" data-bs-toggle="dropdown"
                                                    aria-expanded="false"> Dropdown
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop4">
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <button type="button" className="btn btn-info">Button</button>
                                            <button type="button" className="btn btn-info">Button</button>
                                            <button type="button" className="btn btn-info">Button</button>
                                            <button type="button" className="btn btn-info">Button</button>
                                            <button type="button" className="btn btn-info">Button</button>
                                            <button type="button" className="btn btn-info">Button</button>
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <div className="btn-group-vertical" role="group"
                                            aria-label="Vertical radio toggle button group">
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                                                defaultChecked />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
                                            />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
                                            <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
                                            />
                                            <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
                                        </div>
                                    </Col>
                                </Row>
                            </ShowCode>


                        </Col>
                        <Col xl={12}>

                            <ShowCode title="Social Group Buttons" code={buttongroup10}>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button className="btn btn-icon btn-facebook btn-wave">
                                        <i className="ri-facebook-line"></i>
                                    </button>
                                    <button className="btn btn-icon btn-twitter-x btn-wave">
                                        <i className="ri-twitter-x-line"></i>
                                    </button>
                                    <button className="btn btn-icon btn-instagram btn-wave">
                                        <i className="ri-instagram-line"></i>
                                    </button>
                                    <button className="btn btn-icon btn-github btn-wave">
                                        <i className="ri-github-line"></i>
                                    </button>
                                    <button className="btn btn-icon btn-youtube btn-wave">
                                        <i className="ri-youtube-line"></i>
                                    </button>
                                    <button className="btn btn-icon btn-google btn-wave">
                                        <i className="ri-google-line"></i>
                                    </button>
                                </div>
                            </ShowCode>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Buttongroup
