export const tables1=
`    <div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data1.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td><span className={'badge bg-outline-{idx.color}'}>{idx.text4}</span></td>
            </tr>

        ))}
    </tbody>
</table>
</div>`
export const tables2=
` <div className="table-responsive">
<table className="table text-nowrap table-bordered">
    <thead>
        <tr>
            <th scope="col">User</th>
            <th scope="col">Status</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data2.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">
                    <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src={idx.img} alt="img" />
                        </span>{idx.text1}
                    </div>
                </th>
                <td><span className={'badge bg-{idx.color}'}>{idx.text2}</span></td>
                <td>{idx.text3}</td>
                <td>
                    <div className="hstack gap-2 flex-wrap">
                        <Link href="#!" scroll={false} className="text-info fs-14 lh-1"><i
                            className="ri-edit-line"></i></Link>
                        <Link href="#!" scroll={false} className="text-danger fs-14 lh-1"><i
                            className="ri-delete-bin-5-line"></i></Link>
                    </div>
                </td>
            </tr>

        ))}
    </tbody>
</table>
</div>`
export const tables3=
`       <div className="table-responsive">
<table className="table text-nowrap table-bordered border-primary">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data3.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">
                    {idx.text1}
                </th>
                <td>
                    <Badge bg=" bg-light text-dark">{idx.text2}</Badge>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src={idx.img} alt="img" />
                        </span>{idx.text3}
                    </div>
                </td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text4}</span></td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables4=
` <div className="table-responsive">
<table className="table text-nowrap table-bordered border-success">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data4.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">
                    {idx.text1}
                </th>
                <td>
                    <span className="badge bg-light text-dark">{idx.text2}</span>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src={idx.img} alt="img" />
                        </span>{idx.text3}
                    </div>
                </td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text4}</span></td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables5=
