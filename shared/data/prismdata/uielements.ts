export const alert1=
`<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
  <i className="bi bi-x"></i>
</button>`
export const alert2=
`  {alerts.map((alert) => (
    <Alert key={alert.id} variant="success" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <Button variant="" type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}>
            <i className="bi bi-x"></i>
        </Button>
    </Alert>
))}
<Button type="button" className='mt-2' onClick={handleShowAlert}>
    Show live alert
</Button>`
export const alert3=
`   {Defaultalerts.map((idx, alt1) => (
    <Alert variant={idx.class} className="alert" role="alert" key={alt1}>
        {idx.text}
    </Alert>
))}`
export const alert4=
`    <Alert className=" alert-primary" role="alert">
A simple primary alert with <a href="#!" className="alert-link">an example
    link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-secondary" role="alert">
A simple secondary alert with <a href="#!" className="alert-link">an example
    link</a>. Give it a click if you like.
</Alert>
<Alert className=" alert-success" role="alert">
A simple success alert with <a href="#!" className="alert-link">an example
    link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-danger" role="alert">
A simple danger alert with <a href="#!" className="alert-link">an example
    link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-warning" role="alert">
A simple warning alert with <a href="#!" className="alert-link">an example
    link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-info" role="alert">
A simple info alert with <a href="#!" className="alert-link">an example link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-light" role="alert">
A simple light alert with <a href="#!" className="alert-link">an example
    link</a>.
Give it a click if you like.
</Alert>
<Alert className=" alert-dark" role="alert">
A simple dark alert with <a href="#!" className="alert-link">an example link</a>.
Give it a click if you like.
</Alert>`
export const alert5=
`   {outlinealert.map((idx, alt4) => (
    <Alert variant={idx.class} className="alert alert- alert-dismissible fade show" key={alt4}>
        {idx.text}
        <Button variant='' type="button" className="btn-close"
            onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
))}
))} `
export const alert6=
`    {outlinealert.map((idx, alt4) => (
    <Alert variant={idx.class} className="alert alert- alert-dismissible fade show" key={alt4}>
        {idx.text}
        <Button variant='' type="button" className="btn-close"
            onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert7=
`     {shadowsolidalert.map((idx, alt5) => (
    <Alert variant={idx.class} className={"alert shadow-{idx.size} alert-dismissible fade show"} key={alt5}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
            onClick={() => handleRemove2(idx.id)}
            aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert8=
`    {Defaultsolidalerts.map((idx, alt6) => (
    <Alert variant={idx.class} className={"alert shadow-{idx.size}"} key={alt6}>A simple primary alert with small shadow—check it out!</Alert>
))}`
export const alert9=
` {roundedsolidalert.map((idx, alt7) => (
    <Alert variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={alt7}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove3(idx.id)}>
            <i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert10=
`  {roundedoutlinealert.map((idx) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert11=
`   {roundeddefaultalert.map((idx) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
        {idx.text}
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove5(idx.id)}
        ><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert12=
` {roundedwithbtnalert.map((idx) => (
    <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
        {idx.text}
        <Button variant='' type="button" className="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"
            onClick={() => handleRemove6(idx.id)}>
            <i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert13=
` <Alert className=" alert-primary d-flex align-items-center" role="alert">
<svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
<div>
    An example alert with an icon
</div>
</Alert>
<Alert className=" alert-success d-flex align-items-center" role="alert">
<svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
<div>
    An example success alert with an icon
</div>
</Alert>
<Alert className=" alert-warning d-flex align-items-center" role="alert">
<svg className="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
<div>
    An example warning alert with an icon
</div>
</Alert>
<Alert className=" alert-danger d-flex align-items-center" role="alert">
<svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
<div>
    An example danger alert with an icon
</div>
</Alert>`
export const alert14=
`    {customized1alert.map((idx) => (
    <Alert variant={idx.color} className="alert alert-dismissible fade show custom-alert-icon shadow-sm" role="alert" key={Math.random()}>
        <svg className={"svg-{idx.color}"} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>  A customized {idx.color} alert with an icon
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove12(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert15=
`         {imagesalert.map((idx) => (
    <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={Math.random()}>
        <div className="avatar avatar-sm me-3 avatar-rounded">
            <img src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove8(idx.id)}
        ><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert16=
`  {avataralert.map((idx) => (
    <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={Math.random()}>
        <div className={"avatar avatar-{idx.class} me-3"}>
            <img src={idx.src1} alt="img" />
        </div>
        <div>A simple {idx.color} alert with image—check it out!</div>
        <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove9(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert>
))}`
export const alert17=
`   <Row className=" gy-3">
{additionalcontentalert.map((idx) => (
    <Col xl={6} key={Math.random()}>
        <Alert variant={idx.class} className="alert  overflow-hidden p-0" role="alert">
            <div className={"p-3 bg-{idx.class}  d-flex justify-content-between"}>
                <h6 className="aletr-heading mb-0 text-fixed-white">{idx.text1}</h6>
                <Button type="button" variant='' className="btn-close p-0 text-fixed-white"
                    onClick={() => handleRemove7(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
            </div>
            <hr className="my-0" />
            <div className="p-3">
                <p className="mb-0">{idx.text2}<Link href="#!" className="fw-semibold text-decoration-underline">{idx.text3}</Link></p>
            </div>
        </Alert>
    </Col>
))}
</Row>`
export const badge1=
` <Badge bg="secondary">Secondary</Badge>
<Badge bg="success">Success</Badge>
<Badge bg="danger">Danger</Badge>
<Badge bg="warning">Warning</Badge>
<Badge bg="info">Info</Badge>
<Badge bg="light" text="dark">Light</Badge>
<Badge bg="dark" text="white">Dark</Badge>`
export const badge2=
`    <Badge bg=" rounded-pill bg-primary">Primary</Badge>
<Badge bg=" rounded-pill bg-secondary">Secondary</Badge>
<Badge bg=" rounded-pill bg-success">Success</Badge>
<Badge bg=" rounded-pill bg-danger">Danger</Badge>
<Badge bg=" rounded-pill bg-warning">Warning</Badge>
<Badge bg=" rounded-pill bg-info">Info</Badge>
<Badge bg=" rounded-pill bg-light text-dark">Light</Badge>
<Badge bg=" rounded-pill bg-dark text-white">Dark</Badge>`
export const badge3=
`  <Badge bg=" bg-primary-transparent">Primary</Badge>
<Badge bg=" bg-secondary-transparent">Secondary</Badge>
<Badge bg=" bg-success-transparent">Success</Badge>
<Badge bg=" bg-danger-transparent">Danger</Badge>
<Badge bg=" bg-warning-transparent">Warning</Badge>
<Badge bg=" bg-info-transparent">Info</Badge>
<Badge bg=" bg-light-transparent text-dark">Light</Badge>
<Badge bg=" bg-dark-transparent">Dark</Badge>`
export const badge4=
` <Badge bg=" rounded-pill bg-primary-transparent">Primary</Badge>
<Badge bg=" rounded-pill bg-secondary-transparent">Secondary</Badge>
<Badge bg=" rounded-pill bg-success-transparent">Success</Badge>
<Badge bg=" rounded-pill bg-danger-transparent">Danger</Badge>
<Badge bg=" rounded-pill bg-warning-transparent">Warning</Badge>
<Badge bg=" rounded-pill bg-info-transparent">Info</Badge>
<Badge bg=" rounded-pill bg-light-transparent text-dark">Light</Badge>
<Badge bg=" rounded-pill bg-dark-transparent">Dark</Badge>`
export const badge5=
`  <Badge bg=" bg-primary-gradient">Primary</Badge>
<Badge bg=" bg-secondary-gradient">Secondary</Badge>
<Badge bg=" bg-success-gradient">Success</Badge>
<Badge bg=" bg-danger-gradient">Danger</Badge>
<Badge bg=" bg-warning-gradient">Warning</Badge>
<Badge bg=" bg-info-gradient">Info</Badge>
<Badge bg=" bg-orange-gradient">orange</Badge>
<Badge bg=" bg-purple-gradient">purple</Badge>`
export const badge6=
` <Badge bg=" rounded-pill bg-primary-gradient">Primary</Badge>
<Badge bg=" rounded-pill bg-secondary-gradient">Secondary</Badge>
<Badge bg=" rounded-pill bg-success-gradient">Success</Badge>
<Badge bg=" rounded-pill bg-danger-gradient">Danger</Badge>
<Badge bg=" rounded-pill bg-warning-gradient">Warning</Badge>
<Badge bg=" rounded-pill bg-info-gradient">Info</Badge>
<Badge bg=" rounded-pill bg-orange-gradient">orange</Badge>
<Badge bg=" rounded-pill bg-purple-gradient">purple</Badge>`
export const badge7=
` <Badge bg=" bg-outline-primary">Primary</Badge>
<Badge bg=" bg-outline-secondary">Secondary</Badge>
<Badge bg=" bg-outline-success">Success</Badge>
<Badge bg=" bg-outline-danger">Danger</Badge>
<Badge bg=" bg-outline-warning">Warning</Badge>
<Badge bg=" bg-outline-info">Info</Badge>
<Badge bg=" bg-outline-light text-dark">Light</Badge>
<Badge bg=" bg-outline-dark">Dark</Badge>`
export const badge8=
`    <Button variant="primary" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-secondary">4</Badge>
</Button>
<Button variant="secondary" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-primary">7</Badge>
</Button>
<Button variant="success" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-danger">12</Badge>
</Button>
<Button variant="info" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-warning">32</Badge>
</Button>`
export const badge9=
`    <Button variant="primary" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-secondary">4</Badge>
</Button>
<Button variant="secondary" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-primary">7</Badge>
</Button>
<Button variant="success" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-danger">12</Badge>
</Button>
<Button variant="info" className="my-1 me-2">
Notifications <Badge bg=" ms-2 bg-warning">32</Badge>
</Button>`
export const badge10=
`  <h1>Example heading <Badge bg=" bg-primary">New</Badge></h1>
<h2>Example heading <Badge bg=" bg-primary">New</Badge></h2>
<h3>Example heading <Badge bg=" bg-primary">New</Badge></h3>
<h4>Example heading <Badge bg=" bg-primary">New</Badge></h4>
<h5>Example heading <Badge bg=" bg-primary">New</Badge></h5>
<h6>Example heading <Badge bg=" bg-primary">New</Badge></h6>`
export const badge11=
`       <button type="button" className="btn btn-primary position-relative">
Inbox
<span
    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
</span>
</button>
<button type="button" className="btn btn-secondary position-relative">
Profile
<span
    className="position-absolute top-80 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
</span>
</button>
<span className="avatar">
<img src="../../assets/images/faces/2.jpg" alt="img" />
<span
    className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded">
<img src="../../assets/images/faces/15.jpg" alt="img" />
<span className="position-absolute top-80 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
    <span className="visually-hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded">
<img src="../../assets/images/faces/10.jpg" alt="img" />
<span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
    <span className="visually-hidden">New alerts</span>
</span>
</span>`
export const badge12=
`     <div className="d-flex align-items-center gap-5 flex-wrap">
<div>
    <Badge bg=" bg-outline-secondary custom-badge fs-15 d-inline-flex align-items-center"><i className="ti ti-flame me-1"></i>Hot</Badge>
</div>
<div>
    <span className="icon-badge">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
        <Badge bg=" rounded-pill bg-success">14</Badge>
    </span>
</div>
<div>
    <Badge bg=" border bg-light text-default custom-badge"><i className="fe fe-eye me-2 d-inline-block"></i>13.2k</Badge>
</div>
<div>
    <span className="text-badge">
        <span className="text fs-18">Inbox</span>
        <Badge bg=" rounded-pill bg-success">32</Badge>
    </span>
</div>
</div>`
// end bages prism data //
export const breadcrumb1=
`    <Navbar aria-label="breadcrumb">
<ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</Navbar>

<nav aria-label="breadcrumb p-0">
<ol className="breadcrumb">
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb  p-0">
<ol className="breadcrumb">
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>`
export const breadcrumb2=
`    <Navbar aria-label="breadcrumb  p-0">
<ol className="breadcrumb breadcrumb-example1">
    <li className="breadcrumb-item active" aria-current="page">Home</li>
</ol>
</Navbar>

<Navbar aria-label="breadcrumb  p-0">
<ol className="breadcrumb breadcrumb-example1">
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</Navbar>

<Navbar aria-label="breadcrumb  p-0">
<ol className="breadcrumb breadcrumb-example1">
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
    <li className="breadcrumb-item"><Link href="#!" scroll={false}>Library</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</Navbar>`
export const breadcrumb3=
`  <ol className="breadcrumb">
<li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
<li className="breadcrumb-item active" aria-current="page">Library</li>
</ol>`
export const breadcrumb4=
`  <ol className="breadcrumb">
<li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
<li className="breadcrumb-item active embedded-breadcrumb" aria-current="page">Library</li>
</ol>`
export const breadcrumb5=
`  <nav aria-label="breadcrumb  p-0">
<Breadcrumb className="breadcrumb breadcrumb-style2">
    <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</Breadcrumb>
</nav>`
export const breadcrumb6=
`   <ol className="breadcrumb mb-0">
<li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
<li className="breadcrumb-item" aria-current="page">Library</li>
</ol>`
export const breadcrumb7=
`   <ol className="breadcrumb mb-0">
<li className="breadcrumb-item"><Link href="#!" scroll={false}>Home</Link></li>
<li className="breadcrumb-item" aria-current="page">Library</li>
</ol>`
// end of breadcrumb prism data//
export const buttongroup1 =
`  <div className="btn-group" role="group" aria-label="Basic example">
<button type="button" className="btn btn-info btn-wave"><i className="bi bi-skip-backward"></i></button>
<button type="button" className="btn btn-info btn-wave"><i className="bi bi-pause"></i></button>
<button type="button" className="btn btn-info btn-wave"><i className="bi bi-skip-forward"></i></button>
</div>`
export const buttongroup2 =
`       <div className="btn-group">
<Link href="#!" scroll={false} className="btn btn-primary active btn-wave" aria-current="page">Active
    link</Link>
<Link href="#!" scroll={false} className="btn btn-primary">Link</Link>
<Link href="#!" scroll={false} className="btn btn-primary">Link</Link>
</div>`
export const buttongroup3 =
` <div className="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" className="btn btn-danger btn-wave">Left</button>
<button type="button" className="btn btn-warning btn-wave">Middle</button>
<button type="button" className="btn btn-success btn-wave">Right</button>
</div>`
export const buttongroup4 =
`  <div className="btn-group" role="group" aria-label="Basic outlined example">
<button type="button" className="btn btn-outline-primary btn-wave">Left</button>
<button type="button" className="btn btn-outline-primary btn-wave">Middle</button>
<button type="button" className="btn btn-outline-primary btn-wave">Right</button>
</div>`
export const buttongroup5 =
`    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
<Form.Control type="checkbox" className="btn-check" id="btncheck1" />
<label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

<Form.Control type="checkbox" className="btn-check" id="btncheck2" />
<label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

<Form.Control type="checkbox" className="btn-check" id="btncheck3" />
<label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</div>`
export const buttongroup6 =
`   <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked />
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3"
/>
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
</div>`
export const buttongroup7 =
`      <div className="btn-toolbar mb-4" role="toolbar"
aria-label="Toolbar with button groups">
<div className="btn-group me-2 my-1" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary">1</button>
    <button type="button" className="btn btn-primary">2</button>
    <button type="button" className="btn btn-primary">3</button>
    <button type="button" className="btn btn-primary">4</button>
</div>
<div className="btn-group me-2 my-1" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary">5</button>
    <button type="button" className="btn btn-secondary">6</button>
    <button type="button" className="btn btn-secondary">7</button>
</div>
<div className="btn-group my-1" role="group" aria-label="Third group">
    <button type="button" className="btn btn-info">8</button>
</div>
</div>
<div className="btn-toolbar mb-3" role="toolbar"
aria-label="Toolbar with button groups">
<div className="btn-group me-2 my-1" role="group" aria-label="First group">
    <button type="button" className="btn btn-outline-secondary">1</button>
    <button type="button" className="btn btn-outline-secondary">2</button>
    <button type="button" className="btn btn-outline-secondary">3</button>
    <button type="button" className="btn btn-outline-secondary">4</button>
</div>
<div className="input-group">
    <div className="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" className="form-control"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon" />
</div>
</div>
<div className="btn-toolbar justify-content-between d-sm-flex d-block" role="toolbar"
aria-label="Toolbar with button groups">
<div className="btn-group my-1" role="group" aria-label="First group">
    <button type="button" className="btn btn-outline-secondary">1</button>
    <button type="button" className="btn btn-outline-secondary">2</button>
    <button type="button" className="btn btn-outline-secondary">3</button>
    <button type="button" className="btn btn-outline-secondary">4</button>
</div>
<div className="input-group">
    <div className="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" className="form-control"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2" />
</div>
</div>
`
export const buttongroup8 =
`  <div className="btn-group" role="group"
aria-label="Button group with nested dropdown">
<button type="button" className="btn btn-primary">1</button>
<button type="button" className="btn btn-primary">2</button>

<Dropdown className="btn-group" role="group">
    <Dropdown.Toggle id="btnGroupDrop1" type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false"> Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu as='ul' aria-labelledby="btnGroupDrop1">
        <Dropdown.Item as='li' href="#;">Dropdown link</Dropdown.Item>
        <Dropdown.Item as='li' href="#;">Dropdown link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>`
export const buttongroup9 =
`       <Row className=" gap-2">
<Col sm={3}>
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button type="button" className="btn btn-primary">Button</button>
        <button type="button" className="btn btn-primary">Button</button>
        <Dropdown className="btn-group" role="group">
            <Dropdown.Toggle id="btnGroupVerticalDrop1" type="button"
                className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false"> Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop1">
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <button type="button" className="btn btn-primary">Button</button>
        <button type="button" className="btn btn-primary">Button</button>
        <Dropdown className="btn-group" role="group">
            <Dropdown.Toggle id="btnGroupVerticalDrop2" type="button"
                className="btn btn-primary" data-bs-toggle="dropdown"
                aria-expanded="false"> Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop2">
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group" role="group">
            <Dropdown.Toggle id="btnGroupVerticalDrop3" type="button"
                className="btn btn-primary" data-bs-toggle="dropdown"
                aria-expanded="false"> Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop3">
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group" role="group">
            <Dropdown.Toggle id="btnGroupVerticalDrop4" type="button"
                className="btn btn-primary" data-bs-toggle="dropdown"
                aria-expanded="false"> Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu as='ul' aria-labelledby="btnGroupVerticalDrop4">
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
                <Dropdown.Item href="#!">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
<Col sm={3}>
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button type="button" className="btn btn-info">Button</button>
        <button type="button" className="btn btn-info">Button</button>
        <button type="button" className="btn btn-info">Button</button>
        <button type="button" className="btn btn-info">Button</button>
        <button type="button" className="btn btn-info">Button</button>
        <button type="button" className="btn btn-info">Button</button>
    </div>
</Col>
<Col sm={3}>
    <div className="btn-group-vertical" role="group"
        aria-label="Vertical radio toggle button group">
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
            defaultChecked />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
    </div>
</Col>
</Row>`
export const buttongroup10 =
`    <div className="btn-group" role="group" aria-label="Basic example">
<button className="btn btn-icon btn-facebook btn-wave">
    <i className="ri-facebook-line"></i>
</button>
<button className="btn btn-icon btn-twitter-x btn-wave">
    <i className="ri-twitter-x-line"></i>
</button>
<button className="btn btn-icon btn-instagram btn-wave">
    <i className="ri-instagram-line"></i>
</button>
<button className="btn btn-icon btn-github btn-wave">
    <i className="ri-github-line"></i>
</button>
<button className="btn btn-icon btn-youtube btn-wave">
    <i className="ri-youtube-line"></i>
</button>
<button className="btn btn-icon btn-google btn-wave">
    <i className="ri-google-line"></i>
</button>
</div>`

// end of button group prism data//
export const button1=
`   <div className="btn-list">
{DefaultButtons.map((idx) => (
    <Button variant={idx.class} type="button" className="btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div>`
export const button2=
`<div className="btn-list">
{DefaultButtons.map((idx) => (
    <Button variant={idx.class} type="button" className="rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button3=
`   <div className="btn-list">
{LightButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button4=
` <div className="btn-list">
{LightButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button5=
`   <div className="btn-list">
{OutlineButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn  btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div>`
export const button6=
`  <div className="btn-list">
{OutlineButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill  btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div>`
export const button7=
`     <div className="btn-list">
{GradientButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button8=
`  <div className="btn-list">
{GradientButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button9=
`     <div className="btn-list">
{GhostButtons.map((idx) => (
    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
))}
</div> `
export const button10=
`  <div className="btn-list">
<div className="mb-4">
    <button type="button" className="btn btn-primary btn-wave" data-bs-toggle="button"
    >Toggle button</button>
    <button type="button" className="btn btn-secondary active btn-wave" data-bs-toggle="button"
        aria-pressed="true">Active toggle button</button>
    <button type="button" className="btn btn-teal btn-wave" disabled data-bs-toggle="button"
    >Disabled toggle
        button</button>
</div>
<div>
    <Link href="#!" scroll={false} className="btn btn-primary btn-wave" role="button" data-bs-toggle="button">Toggle
        link</Link>
    <Link href="#!" scroll={false} className="btn btn-secondary active btn-wave" role="button" data-bs-toggle="button"
        aria-pressed="true">Active toggle link</Link>
    <Link href="#!" scroll={false} className="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
        data-bs-toggle="button">Disabled toggle link</Link>
</div>
</div>`
export const button11=
`  <div className="btn-list">
<Link href="#!" scroll={false} className="btn btn-primary disabled" tabIndex="-1" role="button"
    aria-disabled="true">Primary link</Link>
<Link href="#!" scroll={false} className="btn btn-secondary disabled" tabIndex="-1" role="button"
    aria-disabled="true">Link</Link>
</div> `
export const button12=
`     <div className="btn-list">
<div className="mb-4">
    <button type="button" className="btn btn-primary btn-wave" data-bs-toggle="button"
    >Toggle button</button>
    <button type="button" className="btn btn-secondary active btn-wave" data-bs-toggle="button"
        aria-pressed="true">Active toggle button</button>
    <button type="button" className="btn btn-teal btn-wave" disabled data-bs-toggle="button"
    >Disabled toggle
        button</button>
</div>
<div>
    <Link href="#!" scroll={false} className="btn btn-primary btn-wave" role="button" data-bs-toggle="button">Toggle
        link</Link>
    <Link href="#!" scroll={false} className="btn btn-secondary active btn-wave" role="button" data-bs-toggle="button"
        aria-pressed="true">Active toggle link</Link>
    <Link href="#!" scroll={false} className="btn btn-teal disabled btn-wave" aria-disabled="true" role="button"
        data-bs-toggle="button">Disabled toggle link</Link>
</div>
</div>`
export const button13=
`  <div className="btn-list">
<Link href="#!" scroll={false} className="btn btn-primary disabled" tabIndex="-1" role="button"
    aria-disabled="true">Primary link</Link>
<Link href="#!" scroll={false} className="btn btn-secondary disabled" tabIndex="-1" role="button"
    aria-disabled="true">Link</Link>
</div> `
export const button14=
`   <div className="btn-list d-md-flex flex-wrap">
<button className="btn btn-primary btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</button>
<button className="btn btn-outline-secondary btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
</button>
<button className="btn btn-info-transparent btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
</button>
<button className="btn btn-warning-transparent btn-loader">
    <span className="me-2">Loading</span>
    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
</button>
<button className="btn btn-success btn-loader disabled">
    <span className="me-2">Disabled</span>
    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
</button>
</div> `
export const button15=
`   <div className="btn-list d-md-flex d-block">
<div className="mb-md-0 mb-2">
    <button className="btn btn-icon btn-primary btn-wave">
        <i className="ri-bank-fill"></i>
    </button>
    <button className="btn btn-icon btn-info btn-wave">
        <i className="ri-medal-line"></i>
    </button>
    <button className="btn btn-icon btn-danger btn-wave">
        <i className="ri-archive-line"></i>
    </button>
    <button className="btn btn-icon btn-warning btn-wave me-5">
        <i className="ri-calendar-2-line"></i>
    </button>
</div>
<div className="mb-md-0 mb-2">
    <button className="btn btn-icon btn-primary-transparent rounded-pill btn-wave">
        <i className="ri-home-smile-line"></i>
    </button>
    <button className="btn btn-icon btn-secondary-transparent rounded-pill btn-wave">
        <i className="ri-delete-bin-line"></i>
    </button>
    <button className="btn btn-icon btn-success-transparent rounded-pill btn-wave">
        <i className="ri-notification-3-line"></i>
    </button>
    <button className="btn btn-icon btn-danger-transparent rounded-pill btn-wave me-5">
        <i className="ri-chat-settings-line"></i>
    </button>
</div>
<div className="">
    <button className="btn btn-icon btn-outline-primary rounded-pill btn-wave">
        <i className="ri-phone-line"></i>
    </button>
    <button className="btn btn-icon btn-outline-teal rounded-pill btn-wave">
        <i className="ri-customer-service-2-line"></i>
    </button>
    <button className="btn btn-icon btn-outline-success rounded-pill btn-wave">
        <i className="ri-live-line"></i>
    </button>
    <button className="btn btn-icon btn-outline-secondary rounded-pill btn-wave">
        <i className="ri-save-line"></i>
    </button>
</div>
</div> `
export const button16=
` <div className="btn-list">
{SocialIconButtons.map((idx) => (
    <Button variant={idx.class} className="btn btn-icon btn-wave" key={Math.random()}>
        <i className={ri-{idx.class}-line}></i>
    </Button>
))}
</div> `
export const button17=
`    <ShowCode title="Social Buttons" code={button17}>
<div className="btn-list">
                <button type="button" className="btn btn-primary btn-sm btn-wave">Small
                    button</button>
                <button type="button" className="btn btn-secondary btn-wave">Default
                    button</button>
                <button type="button" className="btn btn-success btn-lg btn-wave">Large
                    button</button>
            </div>
        </ShowCode> `
export const button18=
`    <ShowCode title="Button Widths" code={button18}>
<div className="btn-list">
    <button type="button" className="btn btn-primary btn-w-xs btn-wave">XS</button>
    <button type="button" className="btn btn-secondary btn-w-sm btn-wave">SM</button>
    <button type="button" className="btn btn-warning btn-w-md btn-wave">MD</button>
    <button type="button" className="btn btn-info btn-w-lg btn-wave">LG</button>
</div>
</ShowCode> `
export const button19=
`     <ShowCode title="Buttons With Different Shadows" code={button18}>
<div className="btn-list d-flex">
    <div className="me-5">
        <button className="btn btn-primary shadow-sm btn-wave">Button</button>
        <button className="btn btn-primary shadow btn-wave">Button</button>
        <button className="btn btn-primary shadow-lg btn-wave">Button</button>
    </div>
    <div>
        <button className="btn btn-secondary btn-sm shadow-sm btn-wave">Button</button>
        <button className="btn btn-info shadow btn-wave">Button</button>
        <button className="btn btn-lg btn-success shadow-lg btn-wave">Button</button>
    </div>
</div>
</ShowCode> `
export const button20=
`      <div className="btn-list">
{ColoredButtons.map((idx) => (
    <Button variant={idx.class} className={btn shadow-{idx.class} btn-wave} key={Math.random()}>Button</Button>
))}
</div> `
export const button21=
` <div className="btn-list">
{ColoredButtons.map((idx) => (
    <Button variant={idx.class} className="btn  btn-raised-shadow btn-wave" key={Math.random()}>Button</Button>
))}
</div> `
export const button22=
`
<div className="btn-list">
    <button className="btn btn-primary label-btn">
        <i className="ri-chat-smile-line label-btn-icon me-2"></i>
        Primary
    </button>
    <button className="btn btn-secondary label-btn">
        <i className="ri-settings-4-line label-btn-icon me-2"></i>
        Secondary
    </button>
    <button className="btn btn-warning label-btn rounded-pill">
        <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
        Warning
    </button>
    <button className="btn btn-info label-btn rounded-pill">
        <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
        Info
    </button>
    <button className="btn btn-success label-btn label-end">
        Success
        <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
    </button>
    <button className="btn btn-danger label-btn label-end rounded-pill">
        Cancel
        <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
    </button>
</div> `
export const button23=
`
<div className="btn-list">
<button className="btn btn-info custom-button rounded-pill">
    <span className="custom-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
    Twitter
</button>
<button className="btn btn-teal-light btn-border-down">Border</button>
<button className="btn btn-secondary-light btn-border-start">Border</button>
<button className="btn btn-purple-light btn-border-end">Border</button>
<button className="btn btn-warning-light btn-border-top">Border</button>
<button className="btn btn-secondary btn-glare"><span>Glare Button</span></button>
<button className="btn btn-danger btn-hover btn-hover-animate">Like</button>
<button className="btn btn-success btn-darken-hover">Hover</button>
<button className="btn btn-orange btn-custom-border">Hover</button>
</div>`
export const button24=
`    <div className="btn-list">
<div className="d-grid gap-2 mb-4">
    <button className="btn btn-primary btn-wave" type="button">Button</button>
    <button className="btn btn-secondary btn-wave" type="button">Button</button>
</div>
<div className="d-grid gap-2 d-md-block">
    <button className="btn btn-info btn-wave" type="button">Button</button>
    <button className="btn btn-success btn-wave" type="button">Button</button>
</div>
<div className="d-grid gap-2 col-6 mx-auto">
    <button className="btn btn-danger btn-wave" type="button">Button</button>
    <button className="btn btn-warning btn-wave" type="button">Button</button>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button className="btn btn-teal me-md-2 btn-wave" type="button">Button</button>
    <button className="btn btn-purple btn-wave" type="button">Button</button>
</div>
</div>`

export const dropdown1=
`    <div className="btn-list d-flex align-items-center flex-wrap">
<Dropdown>
    <Dropdown.Toggle className='a dropdown-toggle-drop'>
        Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu as='ul'>
        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Dropdown>
    <Dropdown.Toggle as='a' className="btn btn-secondary dropdown-toggle-drop " role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </Dropdown.Toggle>
    <Dropdown.Menu as='ul' aria-labelledby="dropdownMenuLink">
        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>`
export const dropdown2=
`  <div className="btn-list">
{SingleButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle type="button" variant={idx.class} className="btn dropdown-toggle-drop"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`
export const dropdown3=`
<div className="btn-list">
{SingleButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill dropdown-toggle-drop"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
`
export const dropdown4=`
<div className="btn-list">
{OutlineButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle dropdown-toggle-drop"
                data-bs-toggle="dropdown" aria-expanded="false">
                Action
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul">
                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
`
export const dropdown5=`
<div className="btn-list">

{OutlineButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
        <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill dropdown-toggle-drop"
            data-bs-toggle="dropdown" aria-expanded="false">
            Action
        </Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>
`
export const dropdown6=`
{SplitButtons.map((idx) => (
    <Dropdown className="btn-group my-1" key={Math.random()}>
        <Button variant={idx.class} type="button" className="btn btn-primary ">Action</Button>
        <Dropdown.Toggle variant={idx.class} type="button"
            className="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
            data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
))}
`
export const dropdown7=`
<Dropdown className="btn-group my-1 me-2">
<Dropdown.Toggle className="btn btn-primary btn-lg dropdown-toggle dropdown-toggle-drop" type="button">
    Large button
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' className='px-0'>
        <hr className="dropdown-divider" />
    </Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown className="btn-group my-1 me-2">
<button className="btn btn-light btn-lg" type="button">
    Large split button
</button>
<Dropdown.Toggle type="button" variant=''
    className="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split">
    <span className="visually-hidden">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' className='px-0'>
        <hr className="dropdown-divider" />
    </Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown className="btn-group my-1 me-2">
<Dropdown.Toggle className=" btn-sm dropdown-toggle dropdown-toggle-drop"
    data-bs-toggle="dropdown" aria-expanded="false">
    Small button
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' className='px-0'>
        <hr className="dropdown-divider" />
    </Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown className="btn-group my-1">
<button className="btn btn-light btn-sm" type="button">
    Small split button
</button>
<Dropdown.Toggle type="button" variant=''
    className="btn btn-sm btn-light dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' className='px-0'>
        <hr className="dropdown-divider" />
    </Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ShowCode>
`
export const dropdown8=`
<Dropdown drop="up" className="btn-group dropup my-1 me-2">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown drop="up" className="btn-group dropup my-1">
<Button variant='' type="button" className="btn btn-info">
    Split dropup
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
`
export const dropdown9=`
<Dropdown className="btn-group dropend my-1 me-2" drop="end">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown drop="end" className="btn-group dropend my-1">
<Button variant='' type="button" className="btn btn-info">
    Split dropend
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropright</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    <Dropdown.Divider className="dropdown-divider" />
    <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
`
export const dropdown10=`
<Dropdown className="btn-group dropstart my-1 me-2">
<Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle">
    Dropleft
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown className="btn-group">
<div className="btn-group dropstart my-1" role="group">
    <Dropdown.Toggle type="button"
        className="btn btn-info  dropdown-toggle-split"
    >
        <span className="visually-hidden">Toggle Dropstart</span>
    </Dropdown.Toggle>
    <Dropdown.Menu as='ul'>
        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</div>
<button type="button" className="btn btn-info my-1">
    Split dropleft
</button>
</Dropdown>
`
export const dropdown11=`
<Dropdown>
<Dropdown.Toggle as='a' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Regular link</Dropdown.Item>
    <Dropdown.Item as='li' className='active' href="#!">Active link</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`
export const dropdown12=`
<Dropdown>
<Dropdown.Toggle as='a' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Regular link</Dropdown.Item>
    <Dropdown.Item as='li' className='active' href="#!">Active link</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`
export const dropdown13=`
<div className="btn-list">
{AutocloseButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle  dropdown-toggle-drop " type="button"
                id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                aria-expanded="false">
                {idx.text}
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`
export const dropdown14=`
<Dropdown>
<Dropdown.Toggle className="btn btn-secondary dropdown-toggle dropdown-toggle-drop  " type="button" id="dropdownMenu2"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu>
    <form className="px-4 py-3">
        <div className="mb-3">
            <label for="exampleDropdownFormEmail1" className="form-label">Email
                address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                placeholder="email@example.com" />
        </div>
        <div className="mb-3">
            <label for="exampleDropdownFormPassword1"
                className="form-label">Password</label>
            <input type="password" className="form-control"
                id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" for="dropdownCheck">
                    Remember me
                </label>
            </div>
        </div>
        <button className="btn btn-primary">Sign in</button>
    </form>
    <div className="dropdown-divider"></div>
    <Dropdown.Item href="#!">New around here? Sign up</Dropdown.Item>
    <Dropdown.Item href="#!">Forgot password?</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`
export const dropdown15=`
<p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
</p>
<Dropdown className="dropdown-center">
    <Dropdown.Toggle className="btn btn-primary dropdown-toggle dropdown-toggle-drop " type="button"
        id="dropdownCenterBtn">
        Centered dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu as='ul' aria-labelledby="dropdownCenterBtn">
        <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Action two</Dropdown.Item>
        <Dropdown.Item as='li' href="#!">Action three</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>`
export const dropdown16=`
<p className="card-title mb-3">Use <code>.dropup-center</code>
on the parent element.
</p>
<Dropdown className="dropup-center dropup" drop="up">
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action two</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`
export const dropdown17=`
<p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
dropdown items.</p>
<Dropdown>
<Dropdown.Toggle className="btn btn-info dropdown-toggle dropdown-toggle-drop " type="button"
    id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu as='ul' aria-labelledby="dropdownMenu1">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button>
    </li>
    <li><button className="dropdown-item" type="button">Something else
        here</button>
    </li>
</Dropdown.Menu>
</Dropdown>`
export const dropdown18=`
<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
the location of the dropdown.</p>
<div className="d-flex align-items-center flex-wrap">
<Dropdown className="dropdown me-1 mt-1">
    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
        id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
        data-bs-offset="10,20">
        Offset
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
        <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<ButtonGroup className="btn-group custom-btn-group mt-1">
    <Button variant='' type="button" className="btn btn-info">Reference</Button>
    <Dropdown>
        <Dropdown.Toggle variant='' type="button"
            className="btn btn-info dropdown-toggle dropdown-toggle-split"
            id="dropdownMenuReference" data-bs-toggle="dropdown"
            aria-expanded="false" data-bs-reference="parent">
            <span className="visually-hidden">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
            <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
            <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider" />
            <Dropdown.Item as="li" href="#!">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</ButtonGroup>
</div>`
export const dropdown19=`
<div className="btn-list">
{AlignmentButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown drop={idx.dir}>
            <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
                id="dropdownMenuButton" data-bs-toggle="dropdown"
                aria-expanded="false">
                {idx.text}
            </Dropdown.Toggle>
            <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Menu item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`
export const dropdown20=`
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
    id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
    <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`
export const dropdown21=`
<Dropdown className="btn-group">
<Dropdown.Toggle type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-drop "
    data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
</Dropdown.Toggle>
<Dropdown.Menu as='ul' className=" dropdown-menu-end">
    <li><button className="dropdown-item" type="button">Action</button>
    </li>
    <li><button className="dropdown-item" type="button">Another
        action</button></li>
    <li><button className="dropdown-item" type="button">Something else
        here</button>
    </li>
</Dropdown.Menu>
</Dropdown>`
export const dropdown22=`
<Dropdown className="btn-group">
<Dropdown.Toggle type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-drop  text-wrap"
    data-bs-toggle="dropdown" data-bs-display="static"
    aria-expanded="false">
    Left-aligned but right aligned when large screen
</Dropdown.Toggle>
<Dropdown.Menu as='ul' className=" dropdown-menu-lg-end">
    <li><button className="dropdown-item" type="button">Action</button>
    </li>
    <li><button className="dropdown-item" type="button">Another
        action</button></li>
    <li><button className="dropdown-item" type="button">Something else
        here</button>
    </li>
</Dropdown.Menu>
</Dropdown>`
export const dropdown23=`
<Dropdown className="btn-group">
<Dropdown.Toggle type="button" className="btn btn-info dropdown-toggle dropdown-toggle-drop  text-wrap"
    data-bs-toggle="dropdown" data-bs-display="static"
    aria-expanded="false">
    Left-aligned but right aligned when large screen
</Dropdown.Toggle>
<Dropdown.Menu as='ul' className="dropdown-menu-lg-start">
    <li><button className="dropdown-item" type="button">Action</button>
    </li>
    <li><button className="dropdown-item" type="button">Another
        action</button></li>
    <li><button className="dropdown-item" type="button">Something else
        here</button></li>
</Dropdown.Menu>
</Dropdown>`
export const dropdown24=`
<div className="btn-list">
{CustomButtons.map((idx) => (
    <div className="btn-group" key={Math.random()}>
        <Dropdown>
            <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {idx.text}
            </Dropdown.Toggle>
            <Dropdown.Menu className={'dropdown-menu dropdown-{idx.class1} dropmenu-{idx.class2}'}>
                <Dropdown.Item className={'{idx.class3} '} href="#!">Action</Dropdown.Item>
                <Dropdown.Item className={idx.class3} href="#!">Another action</Dropdown.Item>
                <Dropdown.Item className={idx.class3} href="#!">Something else here</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
))}
</div>`
export const dropdown25=`
<p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li>
            <h6 className="dropdown-header">Dropdown header</h6>
        </li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link></li>
    </ul>
</div>`
export const dropdown26=`
<p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li><span className="dropdown-item-text">Dropdown item text</span>
        </li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link>
        </li>
    </ul>
</div>`
export const dropdown27=`
<p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li>
            <h6 className="dropdown-header">Dropdown header</h6>
        </li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
        <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link></li>
    </ul>
</div>`
export const dropdown28=`
<div className="bd-example">
<ul className="dropdown-menu">
    <li><Link href="#!" scroll={false} className="dropdown-item dropdown-header">Heading</Link></li>
    <li><Link href="#!" scroll={false} className="dropdown-item" >Action</Link></li>
    <li><Link href="#!" scroll={false} className="dropdown-item" >Another action</Link></li>
    <li><Link href="#!" scroll={false} className="dropdown-item" >Something else here</Link></li>
    <li>
        <hr className="dropdown-divider" />
    </li>
    <li><Link href="#!" scroll={false} className="dropdown-item" >Separated link</Link></li>
</ul>
</div>`
export const dropdown29=`
<div className="bd-example">
<div className="dropdown-menu p-4 text-muted" style={{ maxWidth: "200px" }}>
    <p>
        Some example text {'that's'} free-flowing within the dropdown menu.
    </p>
    <p className="mb-0">
        And this is more example text.
    </p>
</div>
</div>`
// dropdown end//
export const imagefigure1=`
<p className="card-title mb-3">Use <code> .img-fluid </code>className to the img tag to get responsive image.</p>
<div className="text-center">
    <img src="../../assets/images/media/media-48.jpg" className="img-fluid" alt="..." />
</div>`
export const imagefigure2=`
<p className="card-title mb-3">Use <code>.rounded</code> className along with <code>.img-fluid</code> to get border radius.</p>
<div className="text-center">
    <img src="../../assets/images/media/media-49.jpg" className="img-fluid rounded" alt="..." />
</div>`
export const imagefigure3=`
<p className="card-title mb-3">Use <code>.rounded-pill</code> className to <code>img</code> tag to get rounded image.</p>
<div className="text-center">
    <img src="../../assets/images/media/media-50.jpg" className="img-fluid rounded-pill" alt="..." />
</div>`
export const imagefigure4=`
<img className="rounded float-start" src="../../assets/images/media/media-53.jpg" alt="..." />`
export const imagefigure5=`
<img className="rounded mx-auto d-block" src="../../assets/images/media/media-55.jpg" alt="..." />`
export const imagefigure6=`
<img className="rounded float-end" src="../../assets/images/media/media-54.jpg" alt="..." />`
export const imagefigure7=`
<figure className="figure">
<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../assets/images/media/media-56.jpg" alt="..." />
<figcaption className="figure-caption mt-2">A caption for the above image.
</figcaption>
</figure>
<figure className="figure float-end">
<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../assets/images/media/media-57.jpg" alt="..." />
<figcaption className="figure-caption text-end mt-2">A caption for the above image.
</figcaption>
</figure>`
export const imagefigure8=`
<p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
<div className="text-center">
    <img src="../../assets/images/media/media-51.jpg" className="img-thumbnail" alt="..." />
</div>`
export const imagefigure9=`
<p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
<div className="text-center">
    <img src="../../assets/images/media/media-52.jpg" className="img-thumbnail rounded-pill" alt="..." />
</div>`
// end of imags & figures prism data //
export const listgroup1=`
<ListGroup className="">
{BasicButtons.map((idx) => (
    <ListGroup.Item as="li" key={Math.random()}>
        <div className="d-flex align-items-center">
            <span className="avatar avatar-sm">
                <img src={idx.src} alt="img" />
            </span>
            <div className="ms-2 fw-semibold">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup2=`
<ListGroup className="">
{ActiveButtons.map((idx) => (
    <ListGroup.Item as="li" className={'list-group-item {idx.class1}'} aria-current="true" key={Math.random()}>
        <div className="d-flex align-items-center">
            <div>
                <span className="fs-15">
                    <i className={'bi bi-{idx.class}'}></i>
                </span>
            </div>
            <div className="ms-2">
                {idx.text}
            </div>
        </div>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup3=`
<ListGroup as="ul">
<ListGroup.Item as="li" className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
</ListGroup>`
export const listgroup4=`
<ListGroup as="ul" className=" list-group-flush">
<ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</ListGroup>`
export const listgroup5=`
<ListGroup className="">
{LinksButtons.map((idx) => (
    <ListGroup.Item action className={list-group-item list-group-item-action {idx.class1}} key={Math.random()}
        aria-current="true">
        <div className="d-flex align-items-center">
            <div>
                <span className={'avatar avatar-xs bg-{idx.class} text-{idx.color} avatar-rounded'}>
                    {idx.text1}
                </span>
            </div>
            <div className="ms-2">{idx.text}</div>
        </div>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup6=`
<ShowCode title="buttons" code={listgroup6}>
<div className="list-group">
    <button type="button" className="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></button>
    <button type="button" className="list-group-item list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></button>
    <button type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></button>
    <button type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></button>
    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></button>
</div>
</ShowCode>`
export const listgroup7=`
<ListGroup as='ul' className="">
                                
{ContextualButtons.map((idx) => (
    <ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
))}
</ListGroup>`
export const listgroup8=`
<ListGroup as="ul">
{ContextualButtons.map((idx) => (
    <ListGroup.Item as="li" variant={idx.class} action  key={Math.random()}>{idx.text}</ListGroup.Item>
))}
</ListGroup>`
export const listgroup9=`
<ListGroup as='ul'>
{ContextualButtons.map((idx) => (
    <ListGroup.Item className={'list-item-solid-{idx.class}'} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
))}
</ListGroup>`
export const listgroup10=`
<ListGroup>
{CustomButtons.map((idx) => (
    <ListGroup.Item action className={'list-group-item list-group-item-action {idx.class1}'} key={Math.random()}
        aria-current="true">
        <div className="d-flex w-100 justify-content-between">
            <h6 className={'mb-1 fw-semibold {idx.class3}'}>{idx.heading}</h6>
            <small className={idx.class2}>{idx.text1}</small>
        </div>
        <p className="mb-1">{idx.text2}</p>
        <small>{idx.text3}.</small>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup11=`
<ListGroup as='ol' className="list-group list-group-numbered">
{SubheadingsButtons.map((idx) => (
    <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
        <div className="ms-2 me-auto text-muted">
            <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
            {idx.text2}
        </div>
        <Badge bg={idx.class}>{idx.text3}</Badge>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup12=`
<ol className="list-group list-group-numbered">
<li className="list-group-item">Simply dummy text of the printing.</li>
<li className="list-group-item">There are many variations of passages.</li>
<li className="list-group-item">All the Lorem Ipsum generators.</li>
<li className="list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
<li className="list-group-item">Randomised words which{' don't '}look.</li>
<li className="list-group-item">Always free from repetition, injected humour.</li>
</ol>`
export const listgroup13=`
<ul className="list-group">
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked /> Accurate information at any given point.
</li>
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." /> Hearing the information and responding.
</li>
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked /> Setting up and customizing your own sales.
</li>
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked /> New Admin Launched.
</li>
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." /> To maximize profits and improve productivity.
</li>
<li className="list-group-item">
    <input className="form-check-input me-1 fw-semibold" type="checkbox" value=""
        aria-label="..." /> To have a complete 360° overview of sales information, having.
</li>
</ul>`
export const listgroup14=`
<div className="list-group">
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked />
    Accurate information at any given point.
</label>
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked />
    Hearing the information and responding.
</label>
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked />
    Setting up and customizing your own sales.
</label>
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" />
    New Admin Launched.
</label>
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" />
    To maximize profits and improve productivity.
</label>
<label className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" />
    To have a complete 360° overview of sales information, having.
</label>
</div>`
export const listgroup15=`
<ListGroup as='ul'>
{ListbadgesButtons.map((idx) => (
    <ListGroup.Item key={Math.random()}
        className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
        {idx.text1}
        <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
    </ListGroup.Item>
))}
</ListGroup>`
export const listgroup16=`
{HorizontalButtons.map((idx) => (
    <ListGroup as="ul" className={'list-group-horizontal  mb-2 {idx.class}'} key={Math.random()}>
        <ListGroup.Item as="li">An item</ListGroup.Item>
        <ListGroup.Item as="li">A second item</ListGroup.Item>
        <ListGroup.Item as="li">A third item</ListGroup.Item>
    </ListGroup>
))}`
// END OF LIST GROUP //
export const ObjectFit1=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-contain border rounded" alt="..." />`
export const ObjectFit2=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-cover border rounded" alt="..." />`
export const ObjectFit3=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-fill border rounded" alt="..." />`
export const ObjectFit4=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-scale border rounded" alt="..." />`
export const ObjectFit5=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-none border rounded" alt="..." />`
export const ObjectFit6=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-sm-contain border rounded" alt="..." />`
export const ObjectFit7=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-md-contain border rounded" alt="..." />`
export const ObjectFit8=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-lg-contain border rounded" alt="..." />`
export const ObjectFit9=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-xl-contain border rounded" alt="..." />`
export const ObjectFit10=`
<img src="../../assets/images/media/media-28.jpg" className="object-fit-xxl-contain border rounded" alt="..." />`
export const ObjectFit11=`
<video src="../../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>`
export const ObjectFit12=`
<video src="../../../assets/video/1.mp4" className="object-fit-cover rounded border" autoPlay loop muted></video>`
export const ObjectFit13=`
<video src="../../../assets/video/1.mp4" className="object-fit-fill rounded border" autoPlay loop muted></video>`
export const ObjectFit14=`
<video src="../../../assets/video/1.mp4" className="object-fit-scale rounded border" autoPlay loop muted></video>`
export const ObjectFit15=`
<video src="../../../assets/video/1.mp4" className="object-fit-none rounded border" autoPlay loop muted></video>`

export const pagination1=`
<nav aria-label="Page navigation">
<ul className="pagination mb-0">
    <li className="page-item">
        <Link className="page-link" href="#!" aria-label="Previous">
            <span aria-hidden="true"><i className="bx bx-chevron-left"></i></span>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!" aria-label="Next">
            <span aria-hidden="true"><i className="bx bx-chevron-right"></i></span>
        </Link>
    </li>
</ul>
</nav>`
export const pagination2=`
<nav aria-label="...">
<ul className="pagination pagination-sm mb-0">
    <li className="page-item active" aria-current="page">
        <span className="page-link">1</span>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
</ul>
</nav>
<nav aria-label="...">
<ul className="pagination mb-0">
    <li className="page-item active" aria-current="page">
        <span className="page-link">1</span>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
</ul>
</nav>
<nav aria-label="...">
<ul className="pagination pagination-lg mb-0">
    <li className="page-item active" aria-current="page">
        <span className="page-link">1</span>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
</ul>
</nav>`
export const pagination3=`
<nav aria-label="Page navigation">
<ul className="pagination justify-content-center">
    <li className="page-item disabled">
        <Link href="#!" scroll={false} className="page-link">Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">Next</Link>
    </li>
</ul>
</nav>
<nav aria-label="Page navigation">
<ul className="pagination justify-content-end mb-0">
    <li className="page-item disabled">
        <Link href="#!" scroll={false} className="page-link">Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">Next</Link>
    </li>
</ul>
</nav>`
export const pagination4=`
<nav aria-label="..." className="me-3">
<ul className="pagination">
    <li className="page-item disabled">
        <Link href="#!" scroll={false} className="page-link">Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item active" aria-current="page">
        <Link className="page-link" href="#!">2</Link>
    </li>
    <li className="page-item">
        <Link className="page-link" href="#!">Next</Link>
    </li>
</ul>
</nav>
<nav aria-label="...">
<ul className="pagination">
    <li className="page-item disabled">
        <span className="page-link">Previous</span>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item active" aria-current="page">
        <span className="page-link">2</span>
    </li>
    <li className="page-item">
        <Link className="page-link" href="#!">Next</Link>
    </li>
</ul>
</nav>`
export const pagination5=`
<nav aria-label="Page navigation" className="pagination-style-1">
<ul className="pagination mb-0 flex-wrap">
    <li className="page-item disabled">
        <Link className="page-link" href="#!">
            <i className="ri-arrow-left-s-line align-middle"></i>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item active"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">
            <i className="bi bi-three-dots"></i>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">21</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">
            <i className="ri-arrow-right-s-line align-middle"></i>
        </Link>
    </li>
</ul>
</nav>`
export const pagination6=`
<nav aria-label="Page navigation" className="pagination-style-2">
<ul className="pagination mb-0 flex-wrap">
    <li className="page-item disabled">
        <Link className="page-link" href="#!">
            Prev
        </Link>
    </li>
    <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">
            <i className="bi bi-three-dots"></i>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">17</Link></li>
    <li className="page-item">
        <Link className="page-link text-primary" href="#!">
            next
        </Link>
    </li>
</ul>
</nav>`
export const pagination7=`
<nav aria-label="Page navigation" className="pagination-style-3">
<ul className="pagination mb-0 flex-wrap">
    <li className="page-item disabled">
        <Link className="page-link" href="#!">
            Prev
        </Link>
    </li>
    <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">
            <i className="bi bi-three-dots"></i>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">16</Link></li>
    <li className="page-item">
        <Link className="page-link text-primary" href="#!">
            next
        </Link>
    </li>
</ul>
</nav>`
export const pagination8=`
<nav aria-label="Page navigation" className="pagination-style-4">
<ul className="pagination mb-0 flex-wrap">
    <li className="page-item disabled">
        <Link className="page-link" href="#!">
            Prev
        </Link>
    </li>
    <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item">
        <Link className="page-link" href="#!">
            <i className="bi bi-three-dots"></i>
        </Link>
    </li>
    <li className="page-item"><Link className="page-link" href="#!">16</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">17</Link></li>
    <li className="page-item">
        <Link className="page-link text-primary" href="#!">
            next
        </Link>
    </li>
</ul>
</nav>`
export const pagination9=`
<nav aria-label="Page navigation">
<ul className="pagination mb-0">
    <li className="page-item disabled"><Link className="page-link" href="#!">Previous</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link" href="#!">Next</Link></li>
</ul>
</nav>`
//  end of pagination //

export const popovers1=`
<div className="btn-list">
        {Defaultalerts.map((idx) => (
            <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                overlay={<Popover>
                    <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
                    <Popover.Body>
             And {'here's'} some amazing content. {'It's'} very engaging. Right?
                    </Popover.Body>
                </Popover>}>
                <Button variant='' href="#!" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
            </OverlayTrigger>
        ))}
    </div>`
 export const popovers2=`
 <div className="btn-list">
 {Colorheaderalerts.map((idx) => (
     <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
         overlay={<Popover className={'header-{idx.color1}'}>
             <Popover.Header as="h3" data-bs-custom-classname={'header-{idx.color1}'}> Color Header</Popover.Header>
             <Popover.Body>
                 Popover with primary header.
             </Popover.Body>
         </Popover>}>
         <Button variant={idx.color} href="#!" className="btn btn-wave">Header {idx.text}</Button>
     </OverlayTrigger>
 ))}
</div>`
export const popovers3=`
<div className="btn-list">
{Colorheaderalerts.map((idx) => (
    <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
        overlay={<Popover className={'header-{idx.color1}'}>
            <Popover.Header as="h3" data-bs-custom-classname={'header-{idx.color1}'}> Color Header</Popover.Header>
            <Popover.Body>
                Popover with primary header.
            </Popover.Body>
        </Popover>}>
        <Button variant={idx.color} href="#!" className="btn btn-wave">Header {idx.text}</Button>
    </OverlayTrigger>
))}
</div>`
export const popovers4=`
<div className="btn-list">
{Colredalerts.map((idx) => (
    <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={'popover-{idx.color1}-light'} id="tooltip-disabled">
        <Popover.Header as="h3">Light Background</Popover.Header>
        <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
    </Popover>}>
        <Button variant='' className={'btn btn-{idx.color1}-light btn-wave'}>{idx.text} </Button>
    </OverlayTrigger>
))}
</div>`
export const popovers5=`
{Dismissiblealerts.map((idx) => (
    <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
        overlay={<Popover>
            <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
            <Popover.Body>
                And{'here's'} some amazing content.{' It's'} very engaging. Right?
            </Popover.Body>
        </Popover>}>
        <Button variant={idx.color} className="btn my-1 btn-wave">Popover Dismiss</Button>
    </OverlayTrigger>
))}`
export const popovers6=`

<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
    <Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
    <span className="d-inline-block">
        <Button disabled style={{ pointerEvents: 'none' }}>
            Disabled button
        </Button>
    </span>
</OverlayTrigger>
`
export const popovers7=`
<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!">
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
</Link>
</OverlayTrigger>
<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" href="#!" >
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
</Link>
</OverlayTrigger>`
// End of popover  prism data //
// start of progress prism data //
export const progress1=`
<div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar" ></div>
</div>
<div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar" ></div>
<div className="basic-progress progress-bar" style={{ width: "25%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="basic-progress progress-bar" style={{ width: "50%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div className="basic-progress progress-bar" style={{ width: "75%" }}></div>
</div>
<div className="progress mb-0" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
<div className="basic-progress progress-bar" style={{ width: "100%" }}></div>
</div>`
export const progress2=`
<div className="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0"
aria-valuemax="100">
<div className="progress-bar bg-secondary" style={{ width: "20%" }}></div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-warning" style={{ width: "40%" }}></div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-info" style={{ width: "60%" }}></div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success" style={{ width: "80%" }}></div>
</div>
<div className="progress" role="progressbar"
aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-danger" style={{ width: "100%" }}></div>
</div>`
export const progress3=`
<div className="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar progress-bar-striped" style={{ width: "10%" }}>
</div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar progress-bar-striped bg-secondary" style={{ width: "25%" }}>
</div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar progress-bar-striped bg-success" style={{ width: "50%" }}>
</div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar progress-bar-striped bg-info" style={{ width: "75%" }}>
</div>
</div>
<div className="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0"
aria-valuemax="100">
<div className="progress-bar progress-bar-striped bg-warning" style={{ width: "100%" }}></div>
</div>`
export const progress4=`
<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary" style={{ width: "10%" }}>
</div>
</div>
<div className="progress progress-sm mb-3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary" style={{ width: "25%" }}>
</div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary" style={{ width: "50%" }}>
</div>
</div>
<div className="progress progress-lg mb-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary" style={{ width: "75%" }}>
</div>
</div>
<div className="progress progress-xl" role="progressbar" aria-valuenow="100" aria-valuemin="0"
aria-valuemax="100">
<div className="progress-bar bg-primary" style={{ width: "100%" }}></div>
</div>`
export const progress5=`
<div className="progress mb-3" role="progressbar"
aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar" style={{ width: "10%" }}>10%</div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-secondary" style={{ width: "20%" }}>20%</div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success" style={{ width: "40%" }}>40%</div>
</div>
<div className="progress mb-3" role="progressbar"
aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-info" style={{ width: "60%" }}>60%</div>
</div>
<div className="progress mb-0" role="progressbar"
aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-warning" style={{ width: "80%" }}>80%</div>
</div>`
export const progress6=`
{Multipleprogress.map((idx) => (
    <ProgressBar className={'progress-stacked progress-{idx.size} mb-3'} key={Math.random()}>
        <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
        <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
        <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
    </ProgressBar>
))}`
export const progress7=`
<div className="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar progress-bar-striped progress-bar-animated"
    style={{ width: "10%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{ width: "20%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "40%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
</div>
<div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
</div>`
export const progress8=`
<div className="progress mb-3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
</div>
<div className="progress mb-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
</div>
<div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
</div>`
export const progress9=`
<div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-primary-gradient" style={{ width: "10%" }}></div>
</div>
<div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-secondary-gradient" style={{ width: "20%" }}></div>
</div>
<div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success-gradient" style={{ width: "40%" }}></div>
</div>
<div className="progress mb-3 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-info-gradient" style={{ width: "60%" }}></div>
</div>
<div className="progress progress-animate" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-warning-gradient" style={{ width: "80%" }}></div>
</div>`
export const progress10=`
<div className="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title">Mobiles</h6>
<div className="progress-bar" style={{ width: "50%" }}>
    <div className="progress-bar-value">50%</div>
</div>
</div>
<div className="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title bg-secondary">Watches</h6>
<div className="progress-bar bg-secondary" style={{ width: "60%" }}>
    <div className="progress-bar-value bg-secondary">60%</div>
</div>
</div>
<div className="progress progress-sm progress-custom progress-animate" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
<h6 className="progress-bar-title bg-success">Shirts</h6>
<div className="progress-bar bg-success" style={{ width: "70%" }}>
    <div className="progress-bar-value bg-success">70%</div>
</div>
</div>`
export const progress11=`
{CustomProgress2data.map((idx) => (
    <div className="progress progress-bar progress-sm mb-4" key={Math.random()} >
        <div className={'progress-item-1 bg-{idx.class}'}></div>
        <div className={'progress-item-3 bg-{idx.class1}'}></div>
        <ProgressBar variant={idx.class} now={idx.now} />
    </div>
))}
`
export const progress12=`
<div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar" style={{ width: "50%" }}>
    <div className="progress-bar-value">50%</div>
</div>
</div>
<div className="progress progress-lg mb-5 custom-progress-3 progress-animate" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-secondary" style={{ width: "60%" }}>
    <div className="progress-bar-value secondary">60%</div>
</div>
</div>
<div className="progress progress-lg custom-progress-3 progress-animate" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
<div className="progress-bar bg-success" style={{ width: "70%" }}>
    <div className="progress-bar-value success">70%</div>
</div>
</div>
`
export const progress13=`
{CustomProgress4data.map((idx) => (
    <ProgressBar className={'progress  progress-xl mb-3 progress-animate custom-progress-4 {idx.class1}'} key={Math.random()}>
        <ProgressBar variant={idx.class} now={idx.now} />
        <div className="progress-bar-label">{idx.text}</div>
    </ProgressBar>
))}
`
export const progress14=`
<h6 className="fw-semibold mb-2">Project Dependencies</h6>
<div className="progress-stacked progress-xl mb-5">
    <div className="progress-bar" role="progressbar" style={{ width: "25%" }}
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "35%" }}
        aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "40%" }}
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
<Row className=" justify-content-center">
    <Col xl={5}>
        <div className="border p-3">
            <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%</span></p>
            <div className="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-primary" style={{ width: "25%" }}>
                </div>
            </div>
            <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%</span></p>
            <div className="progress progress-xs mb-4 progress-animate" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-secondary" style={{ width: "35%" }}>
                </div>
            </div>
            <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%</span></p>
            <div className="progress progress-xs mb-0 progress-animate" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{ width: "40%" }}>
                </div>
            </div>
        </div>
    </Col>
</Row>
`
// End of Progressbar prismdata //
//start of spinner prism data //
export const spinner1=`
<div className="spinner-border" role="status">
<span className="visually-hidden">Loading...</span>
</div>
`
export const spinner2=`
{Colorspinner.map((idx) => (
    <div className={'spinner-border me-2 text-{idx.color}'} role="status" key={Math.random()}>
        <span className="visually-hidden">Loading...</span>
    </div>
))}
`
export const spinner3=`
<div className="spinner-grow" role="status"> <span className="visually-hidden">Loading...</span> </div> 
`
export const spinner4=`
<div className="spinner-grow text-primary  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light  me-2" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
<span className="visually-hidden">Loading...</span>
</div> 
`
export const spinner5=`
<div className="d-flex justify-content-center mb-4">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div> 
`
export const spinner6=`
<div className="clearfix mb-4">
<div className="spinner-border float-end" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
<div className="clearfix">
<div className="spinner-border float-start" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
`
export const spinner7=`
<div className="text-center">
<div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
</div>
`
export const spinner8=`
<div className="spinner-border spinner-border-sm me-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow spinner-grow-sm me-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border me-4" style={{height: "3rem" , width:"3rem"}} role="status">
                                 <span className="visually-hidden">Loading...</span>
                             </div>
                            <div className="spinner-grow" style={{height: "3rem" , width:"3rem"}} role="status">
                                 <span className="visually-hidden">Loading...</span> 
                            </div>
`
export const spinner9=`
<div className="spinner-border m-5" role="status">
<span className="visually-hidden">Loading...</span>
</div>
`
export const spinner10=`
<div className="btn-list">
<button className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden"> Loading...</span>
</button>
<button className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden"> Loading...</span>
</button>
<button className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-secondary-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-success-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-info-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-warning-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-danger-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
<button className="btn btn-dark text-fixed-white" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span> Loading...
</button>
</div>
`
// End of Spinner Prism data //

export const toast1=`
<Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
toast</Button>
<Toast className="position-fixed top-0 end-0 p-0 me-4 mt-4 toast-zindex" onClose={() => setShow(false)} show={show} delay={3000} autohide>
<Toast.Header className="text-default mb-0">
    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
    <strong className="me-auto">Ynex</strong>
    <small>11 mins ago</small>
</Toast.Header>
<Toast.Body>
    Hello, world! This is a toast message.
</Toast.Body>
</Toast>
`
export const toast2=`
<Toast className=" align-items-center text-bg-primary border-0 fade show mb-4"
role="alert" aria-live="assertive" aria-atomic="true" show={showC}>
<div className="d-flex">
    <Toast.Body>
        Hello, world! This is the Primary toast message.
    </Toast.Body>
    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowC}></CloseButton>
</div>
</Toast>
<Toast className=" align-items-center text-bg-secondary border-0 fade show mb-4"
role="alert" aria-live="assertive" aria-atomic="true" show={showD}>
<div className="d-flex">
    <Toast.Body>
        Hello, world! This is the Secondary toast.
    </Toast.Body>
    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowD}></CloseButton>
</div>
</Toast>
<Toast className=" align-items-center text-bg-success border-0 fade show mb-4"
role="alert" aria-live="assertive" aria-atomic="true" show={showE}>
<div className="d-flex">
    <Toast.Body>
        Hello, world! This is the Success toast message.
    </Toast.Body>
    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowE}></CloseButton>
</div>
</Toast>
<Toast className=" align-items-center text-bg-info border-0 fade show"
role="alert" aria-live="assertive" aria-atomic="true" show={showF}>
<div className="d-flex">
    <Toast.Body>
        Hello, world! This is the info toast message.
    </Toast.Body>
    <CloseButton type="button" className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast" aria-label="Close" onClick={toggleShowF}></CloseButton>
</div>
</Toast>
`
export const toast3=`
<Toast show={showA} onClose={toggleShowA} className="fade show" role="alert" aria-live="assertive" aria-atomic="true">
<Toast.Header className="text-default">
    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

    <strong className="me-auto">Ynex</strong>
    <small>11 mins ago</small>
</Toast.Header>
<Toast.Body>
    Hello, world! This is a toast message.
</Toast.Body>
</Toast>
`
export const toast4=`
<ToastContainer className="position-static">
<Toast className=" fade show" role="alert" aria-live="assertive"
    aria-atomic="true" show={showG} onClose={toggleShowG}>
    <Toast.Header className="text-default">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

        <strong className="me-auto">Ynex</strong>
        <small className="text-muted">just now</small>

    </Toast.Header>
    <Toast.Body>
        See? Just like this.
    </Toast.Body>
</Toast>
<Toast className=" fade show" role="alert" aria-live="assertive"
    aria-atomic="true" show={showH} onClose={toggleShowH}>
    <Toast.Header className="text-default">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />

        <strong className="me-auto">Ynex</strong>
        <small className="text-muted">2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>
        Heads up, toasts will stack automatically
    </Toast.Body>
</Toast>
</ToastContainer>
`
export const toast5=`
<Toast className="fade show" role="alert" aria-live="assertive" aria-atomic="true" show={showB} onClose={toggleShowB}>
<Toast.Header className="text-default">
    <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
    <strong className="me-auto">Ynex</strong>
    <small className="text-muted">11 mins ago</small>
</Toast.Header>
<Toast.Body>
    Hello, world! This is a toast message.
</Toast.Body>
</Toast>
`
export const toast6=`
<Toast className=" align-items-center fade show mb-3" role="alert"
aria-live="assertive" aria-atomic="true" show={showI}>
<div className="d-flex">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <CloseButton type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast"
        aria-label="Close" onClick={toggleShowI}>
    </CloseButton>
</div>
</Toast>
<div>
<span className="my-4 text-muted">
    Alternatively, you can also add additional controls and components to
    toasts.
</span>
</div>
<Toast className=" fade show mt-2" role="alert" aria-live="assertive"
aria-atomic="true" show={showJ}>
<Toast.Body>
    Hello, world! This is a toast message.
    <div className="mt-2 pt-2 border-top">
        <Button type="button" className="btn btn-primary btn-sm btn-wave me-2">Take
            action</Button>
        <Button type="button" className="btn btn-secondary btn-sm btn-wave"
            data-bs-dismiss="toast" onClick={toggleShowJ}>Close</Button>
    </div>
</Toast.Body>
</Toast>
`
export const toast7=`
<div className="btn-list">
<button type="button" className="btn btn-primary-light me-2 btn-wave waves-effect waves-light" id="primaryToastBtn" onClick={() => setShow1(true)}>Primary</button>
<button type="button" className="btn btn-secondary-light me-2 btn-wave waves-effect waves-light" id="secondaryToastBtn" onClick={() => setShow2(true)}>secondary</button>
<button type="button" className="btn btn-warning-light me-2 btn-wave waves-effect waves-light" id="warningToastBtn" onClick={() => setShow3(true)}>warning</button>
<button type="button" className="btn btn-info-light me-2 btn-wave waves-effect waves-light" id="infoToastBtn" onClick={() => setShow4(true)}>info</button>
<button type="button" className="btn btn-success-light me-2 btn-wave waves-effect waves-light" id="successToastBtn" onClick={() => setShow5(true)}>success</button>
<button type="button" className="btn btn-danger-light me-2 btn-wave waves-effect waves-light" id="dangerToastBtn" onClick={() => setShow6(true)}>danger</button>
</div>
<ToastContainer className="position-fixed top-0 end-0 p-3">
<Toast id="primaryToast" className=" colored-toast bg-primary-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="secondaryToast" className=" colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
    <Toast.Header className=" bg-secondary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="warningToast" className=" colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow3(false)} show={show3} delay={3000} autohide>
    <Toast.Header className="bg-warning text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="infoToast" className=" colored-toast bg-info-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow4(false)} show={show4} delay={3000} autohide>
    <Toast.Header className="bg-info text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="successToast" className=" colored-toast bg-success-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow5(false)} show={show5} delay={3000} autohide>
    <Toast.Header className=" bg-success text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="dangerToast" className=" colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow6(false)} show={show6} delay={3000} autohide>
    <Toast.Header className="bg-danger text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
`

export const toast8=`
<div className="btn-list">
<Button type="button" className="btn btn-primary-light me-2 btn-wave waves-effect waves-light" id="primaryToastBtn" onClick={() => setShow7(true)}>Primary</Button>
<Button type="button" className="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn" onClick={() => setShow8(true)}>secondary</Button>
<Button type="button" className="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn" onClick={() => setShow9(true)}>warning</Button>
<Button type="button" className="btn btn-info me-2 btn-wave" id="solidinfoToastBtn" onClick={() => setShow10(true)}>info</Button>
<Button type="button" className="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn" onClick={() => setShow11(true)}>success</Button>
<Button type="button" className="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn" onClick={() => setShow12(true)}>danger</Button>
</div>
<ToastContainer className="position-fixed top-0 end-0 p-3">
<Toast id="solid-primaryToast" className=" colored-toast bg-primary text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-secondaryToast" className=" colored-toast bg-secondary text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow8(false)} show={show8} delay={3000} autohide>
    <Toast.Header className="bg-secondary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-warningToast" className=" colored-toast bg-warning text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
    <Toast.Header className="bg-warning text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-infoToast" className=" colored-toast bg-info text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
    <Toast.Header className="bg-info text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-successToast" className=" colored-toast bg-success text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
    <Toast.Header className="bg-success text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
<Toast id="solid-dangerToast" className=" colored-toast bg-danger text-fixed-white" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
    <Toast.Header className="bg-danger text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
`

export const toast9=`
<div className="btn-list">
<Button variant='' type="button" className=" btn-outline-primary me-2 btn-wave " id="topleftToastBtn" onClick={() => setShow13(true)}>Top Left</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" onClick={() => setShow14(true)}>Top Center</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" onClick={() => setShow15(true)}>Top Right</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" onClick={() => setShow16(true)}>Middle Left</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" onClick={() => setShow17(true)}>Middle Center</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" onClick={() => setShow18(true)}>Middle Right</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" onClick={() => setShow19(true)}>Bottom Left</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" onClick={() => setShow20(true)}>Bottom Center</Button>
<Button variant='' type="button" className="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" onClick={() => setShow21(true)}>Bottom Right</Button>
</div>
<ToastContainer className=" position-fixed top-0 start-0 p-3">
<Toast id="topleft-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
        <CloseButton type="button" className="btn-close" data-bs-dismiss="toast"
            aria-label="Close"></CloseButton>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className=" position-fixed top-0 start-50 translate-middle-x p-3">
<Toast id="topcenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow14(false)} show={show14} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="position-fixed top-0 end-0 p-3">
<Toast id="topright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow15(false)} show={show15} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="position-fixed top-50 start-0 translate-middle-y p-3">
<Toast id="middleleft-Toast" className="colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow16(false)} show={show16} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
<Toast id="middlecenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow17(false)} show={show17} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
<Toast id="middleright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow18(false)} show={show18} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="position-fixed bottom-0 start-0 p-3">
<Toast id="bottomleft-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow19(false)} show={show19} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className="position-fixed bottom-0 start-50 translate-middle-x p-3">
<Toast id="bottomcenter-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow20(false)} show={show20} delay={3000} autohide>
    <Toast.Header className="toast-header bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
<ToastContainer className=" position-fixed bottom-0 end-0 p-3">
<Toast id="bottomright-Toast" className=" colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive"
    aria-atomic="true" onClose={() => setShow21(false)} show={show21} delay={3000} autohide>
    <Toast.Header className="bg-primary text-fixed-white">
        <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/toggle-dark.png" alt="..." />
        <strong className="me-auto">Ynex</strong>
    </Toast.Header>
    <Toast.Body>
        Your,toast message here.
    </Toast.Body>
</Toast>
</ToastContainer>
 `
 export const toast10=`
 <div className="bd-example bg-light bd-example-toasts d-flex p-0">
 <div aria-live="polite" aria-atomic="true"
     className="d-flex justify-content-center align-items-center w-100">
     <Toast show={showK} onClose={toggleShowK} className=" fade show shadow-lg" role="alert" aria-live="assertive"
         aria-atomic="true">
         <Toast.Header className="text-default">
             <img className="bd-placeholder-img rounded me-2" src="../../assets/images/brand-logos/favicon.ico" alt="..." />
             <strong className="me-auto">Ynex</strong>
             <small>11 mins ago</small>
         </Toast.Header>
         <Toast.Body>
             Hello, world! This is a toast message.
         </Toast.Body>
     </Toast>
 </div>
</div>`
export const tooltip1=`
<div className="btn-list">
{Tooltipdirtooltip.map((idx) => (
    <OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
        <Button type="button" className="btn btn-primary btn-wave">
            Tooltip on {idx.text}
        </Button>
    </OverlayTrigger>
))}
</div>`
export const tooltip2=`
<div className="btn-list">
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
    <Button type="button" variant='primary' className="btn  btn-wave">
        Primary Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
    <Button type="button" variant='secondary' className="btn  btn-wave">
        Secondary Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
    <Button type="button" variant='warning' className="btn  btn-wave">
        Warning Tooltip
    </Button>
</OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
    <Button type="button" variant='info' className="btn  btn-wave">
        Info Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
    <Button type="button" variant='success' className="btn  btn-wave">
        Success Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
    <Button type="button" variant='danger' className="btn  btn-wave">
        Danger Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
    <Button type="button" variant='light ' className="btn  btn-wave">
        Danger Tooltip
    </Button>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
    <Button type="button" variant='dark text-white' className="btn  btn-wave">
        Danger Tooltip
    </Button>
</OverlayTrigger>
</div>`
export const tooltip3=`
<p className="text-muted mb-0">
Hover on the link to view the  <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
    <Link href="#!" scroll={false} className="text-primary">Tooltip</Link>
</OverlayTrigger>
</p>`
export const tooltip4=`
<p className="text-muted mb-0">
Hover on the link to view the  <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
    <Link href="#!" scroll={false} className="text-primary">Tooltip</Link>
</OverlayTrigger>
</p>`
export const tooltip5=`
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip!</Tooltip>}>
<span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
        Disabled button
    </Button>
</span>
</OverlayTrigger>`
export const tooltip6=`
<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
<Link href="#!" scroll={false}
    className="avatar avatar-md me-2 online avatar-rounded">
    <img src="../../assets/images/faces/12.jpg" alt="img" />
</Link>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
<Link href="#!" scroll={false}
    className="avatar avatar-lg me-2 online avatar-rounded">
    <img src="../../assets/images/faces/3.jpg" alt="img" />
</Link>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
<Link href="#!" scroll={false}
    className="avatar avatar-xl me-2 online avatar-rounded">
    <img src="../../assets/images/faces/15.jpg" alt="img" />
</Link>
</OverlayTrigger>`
// End of Tooltip prism data //

//Start of Typography prism data //
export const typography1=`
< <h1 className="mb-3">h1. Bootstrap heading</h1>
<h2 className="mb-3">h2. Bootstrap heading</h2>
<h3 className="mb-3">h3. Bootstrap heading</h3>
<h4 className="mb-3">h4. Bootstrap heading</h4>
<h5 className="mb-3">h5. Bootstrap heading</h5>
<h6 className="mb-0">h6. Bootstrap heading</h6>`
export const typography2=`
<p className="h1 mb-3">h1. Bootstrap heading</p>
<p className="h2 mb-3">h2. Bootstrap heading</p>
<p className="h3 mb-3">h3. Bootstrap heading</p>
<p className="h4 mb-3">h4. Bootstrap heading</p>
<p className="h5 mb-3">h5. Bootstrap heading</p>
<p className="h6 mb-0">h6. Bootstrap heading</p>`
export const typography3=`
<h1 className="display-1">Display 1</h1>
                            <h1 className="display-2">Display 2</h1>
                            <h1 className="display-3">Display 3</h1>
                            <h1 className="display-4">Display 4</h1>
                            <h1 className="display-5">Display 5</h1>
                            <h1 className="display-6">Display 6</h1>`
export const typography4=`
<h3>
Fancy display heading
<small className="text-muted"> With faded secondary text</small>
</h3>`
export const typography5=`
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del>
                            </p>
                            <p><s>This line of text is meant to be treated as no longer
                                accurate.</s>
                            </p>
                            <p><ins>This line of text is meant to be treated as an addition to the
                                document.</ins></p>
                            <p><u>This line of text will render as underlined.</u></p>
                            <p><small>This line of text is meant to be treated as fine
                                print.</small>
                            </p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p className="mb-0"><em>This line rendered as italicized text.</em></p>`
export const typography6=`
<p className="fs-1 mb-2">.fs-1 text</p>
<p className="fs-2 mb-2">.fs-2 text</p>
<p className="fs-3 mb-2">.fs-3 text</p>
<p className="fs-4 mb-2">.fs-4 text</p>
<p className="fs-5 mb-2">.fs-5 text</p>
<p className="fs-6 mb-0">.fs-6 text</p>`
export const typography7=`
<p className="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {'don't'} look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
 {'isn't '}anything embarrassing hidden in the middle of text.
</p>`
export const typography8=`
<figure className="blockquote-container">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>`
export const typography9=`
<figure className="blockquote-container text-end">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption>
</figure>`
export const typography10=`
<blockquote className="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography11=`
<blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography12=`
<blockquote className="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography13=`
<blockquote className="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography14=`
<blockquote className="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography15=`
<blockquote className="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`
export const typography16=`
<dl className="row mb-0">
<dt className="col-sm-3">Description lists</dt>
<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

<dt className="col-sm-3">Term</dt>
<dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt className="col-sm-3">Another term</dt>
<dd className="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd className="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt className="col-sm-3">Nesting</dt>
<dd className="col-sm-9 mb-0">
    <dl className="row mb-0">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd>
</dl>`
export const typography17=`
<ul className="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, {'it's '}still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li className="mb-2">Nested lists:
    <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul>`
export const typography18=`
<p><abbr title="attribute">attr</abbr></p>
<p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>`
export const typography19=`
<ul className="list-inline mb-0">
<li className="list-inline-item">This is a list item.</li>
<li className="list-inline-item">And another one.</li>
<li className="list-inline-item">But {'they're'} displayed inline.</li>
</ul>`
export const typography20=`
<p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div className="text-success">
    <hr />
</div>
<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>

<hr className="text-danger border-2 opacity-50" />
<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr className="border-primary border-3 opacity-75" />`
export const typography21=`
<p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p>`
export const typography22=`
<p className="text-decoration-underline">This text has a line underneath it.
</p>
<p className="text-decoration-line-through">This text has a line going
    through
    it.
</p>
<a href="#!" className="text-decoration-none">This link has its text
    decoration
    removed
</a>`
export const typography23=`
<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-semibold">Semibold weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p>`
export const typography24=`
<p className="lh-1">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-base">This is a long paragraph written to show how the line-height
of
an element is affected by our utilities. Classes are applied to the element
itself or sometimes the parent element. These classes can be customized as
needed with our utility API.
</p>
<p className="lh-lg mb-0">This is a long paragraph written to show how the
line-height
of an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>`
export const typography25=`
<p className="font-monospace mb-0">This is in monospace</p>`
export const typography26=`
<p className="text-muted mb-0">
    Muted text with a <a href="#!" className="text-reset text-decoration-underline text-dark">reset link</a>.
           </p>`
export const typography27=`
<p className="visible mb-0">This is visible text</p>`
export const typography28=`
<p className="invisible mb-0">This is invisible text</p>`
export const typography29=`
<p className="text-start">Start aligned text on all viewport sizes.</p>
     <p className="text-center">Center aligned text on all viewport sizes.</p>
     <p className="text-end">End aligned text on all viewport sizes.</p>

     <p className="text-sm-start">Start aligned text on viewports sized SM (small) or
         wider.
     </p>
     <p className="text-md-start">Start aligned text on viewports sized MD (medium) or
         wider.
     </p>
     <p className="text-lg-start">Start aligned text on viewports sized LG (large) or
         wider.
     </p>
     <p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
         or
         wider.</p>`
export const typography30=`
<div className="badge bg-primary text-wrap mb-3" style={{width: "6rem"}}> This text should wrap. </div>
                        <p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
                        <div className="text-nowrap bg-light border" style={{width: "8rem"}}> This text should overflow the parent. </div>`
export const typography31=`
<p className="text-break mb-0">
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>`