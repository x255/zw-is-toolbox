export const checks1=
`<Form.Check label="Default checkbox" />
<Form.Check defaultChecked label="Checked checkbox" />`
export const checks2=
`<Form.Check disabled label="Disabled checkbox" />
<Form.Check disabled defaultChecked label="Disabled checked checkbox" />`
export const checks3=
` <div className="form-check"> 
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> 
<label className="form-check-label" htmlFor="flexRadioDefault1"> Default radio </label> 
</div> 
<div className="form-check">
     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
         <label className="form-check-label" htmlFor="flexRadioDefault2"> Default checked radio </label>
          </div>`
export const checks4=
` <Form.Check type="radio" disabled label="Default radio" />
<Form.Check type="radio" disabled defaultChecked label="Default checked radio" />`
export const checks5=
` <Form.Check label="Default checkbox" />
<Form.Check disabled label="Disabled checkbox" />
<Form.Check type="radio" label="Default Radio"defaultChecked />
<Form.Check type="radio" disabled label="Disabled Radio" />`
export const checks6=
`<Form.Check type="switch" label="Default switch checkbox input" />
<Form.Check type="switch" defaultChecked label="Default switch checkbox input" />
<Form.Check type="switch" disabled label="Default switch checkbox input" />
<Form.Check type="switch" disabled defaultChecked label="Default checked switch checkbox input" />`
export const checks7=
`  <Form.Check type="checkbox" defaultChecked label="Default" />
<Form.Check className="form-check-md d-flex align-items-center"
    type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
<Form.Check className="form-check-lg d-flex align-items-center"
    type="checkbox" defaultChecked id="checkebox-lg" label="Large" />`
export const checks8=
`<Form.Check type="radio" label="Default" name="example-radios" />
<Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
<Form.Check type="radio" className="form-check-lg" name="example-radios"
    defaultChecked id="Radio-lg" label="Large" />`
export const checks9=
` <div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="switch-sm" />
<label className="form-check-label" htmlFor="switch-sm">Default</label>
</div>
<div className="form-check form-check-md form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="switch-md" />
<label className="form-check-label" htmlFor="switch-md">Medium</label>
</div>
<div className="form-check form-check-lg form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="switch-lg" />
<label className="form-check-label" htmlFor="switch-lg">Large</label>
</div>`
export const checks10=
`<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox1"
    value="option1" />
<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox2"
    value="option2" />
<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox3"
    value="option3" disabled />
<label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio1" value="option1" />
<label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio2" value="option2" />
<label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio3" value="option3" disabled />
<label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
</div>`
export const checks11=
` <span className="me-3">
<input className="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
    aria-label="..." />
</span>
<span>
<input className="form-check-input" type="radio" name="radioNoLabel"
    id="radioNoLabel1" value="" aria-label="..." />
</span>`
export const checks12=
`<div className="form-check form-check-reverse mb-3">
<input className="form-check-input" type="checkbox" value=""
    id="reverseCheck1" />
<label className="form-check-label" htmlFor="reverseCheck1">
    Reverse checkbox
</label>
</div>
<div className="form-check form-check-reverse mb-3">
<input className="form-check-input" type="checkbox" value=""
    id="reverseCheck2" disabled />
<label className="form-check-label" htmlFor="reverseCheck2">
    Disabled reverse checkbox
</label>
</div>

<div className="form-check form-switch form-check-reverse">
<input className="form-check-input" type="checkbox"
    id="flexSwitchCheckReverse" />
<label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse
    switch
    checkbox input</label>
</div>`
export const checks13=
` <input type="checkbox" className="btn-check" id="btn-check-outlined" />
<label className="btn btn-outline-primary mb-3" htmlFor="btn-check-outlined">Single
    toggle</label><br />

<input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked
/>
<label className="btn btn-outline-secondary mb-3"
    htmlFor="btn-check-2-outlined">Checked</label><br />

<input type="radio" className="btn-check" name="options-outlined" id="success-outlined"
    defaultChecked />
<label className="btn btn-outline-success m-1" htmlFor="success-outlined">Checked success
    radio</label>

<input type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
/>
<label className="btn btn-outline-danger m-1" htmlFor="danger-outlined">Danger radio</label>`
export const checks14=
`<Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
<Button className="btn btn-primary m-1">Checked</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option2" />
<Button className="btn btn-primary m-1">Radio</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
<Button disabled className="btn btn-primary m-1">Disabled</Button>
<Form.Check type="radio" className="btn-check" name="options" id="option4" />
<Button className="btn btn-primary m-1">Radio</Button>`
export const checks15=
` <input type="checkbox" className="btn-check" id="btn-check" />
<label className="btn btn-primary m-1" htmlFor="btn-check">Single toggle</label>
<input type="checkbox" className="btn-check" id="btn-check-2" defaultChecked
/>
<label className="btn btn-primary m-1" htmlFor="btn-check-2">Checked</label>
<input type="checkbox" className="btn-check" id="btn-check-3"
    disabled />
<label className="btn btn-primary m-1" htmlFor="btn-check-3">Disabled</label>`
export const checks16=
` {Checkdata1.map((idx) => (
    <div className={'form-check {idx.class1}'} key={Math.random()}>
        <input id={idx.id} className={'form-check-input form-checked-{idx.class2}'}
            type="checkbox" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`
export const checks17=
`  {Checkdata1.map((idx) => (
    <div className={'form-check {idx.class1}'} key={Math.random()}>
        <input id={idx.id} className={'form-check-input form-checked-outline form-checked-{idx.class2}'}
            type="checkbox" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`
export const checks18=
`  {Checkdata1.map((idx) => (
    <div className={'form-check {idx.class1}'} key={Math.random()}>
        <input id={idx.id} className={'form-check-input form-checked form-checked-{idx.class2}'}
            type="radio" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`