`  <div className="table-responsive">
<table className="table text-nowrap table-bordered border-warning">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data5.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">
                    {idx.text1}
                </th>
                <td>
                    <Badge bg=" bg-light text-dark">{idx.text2}</Badge>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                            <img src={idx.img} alt="img" />
                        </span>{idx.text3}
                    </div>
                </td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text4}</span></td>
            </tr>
        ))}

    </tbody>
</table>
</div>`
export const tables6=
`   <div className="table-responsive">
<table className="table text-nowrap table-borderless">
    <thead>
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data6.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text4}</span></td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables7=
`<div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Seller</th>
            <th scope="col">Sale Percentage</th>
            <th scope="col">Quantity Sold</th>
        </tr>
    </thead>
    <tbody className="table-group-divider">
        {Data7.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td><Link href="#!" scroll={false} className={'text-{idx.color}'}>{idx.text3}<i
                    className="ri-arrow-up-fill ms-1"></i></Link></td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables8=
`<div className="table-responsive">
<table className="table text-nowrap table-striped">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data8.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='success' size="sm" className=" btn-wave">
                        <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>{idx.class}
                    </Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables9=
`  <div className="table-responsive">
<table className="table text-nowrap table-striped-columns">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data8.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='danger' size="sm" className=" btn-wave">
                        <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>{idx.text4}
                    </Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables10=
`  <div className="table-responsive">
<table className="table text-nowrap table-primary">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables11=
` <div className="table-responsive">
<table className="table text-nowrap table-secondary">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables12=
`  <div className="table-responsive">
<table className="table text-nowrap table-warning">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables13=
` <div className="table-responsive">
<table className="table text-nowrap table-danger">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables14=
`<div className="table-responsive">
<table className="table text-nowrap table-dark">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables15=
`  <div className="table-responsive">
<table className="table text-nowrap table-success table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        {Data9.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>{idx.text4}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables16=
`    <div className="table-responsive">
<table className="table text-nowrap table-hover">
    <thead>
        <tr>
            <th scope="col">Product Manager</th>
            <th scope="col">Category</th>
            <th scope="col">Team</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Joanna Smith</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Fashion</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        href="#!">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        aria-valuenow="52" style={{ width: "52%" }} aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Kara Kova</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">milesakara@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-warning-transparent">Clothing</Badge></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        href="#!">
                        +6
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        aria-valuenow="40" style={{ width: "40%" }} aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Donald Trimb</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-dark-transparent">Electronics</Badge></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        href="#!">
                        +2
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "17%" }}
                        aria-valuenow="17" aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Justin Gaethje</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">justingae@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-danger-transparent">Sports</Badge></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        href="#!">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }}
                        aria-valuenow="72" aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>`
export const tables17=
`  <div className="table-responsive">
<table className="table text-nowrap table-striped table-hover">
    <thead>
        <tr>
            <th scope="col">Invoice</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">IN-2032</th>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Mark Cruise</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">markcruise24@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-success-transparent"><i
                className="ri-check-fill align-middle me-1"></i>Paid</Badge></td>
            <td>Jul 26,2022</td>
        </tr>
        <tr>
            <th scope="row">IN-2022</th>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Charanjeep</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">charanjeep@gmail.in</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-success-transparent"><i
                className="ri-check-fill align-middle me-1"></i>Paid</Badge></td>
            <td>Mar 14,2022</td>
        </tr>
        <tr>
            <th scope="row">IN-2014</th>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Samantha Julie</span>
                        </div>
                        <div className="lh-1">
                            <span className="fs-11 text-muted">julie453@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-danger-transparent"><i
                className="ri-close-fill align-middle me-1"></i>Cancelled</Badge>
            </td>
            <td>Feb 1,2022</td>
        </tr>
        <tr>
            <th scope="row">IN-2036</th>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Simon Cohen</span>
                        </div>
                        <div className="lh-1">
                            <span className="fs-11 text-muted">simon@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><Badge bg=" bg-light text-dark"><i
                className="ri-reply-line align-middle me-1"></i>Refunded</Badge>
            </td>
            <td>Apr 24,2022</td>
        </tr>
    </tbody>
</table>
</div>`
export const tables18=
`   <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-primary">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link href="#!" scroll={false}
                            className="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                className="ri-download-2-line"></i></Link>
                        <Link href="#!" scroll={false}
                            className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                className="ri-edit-line"></i></Link>
                        <Link href="#!" scroll={false}
                            className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                className="ri-delete-bin-line"></i></Link>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables19=
`  <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-warning">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='' className={'btn btn-{idx.color1} btn-sm'} >{idx.text4}</Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables20=
`  <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-success">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='' className={'btn btn-{idx.color1} btn-sm'} >{idx.text4}</Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables21=
` <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-info">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='' className={'btn btn-{idx.color1} btn-sm'} >{idx.text4}</Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables22=
` <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-secondary">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='' className={'btn btn-{idx.color1} btn-sm'} >{idx.text4}</Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables23=
` <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-danger">
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        {Data10.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td>{idx.text3}</td>
                <td>
                    <Button variant='' className={'btn btn-{idx.color1} btn-sm'} >{idx.text4}</Button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables24=
`      <div className="table-responsive">
<table className="table text-nowrap">
    <thead className="table-primary">
        <tr>
            <th scope="col">S.No</th>
            <th scope="col">Team</th>
            <th scope="col">Matches Won</th>
            <th scope="col">Win Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                01
            </th>
            <td>
                Manchester
            </td>
            <td>
                232
            </td>
            <td>
                <Badge bg=" bg-primary">42%</Badge>
            </td>
        </tr>
        <tr>
            <th scope="row">
                02
            </th>
            <td>
                Barcelona
            </td>
            <td>
                175
            </td>
            <td><Badge bg=" bg-primary">58%</Badge></td>
        </tr>
        <tr>
            <th scope="row">
                03
            </th>
            <td>
                Portugal
            </td>
            <td>
                126
            </td>
            <td><Badge bg=" bg-primary">32%</Badge></td>
        </tr>
    </tbody>
    <tfoot className="table-primary">
        <tr>
            <th scope="row">
                Total
            </th>
            <td>
                United States
            </td>
            <td>
                558
            </td>
            <td><Badge bg=" bg-primary">56%</Badge></td>
        </tr>
    </tfoot>
</table>
</div>`
export const tables25=
`   <div className="table-responsive">
<table className="table text-nowrap">
    <caption>Top 3 Countries</caption>
    <thead>
        <tr>
            <th scope="col">S.No</th>
            <th scope="col">Country</th>
            <th scope="col">Medals Won</th>
            <th scope="col">No Of Athletes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">01</th>
            <td>United States</td>
            <td>2012<i className="ri-medal-line mx-2"></i></td>
            <td>1823</td>
        </tr>
        <tr>
            <th scope="row">02</th>
            <td>United Kingdom</td>
            <td>1012<i className="ri-medal-line mx-2"></i></td>
            <td>992</td>
        </tr>
        <tr>
            <th scope="row">03</th>
            <td>Germany</td>
            <td>914<i className="ri-medal-line mx-2"></i></td>
            <td>875</td>
        </tr>
    </tbody>
</table>
</div>`
export const tables26=
`    <div className="table-responsive">
<table className="table text-nowrap caption-top">
    <caption>Top IT Companies</caption>
    <thead>
        <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Revenue</th>
            <th scope="col">Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Microsoft</td>
            <td>170 billion</td>
            <td>United States</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>HP</td>
            <td>72 billion</td>
            <td>United States</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>IBM</td>
            <td>60 billion</td>
            <td>United States</td>
        </tr>
    </tbody>
</table>
</div>`
export const tables27=
`  <div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr className="table-active">
            <th scope="row">Mark</th>
            <td>21,Dec 2021</td>
            <td>+1234-12340</td>
            <td><Badge bg=" bg-primary">Completed</Badge></td>
        </tr>
        <tr>
            <th scope="row">Monika</th>
            <td>29,April 2022</td>
            <td>+1523-12459</td>
            <td><Badge bg=" bg-warning">Failed</Badge></td>
        </tr>
        <tr>
            <th scope="row">Madina</th>
            <td>30,Nov 2022</td>
            <td className="table-active">+1982-16234</td>
            <td><Badge bg=" bg-success">Successful</Badge></td>
        </tr>
        <tr>
            <th scope="row">Bhamako</th>
            <td>18,Mar 2022</td>
            <td>+1526-10729</td>
            <td><Badge bg=" bg-secondary">Pending</Badge></td>
        </tr>
    </tbody>
</table>
</div>`
export const tables28=
`   <div className="table-responsive">
<table className="table text-nowrap table-sm">
    <thead>
        <tr>
            <th scope="col">Invoice</th>
            <th scope="col">Created Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {Data11.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">
                    <div className="form-check">
                        {idx.check}
                        <label className="form-check-label" htmlFor="checkebox-sm">
                            {idx.text1}
                        </label>
                    </div>
                </th>
                <td>{idx.text2}</td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text3}</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables29=
`    <div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Color</th>
            <th scope="col">Client</th>
            <th scope="col">State</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
        </tr>
    </thead>
    <tbody>
        {Data12.map((idx) => (
            <tr key={Math.random()}>
                <th scope="row">{idx.text1}</th>
                <td>{idx.text2}</td>
                <td><span className={'badge bg-{idx.color}'}>{idx.text3}</span></td>
                <td>{idx.text4}</td>
                <td>{idx.text5}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>`
export const tables30=
` <div className="table-responsive">
<table className="table text-nowrap table-striped table-bordered">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td colSpan="4">
                <table className="table text-nowrap mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Alphabets</th>
                            <th scope="col">Users</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">A</th>
                            <td>Dino King</td>
                            <td>dinoking231@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">B</th>
                            <td>Poppins sams</td>
                            <td>pops@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">C</th>
                            <td>Brian Shaw</td>
                            <td>swanbrian@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>Jimmy</td>
            <td>the Ostrich</td>
            <td>Dummy Text</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>Cobra Kai</td>
            <td>the Snake</td>
            <td>Another Name</td>
        </tr>
    </tbody>
</table>
</div>`
export const tables31=
`  <div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope="col">Team Head</th>
            <th scope="col">Category</th>
            <th scope="col">Role</th>
            <th scope="col">Gmail</th>
            <th scope="col">Team</th>
            <th scope="col">Work Progress</th>
            <th scope="col">Revenue</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                    </span>Mayor Kelly
                </div>
            </td>
            <td>Manufacturer</td>
            <td><span className="badge bg-primary-transparent">Team Lead</span></td>
            <td>mayorkrlly@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                        +4
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="52" style={{ width: "52%" }} aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </td>
            <td>10,984.29</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                    </span>Andrew Garfield
                </div>
            </td>
            <td>Managing Director</td>
            <td><Badge bg=" bg-warning-transparent">Director</Badge></td>
            <td>andrewgarfield@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                        +4
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="91" aria-valuemin="0" style={{ width: "91%" }} aria-valuemax="100">
                    </div>
                </div>
            </td>
            <td>1.4billion</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                    </span>Simon Cowel
                </div>
            </td>
            <td>Service Manager</td>
            <td><Badge bg=" bg-success-transparent">Manager</Badge></td>
            <td>simoncowel234@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                        +10
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </td>
            <td>7,123.21</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                    </span>Mirinda Hers
                </div>
            </td>
            <td>Recruiter</td>
            <td><Badge bg=" bg-danger-transparent">Employee</Badge></td>
            <td>mirindahers@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                        +6
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow="21" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </td>
            <td>2,325.45</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>`
export const tables32=
`   <div className="table-responsive">
<table className="table align-middle">
    <thead>
        <tr>
            <th scope="col" className="w-25">Heading 1</th>
            <th scope="col" className="w-25">Heading 2</th>
            <th scope="col" className="w-25">Heading 3</th>
            <th scope="col" className="w-25">Heading 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
        <tr className="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td className="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
    </tbody>
</table>
</div>`
