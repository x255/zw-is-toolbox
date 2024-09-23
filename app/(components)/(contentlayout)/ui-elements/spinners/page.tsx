"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import { Colorspinner } from '../../../../../shared/data/ui/spinnersdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { spinner1, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9, spinner10 } from '../../../../../shared/data/prismdata/uielements';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Spinners = () => {

    return (
        <>
            <Seo title={"Spinners"} />
            <Pageheader title="Spinners" heading="Ui Elements" active="Spinners" />
            <Row>
                <Col xl={6}>
                    <ShowCode title="Border spinner" code={spinner1} >
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Colors" code={spinner2} >
                        {Colorspinner.map((idx) => (
                            <div className={`spinner-border me-2 text-${idx.color}`} role="status" key={Math.random()}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Growing spinner" code={spinner3} >
                        <div className="spinner-grow" role="status"> <span className="visually-hidden">Loading...</span> </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Growing spinner" code={spinner4} >
                        <div className="spinner-grow text-primary  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-info  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-light  me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Alignment Flex" code={spinner5} >
                        <div className="d-flex justify-content-center mb-4">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alignment Float" code={spinner6} >
                        <div className="clearfix mb-4">
                            <div className="spinner-border float-end" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className="spinner-border float-start" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Alignment Text center" code={spinner7} >
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </ShowCode>
                    <ShowCode title="Spinner Sizes" code={spinner8} customCardBodyClass="d-flex align-items-center" >
                        <div className="spinner-border spinner-border-sm me-4" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm me-4" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-border me-4" style={{ height: "3rem", width: "3rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow" style={{ height: "3rem", width: "3rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alignment Margin" code={spinner9} >

                        <div className="spinner-border m-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode title="Buttons" code={spinner10} >
                        <div className="btn-list">
                            <button className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-border spinner-border-sm align-middle" role="status"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden"> Loading...</span>
                            </button>
                            <button className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-border spinner-border-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden"> Loading...</span>
                            </button>
                            <button className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-secondary-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-success-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-info-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-warning-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-danger-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-light" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                            <button className="btn btn-dark text-fixed-white" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                    aria-hidden="true"></span> Loading...
                            </button>
                        </div>
                    </ShowCode>
                </Col>
            </Row>

        </>
    )
}

export default Spinners
