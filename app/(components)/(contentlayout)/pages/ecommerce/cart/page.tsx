"use client"
import Pageheader from '../../../../../../shared/layout-components/header/pageheader'
import Seo from '../../../../../../shared/layout-components/seo/seo'
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ItemData1 } from '../../../../../../shared/data/ecommerce/ecommercedata';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { AddToCart } from '../../../../../../shared/redux/action';
import { Card, Col, Form, Modal, Nav, Row, Tab, TabContainer, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

const Cart = ({ local_varaiable }: any) => {

    const [cart, setCart] = useState(ItemData1);

    const [Price, setPrice] = useState(0);

    useEffect(() => {
        if (local_varaiable.ecommercedata == undefined) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newpr) + Price);
            });
        }
        else if (local_varaiable.ecommercedata.length == 0) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newpr) + Price);
            });
        }
        else {
            setCart(local_varaiable.ecommercedata);
            local_varaiable.ecommercedata.filter((ele: { newprice: any; }) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }

    }, [local_varaiable.ecommercedata]);

    const handleClick = (id: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: string) => {
        const updatedData = cart.filter((idx) => idx.id !== id);
        setCart(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };



    const incrementQuantity = (id: string) => {

        const updatedCart = cart.map(item => {
            if (item.id === id) {

                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const decrementQuantity = (id: string) => {


        const updatedCart = cart.map(item => {
            if (item.id === id && innerWidth && item.quantity > 0) {

                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });


        setCart(updatedCart);
    };
    return (
        <Fragment>
            <Seo title={"Cart"} />
            <Pageheader title="Cart" heading="Ecommerce" active="Cart" />
            <Row>
                <Col xxl={9}>
                    <Card className=" custom-card" id="cart-container-delete">
                        <Card.Header>
                            <Card.Title>
                                Cart Items
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-bordered text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-start">
                                                Product Name
                                            </th>
                                            <th scope="row" className="text-start">
                                                Price
                                            </th>
                                            <th scope="row" className="text-start">
                                                Quantity
                                            </th>
                                            <th scope="row" className="text-start">
                                                Total
                                            </th>
                                            <th scope="row" className="text-start">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {cart.map((idx) => (
                                        <tbody key={Math.random()}>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <img src={idx.preview} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="mb-1 fs-14 fw-semibold">
                                                                <Link href="#!" scroll={false}>{idx.title}</Link>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1">Size:</span><span className="fw-semibold text-muted">Large</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1">Color:</span><span className="fw-semibold text-muted">Grey<span className="badge bg-success-transparent text-success ms-4">In Offer</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold text-[0.875rem]">
                                                        {idx.offerprice}
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group rounded flex-nowrap">
                                                        <button onClick={() => decrementQuantity(idx.id)} aria-label="button" type="button" className="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus border-end-0" ><i className="ri-subtract-line"></i></button>
                                                        <Form.Control size="sm" type="text" className=" text-center w-100" aria-label="quantity" id="product-quantity" defaultValue={idx.quantity} />
                                                        <button onClick={() => incrementQuantity(idx.id)} aria-label="button" type="button" className="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-start-0" ><i className="ri-add-line"></i></button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-[0.875rem] font-semibold">
                                                        {idx.oldpr}
                                                    </div>
                                                </td>
                                                <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add To Wishlist</Tooltip>}>
                                                        <Link href="/pages/ecommerce/wishlist" className="btn btn-icon btn-success me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Wishlist"><i className="ri-heart-line"></i>
                                                            <i className="ri-heart-line"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Remove From cart</Tooltip>}>
                                                        <Button variant='' className="btn btn-icon btn-danger btn-delete"
                                                            onClick={() => { handleDelete(idx.id) }} data-bs-toggle="tooltip"
                                                            data-bs-placement="top" data-bs-title="Remove From cart">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </OverlayTrigger>

                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card d-none" id="cart-empty-cart">
                        <Card.Header>
                            <Card.Title>
                                Empty Cart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="cart-empty text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                <h5 className="mb-3">Add some items to make me happy :)</h5>
                                <Link href="#!" scroll={false} className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>



                <Col xxl={3}>
                    <Card className=" custom-card">
                        <div className="p-3 border-bottom d-block">
                            <div className="alert alert-primary text-center" role="alert">
                                <span className="text-default">Sale Ends in</span> <span className="fw-semibold fs-14 text-primary ms-1">18 Hours : 32 Minutes</span>
                            </div>
                        </div>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-2 fw-semibold">Delivery:</p>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio1">Free Delivery</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio2">Express Delivery</label>
                                </div>
                                <p className="mb-0 mt-2 fs-12 text-muted">Delivered by 24,Nov 2022</p>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <Button variant='primary' className=" input-group-text" id="coupons">Apply</Button>
                                </div>
                                <Link href="#!" scroll={false} className="fs-12 text-success">10% off on first purchase</Link>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Sub Total</div>
                                    <div className="fw-semibold fs-14">$1,299</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Discount</div>
                                    <div className="fw-semibold fs-14 text-success">10% - $129</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Delivery Charges</div>
                                    <div className="fw-semibold fs-14 text-danger">- $49</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Service Tax (18%)</div>
                                    <div className="fw-semibold fs-14">- $169</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted op-7">Total :</div>
                                    <div className="fw-semibold fs-14 text-primary"> $1,387</div>
                                </div>
                            </div>
                            <div className="p-3 d-grid">
                                <Link href="/pages/ecommerce/checkout" className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
                                <Link href="/pages/ecommerce/products" className="btn btn-light btn-wave">Continue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}



const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Cart);
