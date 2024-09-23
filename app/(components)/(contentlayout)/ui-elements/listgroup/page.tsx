"use client";
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Collapse, ListGroup, Row } from 'react-bootstrap'
import { ActiveButtons, BasicButtons, ContextualButtons, CustomButtons, HorizontalButtons, LinksButtons, ListbadgesButtons, SubheadingsButtons, ContextualButtons1 } from '../../../../../shared/data/ui/listgroupdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { listgroup1, listgroup2, listgroup3, listgroup4, listgroup5, listgroup6, listgroup7, listgroup8, listgroup9, listgroup10, listgroup11, listgroup12, listgroup13, listgroup14, listgroup15, listgroup16 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Listgroup = () => {

    return (
        <>
            <Seo title={"List Group"} />

            <Pageheader title="List Group" heading="Ui Elements" active="List Group" />
            <Row>
                <Col xl={4}>

                    <ShowCode title="Basic List" code={listgroup1}>
                        <ListGroup className="">
                            {BasicButtons.map((idx) => (
                                <ListGroup.Item as="li" key={Math.random()}>
                                    <div className="d-flex align-items-center">
                                        <span className="avatar avatar-sm">
                                            <img src={idx.src} alt="img" />
                                        </span>
                                        <div className="ms-2 fw-semibold">
                                            {idx.text}
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Active items" code={listgroup2}>
                        <ListGroup className="">
                            {ActiveButtons.map((idx) => (
                                <ListGroup.Item as="li" className={`list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <span className="fs-15">
                                                <i className={`bi bi-${idx.class}`}></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            {idx.text}
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Disabled items" code={listgroup3}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item">Simply dummy text of the printing</ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item">There are many variations of passages</ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item">All the Lorem Ipsum generators</ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
                        </ListGroup>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={4}>

                    <ShowCode title="Flush" code={listgroup4}>
                        <ListGroup as="ul" className=" list-group-flush">
                            <ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
                            <ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Links" code={listgroup5}>
                        <ListGroup className="">
                            {LinksButtons.map((idx) => (
                                <ListGroup.Item action className={`list-group-item list-group-item-action ${idx.class1}`} key={Math.random()}
                                    aria-current="true">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <span className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}>
                                                {idx.text1}
                                            </span>
                                        </div>
                                        <div className="ms-2">{idx.text}</div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="buttons" code={listgroup6}>
                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></button>
                            <button type="button" className="list-group-item list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></button>
                            <button type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></button>
                            <button type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></button>
                            <button type="button" className="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></button>
                        </div>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title="Contextual classNames" code={listgroup7}>
                        <ListGroup as='ul' className="">

                            {ContextualButtons.map((idx) => (
                                <ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title=" Contextual classNames with hover styles" code={listgroup8}>
                        <ListGroup as="ul">
                            {ContextualButtons.map((idx) => (
                                <ListGroup.Item as="li" variant={idx.class} action key={Math.random()}>{idx.text}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={6}>

                    <ShowCode title=" Solid Colored Lists" code={listgroup9}>
                        <ListGroup as='ul'>
                            {ContextualButtons1.map((idx) => (
                                <ListGroup.Item className={`list-item-solid-${idx.class}`} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={6}>

                    <ShowCode title="Custom content" code={listgroup10}>
                        <ListGroup>
                            {CustomButtons.map((idx) => (
                                <ListGroup.Item action className={`list-group-item list-group-item-action ${idx.class1}`} key={Math.random()}
                                    aria-current="true">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className={`mb-1 fw-semibold ${idx.class3}`}>{idx.heading}</h6>
                                        <small className={idx.class2}>{idx.text1}</small>
                                    </div>
                                    <p className="mb-1">{idx.text2}</p>
                                    <small>{idx.text3}.</small>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
            </Row>
            <Row>
                <Col xl={4}>

                    <ShowCode title="Sub headings" code={listgroup11}>
                        <ListGroup as='ol' className="list-group list-group-numbered">
                            {SubheadingsButtons.map((idx) => (
                                <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
                                    <div className="ms-2 me-auto text-muted">
                                        <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                                        {idx.text2}
                                    </div>
                                    <Badge bg={idx.class}>{idx.text3}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Numbered Lists" code={listgroup12}>
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item">Simply dummy text of the printing.</li>
                            <li className="list-group-item">There are many variations of passages.</li>
                            <li className="list-group-item">All the Lorem Ipsum generators.</li>
                            <li className="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
                            <li className="list-group-item">Randomised words which{` don't `}look.</li>
                            <li className="list-group-item">Always free from repetition, injected humour.</li>
                        </ol>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="List With Checkboxes" code={listgroup13}>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked /> Accurate information at any given point.
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." /> Hearing the information and responding.
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked /> Setting up and customizing your own sales.
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked /> New Admin Launched.
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." /> To maximize profits and improve productivity.
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
                                    aria-label="..." /> To have a complete 360° overview of sales information, having.
                            </li>
                        </ul>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="List With Radios" code={listgroup14}>
                        <div className="list-group">
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Accurate information at any given point.
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Hearing the information and responding.
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Setting up and customizing your own sales.
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                New Admin Launched.
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To maximize profits and improve productivity.
                            </label>
                            <label className="list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To have a complete 360° overview of sales information, having.
                            </label>
                        </div>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="List With badges" code={listgroup15}>
                        <ListGroup as='ul'>
                            {ListbadgesButtons.map((idx) => (
                                <ListGroup.Item key={Math.random()}
                                    className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                                    {idx.text1}
                                    <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ShowCode>

                </Col>
                <Col xl={4}>

                    <ShowCode title="Horizontal" code={listgroup16}>
                        {HorizontalButtons.map((idx) => (
                            <ListGroup as="ul" className={`list-group-horizontal  mb-2 ${idx.class}`} key={Math.random()}>
                                <ListGroup.Item as="li">An item</ListGroup.Item>
                                <ListGroup.Item as="li">A second item</ListGroup.Item>
                                <ListGroup.Item as="li">A third item</ListGroup.Item>
                            </ListGroup>
                        ))}
                    </ShowCode>

                </Col>
            </Row>
        </>
    )
}

export default Listgroup