export const checks19=
` {Checkdata1.map((idx) => (
    <div className={'form-check {idx.class1}'} key={Math.random()}>
        <input id={idx.id} className={'form-check-input form-checked form-checked-outline form-checked-{idx.class2}'}
            type="radio" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`
export const checks20=
` {Checkdata1.map((idx) => (
    <div className={'form-check form-switch {idx.class1}'} key={Math.random()}>
        <input id={idx.id} className={'form-check-input form-checked-{idx.class2}'}
            type="checkbox" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`
export const checks21=
`  <Row className="row gy-1">
<Col xl={4}>
    <div className={'toggle  {primary1}'} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-secondary {secondary1}'} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-warning {warning1}'} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-info {info1}'} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-success {success1}'} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-danger {danger1}'} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle mb-3  toggle-light {light1}'} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }} >
        <span></span>
    </div>
</Col>
<Col xl={4}>
    <div className={'toggle ms-sm-2  toggle-dark {dark1}'} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
        <span></span>
    </div>
</Col>
</Row>`
export const checks22=
`      <div className="row gy-1">
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchPrimary" className="label-primary"></Form.Label><span className="ms-3">Primary</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchSecondary" className="label-secondary"></Form.Label><span className="ms-3">Secondary</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchWarning" className="label-warning"></Form.Label><span className="ms-3">Warning</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchInfo" className="label-info"></Form.Label><span className="ms-3">Info</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchSuccess" className="label-success"></Form.Label><span className="ms-3">Success</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchDanger" className="label-danger"></Form.Label><span className="ms-3">Danger</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchLight" className="label-light"></Form.Label><span className="ms-3">Light</span>
    </div>
</Col>
<Col xl={4}>
    <div className="custom-toggle-switch d-flex align-items-center mb-4">
        <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
        <Form.Label htmlFor="toggleswitchDark" className="label-dark"></Form.Label><span className="ms-3">Dark</span>
    </div>
</Col>
</div>`
export const checks23=
`  <div className="d-flex align-items-center flex-wrap mb-3">
<div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>

<div className={'toggle  toggle-sm mb-0 {primary2}'} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
    <span></span>
</div>
</div>
<div className="d-flex align-items-center flex-wrap mb-3">
<div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>

<div className={'toggle mb-0  toggle-secondary {secondary2}'} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
    <span></span>
</div>
</div>
<div className="d-flex align-items-center flex-wrap">
<div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>

<div className={'toggle toggle-lg mb-0  toggle-success {success2}'} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
    <span></span>
</div>
</div>`
export const checks24=
`  <div className="d-flex align-items-center flex-wrap mb-4 gap-2">
<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="custom-toggle-switch toggle-sm ms-2">
    <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-sm" className="label-primary mb-0"></Form.Label>
</div>
</div>
<div className="d-flex align-items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
<div className="custom-toggle-switch ms-2">
    <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
</div>
</div>
<div className="d-sm-flex d-block align-items-center flex-wrap">
<div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
    <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
    <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
</div>
</div>`
export const inputs1=
`  <Row className="gy-4">
<Col xl={4} lg={6} md={6} sm={12} >
    <label htmlFor="input-label" className="form-label">Basic Input:</label>
    <Form.Control type="text" id="input" />
</Col>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-label" className="form-label">Form Input With Label</label>
    <Form.Control type="text" id="input-label" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-placeholder" className="form-label">Form Input With Placeholder</label>
    <Form.Control type="text" id="input-placeholder" placeholder="Placeholder" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-text" className="form-label">Type Text</label>
    <Form.Control type="text" id="input-text" placeholder="Text" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-number" className="form-label">Type Number</label>
    <Form.Control type="number" id="input-number" placeholder="Number" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-password" className="form-label">Type Password</label>
    <Form.Control type="password" id="input-password" placeholder="Password" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-email" className="form-label">Type Email</label>
    <Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-tel" className="form-label">Type Tel</label>
    <Form.Control type="tel" id="input-tel" placeholder="+1100-2031-1233" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-date" className="form-label">Type Date</label>
    <Form.Control type="date" id="input-date" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-week" className="form-label">Type Week</label>
    <Form.Control type="week" id="input-week" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-month" className="form-label">Type Month</label>
    <Form.Control type="month" id="input-month" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-time" className="form-label">Type Time</label>
    <Form.Control type="time" id="input-time" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-datetime-local" className="form-label">Type datetime-local</label>
    <Form.Control type="datetime-local" id="input-datetime-local" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-search" className="form-label">Type Search</label>
    <Form.Control type="search" id="input-search" placeholder="Search" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-submit" className="form-label">Type Submit</label>
    <Form.Control type="submit" id="input-submit" defaultValue="Submit" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-reset" className="form-label">Type Reset</label>
    <Form.Control type="reset" id="input-reset" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-button" className="form-label">Type Button</label>
    <Form.Control type="button" className=" btn btn-primary" id="input-button" defaultValue="Button" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <Row>
        <Col xl={3}>
            <label className="form-label">Type Color</label>
            <Form.Control className="form-input-color" type="color" defaultValue="#136bd0" />
        </Col>
        <Col xl={5}>
            <Form.Check>
                <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                <Form.Check className="ms-2" type="checkbox"
                    defaultValue="" defaultChecked />
            </Form.Check>
        </Col>
        <Col xl={4}>
            <div className="form-check">
                <p className="mb-3 px-0 text-muted">Type Radio</p>
                <Form.Check
                    className="ms-2" type="radio" defaultChecked />
            </div>
        </Col>
    </Row>
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-file" className="form-label">Type File</label>
    <Form.Control type="file" id="input-file" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label className="form-label">Type Url</label>
    <Form.Control type="url" name="website" placeholder="http://example.com" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-disabled" className="form-label">Type Disabled</label>
    <Form.Control type="text" id="input-disabled" placeholder="Disabled input" disabled />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-readonlytext" className="form-label">Input Readonly Text</label>
    <input type="text" readOnly="" className="form-control-plaintext" id="input-readonlytext" defaultValue="email@example.com" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="disabled-readonlytext" className="form-label">Disabled Readonly Input</label>
    <Form.Control type="text" defaultValue="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled readOnly="" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label className="form-label">Type Readonly Input</label>
    <Form.Control type="text" defaultValue="Readonly input here..." aria-label="readonly input example" readOnly="" />
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="text-area" className="form-label">Textarea</label>
    <textarea className="form-control" id="text-area" rows="1"></textarea>
</div>
<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <label htmlFor="input-DataList" className="form-label">Datalist example</label>
    <Form.Control list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
    <datalist id="datalistOptions">
        <option defaultValue="San Francisco">
        </option>
        <option defaultValue="New York">
        </option>
        <option defaultValue="Seattle">
        </option>
        <option defaultValue="Los Angeles">
        </option>
        <option defaultValue="Chicago">
        </option>
    </datalist>
</div>
</Row>`
export const inputs2=
`  <div className="row gy-3">
<div className="col-xl-12">
    <label htmlFor="input-noradius" className="form-label">Input With No Radius</label>
    <Form.Control type="text" className="form-control rounded-0" id="input-noradius" placeholder="No Radius" />
</div>
<div className="col-xl-12">
    <label htmlFor="input-rounded" className="form-label">Input With Radius</label>
    <Form.Control type="text" className="form-control" id="input-rounded" placeholder="Default Radius" />
</div>
<div className="col-xl-12">
    <label htmlFor="input-rounded-pill" className="form-label">Rounded Input</label>
    <Form.Control type="text" className="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
</div>
</div>`
export const inputs3=
`  <div className="row gy-3">
<div className="col-xl-12">
    <label htmlFor="input-rounded1" className="form-label">Default</label>
    <Form.Control type="text" id="input-rounded1" placeholder="Default" />
</div>
<div className="col-xl-12">
    <label htmlFor="input-rounded2" className="form-label">Dotted Input</label>
    <Form.Control type="text" className=" border-dotted" id="input-rounded2" placeholder="Dotted" />
</div>
<div className="col-xl-12">
    <label htmlFor="input-rounded3" className="form-label">Dashed Input</label>
    <Form.Control type="text" className=" border-dashed" id="input-rounded3" placeholder="Dashed" />
</div>
</div>`
export const inputs4=
` <Form.Control className="form-control-sm mb-3" type="text"
placeholder=".form-control-sm" aria-label=".form-control-sm example" />
<input className="form-control mb-3" type="text" placeholder="Default input"
aria-label="default input example" />
<Form.Control className=" form-control-lg" type="text"
placeholder=".form-control-lg" aria-label=".form-control-lg example" />`
export const inputs5=
` <form>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email
        address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">{'We'll'}
        never share your email
        with
        anyone else.</div>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
</div>
<div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check
        me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>`
