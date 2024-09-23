"use client";
import Link from 'next/link'
import React from 'react'
import { Badge, Card, Col, Dropdown, Nav, Row, Tab } from 'react-bootstrap'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const Navs$tabs = () => {
    return (
        <>
            <Seo title={"Navs & Tabs"} />

            <Pageheader title="Navs & Tabs" heading="Ui Elements" active="Navs & Tabs" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Static Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav className=" nav-tabs border-0">
                                <Nav.Item as='li'>
                                    <Nav.Link className="nav-link active" aria-current="page" href="#!">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li'>
                                    <Nav.Link className="nav-link"  >Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li'>
                                    <Nav.Link className="nav-link"  >Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li'>
                                    <Nav.Link className="nav-link disabled" >Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Static Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav variant="pills" as="ul" defaultActiveKey="/home">
                                <Nav.Item as="li">
                                    <Nav.Link active href="#!">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link disabled>Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Default Nav Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className=" nav-tabs mb-3 border-0" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey="first" href="#home1" aria-selected="false"
                                        >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey="second" href="#about1"
                                            aria-selected="false">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" href="#service1" eventKey="third"
                                            aria-selected="false">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" href="#license1" eventKey="fourth"
                                            aria-selected="false">License</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="home1" role="tabpanel" eventKey="first">
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the {`industry's `}standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="about1" role="tabpanel" eventKey="second">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classNameical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="service1" role="tabpanel" eventKey="third">
                                        There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which {`don't`} look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="license1" role="tabpanel" eventKey="fourth">
                                        It is a long established fact that a reader will be distracted by the
                                        <b><i>Readable content</i></b> of a page when looking at its layout. The point
                                        of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using {`'Content`} here, content {`here'`}, making it look like
                                        readable English.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Justified Nav Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
                                <Nav className="nav nav-tabs mb-3 nav-justified nav-style-1 d-sm-flex d-block" role="tablist" defaultActiveKey="third">
                                    <Nav.Item>
                                        <Nav.Link href="#home1-justified" eventKey="first" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#about1-justified" eventKey="second">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#service1-justified" >Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#license1-justified" eventKey="fourth">License</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="home1-justified" eventKey="first"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="about1-justified" eventKey="second"><b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the{` industry's `}standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane show  text-muted" id="service1-justified" eventKey="third">There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which{` don't`} look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="license1-justified" eventKey="fourth"> It is a long established fact that a reader will be distracted by the
                                        <b><i>Readable content</i></b> of a page when looking at its layout. The point
                                        of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using Content here, content{` here'`}, making it look like
                                        readable English.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Pill Tabs With Links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={2}>
                                <Nav className=" nav-style-1 nav-pills mb-3" role="tablist">
                                    <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                        href="#nav-products">Products</Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" href="#nav-cart" eventKey={2}
                                        aria-selected="true">Cart <Badge
                                            bg=" bg-secondary ms-1 rounded-pill">32</Badge></Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" href="#nav-orders" eventKey={3}
                                    >Orders <Badge
                                        bg=" bg-success ms-1 rounded-pill">4</Badge></Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" href="#nav-offers" eventKey={4}
                                    >Offers</Nav.Link>
                                </Nav>
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane className="text-muted" id="nav-products" role="tabpanel" eventKey={1}>
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {`you'll`} never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete {`beginner's`} guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-cart" role="tabpanel" eventKey={2}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-orders" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete {`beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-offers" role="tabpanel" eventKey={4}>
                                        Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Justified Pill Tabs With Links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={2}>
                                <Nav className=" nav-style-6 nav-pills mb-3 nav-justified d-sm-flex d-block" role="tablist">
                                    <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                        href="#nav-products-justified" >Products</Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" eventKey={2}
                                        href="#nav-cart-justified">Cart <Badge
                                            bg=" bg-info-transparent ms-1">Full</Badge></Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" href="#nav-orders-justified" eventKey={3}
                                    >Orders </Nav.Link>
                                    <Nav.Link data-bs-toggle="tab" role="tab" href="#nav-offers-justified" eventKey={4}
                                    >Offers <Badge
                                        bg=" bg-warning-transparent ms-1">7</Badge></Nav.Link>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="nav-products-justified" role="tabpanel" eventKey={1}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-cart-justified" eventKey={2}
                                        role="tabpanel">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {` you'll`} never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete {`beginner's`} guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-orders-justified" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete{` beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="nav-offers-justified" role="tabpanel" eventKey={4}>
                                        Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical alignment with lists
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Row>
                                    <Col xl={3}>
                                        <Nav className=" nav-tabs flex-column nav-style-4" role="tablist">
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={1}
                                                    aria-current="page" href="#home-vertical"
                                                    aria-selected="true">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={2}
                                                    aria-current="page" href="#about-vertical"
                                                    aria-selected="true">About</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={3}
                                                    aria-current="page" href="#services-vertical"
                                                    aria-selected="true">Services</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={4}
                                                    aria-current="page" href="#contacts-vertical"
                                                    aria-selected="true">Contacts</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col xl={9}>
                                        <Tab.Content className=" mt-2 mt-xl-0">
                                            <Tab.Pane className="text-muted" id="home-vertical" eventKey={1}
                                                role="tabpanel">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> {`aren't`} as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="about-vertical" eventKey={2}
                                                role="tabpanel">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was right about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why {`you'll`} never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete {`beginner's`} guide to mission trips.
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="services-vertical" eventKey={3}
                                                role="tabpanel">
                                                Unbelievable healthy snack success stories. 12 facts about safe food
                                                handling tips that will impress your friends. Restaurant weeks by
                                                the numbers. Will mexican food ever rule the world? The 10 best thai
                                                restaurant youtube videos. How restaurant weeks can make you sick.
                                                The complete{` beginner's`} guide to cooking healthy food. Unbelievable
                                                food stamp success stories.
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="contacts-vertical" eventKey={4}
                                                role="tabpanel">
                                                Why delicious magazines are killing you. Why our world would end if
                                                restaurants disappeared. Why restaurants are on crack about
                                                restaurants. How restaurants are making the world a better place. 8
                                                great articles about minute meals. Why our world would end if
                                                healthy snacks disappeared. Why the world would end without mexican
                                                food. The evolution of chef uniforms.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical alignment with links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={3}>
                                <Row>
                                    <Col xl={3}>
                                        <Nav className=" nav-tabs flex-column nav-style-5" role="tablist">
                                            <Nav.Link data-bs-toggle="tab" role="tab" eventKey={1}
                                                aria-current="page" href="#home-vertical-link" aria-selected="false"><i
                                                    className="ri-home-smile-line me-2 align-middle d-inline-block"></i>Home</Nav.Link>
                                            <Nav.Link data-bs-toggle="tab" role="tab" eventKey={2}
                                                aria-current="page" href="#about-vertical-link" aria-selected="false"><i
                                                    className="ri-archive-drawer-line me-2 align-middle d-inline-block"></i>About</Nav.Link>
                                            <Nav.Link data-bs-toggle="tab" role="tab" eventKey={3}
                                                aria-current="page" href="#services-vertical-link" aria-selected="true"><i
                                                    className="ri-bank-line me-2 align-middle d-inline-block"></i>Services</Nav.Link>
                                            <Nav.Link data-bs-toggle="tab" role="tab" eventKey={4}
                                                aria-current="page" href="#contacts-vertical-link" aria-selected="false"><i
                                                    className="ri-contacts-book-2-line me-2 align-middle d-inline-block"></i>Contacts</Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col xl={9}>
                                        <Tab.Content className="mt-2 mt-xl-0">
                                            <Tab.Pane className=" text-muted" id="home-vertical-link" eventKey={1}
                                                role="tabpanel">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> {`aren't`} as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </Tab.Pane>
                                            <Tab.Pane className=" text-muted" id="about-vertical-link" eventKey={2}
                                                role="tabpanel">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was right about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why{` you'll`} never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete {`beginner's`} guide to mission trips.
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="services-vertical-link" eventKey={3}
                                                role="tabpanel">
                                                Unbelievable healthy snack success stories. 12 facts about safe food
                                                handling tips that will impress your friends. Restaurant weeks by
                                                the numbers. <b><i>Will mexican food ever rule the world? The 10 best thai
                                                    restaurant youtube videos</i></b>. How restaurant weeks can make you sick.
                                                The complete{` beginner's`} guide to cooking healthy food. Unbelievable
                                                food stamp success stories.
                                            </Tab.Pane>
                                            <Tab.Pane className=" text-muted" id="contacts-vertical-link" eventKey={4}
                                                role="tabpanel">
                                                Why delicious magazines are killing you. Why our world would end if
                                                restaurants disappeared. Why restaurants are on crack about
                                                restaurants. How restaurants are making the world a better place. 8
                                                great articles about minute meals. Why our world would end if
                                                healthy snacks disappeared. Why the world would end without mexican
                                                food. The evolution of chef uniforms.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Center Aligned Nav
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-pills justify-content-center nav-style-2 mb-3" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                            href="#home-center" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={2}
                                            href="#about-center" aria-selected="false">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={3}
                                            href="#services-center" aria-selected="false">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={4}
                                            href="#contacts-center" aria-selected="false">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="home-center" role="tabpanel" eventKey={1}>
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {` you'll `}never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete{` beginner's`} guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="about-center" role="tabpanel" eventKey={2}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="services-center" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete{` beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="contacts-center" role="tabpanel" eventKey={4}>
                                        Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Right Aligned Nav
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-pills justify-content-end nav-style-3 mb-3" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                            href="#home-right" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={2}
                                            href="#about-right" aria-selected="true">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={3}
                                            href="#services-right" aria-selected="true">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={4}
                                            href="#contacts-right" aria-selected="true">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="home-right" role="tabpanel" eventKey={1}>
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {`you'll`} never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete {`beginner's`} guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="  text-muted" id="about-right" role="tabpanel" eventKey={2}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="services-right" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete {`beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="contacts-right" role="tabpanel" eventKey={4}>
                                        Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Header Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs justify-content-end nav-tabs-header mb-3" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                            href="#home-header" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={2}
                                            href="#about-header" aria-selected="true">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={3}
                                            href="#services-header" aria-selected="true">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="home-header" eventKey={1}
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> {`aren't`} as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </li>
                                            <li>
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why {`you'll`} never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete {`beginner's`} guide to mission trips.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="about-header" eventKey={2}
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why {`you'll`} never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete{` beginner's`} guide to mission trips.
                                            </li>
                                            <li>
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> {`aren't`} as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="services-header" eventKey={3}
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {`'Content`} here, content {`here'`}, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                                            </li>
                                            <li>
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why {`you'll`} never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete {`beginner's`} guide to mission trips.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Footer Tabs
                            </Card.Title>
                        </Card.Header>
                        <Tab.Container defaultActiveKey={1}>
                            <Card.Body>

                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="home-footer" role="tabpanel" eventKey={1}>
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {`you'll`} never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete {`beginner's `}guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="about-footer" role="tabpanel" eventKey={2}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="services-footer" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete {`beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>

                            <Card.Footer>
                                <Nav className=" nav-tabs justify-content-end nav-tabs-footer mb-0" role="tablist">
                                    <Nav.Item as='li' className="m-1">
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={1}
                                            href="#home-footer" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1">
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={2}
                                            href="#about-footer" aria-selected="true">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1">
                                        <Nav.Link data-bs-toggle="tab" role="tab" aria-current="page" eventKey={3}
                                            href="#services-footer" aria-selected="true">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Footer>
                        </Tab.Container>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs tab-style-1 d-sm-flex d-block" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey={1}
                                            href="#orders">Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey={2}
                                            href="#accepted">Accepted</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey={3}
                                            href="#declined">Declined</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane id="orders" className="tab-pane" role="tabpanel" eventKey={1}>
                                        <div className="text-muted"><b>Lorem Ipsum is simply dummy text of the
                                            printing</b> and typesetting industry. Lorem Ipsum has been the
                                            {`industry's`} standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled.</div>
                                    </Tab.Pane>
                                    <Tab.Pane id="accepted" className="tab-pane" role="tabpanel" eventKey={2}>
                                        <div className="text-muted">Many desktop publishing packages and web page
                                            editors now use Lorem Ipsum as their default model text, and a search
                                            for <b>{`'lorem ipsum'`}</b> will uncover many web sites still in their
                                            infancy. Various versions have evolved over the years.</div>
                                    </Tab.Pane>
                                    <Tab.Pane id="declined" className="tab-pane" role="tabpanel" eventKey={3}>
                                        <div className="text-muted">There are many variations of passages of Lorem
                                            Ipsum available, but the majority have suffered alteration in some form,
                                            <b>by injected humour</b>, or randomised words which {`don't `}look even
                                            slightly believable
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs tab-style-2 nav-justified mb-3 d-sm-flex d-block" id="myTab1" role="tablist">
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="order-tab" data-bs-toggle="tab" eventKey={1}
                                            data-bs-target="#order-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true"><i
                                                className="ri-gift-line me-1 align-middle"></i>Ordered</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="confirmed-tab" data-bs-toggle="tab" eventKey={2}
                                            data-bs-target="#confirm-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false"><i
                                                className="ri-check-double-line me-1 align-middle"></i>Confirmed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="shipped-tab" data-bs-toggle="tab" eventKey={3}
                                            data-bs-target="#shipped-tab-pane" type="button" role="tab"
                                            aria-controls="contact-tab-pane" aria-selected="false"><i
                                                className="ri-shopping-bag-3-line me-1 align-middle"></i>Shipped</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="delivered-tab" data-bs-toggle="tab" eventKey={4}
                                            data-bs-target="#delivered-tab-pane" type="button" role="tab" aria-selected="false"><i
                                                className="ri-truck-line me-1 align-middle"></i>Delivery</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane className="fade text-muted" id="order-tab-pane" role="tabpanel" eventKey={1}
                                        aria-labelledby="home-tab" tabIndex={-1}>
                                        <ul className="ps-3 mb-0">
                                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classNameical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className=" fade text-muted" id="confirm-tab-pane" eventKey={2}
                                        role="tabpanel" aria-labelledby="profile-tab" tabIndex={-1}>
                                        <ul className="ps-3 mb-0">
                                            <li>As opposed to using{` 'Content`} here, content {`here'`}, making it look like
                                                readable English. Many desktop publishing packages and web page editors
                                                now use Lorem Ipsum as their default model text, and a search.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="shipped-tab-pane" role="tabpanel" eventKey={3}
                                        aria-labelledby="contact-tab" tabIndex={-1}>
                                        <ul className="ps-3 mb-0">
                                            <li>but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset
                                                sheets containing Lorem Ipsum passages, and more recently.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="delivered-tab-pane" role="tabpanel" tabIndex={-1} eventKey={4}>
                                        <ul className="list-unstyled mb-0">
                                            <li>A Latin professor at Hampden-Sydney College in Virginia, looked up one
                                                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                                passage, and going through the cites of the word in classNameical
                                                literature.</li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab-Style-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs justify-content-center mb-5 tab-style-3" id="myTab2"
                                    role="tablist">
                                    <Nav.Item as='li' className="me-0" role="presentation">
                                        <Nav.Link className=" home py-1" id="home-tab" data-bs-toggle="tab" eventKey={1}
                                            data-bs-target="#home-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className=" me-0" role="presentation">
                                        <Nav.Link className="about py-1" id="profile-tab" data-bs-toggle="tab" eventKey={2}
                                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="me-0" role="presentation">
                                        <Nav.Link className=" services py-1" id="contact-tab" data-bs-toggle="tab" eventKey={3}
                                            data-bs-target="#contact-tab-pane" type="button" role="tab"
                                            aria-controls="contact-tab-pane" aria-selected="false">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent1">
                                    <Tab.Pane className="fade text-muted" id="home-tab-pane" eventKey={1}
                                        role="tabpanel" aria-labelledby="home-tab" tabIndex={-1}><b>Lorem Ipsum is
                                            simply dummy text of the printing</b> and typesetting industry. Lorem
                                        Ipsum has been the {`industry's`}.</Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="profile-tab-pane" eventKey={2}
                                        role="tabpanel" aria-labelledby="profile-tab" tabIndex={-1}>Many desktop
                                        publishing packages as their default model text, and a search for <b>{`'lorem ipsum'`}</b> will over the
                                        years.</Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="contact-tab-pane" eventKey={3}
                                        role="tabpanel" aria-labelledby="contact-tab" tabIndex={-1}>There, <b>by injected humour</b>, or randomised
                                        words which {`don't`} look even slightly believable.</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-4
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <nav>
                                    <Nav className="nav nav-tabs nav-justified tab-style-4 d-flex" id="nav-tab" role="tablist">
                                        <Nav.Link id="nav-home-tab" data-bs-toggle="tab" eventKey={1}
                                            data-bs-target="#nav-home1" type="button" role="tab" aria-selected="true">Home</Nav.Link>
                                        <Nav.Link id="nav-profile-tab" data-bs-toggle="tab" eventKey={2}
                                            data-bs-target="#nav-profile1" type="button" role="tab" aria-selected="false">Profile</Nav.Link>
                                        <Nav.Link id="nav-contact-tab" data-bs-toggle="tab" eventKey={3}
                                            data-bs-target="#nav-contact1" type="button" role="tab" aria-selected="false">About</Nav.Link>
                                    </Nav>
                                </nav>
                                <Tab.Content id="tab-style-4">
                                    <Tab.Pane id="nav-home1" role="tabpanel" eventKey={1}
                                        aria-labelledby="nav-home-tab" tabIndex={-1}>
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the{` industry's`} standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus
                                        PageMaker including versions of Lorem Ipsum.
                                    </Tab.Pane>
                                    <Tab.Pane id="nav-profile1" role="tabpanel" eventKey={2}
                                        aria-labelledby="nav-profile-tab" tabIndex={-1}>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        {`'Content`} here, content {`here'`}, making it look like readable English. <b>Many
                                            desktop publishing</b> packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for {`'lorem ipsum'`} will uncover many web
                                        sites still in their infancy. Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpos, remaining essentially unchanged.
                                    </Tab.Pane>
                                    <Tab.Pane id="nav-contact1" role="tabpanel" eventKey={3}
                                        aria-labelledby="nav-contact-tab" tabIndex={-1}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which {`don't`} look even slightly believable. <b>If you are going</b> to use a
                                        passage of Lorem Ipsum, you need to be sure there{` isn't`} anything embarrassing
                                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                        tend to repeat predefined chunks as necessary, making this the first true
                                        generator on the Internet. It uses a dictionary of over 200 Latin words,
                                        combined with a handful of model sentence structures.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-5
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-pills mb-3 nav-justified tab-style-5 d-sm-flex d-block" id="pills-tab" role="tablist">
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="pills-home-tab" data-bs-toggle="pill" eventKey={1}
                                            data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="pills-profile-tab" data-bs-toggle="pill" eventKey={2}
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="pills-contact-tab" data-bs-toggle="pill" eventKey={3}
                                            data-bs-target="#pills-contact" type="button" role="tab"
                                            aria-controls="pills-contact" aria-selected="false">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="pills-disabled-tab" data-bs-toggle="pill" eventKey={4}
                                            data-bs-target="#pills-disabled" type="button" role="tab"
                                            aria-controls="pills-disabled" aria-selected="false">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="pills-tabContent">
                                    <Tab.Pane className="text-muted" id="pills-home" role="tabpanel" eventKey={1}
                                        aria-labelledby="pills-home-tab" tabIndex={-1}>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        {`'Content`} here, content {`here'`}, making it look like readable English. <b>Many
                                            desktop publishing</b> packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for {`'lorem ipsum'`} will uncover many web
                                        sites still in their infancy.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pills-profile" role="tabpanel" eventKey={2}
                                        aria-labelledby="pills-profile-tab" tabIndex={-1}>
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pills-contact" role="tabpanel" eventKey={3}
                                        aria-labelledby="pills-contact-tab" tabIndex={-1}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which {`don't`} look even slightly believable. <b>If you are going</b> to use a
                                        passage of Lorem Ipsum, you need to be sure there {`isn't`} anything embarrassing
                                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                        tend to repeat predefined chunks as necessary, making this the first true
                                        generator on the Internet.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pills-disabled" role="tabpanel" eventKey={4}
                                        aria-labelledby="pills-disabled-tab" tabIndex={-1}>
                                        <b>Contrary to popular belief</b>, Contrary to popular belief, Lorem Ipsum is
                                        not simply random text. It has roots in a piece of classNameical Latin literature
                                        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                                        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                                        the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum
                                        comes from sections.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-6
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs mb-3 tab-style-6" id="myTab" role="tablist">
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="products-tab" data-bs-toggle="tab" eventKey={1}
                                            data-bs-target="#products-tab-pane" type="button" role="tab"
                                            aria-controls="products-tab-pane" aria-selected="true"><i
                                                className="ri-gift-line me-1 align-middle d-inline-block"></i>Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="sales-tab" data-bs-toggle="tab" eventKey={2}
                                            data-bs-target="#sales-tab-pane" type="button" role="tab"
                                            aria-controls="sales-tab-pane" aria-selected="false"><i
                                                className="ri-bill-line me-1 align-middle d-inline-block"></i>Sales</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="profit-tab" data-bs-toggle="tab" eventKey={3}
                                            data-bs-target="#profit-tab-pane" type="button" role="tab"
                                            aria-controls="profit-tab-pane" aria-selected="false"><i
                                                className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>Profit</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link id="expenses-tab" data-bs-toggle="tab" eventKey={4}
                                            data-bs-target="#expenses-tab-pane" type="button" role="tab"
                                            aria-controls="expenses-tab-pane" aria-selected="false"><i
                                                className="ri-exchange-box-line me-1 align-middle d-inline-block"></i>Expenses</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent2">
                                    <Tab.Pane className="fadep-0 border-bottom-0 p-0 rounded-0" id="products-tab-pane" eventKey={1}
                                        role="tabpanel" aria-labelledby="products-tab" tabIndex={-1}>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/ecommerce/jpg/3.jpg" alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Stop Watch</td>
                                                        <td>Clocks</td>
                                                        <td>$1,299.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/ecommerce/jpg/4.jpg" alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Camera</td>
                                                        <td>Gadgets</td>
                                                        <td>$7,249.29</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/ecommerce/jpg/6.jpg" alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Shoes</td>
                                                        <td>Footwear</td>
                                                        <td>$799.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="fade" id="sales-tab-pane" role="tabpanel" eventKey={2}
                                        aria-labelledby="sales-tab" tabIndex={-1}>
                                        <ul className="list-unstyled mb-1">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold">32,138</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold">12,123</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold">9,238</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold">14,234</div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold">10,249</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="fade" id="profit-tab-pane" role="tabpanel" eventKey={3}
                                        aria-labelledby="profit-tab" tabIndex={-1}>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>22.75%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>42.24%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>15.23%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>15.14%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>31.64%
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="fade" id="expenses-tab-pane" role="tabpanel" eventKey={4}
                                        aria-labelledby="expenses-tab" tabIndex={-1}>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$31,134</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$15,256</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$24,156</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$18,245</div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$18,478</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tab Style-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" d-flex align-items-start">
                            <Tab.Container defaultActiveKey={1}>
                                <Row>
                                    <Col md={2}>
                                        <Nav className=" flex-column nav-pills me-3 tab-style-7" id="v-pills-tab"
                                            role="tablist" aria-orientation="vertical">
                                            <Nav.Link className=" text-start" id="main-profile-tab" data-bs-toggle="pill" eventKey={1}
                                                data-bs-target="#main-profile" type="button" role="tab"
                                                aria-controls="main-profile" aria-selected="true"><i
                                                    className="ri-shield-user-line me-1 align-middle d-inline-block"></i>Profile</Nav.Link>
                                            <Nav.Link className="nav-link text-start" id="man-password-tab" data-bs-toggle="pill" eventKey={2}
                                                data-bs-target="#man-password" type="button" role="tab"
                                                aria-controls="man-password" aria-selected="false"><i
                                                    className="ri-u-disk-line me-1 align-middle d-inline-block"></i>Password</Nav.Link>
                                            <Nav.Link className="nav-link text-start" id="main-team-tab" data-bs-toggle="pill" eventKey={3}
                                                data-bs-target="#main-team" type="button" role="tab"
                                                aria-controls="main-team" aria-selected="false"><i
                                                    className="ri-group-line me-1 align-middle d-inline-block"></i>Team</Nav.Link>
                                            <Nav.Link className="nav-link text-start" id="main-billing-tab" data-bs-toggle="pill" eventKey={4}
                                                data-bs-target="#main-billing" type="button" role="tab"
                                                aria-controls="main-billing" aria-selected="false"><i
                                                    className="ri-bill-line me-1 align-middle d-inline-block"></i>Billing</Nav.Link>
                                            <Nav.Link className="nav-link text-start mb-1" id="main-email-tab" data-bs-toggle="pill" eventKey={5}
                                                data-bs-target="#main-email" type="button" role="tab"
                                                aria-controls="main-email" aria-selected="false"><i
                                                    className="ri-mail-line me-1 align-middle d-inline-block"></i>Email</Nav.Link>
                                        </Nav>
                                    </Col>
                                    <div className="col-md-8">
                                        <Tab.Content id="v-pills-tabContent">
                                            <Tab.Pane id="main-profile" role="tabpanel" tabIndex={-1} eventKey={1}>
                                                <div className="d-sm-flex">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-xxl">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="my-md-auto mt-4 ms-md-3">
                                                            <h5 className="font-weight-semibold ms-2 mb-1 pb-0">Adam Smith</h5>
                                                            <p className="text-muted ms-0 mb-2 pb-2 "> <span className="me-3"><i
                                                                className="far fa-address-card me-2"></i>Ui/Ux
                                                                Developer</span> <span className="me-3"><i
                                                                    className="fa fa-taxi me-2"></i>West
                                                                    fransisco,Alabama</span> <span><i
                                                                        className="far fa-flag me-2"></i>New Jersey</span> </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-phone me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Phone:</span><span>+94
                                                                        12345 6789</span> </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-envelope me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Email:</span><span>spruko.space@gmail.com</span>
                                                            </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-globe me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Website:</span><span>sprukotechnologies</span>
                                                            </p>
                                                            <p className="text-muted mb-0 ms-2"><b>Lorem Ipsum</b> is simply
                                                                dummy text of the printing and typesetting industry. Lorem
                                                                Ipsum has been standard.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane id="man-password" role="tabpanel" tabIndex={-1} eventKey={2}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the{` industry's `}<b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classNameical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-0">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-team" role="tabpanel" eventKey={3}
                                                aria-labelledby="main-team-tab" tabIndex={-1}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classNameical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                    <li className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the {`industry's`} <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-billing" role="tabpanel" eventKey={4}
                                                aria-labelledby="main-billing-tab" tabIndex={-1}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classNameical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the {`industry's`} <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                    <li className="mb-0">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-email" role="tabpanel" eventKey={5}
                                                aria-labelledby="main-email-tab" tabIndex={-1}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classNameical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                    <li className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the{` industry's`} <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tab Style-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Row>
                                    <Col md={3}>
                                        <Nav className=" nav-tabs flex-column vertical-tabs-2" role="tablist">
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={1}
                                                    aria-current="page" href="#home-vertical-custom"
                                                    aria-selected="true">
                                                    <p className="mb-1"><i className="ri-home-4-line"></i></p>
                                                    <p className="mb-0 text-break">Home</p>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link data-bs-toggle="tab" role="tab" eventKey={2}
                                                    aria-current="page" href="#about-vertical-custom"
                                                    aria-selected="true">
                                                    <p className="mb-1"><i className="ri-phone-line"></i></p>
                                                    <p className="mb-0 text-break">About</p></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link className=" mb-0" data-bs-toggle="tab" role="tab" eventKey={3}
                                                    aria-current="page" href="#services-vertical-custom"
                                                    aria-selected="true">
                                                    <p className="mb-1"><i className="ri-customer-service-line"></i></p>
                                                    <p className="mb-0 text-break">Services</p>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={9}>
                                        <Tab.Content>
                                            <Tab.Pane className="text-muted" id="home-vertical-custom" eventKey={1}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>{` aren't`} as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                    <li>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't `}look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything embarrassing hidden.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="about-vertical-custom" eventKey={2}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from {`"de`} Finibus Bonorum et{` Malorum"`} by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham,How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>
                                                    </li>
                                                    <li>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="services-vertical-custom" eventKey={3}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't `}look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there{` isn't`} anything embarrassing hidden.
                                                    </li>
                                                    <li>
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>{` aren't`} as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tabs Style-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Row>
                                    <Col md={4}>

                                        <Nav className=" nav-tabs flex-column vertical-tabs-3" role="tablist">
                                            <Nav.Item as='li'>
                                                <Nav.Link className=" text-break" data-bs-toggle="tab" role="tab" eventKey={1}
                                                    aria-current="page" href="#employee-vertical"
                                                    aria-selected="true">
                                                    <i className="ri-map-pin-user-line me-2 align-middle d-inline-block"></i>Employees
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link className="text-break" data-bs-toggle="tab" role="tab" eventKey={2}
                                                    aria-current="page" href="#customers-vertical"
                                                    aria-selected="false">
                                                    <i className="ri-group-line me-2 align-middle d-inline-block"></i>Customers
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li'>
                                                <Nav.Link className="text-break mb-0" data-bs-toggle="tab" role="tab" eventKey={3}
                                                    aria-current="page" href="#products-vertical"
                                                    aria-selected="false">
                                                    <i className="ri-gift-line me-2 align-middle d-inline-block"></i>Products
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                    </Col>

                                    <Col md={8}>
                                        <Tab.Content>
                                            <Tab.Pane className="text-muted" id="employee-vertical" eventKey={1}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> {`aren't `}as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                    <li>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't`} look even slightly believable.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="customers-vertical" eventKey={2}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from {`"de`} Finibus Bonorum et {`Malorum"`} by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham,How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>
                                                    </li>
                                                    <li>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="products-vertical" eventKey={3}
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {`don't `}look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything embarrassing hidden.
                                                    </li>
                                                    <li>
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> {`aren't `}as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Col>

                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tabs with dropdowns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-tabs mb-3 border-0" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link href="#hometab-dropdown" eventKey={1}
                                        >Home</Nav.Link>
                                    </Nav.Item>
                                    <Dropdown className="nav-item dropdown">
                                        <Dropdown.Toggle as='a' className="nav-link" data-bs-toggle="dropdown"
                                            role="button" aria-expanded="false">Company</Dropdown.Toggle>
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' data-bs-toggle="tab" role="tab" href="#homeabout-dropdown" eventKey={2}
                                            >About</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Something else here
                                            </Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Nav.Item as='li'>
                                        <Nav.Link href="#homeproducts-dropdown" eventKey={3}
                                        >Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link className="disabled">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="hometab-dropdown" role="tabpanel" eventKey={1}>
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the{` industry's`} standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="homeabout-dropdown" role="tabpanel" eventKey={2}>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classNameical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="homeproducts-dropdown" role="tabpanel" eventKey={3}>
                                        There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which {`don't `}look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pills with dropdowns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className="nav-pills mb-3" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey={1}
                                            href="#pill-products" >Products</Nav.Link>
                                    </Nav.Item>
                                    <Dropdown className="nav-item dropdown" >
                                        <Dropdown.Toggle as='a' className="nav-link" data-bs-toggle="dropdown"
                                            role="button" aria-expanded="false">Cart</Dropdown.Toggle>
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' ata-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#pill-wishlist" aria-selected="false" eventKey={2}>Wishlist</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Liked</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Save For Later
                                            </Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item as='li' href="#!">Recently Viewed</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey={3}
                                            href="#pill-orders" >Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' >
                                        <Nav.Link className="disabled">Offers</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="pill-products" role="tabpanel" eventKey={1}>
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {` you'll`} never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-wishlist" role="tabpanel" eventKey={2}>
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {` aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-orders" role="tabpanel" eventKey={3}>
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                FIll Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={1}>
                                <Nav className=" nav-pills nav-fill mb-3" role="tablist">
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey="1"
                                            href="#fill-pill-home" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey="2"
                                            href="#fill-pill-about" >Customer-ratings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li'>
                                        <Nav.Link eventKey="3"
                                            href="#fill-pill-services" >Services</Nav.Link>
                                    </Nav.Item >
                                    <Nav.Item as='li'>
                                        <Nav.Link className="disabled">Disabled</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="fill-pill-home" role="tabpanel" eventKey="1">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {` you'll`} never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="fill-pill-about" role="tabpanel" eventKey="2">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`aren't `}as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="fill-pill-services" role="tabpanel" eventKey="3">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                justified Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className=" nav-pills nav-justified mb-3 d-sm-flex d-block" role="tablist">
                                    <Nav.Item >
                                        <Nav.Link
                                            href="#justified-pill-home" eventKey="first">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link
                                            href="#justified-pill-details" eventKey="second" >Company Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link
                                            href="#justified-pill-products" eventKey="third">Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link className="disabled">Disabled</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="justified-pill-home" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {` you'll `}never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="justified-pill-details" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {`  aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="justified-pill-products" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Working with flex utilities
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-pills flex-column flex-sm-row mb-3" role="tablist" defaultActiveKey="first">
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="first"
                                        href="#pill-flex-home">Home</Nav.Link>
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="second"
                                        href="#pill-flex-big">More Data More The Tab Size</Nav.Link>
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="third"
                                        href="#pill-flex-about">About</Nav.Link>
                                    <Nav.Link disabled className="flex-sm-fill text-sm-center">Services</Nav.Link>
                                </Nav>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane className="text-muted" id="pill-flex-home" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        {`you'll`} never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete {`beginner's`} guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you {`shouldn't`} eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-flex-big" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        {` aren't`} as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-flex-about" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete {`beginner's`} guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that {`won't`} happen in dish
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Navs$tabs
