"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap'
import Link from 'next/link';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader'
import { SketchExample } from '../../../../../../shared/data/form/colorpickerdata';
import {colorpicker} from '../../../../../../shared/data/prismdata/Forms/forms';
    import ShowCode from '../../../../../../shared/layout-components/showcode/showcode';
const Colorpickers = () => {
  //color picker
  const [color, setColor] = useState('#6c5ffc')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const handleChangeComplete = (color: any) => {
    console.log(color)
  };
  const handleChange = (event: { target: { value: any; }; }) => {
    // Handle color change logic here
    console.log(event.target.value);
  };
  const [hex, setHex] = useState("#fff");
  const [open1, setOpen1] = useState(false);
  return (
    <>
            <Seo title={"Color Pickers"} />

     <Pageheader title="Color Pickers" heading="Form Elements" active="Color Pickers" />    
      <Row>
        <Col xl={3}>
            <ShowCode title="Bootstrap Color Picker" code={colorpicker}>
            <Form.Control
      type="color"
      id="exampleColorInput"
      defaultValue="#136ad0"
      title="Choose your color"
      onChange={handleChange}
    />
              </ShowCode>
             
        </Col>
        <Col xl={9}>
                    <ShowCode title="React-Bootstrap Colo Picker" code={colorpicker} className="custom-card">
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                    </ShowCode>
                </Col>
      </Row>

    </>
  )
}

export default Colorpickers