export const inputs6=
`   <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control"
    aria-describedby="passwordHelpBlock" />
<div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and
    numbers,
    and
    must not contain spaces, special characters, or emoji.
</div>`
export const inputs7=
`   <div className="row g-3 align-items-center">
<div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
</div>
<div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control"
        aria-describedby="passwordHelpInline" />
</div>
<div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</div>`
export const inputs8=
`    <form>
<fieldset disabled="">
    <legend>Disabled fieldset example</legend>
    <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label  ">Disabled
            input</label>
        <input type="text" id="disabledTextInput" disabled className="form-control"
            placeholder="Disabled input" />
    </div>
    <div className="mb-3">
        <label htmlFor="disabledSelect" className="form-label">Disabled select
            menu</label>
        <select id="disabledSelect" disabled className="form-select">
            <option>Disabled select</option>
        </select>
    </div>
    <div className="mb-3">
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="disabledFieldsetCheck" disabled />
            <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                {'Can't'} check this
            </label>
        </div>
    </div>
    <Button type="submit" className="btn btn-primary">Submit</Button>
</fieldset>
</form> `
export const inputgroup1=
`  <div className="input-group mb-3">
<span className="input-group-text" id="basic-addon1">@</span>
<Form.Control type="text" placeholder="Username"
    aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div className="input-group mb-3">
<Form.Control type="text" placeholder="Recipient's username"
    aria-label="Recipient's username" aria-describedby="basic-addon2" />
<span className="input-group-text" id="basic-addon2">@example.com</span>
</div>
<label htmlFor="basic-url" className="form-label">Your vanity URL</label>
<div className="input-group mb-3">
<span className="input-group-text"
    id="basic-addon3">https://example.com/users/</span>
<Form.Control type="text" id="basic-url"
    aria-describedby="basic-addon3" />
</div>
<div className="input-group mb-3">
<span className="input-group-text">$</span>
<Form.Control type="text"
    aria-label="Amount (to the nearest dollar)" />
<span className="input-group-text">.00</span>
</div>
<div className="input-group mb-3">
<Form.Control type="text" placeholder="Username"
    aria-label="Username" />
<span className="input-group-text">@</span>
<Form.Control type="text" placeholder="Server"
    aria-label="Server" />
</div>
<div className="input-group">
<span className="input-group-text">With textarea</span>
<textarea className="form-control" aria-label="With textarea"></textarea>
</div>`
export const inputgroup2=
` <div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">@</span>
<Form.Control type="text" placeholder="Username"
    aria-label="Username" aria-describedby="addon-wrapping" />
</div>`
export const inputgroup3=
`    <div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
<Form.Control type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm" />
</div>
<div className="input-group mb-3">
<span className="input-group-text"
    id="inputGroup-sizing-default">Default</span>
<Form.Control type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-default" />
</div>
<div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
<Form.Control type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg" />
</div>`
export const inputgroup4=
`<div className="input-group mb-3">
<button className="btn btn-primary" type="button"
    id="button-addon1">Button</button>
<Form.Control type="text" placeholder=""
    aria-label="Example text with button addon"
    aria-describedby="button-addon1" />
</div>
<div className="input-group mb-3">
<Form.Control type="text" placeholder="Recipient's username"
    aria-label="Recipient's username" aria-describedby="button-addon2" />
<button className="btn btn-primary" type="button"
    id="button-addon2">Button</button>
</div>
<div className="input-group mb-3">
<button className="btn btn-primary" type="button">Button</button>
<button className="btn btn-primary" type="button">Button</button>
<Form.Control type="text" placeholder=""
    aria-label="Example text with two button addons" />
</div>
<div className="input-group">
<Form.Control type="text" placeholder="Recipient's username"
    aria-label="Recipient's username with two button addons" />
<button className="btn btn-primary" type="button">Button</button>
<button className="btn btn-primary" type="button">Button</button>
</div>`
export const inputgroup5=
`  <Dropdown className="input-group mb-3">
<Dropdown.Toggle className="btn btn-primary dropdown-toggle-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu as='ul'>
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
<Form.Control type="text" aria-label="Text input with dropdown button" />
</Dropdown>
<Dropdown className="input-group input-btn-outline mb-3">
<Form.Control type="text"
    aria-label="Text input with dropdown button" />
<Dropdown.Toggle variant='' className="btn btn-outline-primary dropdown-toggle-drop" type="button"
    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
<Dropdown.Menu as='ul' className="dropdown-menu-end">
    <Dropdown.Item as='li' href="#!">Action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Another action</Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Something else here</Dropdown.Item>
    <Dropdown.Item as='li'>
        <hr className="dropdown-divider p-0" />
    </Dropdown.Item>
    <Dropdown.Item as='li' href="#!">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<InputGroup className="flex-nowrap">
<Dropdown>
    <Dropdown.Toggle variant='' className="btn btn-primary-light dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className="">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider>
        </Dropdown.Divider>
        <Dropdown.Item href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" className=""
    aria-label="Text input with 2 dropdown buttons" />
<Dropdown>
    <Dropdown.Toggle variant='' className="btn btn-primary-light dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className="">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider>
        </Dropdown.Divider>
        <Dropdown.Item href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</InputGroup>`
