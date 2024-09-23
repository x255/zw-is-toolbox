"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { Colorheaderalerts, Colredalerts, Defaultalerts, Dismissiblealerts } from '../../../../../shared/data/ui/popover'
import Link from 'next/link';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import {popovers1,popovers2,popovers3,popovers4,popovers5,popovers6,popovers7} from '../../../../../shared/data/prismdata/uielements';
    import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Popovers = () => {
   
    return (
        <>
          <Seo title={"Popovers"} />

<Pageheader title="Popovers" heading="Ui Elements" active="Popovers" />
            <Row>
                <Col xl={5}>
      
                        <ShowCode title="Default Popovers"  code={popovers1} >
                            <div className="btn-list">
                                {Defaultalerts.map((idx:any) => (
                                    <OverlayTrigger  trigger="click" placement={idx.class} key={Math.random()}
                                        overlay={<Popover>
                                            <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
                                            <Popover.Body>
                                                And {`here's`} some amazing content. {`It's`} very engaging. Right?
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button variant='' href="#!"  className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                            </ShowCode>
                          
                    
                </Col>
                <Col xl={7}>
                  
                   
                        <ShowCode title="Colored Headers" code={popovers2} >
                            <div className="btn-list">
                                {Colorheaderalerts.map((idx:any) => (
                                    <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                                        overlay={<Popover className={`header-${idx.color1}`}>
                                            <Popover.Header as="h3" data-bs-custom-classname={`header-${idx.color1}`}> Color Header</Popover.Header>
                                            <Popover.Body>
                                                Popover with primary header.
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button variant={idx.color} href="#!"  className="btn btn-wave">Header {idx.text}</Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                            </ShowCode>
                          
                       
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
              
                        <ShowCode title="Colored Popovers" code={popovers3} >
                            <div className="btn-list">
                                {Colredalerts.map((idx:any) => (
                                    <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}`}>
                                        <Popover.Header as="h3">Color Background</Popover.Header>
                                        <Popover.Body>Popover with {idx.text} background.</Popover.Body>
                                    </Popover>}>
                                        <Button variant={idx.color1}>{idx.text} </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                       </ShowCode>
                     
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                  
                        <ShowCode title="Light Popovers" code={popovers4} >
                            <div className="btn-list">
                                {Colredalerts.map((idx:any) => (
                                    <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}-light`} id="tooltip-disabled">
                                        <Popover.Header as="h3">Light Background</Popover.Header>
                                        <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
                                    </Popover>}>
                                        <Button variant='' className={`btn btn-${idx.color1}-light btn-wave`}>{idx.text} </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                          </ShowCode>
                    
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                
                        <ShowCode title="Dismissible Popovers" code={popovers5} customCardBodyClass="d-flex flex-wrap justify-content-between" >
                            {Dismissiblealerts.map((idx:any) => (
                                <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
                                    overlay={<Popover>
                                        <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
                                        <Popover.Body>
                                            And{` here's`} some amazing content.{` It's`} very engaging. Right?
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant={idx.color} className="btn my-1 btn-wave">Popover Dismiss</Button>
                                </OverlayTrigger>
                            ))}
                           </ShowCode>
                   
                </Col>
                <Col xl={3}>
             
                        <ShowCode title="Disabled Popover" code={popovers6} >
                            <OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
                                <Popover.Body>Disabled Popover!</Popover.Body>
                            </Popover>}>
                                <span className="d-inline-block">
                                    <Button disabled style={{ pointerEvents: 'none' }}>
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                          </ShowCode>
                   
                </Col>
                <Col xl={3}>
                  
                    
                        <ShowCode title="Icon Popovers" code={popovers7} >
                            <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link className="me-4" href="#!" scroll={false}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link className="me-4" href="#!" scroll={false} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </Link>
                            </OverlayTrigger>
                         </ShowCode>
                     
                </Col>
            </Row>
        </>
    )
}

export default Popovers
