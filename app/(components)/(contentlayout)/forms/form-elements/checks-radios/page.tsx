"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import { Checkdata1 } from '../../../../../../shared/data/form/checkradio';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader'
import {
    checks1, checks2, checks3, checks4, checks5, checks6, checks7, checks8, checks9, checks10, checks11, checks12, checks13, checks14, checks15, checks16, checks17, checks18, checks19,
    checks20, checks21, checks22, checks23, checks24
} from '../../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Checks$radios = () => {
    const [secondary1, setsecondary1] = useState("on");
    const [success1, setsuccess1] = useState("on");
    const [dark1, setdark1] = useState("on");
    const [primary1, setprimary1] = useState("on");
    const [warning1, setwarning1] = useState("on");
    const [info1, setinfo1] = useState("on");
    const [danger1, setdanger1] = useState("on");
    const [light1, setlight1] = useState("on");

    //sizes 
    const [primary2, setprimary2] = useState("on");
    const [secondary2, setsecondary2] = useState("on");
    const [success2, setsuccess2] = useState("on");
    return (
        <>
            <Seo title={"Checks & Radios"} />

            <Pageheader title="Checks & Radios" heading="Form Elements" active="Checks & Radios" />

            <Row>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <ShowCode title="Checks" code={checks1}>
                        <Form.Check label="Default checkbox" />
                        <Form.Check defaultChecked label="Checked checkbox" />
                    </ShowCode>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <ShowCode title="Disabled" code={checks2}>
                        <Form.Check disabled label="Disabled checkbox" />
                        <Form.Check disabled defaultChecked label="Disabled checked checkbox" />
                    </ShowCode>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <ShowCode title="Radios" code={checks3}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> Default radio </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2"> Default checked radio </label>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >

                    <ShowCode title="Disabled" code={checks4}>
                        <Form.Check type="radio" disabled label="Default radio" />
                        <Form.Check type="radio" disabled defaultChecked label="Default checked radio" />
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Default (stacked)" code={checks5}>
                        <Form.Check label="Default checkbox" />
                        <Form.Check disabled label="Disabled checkbox" />
                        <Form.Check type="radio" label="Default Radio" defaultChecked />
                        <Form.Check type="radio" disabled label="Disabled Radio" />
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Switches" code={checks6}>
                        <Form.Check type="switch" label="Default switch checkbox input" />
                        <Form.Check type="switch" defaultChecked label="Default switch checkbox input" />
                        <Form.Check type="switch" disabled label="Default switch checkbox input" />
                        <Form.Check type="switch" disabled defaultChecked label="Default checked switch checkbox input" />
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <ShowCode title="Checkbox Sizes" code={checks7} customCardBodyClass="d-sm-flex align-items-center justify-content-between" >
                        <Form.Check type="checkbox" defaultChecked label="Default" />
                        <Form.Check className="form-check-md d-flex align-items-center"
                            type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
                        <Form.Check className="form-check-lg d-flex align-items-center"
                            type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
                    </ShowCode>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>

                    <ShowCode title="Radio Sizes" code={checks8} customCardBodyClass="d-sm-flex align-items-center justify-content-between" >
                        <Form.Check type="radio" label="Default" name="example-radios" />
                        <Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
                        <Form.Check type="radio" className="form-check-lg" name="example-radios"
                            defaultChecked id="Radio-lg" label="Large" />
                    </ShowCode>

                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>

                    <ShowCode title="Switch Sizes" code={checks9} customCardBodyClass="d-sm-flex align-items-center justify-content-between" >
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch"
                                id="switch-sm" />
                            <label className="form-check-label" htmlFor="switch-sm">Default</label>
                        </div>
                        <div className="form-check form-check-md form-switch">
                            <input className="form-check-input" type="checkbox" role="switch"
                                id="switch-md" />
                            <label className="form-check-label" htmlFor="switch-md">Medium</label>
                        </div>
                        <div className="form-check form-check-lg form-switch">
                            <input className="form-check-input" type="checkbox" role="switch"
                                id="switch-lg" />
                            <label className="form-check-label" htmlFor="switch-lg">Large</label>
                        </div>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>

                    <ShowCode title="Inline" code={checks10} >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                value="option3" disabled />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                id="inlineRadio3" value="option3" disabled />
                            <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                        </div>
                    </ShowCode>

                    <ShowCode title="Without labels" code={checks11} >
                        <span className="me-3">
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
                                aria-label="..." />
                        </span>
                        <span>
                            <input className="form-check-input" type="radio" name="radioNoLabel"
                                id="radioNoLabel1" value="" aria-label="..." />
                        </span>
                    </ShowCode>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <ShowCode title="Reverse" code={checks12} >
                        <div className="form-check form-check-reverse mb-3">
                            <input className="form-check-input" type="checkbox" value=""
                                id="reverseCheck1" />
                            <label className="form-check-label" htmlFor="reverseCheck1">
                                Reverse checkbox
                            </label>
                        </div>
                        <div className="form-check form-check-reverse mb-3">
                            <input className="form-check-input" type="checkbox" value=""
                                id="reverseCheck2" disabled />
                            <label className="form-check-label" htmlFor="reverseCheck2">
                                Disabled reverse checkbox
                            </label>
                        </div>

                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox"
                                id="flexSwitchCheckReverse" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse
                                switch
                                checkbox input</label>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <ShowCode title="Outlined styles" code={checks13} >
                        <input type="checkbox" className="btn-check" id="btn-check-outlined" />
                        <label className="btn btn-outline-primary mb-3" htmlFor="btn-check-outlined">Single
                            toggle</label><br />

                        <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked
                        />
                        <label className="btn btn-outline-secondary mb-3"
                            htmlFor="btn-check-2-outlined">Checked</label><br />

                        <input type="radio" className="btn-check" name="options-outlined" id="success-outlined"
                            defaultChecked />
                        <label className="btn btn-outline-success m-1" htmlFor="success-outlined">Checked success
                            radio</label>

                        <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
                        />
                        <label className="btn btn-outline-danger m-1" htmlFor="danger-outlined">Danger radio</label>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Radio toggle buttons" code={checks14} >
                        <Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                        <Button className="btn btn-primary m-1">Checked</Button>
                        <Form.Check type="radio" className="btn-check" name="options" id="option2" />
                        <Button className="btn btn-primary m-1">Radio</Button>
                        <Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
                        <Button disabled className="btn btn-primary m-1">Disabled</Button>
                        <Form.Check type="radio" className="btn-check" name="options" id="option4" />
                        <Button className="btn btn-primary m-1">Radio</Button>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Checkbox toggle buttons" code={checks15} >
                        <input type="checkbox" className="btn-check" id="btn-check" />
                        <label className="btn btn-primary m-1" htmlFor="btn-check">Single toggle</label>
                        <input type="checkbox" className="btn-check" id="btn-check-2" defaultChecked
                        />
                        <label className="btn btn-primary m-1" htmlFor="btn-check-2">Checked</label>
                        <input type="checkbox" className="btn-check" id="btn-check-3"
                            disabled />
                        <label className="btn btn-primary m-1" htmlFor="btn-check-3">Disabled</label>
                    </ShowCode>
                </Col>
            </Row>
            <Row className=" row-cols-12">
                <Col md={6} lgh={6} className="col col-xl">
                    <ShowCode title="Colored Checkboxes" code={checks16} >
                        {Checkdata1.map((idx) => (
                            <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col md={6} lg={6} className="col col-xl">
                    <ShowCode title="Outline Checkboxes" code={checks17} >
                        {Checkdata1.map((idx) => (
                            <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>

                </Col>
                <Col md={12} className="col col-lg col-xl">
                    <ShowCode title="Colored Radios" code={checks18} >
                        {Checkdata1.map((idx) => (
                            <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                <input id={idx.id} className={`form-check-input form-checked form-checked-${idx.class2}`}
                                    type="radio" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>

                </Col>
                <Col sm={6} className="col col-lg">
                    <ShowCode title="Outline Radios" code={checks19} >
                        {Checkdata1.map((idx) => (
                            <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                <input id={idx.id} className={`form-check-input form-checked form-checked-outline form-checked-${idx.class2}`}
                                    type="radio" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
                <Col sm={6} className="col col-lg">
                    <ShowCode title="Switches Colors" code={checks20} >
                        {Checkdata1.map((idx) => (
                            <div className={`form-check form-switch ${idx.class1}`} key={Math.random()}>
                                <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                    type="checkbox" defaultChecked />
                                <label className=''>{idx.text}</label>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Toggle Switches Style-1" code={checks21} >
                        <Row className="row gy-1">
                            <Col xl={4}>
                                <div className={`toggle  ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-secondary ${secondary1}`} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-warning ${warning1}`} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-info ${info1}`} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-danger ${danger1}`} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle mb-3  toggle-light ${light1}`} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }} >
                                    <span></span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={`toggle ms-sm-2  toggle-dark ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
                                    <span></span>
                                </div>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <ShowCode title="Toggle Switches Style-2" code={checks22} >
                        <div className="row gy-1">
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchPrimary" className="label-primary"></Form.Label><span className="ms-3">Primary</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchSecondary" className="label-secondary"></Form.Label><span className="ms-3">Secondary</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchWarning" className="label-warning"></Form.Label><span className="ms-3">Warning</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchInfo" className="label-info"></Form.Label><span className="ms-3">Info</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchSuccess" className="label-success"></Form.Label><span className="ms-3">Success</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchDanger" className="label-danger"></Form.Label><span className="ms-3">Danger</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchLight" className="label-light"></Form.Label><span className="ms-3">Light</span>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                    <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="toggleswitchDark" className="label-dark"></Form.Label><span className="ms-3">Dark</span>
                                </div>
                            </Col>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switch-1 Sizes" code={checks23} >
                        <div className="d-flex align-items-center flex-wrap mb-3">
                            <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>

                            <div className={`toggle  toggle-sm mb-0 ${primary2}`} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
                                <span></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap mb-3">
                            <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>

                            <div className={`toggle mb-0  toggle-secondary ${secondary2}`} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
                                <span></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                            <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>

                            <div className={`toggle toggle-lg mb-0  toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                <span></span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <ShowCode title="Toggle Switch-2 Sizes" code={checks24} >
                        <div className="d-flex align-items-center flex-wrap mb-4 gap-2">
                            <div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                            <div className="custom-toggle-switch toggle-sm ms-2">
                                <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-sm" className="label-primary mb-0"></Form.Label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap mb-4">
                            <div className=""><p className="text-muted m-0">Default toggle switch</p></div>
                            <div className="custom-toggle-switch ms-2">
                                <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
                            </div>
                        </div>
                        <div className="d-sm-flex d-block align-items-center flex-wrap">
                            <div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                            <div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
                                <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
        </>
    )
}

export default Checks$radios