export const inputgroup6=
`<div className="input-group mb-3">
<label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
<Form.Control type="file" id="inputGroupFile01" />
</div>

<div className="input-group mb-3">
<Form.Control type="file" id="inputGroupFile02" />
<label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
</div>

<div className="input-group mb-3">
<button className="btn btn-primary" type="button"
    id="inputGroupFileAddon03">Button</button>
<Form.Control type="file" id="inputGroupFile03"
    aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
</div>

<div className="input-group">
<Form.Control type="file" id="inputGroupFile04"
    aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
<button className="btn btn-primary" type="button"
    id="inputGroupFileAddon04">Button</button>
</div>`
export const inputgroup7=
`<div className="input-group">
<span className="input-group-text">First and last name</span>
<input type="text" aria-label="First name" className="form-control" />
<input type="text" aria-label="Last name" className="form-control" />
</div>`
export const inputgroup8=
` <div className="input-group mb-3">
<div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value=""
        aria-label="Checkbox for following text input" />
</div>
<Form.Control type="text"
    aria-label="Text input with checkbox" />
</div>
<div className="input-group">
<div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value=""
        aria-label="Radio button for following text input" />
</div>
<Form.Control type="text"
    aria-label="Text input with radio button" />
</div>`
export const inputgroup9=
`<div className="input-group mb-3">
<div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value=""
        aria-label="Checkbox for following text input" />
</div>
<Form.Control type="text"
    aria-label="Text input with checkbox" />
</div>
<div className="input-group">
<div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value=""
        aria-label="Radio button for following text input" />
</div>
<Form.Control type="text"
    aria-label="Text input with radio button" />
</div>`
export const inputgroup10=
` <InputGroup className="mb-3">
<Button variant='primary' type="button" className="">Action</Button>
<Dropdown>
    <Dropdown.Toggle type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" className=""
    aria-label="Text input with segmented dropdown button" />
</InputGroup>
<InputGroup>
<Form.Control type="text" className=""
    aria-label="Text input with segmented dropdown button" />
<Button type="button" className="btn btn-primary">Action</Button>
<Dropdown>
    <Dropdown.Toggle variant='' type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#!">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</InputGroup>`
