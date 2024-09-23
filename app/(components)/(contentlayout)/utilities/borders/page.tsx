"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { borders1, borders2, borders3, borders4, borders5, borders6,borders7,borders8 } from '../../../../../shared/data/prismdata/utilities/utilities';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Borders = () => {

    return (
        <>
         <Seo title={"Borders"} />

<Pageheader title="Borders" heading="Utilities" active="Borders" />
            <Row>
                <Col xl={6}>
               
                        <ShowCode title="Borders" code={borders1}>
                            <span className="border border-container"></span>
                            <span className="border-top border-container"></span>
                            <span className="border-end border-container"></span>
                            <span className="border-bottom border-container"></span>
                            <span className="border-start border-container"></span>
                            </ShowCode>
                         
                     
                </Col>
                <Col xl={6}>
         
                        <ShowCode title="Remove borders" code={borders2}>
                            <span className="border-0 border-container"></span>
                            <span className="border border-top-0 border-container"></span>
                            <span className="border border-end-0 border-container"></span>
                            <span className="border border-bottom-0 border-container"></span>
                            <span className="border border-start-0 border-container"></span>
                         </ShowCode>
                       
                </Col>
            </Row>
            <Row>
                <Col xl={5}>
               
                        <ShowCode title="Border Widths" code={borders3}>
                            <span className="border border-container border-1"></span>
                            <span className="border border-container border-2"></span>
                            <span className="border border-container border-3"></span>
                            <span className="border border-container border-4"></span>
                            <span className="border border-container border-5"></span>
                           </ShowCode>
                    
                </Col>
                <Col xl={7}>
                 
                        <ShowCode title="Border colors" code={borders4}>
                            <span className="border border-container border-primary"></span>
                            <span className="border border-container border-secondary"></span>
                            <span className="border border-container border-success"></span>
                            <span className="border border-container border-danger"></span>
                            <span className="border border-container border-warning"></span>
                            <span className="border border-container border-info"></span>
                            <span className="border border-container border-light"></span>
                            <span className="border border-container border-dark"></span>
                            <span className="border border-container border-white"></span>
                           </ShowCode>
                        
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                 
                        <ShowCode title="Border color Styling" code={borders5}>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</label>
                                <input type="email" className="form-control border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                                Customizing borders with backgrounds colors
                            </div>
                           </ShowCode>
                   
                </Col>
                <Col xl={6}>
          
                        <ShowCode title="Border with opacity" code={borders6}>
                            <div className="border border-success p-2 mb-2">This is default success border</div>
                            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                                success
                                border
                            </div>
                         </ShowCode>
                    
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
              
                        <ShowCode title="Border Radius" code={borders7}>
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-top" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-end" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-bottom" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-start" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-circle" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img  rounded-pill" alt="..." />
                           </ShowCode>
                        
                </Col>
                <Col xl={6}>
               
                        <ShowCode title="Sizes" code={borders8}>
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                            <img src="../../assets/images/media/media-58.jpg" className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                            </ShowCode>
                       
                </Col>
            </Row>
        </>
    )
}

export default Borders
