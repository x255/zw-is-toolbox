"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import { DisabledGroupData, Multipleselectdata, Multipleselectdata1, Optionwithnosearch, SingleGroup, } from '../../../../../../shared/data/form/fornselelectdata'
import dynamic from 'next/dynamic';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader'
const Select = dynamic(() => import('react-select'), { ssr: false });
const CreatableSelect = dynamic(() => import('react-select/creatable'), { ssr: false });
import { formselect1, formselect2, formselect3, formselect4, formselect5, formselect6 } from '../../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Creatable = dynamic(() => import("react-select/creatable"), { ssr: false });

const Formselect = () => {
    const components = {
        DropdownIndicator: null,
    };
    const createOption = (label: string) => ({
        label,
        value: label,
    });
    const [inputValue1, setInputValue1] = useState('');
    const [value1, setValue1] = useState([
        createOption("child-1"),
        createOption("child-2")
    ]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("one"),
        createOption("two"),
        createOption("three")
    ]);
    const [inputValue2, setInputValue2] = useState('');
    const [value2, setValue2] = useState([
        createOption("abc@hotmail.com")
    ]);
    const handleKeyDown1 = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue1) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue1)]);
                setInputValue1('');
                event.preventDefault();
        }
    };
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const handleKeyDown2 = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue2) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue2((prev) => [...prev, createOption(inputValue2)]);
                setInputValue2('');
                event.preventDefault();
        }
    };
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    const [isSearchable] = useState(true);
    return (
        <>
            <Seo title={"Form Select"} />

            <Pageheader title="Form Select" heading="Form Elements" active="Form Select" />
            <h6 className="fw-semibold mb-2">Choices:</h6>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <h6 className="card-title">Multiple Select</h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="fw-semibold mb-2">Default</p>
                                    <Select isMulti name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                    />
                                    <p className="fw-semibold mb-2  mt-3">With Remove Button</p>
                                    <Select isMulti name="colors" options={Multipleselectdata1} className="basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                    />
                                    <p className="fw-semibold mb-2  mt-3">Option groups</p>
                                    <Creatable className="rounded-sm" classNamePrefix="Select2" options={DisabledGroupData} />
                                    {/* <SingleGroup /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card Select-badge">
                                <Card.Header>
                                    <Card.Title>
                                        Passing Through Options
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <CreatableSelect
                                        className='passing-options'
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Options added via config with no search
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Select isClearable name="choices-single-no-search" options={Optionwithnosearch} className="default basic-multi-select" id="choices-single-no-search"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Optionwithnosearch[5]]}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <h6 className="card-title">Single Select</h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="fw-semibold mb-2">Default</p>
                                    <Select placeholder="This is a placeholder" isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2"
                                    />
                                    <p className="fw-semibold mb-2  mt-3">Option groups</p>
                                    <Creatable className="rounded-sm" classNamePrefix="Select2" options={DisabledGroupData} />
                                    {/* <SingleGroup /> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Email Address Only
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue2}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue2(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue2([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue2(newValue)}
                                        onKeyDown={handleKeyDown2}
                                        placeholder="Type something and press enter..."
                                        value={value2}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card Select-badge">
                                <Card.Header>
                                    <Card.Title>
                                        Passing Unique Values
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <CreatableSelect
                                        className='passing-options'
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue1}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue1(newValue)}
                                        onKeyDown={handleKeyDown1}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Default Select" code={formselect1}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </ShowCode>

                </Col>
                <Col xl={4}>
                    <ShowCode title="Disabled Select" code={formselect2}>
                        <Form.Select aria-label="Disabled select example" disabled>
                            <option>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Rounded Select" code={formselect3}>
                        <select className="form-select rounded-pill" aria-label="Default select example">
                            <option>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Multiple Attribute Select" code={formselect4}>
                        <select multiple className="form-select" aria-label="multiple select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Using Size Attribute" code={formselect5}>
                        <select className="form-select" aria-label="size 3 select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Select Sizes" code={formselect6}>
                        <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select mb-3" aria-label="Default select">
                            <option>Open this select menu
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select form-select-lg"
                            aria-label=".form-select-lg example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Formselect
