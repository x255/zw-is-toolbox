"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader'
import { inputgroup1, inputgroup2, inputgroup3, inputgroup4, inputgroup5, inputgroup6, inputgroup7, inputgroup8, inputgroup9, inputgroup10, inputgroup11 } from '../../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Inputgroups = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    return (
        <>
            <Seo title={"Input Groups"} />

            <Pageheader title="Input Groups" heading="Form Elements" active="Input Groups" />
            <Row>
                <Col xl={12}>
                    <ShowCode title="Input Groups" code={inputgroup1}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <Form.Control type="text" placeholder="Username"
                                aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <Form.Control type="text" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                        <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"
                                id="basic-addon3">https://example.com/users/</span>
                            <Form.Control type="text" id="basic-url"
                                aria-describedby="basic-addon3" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <Form.Control type="text"
                                aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                            <Form.Control type="text" placeholder="Username"
                                aria-label="Username" />
                            <span className="input-group-text">@</span>
                            <Form.Control type="text" placeholder="Server"
                                aria-label="Server" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">With textarea</span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Warpping" code={inputgroup2}>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <Form.Control type="text" placeholder="Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Sizing" code={inputgroup3}>
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                    <Form.Control type="text"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"
                                        id="inputGroup-sizing-default">Default</span>
                                    <Form.Control type="text"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                    <Form.Control type="text"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Buttons addons" code={inputgroup4}>
                                <div className="input-group mb-3">
                                    <button className="btn btn-primary" type="button"
                                        id="button-addon1">Button</button>
                                    <Form.Control type="text" placeholder=""
                                        aria-label="Example text with button addon"
                                        aria-describedby="button-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <Form.Control type="text" placeholder="Recipient's username"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" type="button"
                                        id="button-addon2">Button</button>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-primary" type="button">Button</button>
                                    <button className="btn btn-primary" type="button">Button</button>
                                    <Form.Control type="text" placeholder=""
                                        aria-label="Example text with two button addons" />
                                </div>
                                <div className="input-group">
                                    <Form.Control type="text" placeholder="Recipient's username"
                                        aria-label="Recipient's username with two button addons" />
                                    <button className="btn btn-primary" type="button">Button</button>
                                    <button className="btn btn-primary" type="button">Button</button>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Buttons with dropdowns" code={inputgroup5}>
                                <Dropdown className="input-group mb-3">
                                    <Dropdown.Toggle className="btn btn-primary dropdown-toggle-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                    <Dropdown.Menu as='ul'>
                                        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                    <Form.Control type="text" aria-label="Text input with dropdown button" />
                                </Dropdown>
                                <Dropdown className="input-group input-btn-outline mb-3">
                                    <Form.Control type="text"
                                        aria-label="Text input with dropdown button" />
                                    <Dropdown.Toggle variant='' className="btn btn-outline-primary dropdown-toggle-drop" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                    <Dropdown.Menu as='ul' className="dropdown-menu-end">
                                        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                                        <Dropdown.Item as='li'>
                                            <hr className="dropdown-divider p-0" />
                                        </Dropdown.Item>
                                        <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <InputGroup className="flex-nowrap">
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="btn btn-primary-light dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider>
                                            </Dropdown.Divider>
                                            <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control type="text" className=""
                                        aria-label="Text input with 2 dropdown buttons" />
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="btn btn-primary-light dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider>
                                            </Dropdown.Divider>
                                            <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Custom file input" code={inputgroup6}>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                                    <Form.Control type="file" id="inputGroupFile01" />
                                </div>

                                <div className="input-group mb-3">
                                    <Form.Control type="file" id="inputGroupFile02" />
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                </div>

                                <div className="input-group mb-3">
                                    <button className="btn btn-primary" type="button"
                                        id="inputGroupFileAddon03">Button</button>
                                    <Form.Control type="file" id="inputGroupFile03"
                                        aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                </div>

                                <div className="input-group">
                                    <Form.Control type="file" id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                    <button className="btn btn-primary" type="button"
                                        id="inputGroupFileAddon04">Button</button>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Multiple inputs" code={inputgroup7}>
                                <div className="input-group">
                                    <span className="input-group-text">First and last name</span>
                                    <input type="text" aria-label="First name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                                </div>
                            </ShowCode>

                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Checkboxes and radios" code={inputgroup8}>
                                <div className="input-group mb-3">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" type="checkbox" value=""
                                            aria-label="Checkbox for following text input" />
                                    </div>
                                    <Form.Control type="text"
                                        aria-label="Text input with checkbox" />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" type="radio" value=""
                                            aria-label="Radio button for following text input" />
                                    </div>
                                    <Form.Control type="text"
                                        aria-label="Text input with radio button" />
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Multiple addons" code={inputgroup9}>
                                <div className="input-group mb-3">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" type="checkbox" value=""
                                            aria-label="Checkbox for following text input" />
                                    </div>
                                    <Form.Control type="text"
                                        aria-label="Text input with checkbox" />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <input className="form-check-input mt-0" type="radio" value=""
                                            aria-label="Radio button for following text input" />
                                    </div>
                                    <Form.Control type="text"
                                        aria-label="Text input with radio button" />
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Segmented buttons" code={inputgroup10}>
                                <InputGroup className="mb-3">
                                    <Button variant='primary' type="button" className="">Action</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control type="text" className=""
                                        aria-label="Text input with segmented dropdown button" />
                                </InputGroup>
                                <InputGroup>
                                    <Form.Control type="text" className=""
                                        aria-label="Text input with segmented dropdown button" />
                                    <Button type="button" className="btn btn-primary">Action</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#!">Action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#!">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Custom select" code={inputgroup11}>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                    <Form.Select id="inputGroupSelect01">
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="input-group mb-3">
                                    <Form.Select id="inputGroupSelect02">
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                                </div>
                                <div className="input-group mb-3">
                                    <button className="btn btn-primary" type="button">Button</button>
                                    <Form.Select id="inputGroupSelect03"
                                        aria-label="Example select with button addon">
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="input-group">
                                    <Form.Select id="inputGroupSelect04"
                                        aria-label="Example select with button addon">
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <button className="btn btn-primary" type="button">Button</button>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Inputgroups
