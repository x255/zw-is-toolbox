export const accordion1=
` <Accordion id="accordionExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>'.accordion-body'</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the second {'item's '}accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the '.accordion-body', though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingThree">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the third {'item's '}accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'} also worth noting that just about any HTML can go within the '.accordion-body', though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`

export const accordion2=
`  <Accordion id="accordionPanelsStayOpenExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
    <Accordion.Button variant="link" >
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first{' item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. {'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the second {'item's'} accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
    <Accordion.Button variant="link" >
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <div className="accordion-body">
      <strong>This is the third {'item's'} accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{' It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion3=
` <Accordion className="accordion-flush" id="accordionFlushExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="flush-headingOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first {'item's'} accordion body.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="flush-headingTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second {'item's'} accordion body.{' Let's'} imagine this being filled with some actual content.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="flush-headingThree">
    <Accordion.Button variant="link" >
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third {'item's'} accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion4=
`   <Accordion className="accordion-primary" id="accordionPrimaryExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingPrimaryOne">
    <Accordion.Button variant="link" >
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <div id="collapsePrimaryOne" className="accordion-collapse collapse show" aria-labelledby="headingPrimaryOne">
      <Accordion.Body>
        <strong>This is the first {'item's '}accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </Accordion.Body>
    </div>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingPrimaryTwo">
    <Accordion.Button variant="link" >
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the first {'item's '}accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingPrimaryThree">
    <Accordion.Button variant="link" >
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the first{' item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{' It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>

  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion5=
` <Accordion className="accordion-secondary" id="accordionSecondaryExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingSecondaryOne">
    <Accordion.Button variant="link" >
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingSecondaryTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingSecondaryThree">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion6=
`    <Accordion className="accordion-solid-primary" id="accordionPrimarySolidExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingPrimarySolidOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{' It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingPrimarySolidTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingPrimarySolidThree">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the first {'item's'}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{' It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion7=
`    <Accordion className="accordion-solid-secondary" id="accordionSecondarySolidExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingSecondarySolidOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <div id="collapseSecondarySolidOne" className="accordion-collapse collapse show" aria-labelledby="headingSecondarySolidOne">
      <Accordion.Body>
        <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </Accordion.Body>
    </div>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingSecondarySolidTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingSecondarySolidTwo">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion8=
`  <Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first {'item's'} accordion body.</strong> It is shown by
    default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables.{'It's'} also worth noting that
    just  about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables.{'It's'}s also worth noting that
    just about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body><strong>This is the third {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`
export const accordion9=
`    <Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first{'item's'} accordion body.</strong> It is shown by
    default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just  about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body><strong>This is the third {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`
export const accordion10=
`  <Accordion className="accordionicon-left accordions-items-separate" id="accordioniconLeftExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingleftOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingleftTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the second {'item's'}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingleftThree">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the third {'item's'}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion11=
`   <Accordion className="accordionicon-none accordions-items-separate" id="accordioniconnoIconExample" defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <h2 className="accordion-header" id="headingnoIconOne">
    <Accordion.Button variant="link">
      Accordion Item #1
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="0">
    <Accordion.Body>
      <strong>This is the first {'item's'} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's '}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <h2 className="accordion-header" id="headingnoIconTwo">
    <Accordion.Button variant="link">
      Accordion Item #2
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="1">
    <Accordion.Body>
      <strong>This is the second {'item's'}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <h2 className="accordion-header" id="headingnoIconThree">
    <Accordion.Button variant="link">
      Accordion Item #3
    </Accordion.Button>
  </h2>
  <Accordion.Collapse eventKey="2">
    <Accordion.Body>
      <strong>This is the third {'item's'}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {'It's'} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </Accordion.Body>
  </Accordion.Collapse>
</Accordion.Item>
</Accordion>`
export const accordion12=
`     <Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first {'item's'} accordion body.</strong> It is shown by
    default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just  about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body><strong>This is the third {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables.{'It's'} also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`
export const accordion13=
`  <Accordion defaultActiveKey="0" className="accordion accordionicon-none accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first {'item's'} accordion body.</strong> It is shown by
    default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just  about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables.{'It's'} also worth noting that
    just about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body><strong>This is the third {'item's'} accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. {'It's'} also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`
export const accordion14=
`  <p className="mb-0">
<Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
  href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
  Link with href</Button>
<Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
  variant='' className="btn btn-secondary collapsed mb-2" type="button">
  Button with data-bs-target</Button>
</p>
<Collapse in={openb}>
<div className="card card-body mb-0">
  Some placeholder content for the collapse component. This panel
  is
  hidden by default but revealed when the user activates the
  relevant
  trigger.
</div>
</Collapse>`
export const accordion15=
` <p className="mb-0">
<Button className="btn btn-primary mb-2 me-1" onClick={() => { first(); }}>Toggle first element</Button>
<Button variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second(); }}>Toggle second element</Button>
<Button variant='' className="btn btn-danger mb-2" type="button" onClick={() => { both(); }}>Toggle both elements</Button>
</p>
<Row>
<div className="col m-1">
  {isFirstCollapsed ? (
    <div className=" multi-collapse" id="multiCollapseExample1">
      <div className="card card-body mb-0">
        Some placeholder content for the first collapse
        component of
        this multi-collapse example. This panel is hidden by
        default
        but revealed when the user activates the relevant
        trigger.
      </div>
    </div>
  ) : null}
</div>
<div className="col m-1">
  {isSecondCollapsed ? (
    <div className=" multi-collapse" id="multiCollapseExample2">
      <div className="card card-body mb-0">
        Some placeholder content for the second collapse
        component
        of this multi-collapse example. This panel is hidden by
        default but revealed when the user activates the
        relevant
        trigger.
      </div>
    </div>
  ) : null}
</div>
</Row>`
export const accordion16=
`<p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Toggle width collapse</Button>

</p><div style={{ minHeight: '120px' }}>
  <Collapse in={open} dimension="width">
    <div id="example-collapse-text">
      <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. {'It's'}
        hidden by default and shown when triggered.
      </Card>
    </div>
  </Collapse>
</div>`
export const carousel1=`
<Carousel id="carouselExampleSlidesOnly1" className="carousel slide carousel-icons" indicators={false}>
<Carousel.Item className="active">
    <img src="../../assets/images/media/media-26.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item>
    <img src="../../assets/images/media/media-27.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item>
    <img src="../../assets/images/media/media-33.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
</Carousel>

`
export const carousel2=`
<Carousel slide id="carouselExampleControls" data-bs-ride="carousel">
<Carousel.Item className="carousel-item active">
    <img src="../../assets/images/media/media-28.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="carousel-item">
    <img src="../../assets/images/media/media-31.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="carousel-item">
    <img src="../../assets/images/media/media-32.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
</Carousel>
`
export const carousel3=`
<Carousel slide id="carouselExampleIndicators" data-bs-ride="carousel">
<Carousel.Item className="active">
    <img src="../../assets/images/media/media-25.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item >
    <img src="../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item >
    <img src="../../assets/images/media/media-30.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>

</Carousel>
`
export const carousel4=`
<Carousel slide id="carouselExampleCaptions" data-bs-ride="carousel">
<Carousel.Item className="active">
    <img src="../../assets/images/media/media-59.jpg" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    </div>
</Carousel.Item>
<Carousel.Item  >
    <img src="../../assets/images/media/media-60.jpg" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
    </div>
</Carousel.Item>
<Carousel.Item >
    <img src="../../assets/images/media/media-61.jpg" className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
    </div>
</Carousel.Item>
</Carousel>
`
export const carousel5=`
<Carousel slide id="carouselExampleFade" className=" carousel-fade" data-bs-ride="carousel">
<Carousel.Item className="active">
    <img src="../../assets/images/media/media-43.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item >
    <img src="../../assets/images/media/media-44.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item >
    <img src="../../assets/images/media/media-45.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
</Carousel>
`
export const carousel6=`
<Carousel slide id="carouselExampleInterval" data-bs-ride="carousel">
<Carousel.Item className=" active" data-bs-interval="10000">
    <img src="../../assets/images/media/media-40.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="" data-bs-interval="2000">
    <img src="../../assets/images/media/media-41.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="">
    <img src="../../assets/images/media/media-42.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>

</Carousel>
`
export const carousel7=`
<Carousel slide id="carouselExampleControlsNoTouching" className="" data-bs-touch="false"
data-bs-interval="false">
<Carousel.Item className=" active">
    <img src="../../assets/images/media/media-13.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="">
    <img src="../../assets/images/media/media-14.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item className="">
    <img src="../../assets/images/media/media-18.jpg" className="d-block w-100" alt="..." />
</Carousel.Item>
</Carousel>
`
export const carousel8=`
<Carousel slide id="carouselExampleDark" data-bs-ride="carousel">
<Carousel.Item className=" active" data-bs-interval="10000">
    <img src="../../assets/images/media/media-63.jpg" className="d-block w-100"
        alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">First slide label</h5>
        <p className="op-7">Some representative placeholder content for the first slide.</p>
    </div>
</Carousel.Item>
<Carousel.Item className="" data-bs-interval="2000">
    <img src="../../assets/images/media/media-64.jpg" className="d-block w-100"
        alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">Second slide label</h5>
        <p className="op-7">Some representative placeholder content for the second slide.</p>
    </div>
</Carousel.Item>
<Carousel.Item className="">
    <img src="../../assets/images/media/media-62.jpg" className="d-block w-100"
        alt="..." />
    <div className="carousel-caption d-none d-md-block">
        <h5 className="text-fixed-white">Third slide label</h5>
        <p className="op-7">Some representative placeholder content for the third slide.</p>
    </div>
</Carousel.Item>
</Carousel>
`
export const model1=`
<Button variant='primary' onClick={handleShow}>
Launch demo modal
</Button>
<Modal
show={show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title as="h6">Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
    ...
</Modal.Body>
<Modal.Footer>
    <Button variant='secondary' onClick={handleClose}>Close</Button>
    <Button variant='primary'
        onClick={handleClose}>Save
        changes</Button>
</Modal.Footer>
</Modal>
`
export const model2=`
<Button variant='primary'
onClick={handleShow1}>
Launch static backdrop modal
</Button>
<Modal className=" fade" backdrop="static" keyboard={false} show={show1} onHide={handleClose1}
>
<div className="modal-content">
    <Modal.Header closeButton>
        <Modal.Title as="h6">Modal title
        </Modal.Title>

    </Modal.Header>
    <Modal.Body>
        I will not close if you click outside me. {'Don't '}even try to
        press
        escape key.
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}
            data-bs-dismiss="modal">Close</Button>
        <Button variant="primary">Understood</Button>
    </Modal.Footer>
</div>
</Modal>
`
export const model3=`
<Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleShow2}
data-bs-target="#exampleModalScrollable">
Scrolling long content
</Button>
<Modal className=" fade" id="exampleModalScrollable" tabIndex="-1" show={show2} onHide={handleClose2}
aria-labelledby="exampleModalScrollable" data-bs-keyboard="false"
aria-hidden="true">
<div className="modal-dialog-scrollable">
    <div className="modal-content">
        <Modal.Header closeButton>
            <h6 className="modal-title" id="staticBackdropLabel1">Modal title
            </h6>
        </Modal.Header>
        <Modal.Body>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Libero
            ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
            nisi
            ipsa maiores fugiat deleniti quis reiciendis veritatis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            voluptatibus, ipsam quo est rerum modi quos expedita facere,
            ex
            tempore fuga similique ipsa blanditiis et accusamus
            temporibus
            commodi voluptas! Nobis veniam illo architecto expedita quam
            ratione quaerat omnis. In, recusandae eos! Pariatur,
            deleniti
            quis ad nemo ipsam officia temporibus, doloribus fuga
            asperiores
            ratione distinctio velit alias hic modi praesentium aperiam
            officiis eaque, accusamus aut. Accusantium assumenda,
            commodi
            nulla provident asperiores fugit inventore iste amet aut
            placeat
            consequatur reprehenderit. Ratione tenetur eligendi, quis
            aperiam dolores magni iusto distinctio voluptatibus minus a
            unde
            at! Consequatur voluptatum in eaque obcaecati, impedit
            accusantium ea soluta, excepturi, quasi quia commodi
            blanditiis?
            Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
            consequuntur quod quo veniam? Labore dignissimos reiciendis
            accusamus recusandae est consequuntur iure.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" className="btn btn-secondary"
                data-bs-dismiss="modal" onClick={handleClose2}>Close</Button>
            <Button type="button" className="btn btn-primary">Save
                Changes</Button>
        </Modal.Footer>
    </div>
</div>
</Modal>`

export const model4=`
<Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => setModalShow(true)}
data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</Button>
<Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
<Modal.Header closeButton>
    <Modal.Title as="h6">Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
        nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setModalShow(false)}>
        Close
    </Button>
    <Button variant="primary">Save Changes</Button>
</Modal.Footer>
</Modal>
`
export const model5=`
<Button variant='primary' type="button" className="btn" onClick={() => setModalShow1(true)}>
Vertically centered scrollable modal
</Button>
<div className="modal fade" id="exampleModalScrollable3" tabIndex={-1}
aria-labelledby="exampleModalScrollable3" data-bs-keyboard="false"
aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
        <div className="modal-header">
            <h6 className="modal-title" id="staticBackdropLabel3">Modal title
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                voluptatibus, ipsam quo est rerum modi quos expedita facere,
                ex
                tempore fuga similique ipsa blanditiis et accusamus
                temporibus
                commodi voluptas! Nobis veniam illo architecto expedita quam
                ratione quaerat omnis. In, recusandae eos! Pariatur,
                deleniti
                quis ad nemo ipsam officia temporibus, doloribus fuga
                asperiores
                ratione distinctio velit alias hic modi praesentium aperiam
                officiis eaque, accusamus aut. Accusantium assumenda,
                commodi
                nulla provident asperiores fugit inventore iste amet aut
                placeat
                consequatur reprehenderit. Ratione tenetur eligendi, quis
                aperiam dolores magni iusto distinctio voluptatibus minus a
                unde
                at! Consequatur voluptatum in eaque obcaecati, impedit
                accusantium ea soluta, excepturi, quasi quia commodi
                blanditiis?
                Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                consequuntur quod quo veniam? Labore dignissimos reiciendis
                accusamus recusandae est consequuntur iure.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save
                Changes</button>
        </div>
    </div>
</div>
</div>
<Modal centered show={modalShow1} onHide={() => setModalShow1(false)}
keyboard={false} className="modal fade">
<Modal.Header closeButton>
    <Modal.Title as="h6">Modal title</Modal.Title>
</Modal.Header>
<Modal.Body> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
    voluptatibus, ipsam quo est rerum modi quos expedita facere,
    ex
    tempore fuga similique ipsa blanditiis et accusamus
    temporibus
    commodi voluptas! Nobis veniam illo architecto expedita quam
    ratione quaerat omnis. In, recusandae eos! Pariatur,
    deleniti
    quis ad nemo ipsam officia temporibus, doloribus fuga
    asperiores
    ratione distinctio velit alias hic modi praesentium aperiam
    officiis eaque, accusamus aut. Accusantium assumenda,
    commodi
    nulla provident asperiores fugit inventore iste amet aut
    placeat
    consequatur reprehenderit. Ratione tenetur eligendi, quis
    aperiam dolores magni iusto distinctio voluptatibus minus a
    unde
    at! Consequatur voluptatum in eaque obcaecati, impedit
    accusantium ea soluta, excepturi, quasi quia commodi
    blanditiis?
    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
    consequuntur quod quo veniam? Labore dignissimos reiciendis
    accusamus recusandae est consequuntur iure.</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>Lorem ipsum dolor sit amet.</p>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setModalShow1(false)}>
        Close
    </Button>
    <Button variant="primary">Save Changes</Button>
</Modal.Footer>
</Modal>
`
export const model6=`
<Button variant='primary' type="button" className="" onClick={handleShow16}>
Launch demo modal
</Button>
<Modal show={show16} onHide={handleClose16} centered className='popover-modal'>
<Modal.Header closeButton>
    <Modal.Title as="h6"> Modal title</Modal.Title>
</Modal.Header>
<Modal.Body> <h5>Popover in a modal</h5>
    <p> This
        <OverlayTrigger trigger="click"
            placement='right'
            overlay={
                <Popover placement='bottom'>
                    <Popover.Header> Popover bottom</Popover.Header>
                    <Popover.Body>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Popover.Body>
                </Popover>
            }>
            <Button variant="secondary" className="me-2 ms-2">button</Button>
        </OverlayTrigger>
        triggers a popover on click.
    </p>
    <hr />
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose16}>
        Close
    </Button>
    <Button variant="primary">
        Save Changes
    </Button>
</Modal.Footer>
</Modal>
<div className="modal fade" id="exampleModalScrollable4" tabIndex={-1}
aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
        <div className="modal-header">
            <h6 className="modal-title" id="staticBackdropLabel4">Modal title
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <h5>Popover in a modal</h5>
            <p>This <Link href="#!" scroll={false} role="button" className="btn btn-secondary"
                data-bs-toggle="popover" title="Popover title"
                data-bs-content="Popover body content is set in this attribute.">button</Link>
                triggers a popover on click.</p>
            <hr />
            <h5>Tooltips in a modal</h5>
            <p><Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This
                link</Link> and <Link href="#!" scroll={false} className="text-primary" data-bs-toggle="tooltip"
                    title="Tooltip">that link</Link> have tooltips on hover.
            </p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save
                Changes</button>
        </div>
    </div>
</div>
</div>
`
export const model7=`
<Button variant='' type="button" className="btn btn-primary" onClick={() => setModalShow2(true)}>
Launch demo modal
</Button>
<Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
<Modal.Header closeButton>
    <Modal.Title as="h6"> Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Container fluid>
        <Row>
            <Col md={4} className=" bg-light border">.col-md-4</Col>
            <Col md={4} className=" ms-auto bg-light border">.col-md-4
                .ms-auto</Col>
        </Row>
        <Row className="row mt-3">
            <Col md={3} className=" ms-auto bg-light border">.col-md-3
                .ms-auto</Col>
            <Col md={2} className=" ms-auto bg-light border">.col-md-2
                .ms-auto</Col>
        </Row>
        <Row className="row mt-3">
            <Col md={6} className=" ms-auto bg-light border">.col-md-6
                .ms-auto</Col>
        </Row>
        <Row className="row mt-3">
            <Col sm={9} className=" bg-light border">
                Level 1: .col-sm-9
                <Row>
                    <Col sm={6} className="col-8 bg-light border">
                        Level 2: .col-8 .col-sm-6
                    </Col>
                    <Col sm={6} className="col-4 bg-light border">
                        Level 2: .col-4 .col-sm-6
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setModalShow2(false)}>
        Close
    </Button>
    <Button variant="primary">
        Save Changes
    </Button>
</Modal.Footer>
</Modal>
<div className="modal fade" id="exampleModalScrollable5" tabIndex={-1}
aria-labelledby="exampleModalScrollable5" data-bs-keyboard="false"
aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
        <div className="modal-header">
            <h6 className="modal-title" id="staticBackdropLabel5">Modal title
            </h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close">
            </button>
        </div>
        <div className="modal-body">
            <div className="container-fluid">
                <Row>
                    <Col md={4} className=" bg-light border">.col-md-4</Col>
                    <Col md={4} className=" ms-auto bg-light border">.col-md-4
                        .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                    <Col md={3} className=" ms-auto bg-light border">.col-md-3
                        .ms-auto</Col>
                    <Col md={2} className=" ms-auto bg-light border">.col-md-2
                        .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                    <Col md={6} className=" ms-auto bg-light border">.col-md-6
                        .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                    <Col sm={9} className=" bg-light border">
                        Level 1: .col-sm-9
                        <Row>
                            <Col sm={6} className="col-8 bg-light border">
                                Level 2: .col-8 .col-sm-6
                            </Col>
                            <Col sm={6} className="col-4 bg-light border">
                                Level 2: .col-4 .col-sm-6
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save
                Changes</button>
        </div>
    </div>
</div>
</div>
`
export const model8=`
<Button className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" onClick={handleShowt1}
role="button">Open first modal
</Button>
<Modal className=" fade" id="exampleModalToggle" show={showt1} onHide={handleCloset1}
aria-labelledby="exampleModalToggleLabel" tabIndex="-1" aria-hidden="true"
>
<div className="">
    <div className="modal-content">
        <Modal.Header closeButton>
            <Modal.Title as='h6' id="exampleModalToggleLabel">Modal 1
            </Modal.Title>

        </Modal.Header>
        <Modal.Body>
            Show a second modal and hide this one with the button below.
        </Modal.Body>
        <Modal.Footer>
            <Button className="btn btn-primary" onClick={Handleclose1}
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal">Open second modal</Button>
        </Modal.Footer>
    </div>
</div>
</Modal>
<Modal className=" fade" id="exampleModalToggle2" show={showt2} onHide={handleCloset2}
aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" aria-hidden="true"
>
<div className="modal-dialog-centered">
    <div className="modal-content">
        <Modal.Header>
            <Modal.Title as='h6' id="exampleModalToggleLabel2">Modal 2
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Hide this modal and show the first with the button below.
        </Modal.Body>
        <Modal.Footer>
            <Button className="btn btn-primary" data-bs-target="#exampleModalToggle" onClick={Handleclose2}
                data-bs-toggle="modal">Back to first</Button>
        </Modal.Footer>
    </div>
</div>
</Modal>
`
export const model9=`
<Button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" onClick={() => setXlShow(true)}
data-bs-target="#exampleModalXl">Extra large modal</Button>
<Button type="button" className="btn btn-secondary m-1" data-bs-toggle="modal" onClick={() => setLgShow(true)}
data-bs-target="#exampleModalLg">Large modal</Button>
<Button type="button" className="btn btn-warning m-1" data-bs-toggle="modal" onClick={() => setSmShow(true)}
data-bs-target="#exampleModalSm">Small modal</Button>
<Modal className=" fade" id="exampleModalXl" tabIndex="-1" size="xl" show={xlShow} onHide={() => setXlShow(false)}
aria-labelledby="exampleModalXlLabel" aria-hidden="true">
<Modal.Header closeButton>
    <Modal.Title as='h6' id="exampleModalXlLabel">Extra large
        modal</Modal.Title>
</Modal.Header>
<Modal.Body>
    ...
</Modal.Body>
</Modal>
<Modal className=" fade" id="exampleModalLg" tabIndex="-1" size="lg" show={lgShow} onHide={() => setLgShow(false)}
aria-labelledby="exampleModalLgLabel" aria-hidden="true">
<Modal.Header closeButton>
    <Modal.Title as='h6' id="exampleModalLgLabel">Large modal
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    ...
</Modal.Body>
</Modal>
<Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
aria-labelledby="example-modal-sizes-title-sm">
<Modal.Header closeButton>
    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
        Small Modal
    </Modal.Title>
</Modal.Header>
<Modal.Body>...</Modal.Body>
</Modal>
`
export const model10=`
{values.map((v, idx) => (
  <Button
      key={idx}
      className={'me-2 mb-2 btn-{colors[idx % colors.length]}'}
      onClick={() => handleShowf(v, colors[idx % colors.length])}
  >
      Full screen {typeof v === 'string' && 'below {v.split('-')[0]}'}
  </Button>
))}
<Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
  <Modal.Header closeButton>
      <Modal.Title as="h6">Full Screen Modal</Modal.Title>
  </Modal.Header>
  <Modal.Body>...</Modal.Body>
  <Modal.Footer><Button className='btn btn-secondary'>close</Button></Modal.Footer>
</Modal>
`
export const model11=`
<Button variant='primary' type="button" className="btn  mb-1 me-2" onClick={handleShow4}>Open modal for
@mdo</Button>
<Modal show={show4} onHide={handleClose4}>
<Modal.Header closeButton>
    <Modal.Title as="h6">New message to @mdo
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recipient:</Form.Label>
            <Form.Control type="email" placeholder="@mdo" autoFocus />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
        >
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose4}>
        Close
    </Button>
    <Button variant="primary">Send message</Button>
</Modal.Footer>
</Modal>
<Button variant='secondary' type="button" className="btn mb-1 me-2" onClick={handleShow5}>Open modal for
@fat</Button>
<Modal show={show5} onHide={handleClose5}>
<Modal.Header closeButton>
    <Modal.Title as="h6">New message to @fat
    </Modal.Title>
</Modal.Header>
<Modal.Body>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recipient:</Form.Label>
            <Form.Control type="email" placeholder="@fat" autoFocus />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
        >
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose5}>
        Close
    </Button>
    <Button variant="primary">Send message</Button>
</Modal.Footer>
</Modal>
<Button variant='light' type="button" className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
@getbootstrap</Button>
<Modal show={show6} onHide={handleClose6}>
<Modal.Header closeButton >
    <Modal.Title as="h6">Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Recipient:</Form.Label>
            <Form.Control
                type="email"
                placeholder=" @getbootstrap"
                autoFocus
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
        >
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={handleClose6}>
        Close
    </Button>
    <Button variant="primary">Send message</Button>
</Modal.Footer>
</Modal>
<div className="modal fade" id="formmodal" tabIndex={-1}
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
            <h6 className="modal-title" id="exampleModalLabel">New message</h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="recipient-name"
                        className="col-form-label">Recipient:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message-text"
                        className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                </div>
            </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Send
                message</button>
        </div>
    </div>
</div>
</div>
`
export const model12=`
<Row className="row-sm">
<Col sm={6} md={4} xl={3}>
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
    <Rodal onClose={hide} visible={animation1} animation='Scale' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic"); }}>
                <i className='fe fe-x ms-auto'></i>
            </span>
            </Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button className='' variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
    <Rodal onClose={hide} visible={animation2} animation='fade' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
    <Rodal onClose={hide} visible={animation3} animation='flip' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
    <Rodal onClose={hide} visible={animation4} animation='door' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
    <Rodal onClose={hide} visible={animation5} animation='rotate' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
    <Rodal onClose={hide} visible={animation6} animation='slideUp' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
    <Rodal onClose={hide} visible={animation7} animation='slideDown' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary" >Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
    <Rodal onClose={hide} visible={animation8} animation='slideLeft' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
        </div>
    </Rodal>
</Col>
<Col sm={6} md={4} xl={3} className="mg-t-20">
    <Link href="#!" scroll={false} className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
    <Rodal onClose={hide} visible={animation9} animation='slideRight' height={310}>
        <h6 className='modal-header'>Message Preview
            <Link href='#!'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9"); }}><i className='fe fe-x ms-auto'></i></span></Link>
        </h6>
        <div className='modal-body p-3'>
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content here, content here'}, making it look like readable English.</div>
        <div className='modal-footer'>
            <Button className="me-2" variant="primary">Save Changes</Button>
            <Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
        </div>
    </Rodal>
</Col>
</Row>
<Rodal className="modal fade" id="modaldemo8" onClose={hide} visible={animation1} animation='Scale' height={300}>
<div className="modal-dialog modal-dialog-centered text-center" role="document">
    <div className="modal-content modal-content-demo">
        <div className="modal-header">
            <h6 className="modal-title">Message Preview</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body text-start">
            <h6>Why We Use Electoral College, Not Popular Vote</h6>
            <p className="text-muted mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using {'Content'} here, content{'here'}, making it look like readable English.</p>
        </div>
        <div className="modal-footer">
            <Button className="btn btn-primary">Save changes</Button>
            <Button className="btn btn-light" data-bs-dismiss="modal" onClick={() => viewDemoClose1("Basic")} >Close</Button>
        </div>
    </div>
</div>
</Rodal>
`
export const model13=`
<button type="button" className="btn-close" aria-label="Close"></button>
`
export const model14=`
<button type="button" className="btn-close" disabled aria-label="Close"></button>
`
export const model15=`
<button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                            <button type="button" className="btn-close btn-close-white" disabled
                                aria-label="Close"></button>
`
export const offcanvas1=`
<Button className="btn mb-1 me-2" data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow} variant='primary'
role="button" aria-controls="offcanvasExample">
Link with href
</Button>
<Button className="btn me-2 mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow} variant='primary'
data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
Button with data-bs-target
</Button>
<Offcanvas show={show} onHide={handleClose} backdrop={true} className=" offcanvas-start" tabindex="-1" id="offcanvasExample"
aria-labelledby="offcanvasExampleLabel">
<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
</Offcanvas.Header>
<Offcanvas.Body className=" p-0">
    <div>
        <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            OL
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</Offcanvas.Body>
</Offcanvas>
`
export const offcanvas2=`
<Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow1}
data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
body scrolling
</Button>
<Offcanvas className=" offcanvas-start" show={show1} onHide={handleClose1} backdrop={true} data-bs-scroll="true"
data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
aria-labelledby="offcanvasScrollingLabel">
<Offcanvas.Header closeButton className=" border-bottom border-block-end-dashed">
    <Offcanvas.Title as='h5' id="offcanvasScrollingLabel">Notifications</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body className="p-0">
    <div>
        <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            OL
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</Offcanvas.Body>
</Offcanvas>
`
export const offcanvas3=`
<Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow2}
data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
Toggle static offcanvas
</Button>
<Offcanvas className=" offcanvas-start" data-bs-backdrop="static" show={show2} onHide={handleClose2} tabindex="-1"
id="staticBackdrop" aria-labelledby="staticBackdropLabel">
<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
    <Offcanvas.Title as='h5' id="staticBackdropLabel">Notifications</Offcanvas.Title>

</Offcanvas.Header>
<Offcanvas.Body className=" p-0">
    <div>
        <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            OL
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</Offcanvas.Body>
</Offcanvas>

`
export const offcanvas4=`
<Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow4}
data-bs-target="#offcanvasWithBothOptions"
aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
backdrop</Button>
<Offcanvas className=" offcanvas-start" data-bs-scroll="true" tabindex="-1" show={show4} onHide={handleClose4}
id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
    <Offcanvas.Title as='h5' id="offcanvasWithBothOptionsLabel">Notifications</Offcanvas.Title>

</Offcanvas.Header>
<Offcanvas.Body className="p-0">
    <div>
        <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            OL
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</Offcanvas.Body>
</Offcanvas>
`
export const offcanvas5=`
<Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow3}
data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
offcanvas</Button>
<Offcanvas placement='top' show={show3} onHide={handleClose3} className=" offcanvas-top" tabIndex={-1} id="offcanvasTop"
aria-labelledby="offcanvasTopLabel">
<Offcanvas.Header closeButton className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
</Offcanvas.Header>
<Offcanvas.Body>
    ...
</Offcanvas.Body>
</Offcanvas>
<Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow5}
data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
offcanvas</Button>
<Offcanvas placement='end' show={show5} onHide={handleClose5} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
aria-labelledby="offcanvasRightLabel1">
<Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
    <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
    </h5>
</Offcanvas.Header>
<Offcanvas.Body className="p-0">
    <div>
        <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-primary avatar-rounded">
                            NW
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/1.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                            M
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            OL
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-warning avatar-rounded">
                            A
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/6.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-danger avatar-rounded">
                            CH
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-info avatar-rounded">
                            S
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <div className="me-2">
                        <span className="avatar avatar-md bg-success avatar-rounded">
                            RC
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</Offcanvas.Body>
</Offcanvas>
<Button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
bottom
offcanvas</Button>
<Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
aria-labelledby="offcanvasBottomLabel">
<Offcanvas.Header closeButton className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
    </h5>
</Offcanvas.Header>
<Offcanvas.Body className="offcanvas-body small">
    ...
</Offcanvas.Body>
</Offcanvas>
`
export const placeholders1=
`    <p className="placeholder-glow mb-0">
<span className="placeholder col-12"></span>
</p>
<p className="placeholder-wave mb-0">
<span className="placeholder col-12"></span>
</p>`
export const placeholders2=
`   <span className="placeholder col-12 placeholder-xl mb-1"></span>
<span className="placeholder col-12 placeholder-lg"></span>
<span className="placeholder col-12"></span>
<span className="placeholder col-12 placeholder-sm"></span>
<span className="placeholder col-12 placeholder-xs"></span>`
export const placeholders3=
`     <span className="placeholder col-12"></span>
<span className="placeholder col-12 bg-primary"></span>
<span className="placeholder col-12 bg-secondary"></span>
<span className="placeholder col-12 bg-success"></span>
<span className="placeholder col-12 bg-danger"></span>
<span className="placeholder col-12 bg-warning"></span>
<span className="placeholder col-12 bg-info"></span>
<span className="placeholder col-12 bg-light"></span>
<span className="placeholder col-12 bg-dark"></span>`
export const placeholders4=
` <span className="placeholder bg-primary col-6"></span>
<span className="placeholder bg-primary w-75"></span><br />
<span className="placeholder bg-primary" style={{ width: "25%" }}></span>`
