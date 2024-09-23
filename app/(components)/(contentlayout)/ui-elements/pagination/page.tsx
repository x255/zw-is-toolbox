"use client";
import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import Link from 'next/link';
import {pagination1,pagination2,pagination3,pagination4,pagination5,pagination6,pagination7,pagination8,pagination9} from '../../../../../shared/data/prismdata/uielements';
    import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Pagination = () => {

    return (
        <>
         <Seo title={"Pagination"} />

<Pageheader title="Pagination" heading="Ui Elements" active="Pagination" />
            <Row>
                <Col xxl={3} xl={6}>
    
                        <ShowCode title="Basic Pagination" code={pagination9} >
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0">
                                    <li className="page-item disabled"><Link className="page-link" href="#!" scroll={false}>Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>Next</Link></li>
                                </ul>
                            </nav>
                            </ShowCode>
                          
                       
                </Col>
                <Col xxl={3} xl={6}>
              
                        <ShowCode title="Pagination With Icons" code={pagination1} >
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false} aria-label="Previous">
                                            <span aria-hidden="true"><i className="bx bx-chevron-left"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false} aria-label="Next">
                                            <span aria-hidden="true"><i className="bx bx-chevron-right"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                          </ShowCode>
                       
                </Col>
                <Col xxl={6} xl={12}>
                    
                        <ShowCode title="Pagination Sizing" code={pagination2} customCardBodyClass="d-flex flex-wrap justify-content-between gap-2" >
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="pagination mb-0">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="pagination pagination-lg mb-0">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                </ul>
                            </nav>
                          </ShowCode>
                      
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
           
                        <ShowCode title="Center & Right Aligned Pagination" code={pagination3} >
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className="page-item disabled">
                                        <Link href="#!" scroll={false} className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                           </ShowCode>
                      
                </Col>
                <Col xl={6}>
            
                        <ShowCode title=" Active and disabled states" customCardBodyClass="d-flex flex-wrap" code={pagination4} >
                            <nav aria-label="..." className="me-3">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <Link href="#!" scroll={false}  className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link" href="#!" scroll={false}>2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <span className="page-link">Previous</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">2</span>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>Next</Link>
                                    </li>
                                </ul>
                            </nav>
                         </ShowCode>
                     
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
            
                        <ShowCode title="Pagination Style-1" code={pagination5} >
                            <nav aria-label="Page navigation" className="pagination-style-1">
                                <ul className="pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="ri-arrow-left-s-line align-middle"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>21</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="ri-arrow-right-s-line align-middle"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                          </ShowCode>
                       
                </Col>
                <Col xl={6}>
               
                        <ShowCode title="Pagination Style-2" code={pagination6} >
                            <nav aria-label="Page navigation" className="pagination-style-2">
                                <ul className="pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>17</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link text-primary" href="#!" scroll={false}>
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                          </ShowCode>
                       
                </Col>
                <Col xl={6}>
                 
                        <ShowCode title=" Pagination Style-3" code={pagination7} >
                            <nav aria-label="Page navigation" className="pagination-style-3">
                                <ul className="pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>16</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link text-primary" href="#!" scroll={false}>
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                           </ShowCode>
                     
                </Col>
                <Col xl={6}>
           
                        <ShowCode title=" Pagination Style-4" code={pagination8} >
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <ul className="pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item active"><Link className="page-link" href="#!" scroll={false}>1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>2</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#!" scroll={false}>
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>16</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!" scroll={false}>17</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link text-primary" href="#!" scroll={false}>
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            </ShowCode>
                           
                   
                </Col>
            </Row>
        </>
    )
}

export default Pagination
