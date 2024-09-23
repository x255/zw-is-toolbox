"use client";
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });
import Editordata, { multiselectdata, Multipleselectdata, Multipleselectdata1, Editor3 } from '../../../../../../shared/data/apps/projects/createprojectdata'
import { Card, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { addDays, setHours, setMinutes } from "date-fns";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import CreatableSelect from 'react-select/creatable';
import Seo from '../../../../../../shared/layout-components/seo/seo'
import Pageheader from '../../../../../../shared/layout-components/header/pageheader';
import { FilePondFile } from 'filepond';
const Createproject = () => {

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    // const [value1, setValue1] = useState('');

    const handleDateChange = (date: React.SetStateAction<Date>) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [isSearchable] = useState(true);
    const [files, setFiles] = useState<FilePondFile[]>([]);
    //Specific time range

    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );

    const [startDate, setStartDate] = useState(new Date()); //React date picker

    const [startDate1, setStartDate1] = useState(new Date());

    return (
        <>

            <Seo title={"Create Project"} />
            <Pageheader title="Create Project" heading="Projects" active="Create Project" />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Create Project
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                <Col xl={4}>
                                    <label htmlFor="input-label" className="form-label">Project Name :</label>
                                    <input type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                </Col>
                                <Col xl={4}>
                                    <label htmlFor="input-label11" className="form-label">Project Manager :</label>
                                    <input type="text" className="form-control" id="input-label11" placeholder="Project Manager Name" />
                                </Col>
                                <Col xl={4}>
                                    <label htmlFor="input-label1" className="form-label">Client / Stakeholder :</label>
                                    <input type="text" className="form-control" id="input-label1" placeholder="Enter Client Name" />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Project Description :</label>
                                    <Editor3 />

                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Start Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">End Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={(date) => setStartDate1(date as Date)} />

                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <p className="fw-semibold mb-2">Status :</p>
                                    <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata1} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <p className="fw-semibold mb-2">Priority :</p>
                                    <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Assigned To</label>

                                    <Select isMulti name="colors" options={multiselectdata} className="basic-multi-select" classNamePrefix="Select2"
                                        defaultValue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Tags</label>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />

                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Attachments</label>
                                    <FilePond className="multiple-filepond"
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={6}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your files or Browser'
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-primary-light btn-wave ms-auto float-end">Create Project</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Createproject