export const inputgroup11=
`    <div className="input-group mb-3">
<label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
<Form.Select id="inputGroupSelect01">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</div>
<div className="input-group mb-3">
<Form.Select id="inputGroupSelect02">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
<label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
</div>
<div className="input-group mb-3">
<button className="btn btn-primary" type="button">Button</button>
<Form.Select id="inputGroupSelect03"
    aria-label="Example select with button addon">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
</div>
<div className="input-group">
<Form.Select id="inputGroupSelect04"
    aria-label="Example select with button addon">
    <option>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
<button className="btn btn-primary" type="button">Button</button>
</div>`
export const formselect1=
`   <Form.Select aria-label="Default select example">
<option>Open this select menu
</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>`
export const formselect2=
`    <Form.Select aria-label="Disabled select example" disabled>
<option>Open this select menu
</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>`
export const formselect3=
`  <select className="form-select rounded-pill" aria-label="Default select example">
<option>Open this select menu
</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`
export const formselect4=
` <select multiple className="form-select" aria-label="multiple select example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`
export const formselect5=
` <select className="form-select" aria-label="size 3 select example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<option value="4">Four</option>
<option value="5">Five</option>
</select>`
export const formselect6=
` <select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<select className="form-select mb-3" aria-label="Default select">
<option>Open this select menu
</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<select size="lg" className="form-select form-select-lg"
aria-label=".form-select-lg example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`
export const rangeslider1=
`<Form.Range type="range" className="" id="customRange1" />`
export const rangeslider2=
`<Form.Range type="range" className="" id="disabledRange" disabled />`
export const rangeslider3=
`<Form.Range type="range" className="" min="0" max="5" id="customRange2" />`
export const rangeslider4=
`<Form.Range type="range" className="" min="0" max="5" step="0.5" id="customRange3" />`
export const fileupload1=
`     <Form.Group controlId="formFile" className="mb-3">
<Form.Label>Default file input example</Form.Label>
<Form.Control type="file" />
</Form.Group>
<Form.Group controlId="formFileMultiple" className="mb-3">
<Form.Label>Multiple files input example</Form.Label>
<Form.Control type="file" multiple />
</Form.Group>
<Form.Group controlId="formFileDisabled" className="mb-3">
<Form.Label>Disabled file input example</Form.Label>
<Form.Control type="file" disabled />
</Form.Group>
<Form.Group controlId="formFileSm" className="mb-3">
<Form.Label>Small file input example</Form.Label>
<Form.Control type="file" size="sm" />
</Form.Group>
<Form.Group controlId="formFileLg" className="mb-3">
<Form.Label>Large file input example</Form.Label>
<Form.Control type="file" size="lg" />
</Form.Group>`
export const colorpicker=
`  <Form.Control
type="color"
id="exampleColorInput"
defaultValue="#136ad0"
title="Choose your color"
/>`
export const floatinglabels1=
`     <div className="form-floating mb-3">
<Form.Control type="email" id="floatingInput"
    placeholder="name@example.com" />
<label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
<Form.Control type="password" id="floatingPassword"
    placeholder="Password" />
<label htmlFor="floatingPassword">Password</label>
</div>`
export const floatinglabels2=
`<div className="form-floating mb-3">
<input type="email" readOnly className="form-control-plaintext"
    id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
<label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
</div>
<div className="form-floating">
<input type="email" readOnly className="form-control-plaintext"
    id="floatingPlaintextInput" placeholder="name@example.com"
    defaultValue="name@example.com" />
<label htmlFor="floatingPlaintextInput">Input with value</label>
</div>`
export const floatinglabels3=
`  <Form.Floating className="my-3">
<Form.Control type="email" className="" id="floatingInputValue"
    placeholder="name@example.com" defaultValue="test@example.com" />
<Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
</Form.Floating>
<div className="form-flotin">
<Form.Control type="email" className="is-invalid"
    id="floatingInputInvalid" placeholder="name@example.com"
    defaultValue="test@example.com" />
<Form.Label className='fw-normal' htmlFor="floatingInputInvalid">Invalid input</Form.Label>
</div>`
export const floatinglabels4=
` <Form.Floating className=" mb-4">
<Form.Control as="textarea" className="" placeholder="Leave a comment here"
    id="floatingTextarea"></Form.Control>
<label htmlFor="floatingTextarea">Description</label>
</Form.Floating>
<Form.Floating className="">
<Form.Control as="textarea" className="form-control" placeholder="Leave a comment here"
    id="floatingTextarea2" rows={1} disabled></Form.Control>
<Form.Label htmlFor="floatingTextarea2">Disabled</Form.Label>
</Form.Floating>`
export const floatinglabels5=
`    <div className="form-floating">
<Form.Select id="floatingSelect"
    aria-label="Floating label select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
<label htmlFor="floatingSelect">Works with selects</label>
</div>`
export const floatinglabels6=
`   <div className="row g-2">
<div className="col-md">
    <Form.Floating className="">
        <Form.Control type="email" className="form-control" id="floatingInputGrid"
            placeholder="name@example.com" defaultValue="mdo@example.com" />
        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
    </Form.Floating>
</div>
<div className="col-md">
    <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example" className='form-select'>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </FloatingLabel>

</div>
</div>`
export const floatinglabels7=
` <Row className=" gy-4">
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-primary">
        <input type="email" className="form-control" id="floatingInputprimary" placeholder="name@example.com" />
        <label htmlFor="floatingInputprimary">primary</label>
    </div>
</div>
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-secondary">
        <input type="email" className="form-control" id="floatingInputsecondary" placeholder="name@example.com" />
        <label htmlFor="floatingInputsecondary">secondary</label>
    </div>
</div>
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-warning">
        <input type="email" className="form-control" id="floatingInputwarning" placeholder="name@example.com" />
        <label htmlFor="floatingInputwarning">warning</label>
    </div>
</div>
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-info">
        <input type="email" className="form-control" id="floatingInputinfo" placeholder="name@example.com" />
        <label htmlFor="floatingInputinfo">info</label>
    </div>
</div>
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-success">
        <input type="email" className="form-control" id="floatingInputsuccess" placeholder="name@example.com" />
        <label htmlFor="floatingInputsuccess">success</label>
    </div>
</div>
<div className="col-xl-4">
    <div className="form-floating mb-4 floating-danger">
        <input type="email" className="form-control" id="floatingInputdanger" placeholder="name@example.com" />
        <label htmlFor="floatingInputdanger">danger</label>
    </div>
</div>
</Row>`
export const formlayout1=
`    <div className="mb-3">
<label htmlFor="form-text" className="form-label fs-14 text-dark">Enter name</label>
<Form.Control type="text" id="form-text" placeholder="full name" />
</div>
<div className="mb-3">
<label htmlFor="form-password" className="form-label fs-14 text-dark">Enter
    Password</label>
<Form.Control type="password" id="form-password" placeholder="password" />
</div>
<div className="form-check mb-3">
<input className="form-check-input" type="checkbox" value="" id="invalidCheck"
    required />
<label className="form-check-label" htmlFor="invalidCheck">
    Accept Policy
</label>
</div>
<button className="btn btn-primary" type="submit">Submit</button>`
export const formlayout2=
`    <form>
<Row className=" mb-3">
    <label htmlFor="inputEmail3"
        className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
        <Form.Control type="email" id="inputEmail3" />
    </div>
</Row>
<div className="row mb-3">
    <label htmlFor="inputPassword3"
        className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
        <Form.Control type="password" id="inputPassword3" />
    </div>
</div>
<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
    <div className="col-sm-10">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios1" value="option1"
                defaultChecked />
            <label className="form-check-label" htmlFor="gridRadios1">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios2" value="option3"
                disabled />
            <label className="form-check-label" htmlFor="gridRadios2">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
                Certified
            </label>
        </div>
    </div>
</fieldset>
<button type="submit" className="btn btn-primary">Sign in</button>
</form>`
export const formlayout3=
`  <div className="mb-3">
<label htmlFor="form-text1" className="form-label fs-14 text-dark">Enter name</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-user-line"></i></div>
    <Form.Control type="text" id="form-text1" placeholder="" />
</div>
</div>
<div className="mb-3">
<label htmlFor="form-password1" className="form-label fs-14 text-dark">Enter
    Password</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-lock-line"></i></div>
    <Form.Control type="password" id="form-password1" placeholder="" />
</div>
</div>
<div className="form-check mb-3">
<input className="form-check-input" type="checkbox" value="" id="invalidCheck1"
    required="" />
<label className="form-check-label" htmlFor="invalidCheck1">
    Accept Policy
</label>
</div>
<button className="btn btn-primary" type="submit">Submit</button>`
export const formlayout4=
`   <form>
<div className="row mb-3">
    <label htmlFor="inputEmail1"
        className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
        <div className="input-group">
            <Form.Control type="email" id="inputEmail1" />
            <div className="input-group-text">
                <i className="ri-mail-line"></i>
            </div>
        </div>
    </div>
</div>
<div className="row mb-3">
    <label htmlFor="inputPassword1"
        className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
        <div className="input-group">
            <Form.Control type="password" id="inputPassword1" />
            <div className="input-group-text">
                <i className="ri-lock-line"></i>
            </div>
        </div>
    </div>
</div>
<fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
    <div className="col-sm-10">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios4" value="option1"
                defaultChecked />
            <label className="form-check-label" htmlFor="gridRadios4">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios3" value="option3"
                disabled />
            <label className="form-check-label" htmlFor="gridRadios3">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck2" />
            <label className="form-check-label" htmlFor="gridCheck2">
                Certified
            </label>
        </div>
    </div>
</fieldset>
<button type="submit" className="btn btn-primary">Sign in</button>
</form>`
export const formlayout5=
`    <Row className=" row-cols-lg-auto g-3 align-items-center">
<div className="col-12">
    <label className="visually-hidden"
        htmlFor="inlineFormInputGroupUsername">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <Form.Control type="text"
            id="inlineFormInputGroupUsername" placeholder="Username" />
    </div>
</div>
<div className="col-12">
    <label className="visually-hidden"
        htmlFor="inlineFormSelectPref">Preference</label>
    <Form.Select id="inlineFormSelectPref">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</div>
<div className="col-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox"
            id="inlineFormCheck" />
        <label className="form-check-label" htmlFor="inlineFormCheck">
            Remember me
        </label>
    </div>
</div>
<div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
</div>
</Row>`
export const formlayout6=
`  <div className="row g-3">
<div className="col-sm-7">
    <Form.Control type="text" placeholder="City"
        aria-label="City" />
</div>
<div className="col-sm">
    <Form.Control type="text" placeholder="State"
        aria-label="State" />
</div>
<div className="col-sm">
    <Form.Control type="text" placeholder="Zip"
        aria-label="Zip" />
</div>
</div>`
export const formlayout7=
`  <div className="mb-3">
<label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
<Form.Control type="text" id="formGroupExampleInput"
    placeholder="Example input placeholder" />
</div>
<div className="mb-1">
<label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
<Form.Control type="text" id="formGroupExampleInput2"
    placeholder="Another input placeholder" />
</div>`
export const formlayout8=
`      <Row className=" mb-3">
<label htmlFor="colFormLabelSm"
    className="col-sm-2 col-form-label col-form-label-sm">Email</label>
<div className="col-sm-10">
    <Form.Control type="email" className=" form-control-sm"
        id="colFormLabelSm" placeholder="col-form-label-sm" />
</div>
</Row>
<div className="row mb-3">
<label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
    <Form.Control type="email" id="colFormLabel"
        placeholder="col-form-label" />
</div>
</div>
<div className="row">
<label htmlFor="colFormLabelLg"
    className="col-sm-2 col-form-label col-form-label-lg">Email</label>
<div className="col-sm-10">
    <Form.Control type="email" className="form-control-lg"
        id="colFormLabelLg" placeholder="col-form-label-lg" />
</div>
</div>`
export const formlayout9=
`  <form className="row gy-2 gx-3 align-items-center mb-4">
<div className="col-auto">
    <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
    <Form.Control type="text" id="autoSizingInput"
        placeholder="Jane Doe" />
</div>
<div className="col-auto">
    <label className="visually-hidden"
        htmlFor="autoSizingInputGroup">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <Form.Control type="text"
            id="autoSizingInputGroup" placeholder="Username" />
    </div>
</div>
<div className="col-auto">
    <label className="visually-hidden"
        htmlFor="autoSizingSelect">Preference</label>
    <Form.Select id="autoSizingSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</div>
<div className="col-auto">
    <div className="form-check">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck" />
        <label className="form-check-label" htmlFor="autoSizingCheck">
            Remember me
        </label>
    </div>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
<span className="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
classes.</span>
<form className="row gx-3 gy-2 align-items-center mt-0">
<div className="col-sm-3">
    <label className="visually-hidden"
        htmlFor="specificSizeInputName">Name</label>
    <Form.Control type="text" id="specificSizeInputName"
        placeholder="Jane Doe" />
</div>
<div className="col-sm-3">
    <label className="visually-hidden"
        htmlFor="specificSizeInputGroupUsername">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <Form.Control type="text"
            id="specificSizeInputGroupUsername" placeholder="Username" />
    </div>
</div>
<div className="col-sm-3">
    <label className="visually-hidden"
        htmlFor="specificSizeSelect">Preference</label>
    <Form.Select id="specificSizeSelect">
        <option>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</div>
<div className="col-auto">
    <div className="form-check">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck2" />
        <label className="form-check-label" htmlFor="autoSizingCheck2">
            Remember me
        </label>
    </div>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>`
