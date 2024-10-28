"use client";
import React, { useEffect } from 'react'
import { Accordion, Button, Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap'
import Link from 'next/link'
import Seo from '../../../../shared/layout-components/seo/seo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import store from '../../../../shared/redux/store';
import { ThemeChanger } from '../../../../shared/redux/action';
import { connect } from 'react-redux';
const Landing = ({ ThemeChanger }:any) => {


    useEffect(() => {
        // Dynamically add class to body
        document.body.classList.add('landing-body');
        return () => {
            // Clean up
            document.body.classList.remove('landing-body');
        };
    }, []);
    useEffect(() => {
        const theme = store.getState();
        ThemeChanger({

            ...theme,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal",
        });

        return () => {
            ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`
            });
        };

    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                const theme = store.getState();
                ThemeChanger({ ...theme, "dataToggled": "close", "dataNavLayout": "horizontal" });
            } else {
                const theme = store.getState();
                ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        // handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            ThemeChanger({ ...theme, "dataToggled": "open", "dataNavLayout": "horizontal" });
        }
    }

    function handleClick() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "dataToggled": "close", "dataNavLayout": "horizontal" });
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
        }
    }

    const Switchericon = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        const Rightside:any = document.querySelector(".offcanvas-end");
        Rightside.style.insetInlineEnd = "0px";
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        return () => {
            if (rootDiv) {
                rootDiv.className = ''; // Remove the className when component unmounts
            }
        };
    }, []);
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 30 && document.querySelector(".landing-body")) {
                const Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                const Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return (
        <>
            <Seo title={"Landing"} />


            <header className="app-header">
                <div className="main-header-container container-fluid">

                    <div className="header-content-left">

                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link href="/dashboards/crm/" className="header-logo">
                                    <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                                    <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>

                        <div className="header-element">
                            <Link href="#!" scroll={false} className="sidemenu-toggle header-link" data-bs-toggle="sidebar" >
                                <span className="open-toggle" onClick={toggleNavigation} >
                                    <i className="ri-menu-3-line fs-20"></i>
                                </span>
                            </Link>
                        </div>

                    </div>

                    <div className="header-content-right">

                        <div className="header-element align-items-center">
                            <div className="btn-list d-lg-none d-block">
                                <Link href="/authentication/sign-up/basic/" className="btn btn-primary-light">
                                    Sign Up
                                </Link>
                                <Button variant='success' className="btn btn-icon btn-success" data-bs-toggle="offcanvas" onClick={() => Switchericon()} data-bs-target="#switcher-canvas">
                                    <i className="ri-settings-3-line"></i>
                                </Button>
                            </div>
                        </div>

                    </div>

                </div>
            </header>
            <aside className="app-sidebar sticky" id="sidebar">
                <div className="container-xl">
                    <div className="main-sidebar">
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link href="/dashboards/crm/" className="header-logo">
                                        <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <img src="../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left d-none" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                            <ul className="main-menu">
                                <li className="slide">
                                    <Link className="side-menu__item" href="#home">
                                        <span className="side-menu__label">Home</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#about" className="side-menu__item">
                                        <span className="side-menu__label">About</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#features" className="side-menu__item">
                                        <span className="side-menu__label">Features</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#testimonials" className="side-menu__item">
                                        <span className="side-menu__label">Users</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#team" className="side-menu__item">
                                        <span className="side-menu__label">Team</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#faq" className="side-menu__item">
                                        <span className="side-menu__label">{`Faq's`}</span>
                                    </Link>
                                </li>
                                <li className="slide">
                                    <Link href="#contact" className="side-menu__item">
                                        <span className="side-menu__label">Contact</span>
                                    </Link>
                                </li>

                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                            <div className="d-lg-flex d-none">
                                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                    <Link href="/authentication/sign-up/basic" className="btn btn-wave btn-primary">
                                        Sign Up
                                    </Link>
                                    <button className="btn btn-wave btn-icon btn-light switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas" onClick={() => Switchericon()}>
                                        <i className="ri-settings-3-line"></i>
                                    </button>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>

            </aside>
            <div className="main-content landing-main" onClick={handleClick}>
                <div className="landing-banner" id="home">
                    <section className="section">
                        <div className="container main-banner-container pb-lg-0">
                            <Row>
                                <Col xxl={7} xl={7} lg={7} md={8} >
                                    <div className="py-lg-5">
                                        <div className="mb-3">
                                            <h5 className="fw-semibold text-fixed-white op-9">EXCELLENCE IN INNOVATION</h5>
                                        </div>
                                        <p className="landing-banner-heading mb-3">Your ultimate destination for cutting-edge solutions starts here with <span className="text-secondary">Liquid Intelligent Technologies !</span></p>
                                        <div className="fs-16 mb-5 text-fixed-white op-7">Liquid Intelligent Technologies - The Zimbabwe IS department is leading the way in reducing costs and enhancing efficiency by going paperless.</div>
                                        <Link href="/dashboards/crm" className="m-1 btn btn-primary">
                                            Go To Forms
                                            <i className="ri-eye-line ms-2 align-middle"></i>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={4}>
                                    <div className="text-end landing-main-image landing-heading-img">
                                        <img src="../assets/images/media/landing/1.png" alt="" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
                <section className="section section-bg " id="statistics">
                    <div className="container text-center position-relative">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">STATISTICS</span></p>
                        <h3 className="fw-semibold mb-2">Numbers do not lie.</h3>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-5 fw-normal">Leading the way in digital transformation and cost reduction.</p>
                            </Col>
                        </Row>
                        <Row className="  g-2 justify-content-center">
                            <Col xl={12}>
                                <Row className=" justify-content-evenly">
                                    <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                                        <div className="p-3 text-center rounded-2 bg-white border">
                                            <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='fs-24 bx bx-spreadsheet'></i>
                                            </span>
                                            <h3 className="fw-semibold mb-0 text-dark">10+</h3>
                                            <p className="mb-1 fs-14 op-7 text-muted ">
                                            Digital Forms Implemented
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                                        <div className="p-3 text-center rounded-2 bg-white border">
                                            <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='fs-24 bx bx-trending-down' ></i>
                                            </span>
                                            <h3 className="fw-semibold mb-0 text-dark">89%</h3>
                                            <p className="mb-1 fs-14 op-7 text-muted ">
                                               Reduction in Paper Usage
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                                        <div className="p-3 text-center rounded-2 bg-white border">
                                            <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='fs-24 bx bx-money' ></i>
                                            </span>
                                            <h3 className="fw-semibold mb-0 text-dark">$50.1K+</h3>
                                            <p className="mb-1 fs-14 op-7 text-muted ">
                                            Annual Savings on Printing Costs
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                                        <div className="p-3 text-center rounded-2 bg-white border">
                                            <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='fs-24 bx bx-time' ></i>
                                            </span>
                                            <h3 className="fw-semibold mb-0 text-dark">3 Months</h3>
                                            <p className="mb-1 fs-14 op-7 text-muted ">
                                                Time to complete the project
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
                                        <div className="p-3 text-center rounded-2 bg-white border">
                                            <span className="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i className='fs-24 bx bx-desktop' ></i>
                                            </span>
                                            <h3 className="fw-semibold mb-0 text-dark">5+</h3>
                                            <p className="mb-1 fs-14 op-7 text-muted ">
                                              Departments that were digitized
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="section " id="about">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">DIGITAL TRANSFORMATION</span></p>
                        <h3 className="fw-semibold mb-2">Designed for Efficiency</h3>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-3 fw-normal">comes with multiple customization options that are very easy to implement.</p>
                            </Col>
                        </Row>
                        <Row className=" justify-content-between align-items-center mx-0">
                            <Col xxl={5} xl={5} lg={5} className=" customize-image text-center">
                                <div className="text-lg-end">
                                    <img src="../assets/images/media/landing/3.png" alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} className="pt-5 pb-0 px-lg-2 px-5 text-start">
                                <h5 className="text-lg-start fw-semibold mb-0">Digital Transformation</h5>
                                <p className=" text-muted">Effectiveness of paperless initiatives.</p>
                                <Row>
                                    <Col md={12} className="col-12">
                                        <div className="d-flex">
                                            <span>
                                                <i className='bx bxs-badge-check text-primary fs-18'></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="fw-semibold mb-0">Seamless Integration</h6>
                                                <p className=" text-muted">Integrated with existing systems like Adobe Sign, ensuring a smooth transition and enhanced productivity without disrupting your current workflows.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12} className="col-12">
                                        <div className="d-flex">
                                            <span>
                                                <i className='bx bxs-badge-check text-primary fs-18'></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="fw-semibold mb-0">User-Friendly Interface</h6>
                                                <p className=" text-muted">Designed with the user in mind, our platform offers an intuitive interface that simplifies the adoption of digital forms, making it accessible for all team members</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12} className="col-12 ">
                                        <div className="d-flex">
                                            <span>
                                                <i className='bx bxs-badge-check text-primary fs-18'></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="fw-semibold mb-0">Enhanced Security</h6>
                                                <p className=" text-muted">Protect your data with advanced security features, ensuring that all digital forms and documents are securely stored and managed</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="section section-bg " id="our-mission">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">OUR MISSION</span></p>
                        <h2 className="fw-semibold mb-2">Our mission consists of 8 major steps.</h2>
                        <div className="row justify-content-center mb-5">
                            <Col xl={7}>
                                <p className="text-muted fs-15mb-0 fw-normal">Our mission as a department is to lead the way in digital transformation, making it easy for Liquid Intelligent Technologies to go paperless and enhance efficiency.</p>
                            </Col>
                        </div>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-badge-check fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Digital Excellence
                                                </h6>
                                                <p className="mb-0 text-muted">We strive to deliver top-notch digital solutions that streamline processes and reduce costs.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-file fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Documentation
                                                </h6>
                                                <p className="mb-0 text-muted">Our platform comes with detailed documentation to ensure smooth implementation and usage.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded  bg-primary-transparent">
                                                    <i className='bx bx-cog fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Customization
                                                </h6>
                                                <p className="mb-0 text-muted">Send us a request on our email (zimbabweis@liquid.tech) for forms that are tailored to meet your specific needs.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-cloud-upload fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Regular Updates
                                                </h6>
                                                <p className="mb-0 text-muted">We provide regular updates to keep our platform at the forefront of technology and innovation.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-support fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    24/7 Support
                                                </h6>
                                                <p className="mb-0 text-muted"> Zimbabwe IS team is available around the clock to assist with any issues or questions.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-image fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Ready-to-Use Digital Forms
                                                </h6>
                                                <p className="mb-0 text-muted">Leverage our ready-to-use digital forms to streamline your processes and quickly transition to a paperless environment.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-compass fs-25'></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Compatibility
                                                </h6>
                                                <p className="mb-0 text-muted">Our solution is compatible with existing systems, ensuring a smooth transition to digital workflows.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className=" col-12">
                                <Card className=" custom-card text-start landing-missions">
                                    <Card.Body>
                                        <div className="align-items-top">
                                            <div className="mb-2">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                    <i className='bx bx-desktop fs-25' ></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">
                                                    Fully Responsive
                                                </h6>
                                                <p className="mb-0 text-muted"> Our platform is designed to be fully responsive, providing an optimal user experience on any device.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="section landing-Features" id="features">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">Features</span></p>
                        <h2 className="fw-semibold mb-2 text-fixed-white ">Features Used in Project</h2>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-fixed-white op-8 fs-15 mb-3 fw-normal">Below are the technologies used.</p>
                            </Col>
                        </Row>
                        <div className="text-start">
                            <div className="justify-content-center">
                                <div className="">
                                    <div className="feature-logos mt-sm-5 flex-wrap" >
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/10.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">Nextjs</h5>
                                        </div>
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/11.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">React Bootstrap</h5>
                                        </div>
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/4.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">Sass</h5>
                                        </div>
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/9.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">Yarn</h5>
                                        </div>
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/6.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">NPM</h5>
                                        </div>
                                        <div className="ms-sm-5 ms-2 text-center">
                                            <img src="../assets/images/media/landing/web/12.png" alt="image" className="featur-icon" />
                                            <h5 className="mt-3 text-fixed-white ">Mui</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination mt-4"></div>
                        </div>
                    </div>
                </section>
                <section className="section landing-testimonials section-bg" id="testimonials">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">TESTIMONIALS</span></p>
                        <h3 className="fw-semibold mb-2">We never failed to reach expectations</h3>
                        <Row className="row justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-5 fw-normal">Some of the reviews our users gave which brings motivation to work for future projects.</p>
                            </Col>
                        </Row>
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]} className="mySwiper">

                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Nsikani Mhlanga</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">SERVICE DESK ADMIN</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- Implementing digital forms has revolutionized our workflow. The ease of use and seamless integration have significantly boosted our productivity  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-half-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>12 days ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Nsikani Mhlanga</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Hilda Green</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">SHOP MANAGER</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- Switching to digital forms has been a game-changer for us. The integration with Adobe Sign has streamlined our document management process  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-half-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>7 days ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Hilda Green</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/2.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Hillary Chituwu</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">IS TEAM LEAD</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- Switching to digital forms has been a game-changer for us. The integration with Adobe Sign has streamlined our document management process  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-line"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>2 days ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Hillary Chituwu</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/10.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Blessing Mvura</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">ACCOUNTANT</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">-user-friendly interface have made it easy for our team to adopt digital forms. We’ve seen a significant reduction in paper usage.  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-half-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>16 hrs ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Blessing Mvura</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/12.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Joshua Chingwaru</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">SD MANAGER</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- digital forms have simplified our Service Delivery processes, making it easier to manage employee records and documentation  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-line"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>22 days ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Joshua</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/3.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Tinashe Muguti </p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">AGGENT AMIO</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- The seamless integration with our existing systems has made the transition to digital forms effortless. Our team is more productive than ever  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-half-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>26 days ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Tinashe Muguti</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/16.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Daniel Magondo</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">CASHIER</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- The Forms has helped us achieve our goal of going paperless. The platform is intuitive and easy to use, making the transition smooth. --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>1 month ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Daniel Magondo</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/5.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Knowledge Jambo</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">Accounting Clerk</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- This solution has drastically reduced our printing costs and improved our overall efficiency  --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-half-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>1 month ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Knowledge Jambo</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                                        <Card className=" custom-card testimonial-card">
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-md avatar-rounded me-3">
                                                        <img src="../assets/images/faces/7.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-14">Tofara Nderere</p>
                                                        <p className="mb-0 fs-10 fw-semibold text-muted">DEV Team Lead</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <span className="text-muted">- Digital forms has revolutionized our workflow. The ease of use and seamless integration have significantly boosted our productivity --</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-muted">Rating : </span>
                                                        <span className="text-warning d-block ms-1">
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                            <i className="ri-star-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                        <span>2 month ago</span>
                                                        <span className="d-block fw-normal fs-12 text-success"><i>Tofara Nderere</i></span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>
                <section className="section  section-bg" id="team">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">OUR TEAM</span></p>
                        <h3 className="fw-semibold mb-2">Great things in business are done by a team.</h3>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-5 fw-normal">Our team consists of highly qulified employees that works hard to raise company standards.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                                <Card className=" custom-card text-center team-card ">
                                    <Card.Body className="p-5">
                                        <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                            <img src="../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                        <p className="fw-semibold fs-17 mb-0 text-default">Peter Parker</p>
                                        <span className="text-muted fs-14 text-primary fw-semibold">Director</span>
                                        <p className="text-muted mt-2 fs-13"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <div className="mt-2">
                                            <Link href="/pages/profile" className="btn btn-light" target="_blank">View profile</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                                <Card className=" custom-card text-center team-card ">
                                    <Card.Body className=" p-5">
                                        <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                            <img src="../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                        <p className="fw-semibold fs-17 mb-0 text-default">Andrew garfield</p>
                                        <span className="text-muted fs-14 text-primary fw-semibold">Manager</span>
                                        <p className="text-muted mt-2 fs-13"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <div className="mt-2">
                                            <Link href="/pages/profile" className="btn btn-light" target="_blank">View profile</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                                <Card className=" custom-card text-center team-card ">
                                    <Card.Body className=" p-5">
                                        <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                            <img src="../assets/images/faces/5.jpg" alt="" />
                                        </span>
                                        <p className="fw-semibold fs-17 mb-0 text-default">Json Taylor</p>
                                        <span className="text-muted fs-14 text-primary fw-semibold">Web Designer</span>
                                        <p className="text-muted mt-2 fs-13"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <div className="mt-2">
                                            <Link href="/pages/profile" className="btn btn-light" target="_blank">View profile</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                                <Card className=" custom-card text-center team-card ">
                                    <Card.Body className=" p-5">
                                        <span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                                            <img src="../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                        <p className="fw-semibold fs-17 mb-0 text-default">Elizabeth Rose</p>
                                        <span className="text-muted fs-14 text-primary fw-semibold">HR</span>
                                        <p className="text-muted mt-2 fs-13"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <div className="mt-2">
                                            <Link href="/pages/profile" className="btn btn-light" target="_blank">View profile</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div className="mt-5">
                            <button className="btn btn-primary">View All</button>
                        </div>
                    </div>
                </section>
                <section className="section section-bg" id="faq">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">F.A.Q</span></p>
                        <h3 className="fw-semibold mb-2">Frequently asked questions ?</h3>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-15 mb-5 fw-normal">We have shared some of the most frequently asked questions to help you out.</p>
                            </Col>
                        </Row>
                        <div className="row text-start">
                            <Col xl={12}>
                                <Row className=" gy-2">
                                    <Col xl={6}>
                                        <Accordion className=" accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ1" defaultActiveKey='0'>
                                            <Accordion.Item eventKey='1'>
                                                <Accordion.Header as='h2' id="headingcustomicon1Two">
                                                    Can I customize the digital forms?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon1Two" className="accordion-collapse collapse" eventKey='1'
                                                    aria-labelledby="headingcustomicon1Two"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>No, Not at the moment  </strong>this platform offers forms as per departmental request. 
                                                        Send us a request and we can modify the forms to suit your specific needs.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='2'>
                                                <Accordion.Header as='h2' id="headingcustomicon1Three">
                                                    Is there a mobile app available ? 
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon1Three" className="accordion-collapse collapse" eventKey='2'
                                                    aria-labelledby="headingcustomicon1Three"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>No .</strong>However our platform is mobile-friendly and can be accessed via any web browser on your mobile device. Spoiler Alert , soon we are coming to WhatsApp
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            {/* <Accordion.Item eventKey='3'>
                                                <Accordion.Header as='h2' id="headingcustomicon1Four">
                                                    Do I have the right to return an item?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon1Four" className="accordion-collapse collapse" eventKey='3'
                                                    aria-labelledby="headingcustomicon1Four"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables.{`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='4'>
                                                <Accordion.Header as='h2' id="headingcustomicon1Five">
                                                    General Terms & Conditions (GTC)
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon1Five" className="accordion-collapse collapse" eventKey='4'
                                                    aria-labelledby="headingcustomicon1Five"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='5'>
                                                <Accordion.Header as='h2' id="headingcustomicon1Six">
                                                    Do I need to create an account to make an order?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon1Six" className="accordion-collapse collapse" eventKey='5'
                                                    aria-labelledby="headingcustomicon1Six"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <Accordion.Body>ms-sm-5 ms-2 text-center
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables.{`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col xl={6}>
                                        <Accordion className=" accordion-customicon1 accordion-primary accordions-items-seperate" id="accordionFAQ2">
                                            <Accordion.Item eventKey='6'>
                                                <Accordion.Header as='h2' id="headingcustomicon2Five">
                                                    General Terms & Conditions (GTC)
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon2Five" className="accordion-collapse collapse" eventKey='6'
                                                    aria-labelledby="headingcustomicon2Five"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='7'>
                                                <Accordion.Header as='h2' id="headingcustomicon2Six">
                                                    Do I need to create an account to make an order?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon2Six" className="accordion-collapse collapse" eventKey='7'
                                                    aria-labelledby="headingcustomicon2Six"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='8'>
                                                <Accordion.Header as='h2' id="headingcustomicon2One">
                                                    Where can I subscribe to your newsletter?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon2One" className="accordion-collapse collapse " eventKey='8'
                                                    aria-labelledby="headingcustomicon2One"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='9'>
                                                <Accordion.Header as='h2' id="headingcustomicon2Two">
                                                    Where can in edit my address?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon2Two" className="accordion-collapse collapse" eventKey='9'
                                                    aria-labelledby="headingcustomicon2Two"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey='10'>
                                                <Accordion.Header as='h2' id="headingcustomicon2Three">
                                                    What are your opening hours?
                                                </Accordion.Header>
                                                <Accordion.Collapse id="collapsecustomicon2Three" className="accordion-collapse collapse" eventKey='10'>
                                                    <Accordion.Body>
                                                        <strong>This is the first {`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item>
                                            <Accordion.Item  eventKey='11'>
                                                <Accordion.Header as='h2' id="headingcustomicon2Four">
                                                    Do I have the right to return an item?
                                                </Accordion.Header>
                                                <Accordion.Collapse  eventKey='11' id="collapsecustomicon2Four" className="accordion-collapse collapse show"
                                                    aria-labelledby="headingcustomicon2Four"
                                                    data-bs-parent="#accordionFAQ2">
                                                    <Accordion.Body>
                                                        <strong>This is the first{`item's`}  accordion body.</strong> It is shown by
                                                        default, until the collapse plugin adds the appropriate classNamees that we
                                                        use to style each element. These classNamees control the overall appearance,
                                                        as well as the showing and hiding via CSS transitions. You can modify
                                                        any of this with custom CSS or overriding our default variables. {`It's`}
                                                        also worth noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </Accordion.Body>
                                                </Accordion.Collapse>
                                            </Accordion.Item> */}
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </div>
                </section>
                <section className="section" id="contact">
                    <div className="container text-center">
                        <p className="fs-12 fw-semibold text-success mb-1"><span className="landing-section-heading">CONTACT US</span></p>
                        <h3 className="fw-semibold mb-2">Have any questions ? We would love to hear from you.</h3>
                        <div className="row justify-content-center">
                            <Col xl={9}>
                                <p className="text-muted fs-15 mb-5 fw-normal">You can contact us anytime regarding any queries or deals,dont hesitate to clear your doubts before trying our product.</p>
                            </Col>
                        </div>
                        <div className="row text-start">
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                <Card className="custom-card border shadow-none">
                                    <Card.Body className=" p-0">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin" height="365"

                                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                <Card className="custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                                    <Card.Body>
                                        <div className="row gy-3 mt-2 px-3">
                                            <Col xl={6}>
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="contact-address-name" className="form-label ">Full Name :</Form.Label>
                                                        <Form.Control type="text" className="form-control " id="contact-address-name" placeholder="Enter Name" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="contact-address-phone" className="form-label ">Phone No :</Form.Label>
                                                        <Form.Control type="text" className="form-control " id="contact-address-phone" placeholder="Enter Phone No" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="contact-address-address" className="form-label ">Address :</Form.Label>
                                                        <Form.Control as="textarea" className="form-control " id="contact-address-address" rows={1}></Form.Control>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="contact-address-message" className="form-label ">Message :</Form.Label>
                                                <Form.Control as="textarea" className="form-control " id="contact-address-message" rows={8}></Form.Control>
                                            </Col>
                                            <Col xl={12}>
                                                <div className="d-flex  mt-4 ">
                                                    <div className="">
                                                        <div className="btn-list">
                                                            <Button variant='' className="btn btn-icon btn-primary-light btn-wave">
                                                                <i className="ri-facebook-line fw-bold"></i>
                                                            </Button>
                                                            <Button variant='' className="btn btn-icon btn-primary-light btn-wave">
                                                                <i className="ri-twitter-x-line fw-bold"></i>
                                                            </Button>
                                                            <Button variant='' className="btn btn-icon btn-primary-light btn-wave">
                                                                <i className="ri-instagram-line fw-bold"></i>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <Button variant='' className="btn btn-primary  btn-wave">Send Message</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </section>
                <section className="section landing-footer text-fixed-white">
                    <div className="container">
                        <Row>
                            <Col md={4} sm={6} className="col-12 mb-md-0 mb-3">
                                <div className="px-4">
                                    <p className="fw-semibold mb-3"><Link href="/dashboards/crm"><img src="../assets/images/brand-logos/desktop-dark.png" alt="" /></Link></p>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className=" col-12">
                                <div className="px-4">
                                    <h6 className="fw-semibold text-fixed-white">CONTACT</h6>
                                    <ul className="list-unstyled fw-normal landing-footer-list">
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-home-4-line me-1 align-middle"></i> Samy Levy, Borrowdale, Zimabwe</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-mail-line me-1 align-middle"></i> zimbabweis@liquid.tech</Link>
                                        </li>
                                        <li>
                                            <Link href="#!" scroll={false} className="text-fixed-white op-6"><i className="ri-phone-line me-1 align-middle"></i> +(263) 77 282 2452</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <div className="text-center landing-main-footer py-3">
                    <span className="text-muted fs-15">@ Copyright 2024 <span id="year"></span> <Link
                        href="#!" scroll={false} className="text-primary fw-semibold"><u>Liquid Intelligent Technologies</u></Link>.
                        Designed <span className="fa fa-heart text-danger"></span> by <Link href="#!" scroll={false} className="text-primary fw-semibold"><u>
                            Zimbabwe IS Department</u>
                        </Link> All
                        rights
                        reserved
                    </span>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state:any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);
