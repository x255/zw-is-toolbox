"use client";
import React, { useState } from 'react'
import { Card, Button, Accordion, Collapse, Row, Col } from 'react-bootstrap';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { accordion1, accordion2, accordion3, accordion4, accordion5, accordion6, accordion7, accordion8, accordion9, accordion10, accordion11, accordion12, accordion13, accordion14, accordion15, accordion16 } from '../../../../../shared/data/prismdata/advancedui/advancedui';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';
const Accordionscollapse = () => {
  const [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  const [isSecondCollapsed, setisSecondCollapsed] = useState(false);
  const first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };

  const second = () => {

    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };

  const both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
    else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };
  const [openb, setOpenb] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Seo title={"Accordions$Collapse"} />

      <Pageheader title="Accordions" heading="Advanced Ui" active="Accordions" />
       {/* Row-1-Start */}
      <Row>
        <Col xl={6}>
          <ShowCode title="Basic Accordion" code={accordion1}>
            <Accordion id="accordionExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first {`item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>`.accordion-body`</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the second {`item's `}accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the `.accordion-body`, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingThree">
                  <Accordion.Button>
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the third {`item's `}accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the `.accordion-body`, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code> attribute on each
									<code>.accordion-collapse</code> to make accordion items stay open when another item is opened.
								</p>" code={accordion2}>
            <Accordion id="accordionPanelsStayOpenExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <Accordion.Button  >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first{` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the second {`item's`} accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <Accordion.Button  >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <div className="accordion-body">
                    <strong>This is the third {`item's`} accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
       {/* Row-1-End */}
      {/* Row-2-Start */}
      <Row>
        <Col xl={12}>
          <ShowCode title="Flush Accordion <p class='subtitle text-muted fs-12 fw-normal'>
                  Add <code>.accordion-flush</code> to remove the default <code>background-color</code>,
                  some borders, and some rounded corners to render accordions edge-to-edge with
                  their
                  parent container.
								</p>" code={accordion3} customCardBodyClass="p-0">
            <Accordion className="accordion-flush" id="accordionFlushExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="flush-headingOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first {`item's`} accordion body.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second {`item's`} accordion body.{` Let's`} imagine this being filled with some actual content.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="flush-headingThree">
                  <Accordion.Button  >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third {`item's`} accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
        {/* Row-2-End */}
      {/* Row-3-Start */}
      <h6 className="mb-3">Light Colors:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title="Primary" code={accordion4}>
            <Accordion className="accordion-primary" id="accordionPrimaryExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingPrimaryOne">
                  <Accordion.Button  >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <div id="collapsePrimaryOne" className="accordion-collapse collapse show" aria-labelledby="headingPrimaryOne">
                    <Accordion.Body>
                      <strong>This is the first {`item's `}accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </Accordion.Body>
                  </div>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingPrimaryTwo">
                  <Accordion.Button  >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the first {`item's `}accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingPrimaryThree">
                  <Accordion.Button  >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the first{` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>

                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>

        <Col xl={6}>
          <ShowCode title="Secondary" code={accordion5}>
            <Accordion className="accordion-secondary" id="accordionSecondaryExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingSecondaryOne">
                  <Accordion.Button  >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingSecondaryTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingSecondaryThree">
                  <Accordion.Button >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>

      </Row>
        {/* Row-3-End */}
      {/* Row-4-Start */}
      <h6 className="mb-3">Solid Colors:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title="Primary" code={accordion6}>
            <Accordion className="accordion-solid-primary" id="accordionPrimarySolidExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingPrimarySolidOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingPrimarySolidTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingPrimarySolidThree">
                  <Accordion.Button >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the first {` item's`}  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>

        </Col>

        <Col xl={6}>
          <ShowCode title="Secondary" code={accordion7}>
            <Accordion className="accordion-solid-secondary" id="accordionSecondarySolidExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingSecondarySolidOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <div id="collapseSecondarySolidOne" className="accordion-collapse collapse show" aria-labelledby="headingSecondarySolidOne">
                    <Accordion.Body>
                      <strong>This is the first {` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </Accordion.Body>
                  </div>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingSecondarySolidTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the first {` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingSecondarySolidTwo">
                  <Accordion.Button >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the first {` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>

        </Col>
      </Row>
        {/* Row-4-End */}
      {/* Row-5-Start */}
      <h6 className="mb-3">Colored Borders:</h6>
      <Row>
        <Col xl={6}>
          <ShowCode title="Primary" code={accordion8}>
            <Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first {` item's`} accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.{` It's`} also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second {` item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.{` It's`}s also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third {` item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {` It's`} also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>

        </Col>
        <Col xl={6}>
          <ShowCode title="Success" code={accordion9}>
            <Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first{` item's`} accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {` It's`} also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second {` item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {` It's`} also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third {` item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {` It's`} also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
      </Row>
        {/* Row-5-End */}
      {/* Row-6-Start */}
      <Row>
        <Col xl={6}>
          <ShowCode title="Left Aligned Icons" code={accordion10}>
            <Accordion className="accordionicon-left accordions-items-separate" id="accordioniconLeftExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingleftOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first {` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingleftTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the second {` item's`}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingleftThree">
                  <Accordion.Button >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the third {` item's`}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.{` It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>

        </Col>
        <Col xl={6}>
          <ShowCode title="Without Icon" code={accordion11}>
            <Accordion className="accordionicon-none accordions-items-separate" id="accordioniconnoIconExample" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <h2 className="accordion-header" id="headingnoIconOne">
                  <Accordion.Button >
                    Accordion Item #1
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="0">
                  <Accordion.Body>
                    <strong>This is the first {` item's`} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's `}also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <h2 className="accordion-header" id="headingnoIconTwo">
                  <Accordion.Button >
                    Accordion Item #2
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="1">
                  <Accordion.Body>
                    <strong>This is the second {` item's`}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <h2 className="accordion-header" id="headingnoIconThree">
                  <Accordion.Button >
                    Accordion Item #3
                  </Accordion.Button>
                </h2>
                <Accordion.Collapse eventKey="2">
                  <Accordion.Body>
                    <strong>This is the third {` item's`}  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. {`It's`} also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>

      </Row>
        {/* Row-6-End */}
      {/* Row-7-Start */}
      <Row>
        <Col xl={6}>
          <ShowCode title="Custom Icon Accordion" code={accordion12}>
            <Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {`It's`} also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second {`item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {`It's`} also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third {`item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.{`It's`} also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>
        </Col>
        <Col xl={6}>
          <ShowCode title="Custom Accordion" code={accordion13}>
            <Accordion defaultActiveKey="0" className="accordion accordionicon-none accordions-items-seperate customized-accordion">
              <Accordion.Item eventKey="0" className=" custom-accordion-primary">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body> <strong>This is the first {`item's`} accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {`It's`} also worth noting that
                  just  about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className=" custom-accordion-secondary">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body><strong>This is the second {`item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.{`It's`} also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="custom-accordion-danger">
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body><strong>This is the third {`item's`} accordion body.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as
                  well as the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. {`It's`} also worth noting that
                  just about  any HTML can go within the <code>.accordion-body</code>, though the
                  transition  does limit overflow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ShowCode>

        </Col>
      </Row>
        {/* Row-7-End */}
      {/* Row-8-Start */}
      <Row>
        <div className="col-xl-6">
          <ShowCode title="Example" code={accordion14}>
            <p className="mb-0">
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
            </Collapse>
          </ShowCode>
        </div>

        <Col xl={6}>
          <ShowCode title="Targets Collapse" code={accordion15}>
            <p className="mb-0">
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
            </Row>
          </ShowCode>
        </Col>
      </Row>
        {/* Row-8-End */}
      {/* Row-9-Start */}
      <Row>
        <Col xl={6}>
          <ShowCode title="Horizontal Collapse" code={accordion16}>
            <p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Toggle width collapse</Button>

            </p><div style={{ minHeight: '120px' }}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. {`It's`}
                    hidden by default and shown when triggered.
                  </Card>
                </div>
              </Collapse>
            </div>
          </ShowCode>
        </Col>
      </Row>
        {/* Row-3-End */}
      {/* Row-4-Start */}
    </>
  )
}

export default Accordionscollapse;