export const formlayout10=
` <Row>
<div className="col-md-6 mb-3">
    <label className="form-label">First Name</label>
    <Form.Control type="text" placeholder="First name"
        aria-label="First name" />
</div>
<div className="col-md-6 mb-3">
    <label className="form-label">Last Name</label>
    <Form.Control type="text" placeholder="Last name"
        aria-label="Last name" />
</div>
<div className="col-md-6 mb-3">
    <label className="form-label">Address</label>
    <div className="row">
        <div className="col-xl-12 mb-3">
            <Form.Control type="text" placeholder="Street"
                aria-label="Street" />
        </div>
        <div className="col-xl-12 mb-3">
            <Form.Control type="text" placeholder="Landmark"
                aria-label="Landmark" />
        </div>
        <div className="col-xxl-6 col-xl-12 mb-3">
            <Form.Control type="text" placeholder="City"
                aria-label="City" />
        </div>
        <div className="col-xxl-6 col-xl-12 mb-3">
            <Form.Select id="inputState1">
                <option>State</option>
                <option>...</option>
            </Form.Select>
        </div>
        <div className="col-xxl-6 col-xl-12 mb-3">
            <input type="text" className="form-control" placeholder="Postal/Zip code"
                aria-label="Postal/Zip code" />
        </div>
        <div className="col-xxl-6 col-xl-12 mb-3">
            <Form.Select id="inputCountry" >
                <option>Country</option>
                <option>...</option>
            </Form.Select>
        </div>
    </div>
</div>
<div className="col-md-6 mb-3">
    <Row>
        <div className="col-xl-12 mb-3">
            <label className="form-label">Email</label>
            <Form.Control type="email" placeholder="Email"
                aria-label="email" />
        </div>
        <div className="col-xl-12 mb-3">
            <label className="form-label">D.O.B</label>
            <Form.Control type="date"
                aria-label="dateofbirth" />
        </div>
        <div className="col-xl-12 mb-3">
            <div className="row">
                <label className="form-label mb-1">Maritial Status</label>
                <div className="col-xl-6">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Married
                        </label>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Single
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <Col xl={12}>

        </Col>
    </Row>
</div>
<div className="col-md-6 mb-3">
    <label className="form-label">Contact Number</label>
    <Form.Control type="number" placeholder="Phone number"
        aria-label="Phone number" />
</div>
<div className="col-md-6 mb-3">
    <label className="form-label">Alternative Contact</label>
    <Form.Control type="number" placeholder="Phone number"
        aria-label="Phone number" />
</div>
<div className="col-md-12">
    <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
            Check me out
        </label>
    </div>
</div>
<div className="col-md-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
</div>
</Row>`
export const formlayout11=
`    <form className="row g-3 mt-0">
<div className="col-md-6">
    <label className="form-label">First Name</label>
    <Form.Control type="text" placeholder="First name"
        aria-label="First name" />
</div>
<div className="col-md-6">
    <label className="form-label">Last Name</label>
    <Form.Control type="text" placeholder="Last name"
        aria-label="Last name" />
</div>
<div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <Form.Control type="email" id="inputEmail4" placeholder="Email id" />
</div>
<div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <Form.Control type="password" id="inputPassword4" placeholder="Password" />
</div>
<div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <Form.Control type="text" id="inputAddress"
        placeholder="1234 Main St" />
</div>
<div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <Form.Control type="text" id="inputAddress2"
        placeholder="Apartment, studio, or floor" />
</div>
<div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <Form.Control type="text" id="inputCity" />
</div>
<div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <Form.Select id="inputState" className="form-select-lg">
        <option>Choose...</option>
        <option>...</option>
    </Form.Select>
</div>
<div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <Form.Control type="text" id="inputZip" />
</div>
<div className="col-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck3" />
        <label className="form-check-label" htmlFor="gridCheck3">
            Check me out
        </label>
    </div>
</div>
<div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
</div>
</form>`
export const validation1=
`  <form className="row g-3 needs-validation" noValidate>
<div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <Form.Control type="text" id="validationCustom01" defaultValue="Mark"
        required />
    <div className="valid-feedback">
        Looks good!
    </div>
</div>
<div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <Form.Control type="text" id="validationCustom02" defaultValue="Otto"
        required />
    <div className="valid-feedback">
        Looks good!
    </div>
</div>
<div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">@</span>
        <Form.Control type="text" id="validationCustomUsername"
            aria-describedby="inputGroupPrepend" required />
        <div className="invalid-feedback">
            Please choose a username.
        </div>
    </div>
</div>
<div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <Form.Control type="text" id="validationCustom03" required />
    <div className="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <Form.Select id="validationCustom04" required defaultValue="Choose...">
        <option disabled>Choose...</option>
        <option>...</option>
    </Form.Select>
    <div className="invalid-feedback">
        Please select a valid state.
    </div>
</div>
<div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <Form.Control type="text" id="validationCustom05" required />
    <div className="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div className="col-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue=""
            id="invalidCheck" required />
        <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`
