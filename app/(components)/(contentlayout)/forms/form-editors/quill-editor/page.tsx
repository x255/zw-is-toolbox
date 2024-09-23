"use client";
import React from 'react';
import Seo from '../../../../../../shared/layout-components/seo/seo';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
const Quilleditor = () => {
  const defaultContent = `
<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
<ol>
    <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
    <li class="">This is quill snow editor.</li>
    <li class="">Easy to customize and flexible.</li>
</ol>
<h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;
const defaultContent1 = `
<h4><b className="ql-size-large">Quill Bubble</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
<p><br/></p>
<ol>
<li className="ql-size-normal">Write text, select and edit with multiple options.</li>
<li className="">This is quill bubble editor.</li>
<li className="">Easy to customize and flexible.</li>
</ol>
<p><br/></p>
<h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;
    return (
        <>
            <Seo title={"Quilleditor"} />

            <Pageheader title="Quill Editor" heading="Form Editors" active="Quill Editor" />
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quill Snow Editor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <SunEditor defaultValue={defaultContent} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quill Bubble Editor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <SunEditor defaultValue={defaultContent1} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
Quilleditor.layout = "Contentlayout"

export default Quilleditor
