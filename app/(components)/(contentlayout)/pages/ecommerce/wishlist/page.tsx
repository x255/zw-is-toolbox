
"use client";
import React, { Fragment, useState } from 'react'
import Cart from '../cart/page'
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap'
import Link from 'next/link'
import { Data1 } from '../../../../../../shared/data/pages/wishlistdata';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import Swal from 'sweetalert2';

const Wishlist = () => {
    function Confirmalert(id: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Remove'
        }).then((result) => {
            if (result.isConfirmed) {
                handleRemove(id);
            }
        });
    }
    const [Data, setData] = useState(Data1);
    const [originalData, setOriginalData] = useState(Data1); // Store original data

    function handleRemove(id: number) {
        const newList = Data.filter((item) => item.id !== id);
        setData(newList);
        setOriginalData(originalData.filter((item) => item.id !== id)); // Update original data'
        Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
        });
    }
    return (
        <Fragment>
            <Seo title={"Wishlist"} />

            <Pageheader title="Wishlist" heading="Ecommerce" active="Wishlist" />

            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Body className=" d-sm-flex align-items-center justify-content-between">
                            <div className="fs-15 mb-sm-0 mb-2">Total <Badge bg=" bg-success">12</Badge> products are wishlisted</div>
                            <div className="d-flex" role="search">
                                <Form.Control size="sm" className="  me-2" type="search" placeholder="Search" aria-label="Search" />
                                <div className="btn-sm btn-light">Search</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {Data.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                        <Card className=" custom-card product-card">
                            <Card.Body>
                                <Link href="#!" scroll={false} className="product-image">
                                    <img src={idx.src} className="card-img mb-3" alt="..." />
                                </Link>
                                <div className="product-icons">
                                    <Link href="#!" scroll={false} onClick={() => Confirmalert(idx.id)} className="wishlist btn-delete"><i className="ri-close-line"></i></Link>
                                </div>
                                <p className="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">{idx.data1}<span className="float-end text-warning fs-12">{idx.data2}<i className="ri-star-s-fill align-middle ms-1"></i></span></p>
                                <p className="product-description fs-11 text-muted mb-2">{idx.data3}</p>
                                <p className="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>{idx.data4}<span className="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">{idx.data5}</span></span><span className={`badge bg-${idx.color} float-end fs-10`}>{idx.data6}</span></p>
                                <p className="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                    <i className="ti ti-discount-2 fs-16 me-1"></i>{idx.data7}</p>
                            </Card.Body>
                            <Card.Footer className=" text-center">
                                <Link href="/pages/ecommerce/cart" className="btn btn-primary-light m-1"><i className="ri-shopping-cart-2-line me-2 lh-1 align-middle d-inline-block"></i>Move To Cart</Link>
                                <Link href="/pages/ecommerce/product-details" className="btn btn-success-light m-1"><i className="ri-eye-line me-2 align-middle d-inline-block"></i>View Product</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ul className="pagination justify-content-end">
                <li className="page-item disabled"> <a className="page-link">Previous</a> </li>
                <li className="page-item"><a className="page-link" href="#!">1</a></li>
                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                <li className="page-item"> <a className="page-link" href="#!">Next</a> </li>
            </ul>
        </Fragment>
    )
}

export default Wishlist