export const validation2=
` <form className="row g-3">
<div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <Form.Control type="text" id="validationDefault01"
        defaultValue="Mark" required />
</div>
<div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <Form.Control type="text" id="validationDefault02"
        defaultValue="Otto" required />
</div>
<div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <Form.Control type="text" id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2" required />
    </div>
</div>
<div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">City</label>
    <Form.Control type="text" id="validationDefault03" required />
</div>
<div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">State</label>
    <Form.Select id="validationDefault04" required  defaultValue="Choose...">
        <option disabled >Choose...</option>
        <option>...</option>
    </Form.Select>
</div>
<div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label">Zip</label>
    <Form.Control type="text" id="validationDefault05" required />
</div>
<div className="col-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue=""
            id="invalidCheck2" required />
        <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
        </label>
    </div>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`
export const validation3=
`<form className="row g-3">
<div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">First
        name</label>
    <Form.Control type="text" className=" is-valid"
        id="validationServer01" defaultValue="Mark" required />
    <div className="valid-feedback">
        Looks good!
    </div>
</div>
<div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Last
        name</label>
    <Form.Control type="text" className=" is-valid"
        id="validationServer02" defaultValue="Otto" required />
    <div className="valid-feedback">
        Looks good!
    </div>
</div>
<Col md={4}>
    <Form.Label htmlFor="validationServerUsername"
    >Username</Form.Label>
    <InputGroup className="has-validation flex-wrap">
        <InputGroup.Text className="input-group-text" id="inputGroupPrepend3">@</InputGroup.Text>
        <Form.Control type="text" className="form-control is-invalid"
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required />
        <Form.Control.Feedback id="validationServerUsernameFeedback"
            className="invalid-feedback">
            Please choose a username.
        </Form.Control.Feedback>
    </InputGroup>
</Col>
<div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">City</label>
    <Form.Control type="text" className=" is-invalid"
        id="validationServer03"
        aria-describedby="validationServer03Feedback" required />
    <div id="validationServer03Feedback" className="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<Col md={3}>
    <Form.Label htmlFor="validationServer04">State</Form.Label>
    <Form.Select className="form-select is-invalid" id="validationServer04" defaultValue="Choose..."
        aria-describedby="validationServer04Feedback" required>
        <option disabled >Choose...</option>
        <option>...</option>
    </Form.Select>
    <Form.Control.Feedback id="validationServer04Feedback" className="invalid-feedback">
        Please select a valid state.
    </Form.Control.Feedback>
</Col>
<div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">Zip</label>
    <Form.Control type="text" className="is-invalid"
        id="validationServer05"
        aria-describedby="validationServer05Feedback" required />
    <div id="validationServer05Feedback" className="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div className="col-12">
    <div className="form-check">
        <input className="form-check-input is-invalid" type="checkbox"
            defaultValue="" id="invalidCheck3"
            aria-describedby="invalidCheck3Feedback" required />
        <label className="form-check-label" htmlFor="invalidCheck3">
            Agree to terms and conditions
        </label>
        <div id="invalidCheck3Feedback" className="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form>>`
