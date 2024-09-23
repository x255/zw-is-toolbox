"use client";
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import { Avataricons, Avatarindicators, Avatarinitials, Avataroffline, Avatarsizes, Avatarstacked } from '../../../../../shared/data/utilities/avatarsdata'
import Link from 'next/link';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { avatars1, avatars2, avatars3, avatars4, avatars5, avatars6,avatars7,avatars8,avatars9 } from '../../../../../shared/data/prismdata/utilities/utilities';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Avatars = () => {
    return (
        <>
           <Seo title={"Avatars"} />

          <Pageheader title="Avatars" heading="Utilities" active="Avatars" />
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
               
                        <ShowCode title="Avatars" code={avatars1} customCardBodyClass="py-4" >
                            <span className="avatar me-2 avatar-radius-0">
                                <img src="../../assets/images/faces/1.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2">
                                <img src="../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar me-2 avatar-rounded">
                                <img src="../../assets/images/faces/3.jpg" alt="img" />
                            </span>
                         </ShowCode>
                       
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="Avatar Sizes" code={avatars2} customCardBodyClass="py-4" >
                            {Avatarsizes.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                         </ShowCode>
                    
                </Col>
                <Col xl={4} lg={12} md={12} sm={12}>
          
                        <ShowCode title="Avatar With Icons" code={avatars3} >
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill avatar-badge"><i className={idx.icon}></i></Badge>
                                </span>
                            ))}
                          </ShowCode>
                    
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
                
                        <ShowCode title="Avatar With Online Status Indicators" code={avatars4} >
                            {Avatarindicators.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 online avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                          </ShowCode>
                       
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                        <ShowCode title="Avatar With Offline Status Indicators" code={avatars5} >
                            {Avataroffline.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 offline avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                           </ShowCode>
                        
                </Col>
                <Col xl={4} lg={12} md={12} sm={12}>
                        <ShowCode title="Avatars With Number Badges" code={avatars6} >
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill  avatar-badge">{idx.text}</Badge>
                                </span>
                            ))}
                         </ShowCode>
                   
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
               
                        <ShowCode title="Stacked Avatars" code={avatars7} >
                            <div className="avatar-list-stacked">
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary text-fixed-white" href="#!"> +8 </Link>
                            </div>
                          </ShowCode>
                      
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                  
                        <ShowCode title="Rounded Stacked Avatars" code={avatars8} >
                            <div className="avatar-list-stacked">
                            
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar avatar-rounded" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                      
                                ))}
                                 <Link className="avatar bg-primary text-fixed-white" href="#!" style={{borderRadius:"50px"}}> +8 </Link>
                            </div>
                            </ShowCode>
                     
                </Col>
                <Col xl={4} lg={12} md={12} sm={12}>
                 
                        <ShowCode title="Avatar With Initials" code={avatars9} >
                            {Avatarinitials.map((idx) => (
                                <span className={`avatar avatar-${idx.class} m-2 bg-${idx.color}`} key={Math.random()}>{idx.text}
                                </span>
                            ))}
                           </ShowCode>
                   
                </Col>
            </Row>
        </>
    )
}

export default Avatars
