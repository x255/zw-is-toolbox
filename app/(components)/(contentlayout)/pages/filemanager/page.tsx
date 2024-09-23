

"use client";
import Link from 'next/link'
import useRouter from 'next/router'
import React, { useState } from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, InputGroup, ListGroup, ListGroupItem, Modal, Pagination, ProgressBar, Row, Table } from 'react-bootstrap'
import { Filemanagerlist, Folderdata, Myfilesdata, Recentdata } from '../../../../../shared/data/pages/filemanagerdata'
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
const Filemanager = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Data, setData] = useState(Filemanagerlist);

    const userdata: any[] = [];

    const myfunction = (idx: string) => {
        let Data;
        for (Data of Filemanagerlist) {
            if (Data.text[0] == " ") {
                Data.text = Data.text.trim();
            }
            if (Data.text.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.text.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };

    const [isFileManagerOpen, setFileManagerOpen] = useState(false);
    const [isFileManagerOpen1, setFileManagerOpen1] = useState(false);

    const toggleFileManager = () => {
        if (window.innerWidth <= 575) {
            setFileManagerOpen(true);
            setFileManagerOpen1(false);
        }
    };

    const toggleFileManager1 = () => {
        setFileManagerOpen(false);
    };

    const handleToggleDetails = () => {
        if (window.innerWidth <= 1200) {
            setFileManagerOpen1(true);
        }
    };

    const handleToggleDetailsClose = () => {
        setFileManagerOpen1(false);
    };

    return (
        <>
            <Seo title={"File Manager"} />

            <Pageheader title="File Manager" heading="File Manager" active="File Manager" />
            <div className="file-manager-container p-2 gap-2 d-sm-flex">
                <div className={`file-manager-navigation ${isFileManagerOpen ? 'close' : ''}`}>
                    <div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                        <div>
                            <h6 className="fw-semibold mb-0">File Manager</h6>
                        </div>
                        <Dropdown>
                            <button className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Dropdown.Toggle as='a' className="ri-settings-3-line  no-caret"></Dropdown.Toggle>
                            </button>
                            <Dropdown.Menu as='ul'>
                                <Dropdown.Item as='li' href="#!">Hidden Files</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="p-3 border-bottom">
                        <InputGroup>
                            <Form.Control type="text" className="form-control bg-light border-0" placeholder="Search Files" aria-describedby="button-addon2" />
                            <Button variant='' className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line"></i></Button>
                        </InputGroup>
                    </div>
                    <div>
                        <ul className="list-unstyled files-main-nav" id="files-main-nav">
                            {Data.map((idx: { class: string | undefined; icon: string | undefined; text: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; badge: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                                <li className={idx.class} key={Math.random()} onClick={() => { toggleFileManager() }}>
                                    <Link href="#!" scroll={false} >
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <i className={idx.icon}></i>
                                            </div>
                                            <span className="flex-fill text-nowrap">
                                                {idx.text}
                                            </span>
                                            <span className="badge bg-primary">{idx.badge}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            <li className="mb-4">
                                <div className="text-muted mb-2">
                                    <p className="mb-1"><span className="fw-bold fs-14">69.42GB</span> Used</p>
                                    <p className="fs-12 mb-0">58% Used - 51.04Gb free</p>
                                </div>
                                <ProgressBar variant='info' className="progress progress-xs" now={58} />
                            </li>
                            <li className="d-flex align-items-center justify-content-center pb-4">
                                <div className="filemanager-upgrade-storage">
                                    <span>
                                        <img src="../../assets/images/media/file-manager/2.png" alt="" />
                                    </span>
                                    <div className="text-default">
                                        <span className="fs-15 fw-semibold">Want to <span className="fw-bold text-success"><u>Buy</u></span> Storage?</span>
                                    </div>
                                    <div className="mt-3 d-grid">
                                        <Button variant='' className="btn btn-primary-gradient">Upgrade</Button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`file-manager-folders ${isFileManagerOpen ? 'open' : ''}`}>
                    <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                        <div>
                            <h6 className="fw-semibold mb-0">Folders</h6>
                        </div>
                        <div className="d-flex gap-2">
                            <Button onClick={() => { toggleFileManager1() }} id="folders-close-btn" className="d-sm-none d-block btn btn-icon btn-sm btn-danger-light">
                                <i className="ri-close-fill"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-primary d-flex align-items-center justify-content-center btn-wave waves-light" onClick={handleShow}
                            >
                                <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                            </Button>
                            <Modal centered show={show} onHide={handleClose} className="modal fade" id="create-folder" tabIndex={-1}
                                aria-labelledby="create-folder" data-bs-keyboard="false"
                                aria-hidden="true">
                                <Modal.Header closeButton className="modal-header">
                                    <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                    </h6>
                                </Modal.Header>
                                <Modal.Body className="">
                                    <Form.Label htmlFor="create-folder1" className="form-label">Folder Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                                </Modal.Body>
                                <Modal.Footer className="">
                                    <Button variant='' type="button" className="btn btn-sm btn-icon btn-light" onClick={handleClose}
                                        data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                    <Button variant='' type="button" className="btn btn-sm btn-success">Create</Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant='' className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center btn-wave waves-light" onClick={handleShow}
                            >
                                <i className="ri-add-circle-line align-middle me-1"></i>Create File
                            </Button>
                            <div className="modal fade" id="create-file" tabIndex={-1}
                                aria-labelledby="create-file" data-bs-keyboard="false"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                            </h6>
                                            <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></Button>
                                        </div>
                                        <div className="modal-body">
                                            <Form.Label htmlFor="create-file1" className="form-label">File Name</Form.Label>
                                            <Form.Control type="text" className="form-control" id="create-file1" placeholder="File Name" />
                                        </div>
                                        <div className="modal-footer">
                                            <Button type="button" className="btn btn-sm btn-icon btn-light"
                                                data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                            <button type="button" className="btn btn-sm btn-success">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 file-folders-container" id="file-folders-container">
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-semibold fs-14">My Files</p>
                            <Button variant='' className="btn btn-sm btn-primary-light">View All</Button>
                        </div>
                        <Row className=" mb-3">
                            {Myfilesdata.map((idx) => (
                                <Col xxl={3} xl={6} lg={6} md={6} key={Math.random()}>
                                    <Card className=" custom-card shadow-none bg-light">
                                        <Card.Body className='p-3'>
                                            <Link href="#!" scroll={false}>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div className="file-format-icon">
                                                        {idx.class}
                                                    </div>
                                                    <div>
                                                        <span className="fw-semibold mb-1">
                                                            {idx.text1}
                                                        </span>
                                                        <span className="fs-10 d-block text-muted text-end">
                                                            {idx.text2}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            ))}
                        </Row>
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-semibold fs-14">Folders</p>
                            <Button variant='' className="btn btn-sm btn-primary-light">View All</Button>
                        </div>
                        <Row className=" mb-3">
                            {Folderdata.map((idx) => (
                                <Col xxl={3} xl={6} lg={6} md={6} key={Math.random()}>
                                    <Card className=" border custom-card shadow-none">
                                        <Card.Body className={idx.color1}>
                                            <div className="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" data-name="Layer 1" viewBox="0 0 24 24">
                                                        <path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z"></path>
                                                        <path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z">
                                                        </path></svg>
                                                </div>
                                                <div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant='' className={`btn btn-sm btn-icon btn-${idx.class1} btn-wave waves-light no-caret`} >
                                                            <i className="ri-more-2-fill "></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                            <Dropdown.Item as='li' href="#!">Delete</Dropdown.Item>
                                                            <Dropdown.Item as='li' href="#!">Rename</Dropdown.Item>
                                                            <Dropdown.Item as='li' href="#!">Hide Folder</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <p className="fs-14 fw-semibold mb-1 lh-1">
                                                <Link href="#!" scroll={false}>{idx.text1}</Link>
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                <div>
                                                    <span className="text-muted fs-12">
                                                        {idx.text2}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-default fw-semibold">
                                                        {idx.text3}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                        <div className="d-flex mb-3 align-items-center justify-content-between">
                            <p className="mb-0 fw-semibold fs-14">Recents</p>
                            <Button variant='' className="btn btn-sm btn-primary-light">View All</Button>
                        </div>
                        <Row>
                            <Col xl={12}>
                                <div className="table-responsive border border-bottom-0">
                                    <Table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">File Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Date Modified</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="files-list">
                                            {Recentdata.map((idx) => (
                                                <tr className={idx.class} key={Math.random()} onClick={handleToggleDetails}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-xs">
                                                                    <img src={idx.img} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>{idx.text1}
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.text2}</td>
                                                    <td>{idx.text3}</td>
                                                    <td>{idx.text4}</td>
                                                    <td>
                                                        <div className="hstack gap-2 fs-15">
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i className="ri-eye-line"></i></Link>
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={5}>
                                                    <nav aria-label="Page navigation">
                                                        <Pagination className="justify-content-end mb-0">
                                                            <Pagination.Item disabled href="#!">Previous</Pagination.Item>
                                                            <Pagination.Item href="#!">1</Pagination.Item>
                                                            <Pagination.Item href="#!">2</Pagination.Item>
                                                            <Pagination.Item href="#!">Next</Pagination.Item>
                                                        </Pagination>
                                                    </nav>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={`selected-file-details ${isFileManagerOpen1 ? 'open' : ''}`}>
                    <div className="d-flex p-3 align-items-center justify-content-between border-bottom">
                        <div>
                            <h6 className="fw-semibold mb-0">File Details</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <Dropdown className="me-1">
                                <button className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Dropdown.Toggle as='span' className="ri-more-2-fill no-caret "></Dropdown.Toggle>
                                </button>
                                <Dropdown.Menu as='ul'>
                                    <Dropdown.Item as='li' href="#!">Share</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Copy</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Move</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Delete</Dropdown.Item>
                                    <Dropdown.Item as='li' href="#!">Raname</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button onClick={handleToggleDetailsClose} variant='' id="file-close-btn" className="btn btn-icon btn-sm btn-danger-light d-xl-none d-block">
                                <i className="ri-close-fill"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="filemanager-file-details" id="filemanager-file-details">
                        {/* <PerfectScrollbar> */}
                        <div className="p-3 text-center border-bottom border-block-end-dashed">
                            <div className="file-details mb-3">
                                <img src="../../assets/images/media/file-manager/3.png" alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-semibold fs-16">AMB-2012.zip</p>
                                <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2022</p>
                            </div>
                        </div>
                        <div className="p-3 border-bottom border-block-end-dashed">
                            <ListGroup>
                                <ListGroupItem>
                                    <div>
                                        <span className="fw-semibold">File Format : </span><span className="fs-12 text-muted">zip</span>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <div>
                                        <p className="fw-semibold mb-0">File Description : </p>
                                        <span className="fs-12 text-muted">This file contains 3 folder ynex.main & ynex.premium & ynex.featured and 42 images and layout styles are added in this update.</span>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p className="fw-semibold mb-0">File Location : </p>
                                    <span className="fs-12 text-muted">Device/Storage/Archives/AMB-2012.zip</span>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className="p-3 border-bottom border-block-end-dashed">
                            <p className="mb-1 fw-semibold fs-14">Downloaded from :</p>
                            <Link className="text-primary fw-semibold text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                <u>https://themeforest.net/user/spruko/portfolio</u>
                            </Link>
                        </div>
                        <div className="p-3">
                            <p className="mb-2 fw-semibold fs-14">Shared With :</p>
                            <div className="d-flex align-items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                </span>
                                <span className="fw-semibold flex-fill">Akira Susan</span>
                                <span className="badge bg-success-transparent fw-normal">28,Nov 2022</span>
                            </div>
                            <div className="d-flex align-items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                </span>
                                <span className="fw-semibold flex-fill">Khalid Ahmad</span>
                                <span className="badge bg-success-transparent fw-normal">16,Oct 2022</span>
                            </div>
                            <div className="d-flex align-items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../assets/images/faces/8.jpg" alt="" />
                                </span>
                                <span className="fw-semibold flex-fill">Jeremiah Jackson</span>
                                <span className="badge bg-success-transparent fw-normal">05,Dec 2022</span>
                            </div>
                            <div className="d-flex align-items-center p-2">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../assets/images/faces/13.jpg" alt="" />
                                </span>
                                <span className="fw-semibold flex-fill">Brigo Jhonson</span>
                                <span className="badge bg-success-transparent fw-normal">13,Nov 2022</span>
                            </div>

                        </div>
                        {/* </PerfectScrollbar> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filemanager