export const validation4=
`  <form className="row g-3 needs-validation" noValidate>
<div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip01" className="form-label">First
        name</label>
    <Form.Control type="text" id="validationTooltip01"
        defaultValue="Mark" required />
    <div className="valid-tooltip">
        Looks good!
    </div>
</div>
<div className="col-md-4 position-relative">
    <label htmlFor="validationTooltip02" className="form-label">Last
        name</label>
    <Form.Control type="text" id="validationTooltip02"
        defaultValue="Otto" required />
    <div className="valid-tooltip">
        Looks good!
    </div>
</div>
<div className="col-md-4 position-relative">
    <label htmlFor="validationTooltipUsername"
        className="form-label">Username</label>
    <div className="input-group has-validation">
        <span className="input-group-text"
            id="validationTooltipUsernamePrepend">@</span>
        <Form.Control type="text"
            id="validationTooltipUsername"
            aria-describedby="validationTooltipUsernamePrepend"
            required />
        <div className="invalid-tooltip">
            Please choose a unique and valid username.
        </div>
    </div>
</div>
<div className="col-md-6 position-relative">
    <label htmlFor="validationTooltip03" className="form-label">City</label>
    <Form.Control type="text" id="validationTooltip03"
        required />
    <div className="invalid-tooltip">
        Please provide a valid city.
    </div>
</div>
<div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip04" className="form-label">State</label>
    <Form.Select id="validationTooltip04" required  defaultValue="Choose...">
        <option disabled >Choose...</option>
        <option>...</option>
    </Form.Select>
    <div className="invalid-tooltip">
        Please select a valid state.
    </div>
</div>
<div className="col-md-3 position-relative">
    <label htmlFor="validationTooltip05" className="form-label">Zip</label>
    <Form.Control type="text" id="validationTooltip05"
        required />
    <div className="invalid-tooltip">
        Please provide a valid zip.
    </div>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form>`
export const validation5=
`  <Form className="was-validated">
<div className="mb-3">
    <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
    <Form.Control as="textarea" isInvalid className="" id="validationTextarea"
        placeholder="Required example textarea" required></Form.Control>
    <Form.Control.Feedback>
        Please enter a message in the textarea.
    </Form.Control.Feedback>
</div>
<Form.Check type="checkbox" className="form-check mb-3" id="validationFormCheck1"
    required isInvalid label="Check this checkbox" feedback="Example invalid feedback text" feedbackType='invalid' />
<Form.Check type="radio" className="" id="validationFormCheck2" name="radio-stacked"
    required isInvalid label="Toggle this radio" />
<Form.Check type="radio" className="form-check mb-3" id="validationFormCheck3" name="radio-stacked"
    required isInvalid label="Or toggle this other radio" feedback="More example invalid feedback textt" feedbackType='invalid' />
<Form.Group className="mb-3" >
    <Form.Select className="" required aria-label="select example" isInvalid>
        <option>Open this select menu</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </Form.Select>
    <Form.Control.Feedback>Example invalid select feedback</Form.Control.Feedback>
</Form.Group>

<div className="mb-3">
    <Form.Control type="file" aria-label="file example"
        required />
    <Form.Control.Feedback>Example invalid form file feedback</Form.Control.Feedback>
</div>

<div className="mb-3">
    <Button variant='primary' className="btn " type="submit" disabled>Submit
        form</Button>
</div>
</Form>`
