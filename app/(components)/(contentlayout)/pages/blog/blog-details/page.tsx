"use client";
import Link from 'next/link'
import React from 'react'
import { Badge, Card, Col, Form, ListGroup, Row } from 'react-bootstrap'
import { Populartagsdata, Exploretopicsdata } from '../../../../../../shared/data/pages/blogs/blogdetailsdata'
import Seo from '../../../../../../shared/layout-components/seo/seo';

const Blogdetails = () => {
    return (
        <>
            <Seo title={"Blog Details"} />

            <div className='container-lg my-5'>
                <Row>
                    <Col xl={8}>
                        <Row>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Body>
                                        <p className="fs-18 fw-semibold mb-1">Touring excites in winter when we travel with friends !</p>
                                        <div className="d-sm-flex align-items-cneter">
                                            <div className="d-sm-flex align-items-center flex-fill">
                                                <span className="avatar avatar-sm avatar-rounded me-3">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold">Json Taylor - <span className="fs-11 text-muted fw-normal">Tue,25 Dec 2022 - 11:45</span></p>
                                                    <p className="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div className="mt-sm-0 mt-2">
                                                <Badge bg=" bg-primary me-1">Nature</Badge>
                                                <Badge bg=" bg-secondary">Travel</Badge>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <a href="#!">
                                        <img src="../../../assets/images/media/media-23.jpg" className="card-img rounded-0 blog-details-img" alt="..." />
                                    </a>
                                    <Card.Body className=" border-bottom border-block-end-dashed">
                                        <div className="d-sm-flex d-block align-items-center justify-content-between">
                                            <div className="d-flex align-items-cener">
                                                <Badge bg=" bg-success-transparent me-3">
                                                    <i className="ri-thumb-up-line me-1 align-middle d-inline-block"></i> 32 Likes
                                                </Badge>
                                                <Badge bg=" bg-info-transparent me-3">
                                                    <i className="ri-chat-4-line me-1 align-middle d-inline-block"></i> 10 Comments
                                                </Badge>
                                            </div>
                                            <div className="btn-list mt-sm-0 mt-2">
                                                <button className="btn btn-icon btn-sm btn-primary-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like"><i className="ri-thumb-up-line"></i></button>
                                                <button className="btn btn-icon btn-sm btn-primary-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share"><i className="ri-share-line"></i></button>
                                                <button className="btn btn-sm btn-secondary-light"><i className="ri-chat-4-line me-1 align-middle d-inline-block"></i>Comment</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Body>
                                        <h6 className="fw-semibold">
                                            Seeing with “fresh eyes” – A deeper nature experience
                                        </h6>
                                        <p className="mb-4 text-muted">
                                            Around the time I first learned how to meditate, something amazing happened to me. It happened one day, quite spontaneously.  I was working as a lawyer at the time and I used to walk down a little lane way to the train station on my commute to work. It’s not an especially beautiful lane way
                                        </p>
                                        <p className="mb-5 text-muted">
                                            The world is animated by the wind. This invisible, mysterious force can bring a landscape alive. Its absence can cast a calm stillness over the earth. On barren mountain tops its power is barely perceptible; in forests and seas its presence becomes manifest. Winds are wild, and sometimes destructive. When we look deeply into the surely gravity’s law, strong as an ocean current, takes hold of even the strongest thing and pulls it toward the heart of the world. Each thing- each stone, blossom, child – is held in place. Only we, in our arrogance, push out beyond what we belong to for some empty freedom. If we surrendered
                                        </p>
                                        <Card className=" custom-card bg-light mb-5 shadow-none">
                                            <a href="#!" className="card-anchor"></a>
                                            <Card.Body>
                                                <blockquote className="blockquote mb-0 text-center">
                                                    <p className="fs-16 fw-semibold mb-2 text-dark">In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and {`they're`} still beautiful..</p>
                                                    <footer className="blockquote-footer mt-2 fs-14 op-7">Someone famous as <cite title="Source Title">-Alice Walker</cite></footer>
                                                </blockquote>
                                            </Card.Body>
                                        </Card>
                                        <p className="mb-5 text-muted">
                                            From enchanting{` nature's`} beauty quotes that evoke visions of lush meadows full of brilliantly-colored flowers or dense forests with sky-high trees to famous quotes about{` nature's`} ever-present—and absolutely fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your couch and get outside. For famous <b>quotes about nature</b>, we have them here!
                                        </p>
                                        <p className="text-center">
                                            <button className="btn btn-primary">Load More</button>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Leave a Comment
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className=" gy-3">
                                            <Col xl={6}>
                                                <label htmlFor="blog-first-name" className="form-label">First Name</label>
                                                <Form.Control type="text" id="blog-first-name" placeholder="Enter Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <label htmlFor="blog-last-name" className="form-label">Last Name</label>
                                                <Form.Control type="text" id="blog-last-name" placeholder="Enter Name" />
                                            </Col>
                                            <Col xl={12}>
                                                <label htmlFor="blog-email" className="form-label">Email ID</label>
                                                <Form.Control type="text" id="blog-email" placeholder="Enter Email" />
                                            </Col>
                                            <Col xl={12}>
                                                <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                                                <textarea className="form-control" id="blog-comment" rows={5}></textarea>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="text-end">
                                            <button className="btn btn-primary-light">Post Comment</button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4}>
                        <Row>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Body className=" text-center p-4">
                                        <span className="avatar avatar-rounded avatar-xxl mb-3">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <p className="mb-1 fs-15 fw-semibold text-dark lh-1">Emiley Jackson</p>
                                        <p className="fs-12 text-muted mb-1"><span>emaileyjackson2134</span>@gmail.com</p>
                                        <p className="text-muted mb-0 p-3 pb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                    </Card.Body>
                                    <Card.Footer className=" border-block-start-dashed text-center">
                                        <div className="btn-list">
                                            <div className="btn-list">
                                                <button className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                    <i className="ri-facebook-line"></i>
                                                </button>
                                                <button className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                    <i className="ri-twitter-x-line"></i>
                                                </button>
                                                <button className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                    <i className="ri-instagram-line"></i>
                                                </button>
                                                <button className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                    <i className="ri-github-line"></i>
                                                </button>
                                                <button className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-youtube-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Recent Posts
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/media-39.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <a href="#!" className="fs-14 fw-semibold mb-0">Animals</a>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            There are many variations of passages of Lorem Ipsum available
                                                        </p>
                                                        <span className="text-muted fs-11">24,Nov 2022 - 18:27</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/media-56.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <a href="#!" className="fs-14 fw-semibold mb-0">Travel</a>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Latin words, combined with a handful of model sentence
                                                        </p>
                                                        <span className="text-muted fs-11">28,Nov 2022 - 10:45</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/media-54.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <a href="#!" className="fs-14 fw-semibold mb-0">Interior</a>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                                        </p>
                                                        <span className="text-muted fs-11">30,Nov 2022 - 08:32</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/media-52.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <a href="#!" className="fs-14 fw-semibold mb-0">Nature</a>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            It was popularised in the 1960s with the release of Letraset sheets containing
                                                        </p>
                                                        <span className="text-muted fs-11">3,Dec 2022 - 12:56</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item text-center">
                                                <button className="btn btn-primary-light">Load more</button>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Newsletter
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="text-center">
                                            <h6 className="fw-semibold mb-3"><span className="text-primary fs-18">1658</span> Subscribers</h6>
                                            <div className="input-group mb-3">
                                                <Form.Control type="text" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                                <button className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</button>
                                            </div>
                                            <label className="form-check-label">
                                                By Subscribing you accept to <a href="#!" className="text-success"><u>privacy policy</u></a>
                                            </label>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Explore Topics
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            {Exploretopicsdata.map((idx) => (
                                                <ListGroup.Item key={Math.random()}>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge bg={idx.color} className="avatar avatar-xs  avatar-rounded">
                                                                        {idx.title}
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold ms-2">{idx.text}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Badge bg="light" className="badge text-default rounded-pill">{idx.badge}</Badge>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className=" custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Popular Tags
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="blog-popular-tags">
                                            {Populartagsdata.map((idx) => (
                                                <Link href="#!" scroll={false} key={Math.random()}>
                                                    <Badge bg="light" className="badge text-muted">#{idx.text}</Badge>
                                                </Link>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
Blogdetails.layout = "PageLayout"

export default Blogdetails
