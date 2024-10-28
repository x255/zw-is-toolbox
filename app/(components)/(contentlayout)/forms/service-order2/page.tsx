"use client";
import React, { useState, useRef } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SignatureCanvas from 'react-signature-canvas';
import Seo from '../../../../../shared/layout-components/seo/seo';
import Pageheader from '../../../../../shared/layout-components/header/pageheader';
import { floatinglabels1, floatinglabels2, floatinglabels3, floatinglabels4, floatinglabels5, floatinglabels6, floatinglabels7 } from '../../../../../shared/data/prismdata/Forms/forms';
import ShowCode from '../../../../../shared/layout-components/showcode/showcode';

const ServiceOrderForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const sigCanvas = useRef({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
    // Handle form submission
  };

  return (
    <>
      <Seo title="Service Order Form" />
      <Pageheader title="Service Order Form" />
      <Form onSubmit={handleSubmit}>
        <h2>Customer Identification Information</h2>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingTitle" label="Title">
              <Form.Control type="text" name="title" placeholder="Title" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingFirstName" label="First Name">
              <Form.Control type="text" name="firstName" placeholder="First Name" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingSurname" label="Surname">
              <Form.Control type="text" name="surname" placeholder="Surname" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingIDNumber" label="ID Number (Zimbabwean Nationals)">
              <Form.Control type="text" name="idNumber" placeholder="ID Number" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingPassportNumber" label="Passport Number (Foreign Nationals Only)">
              <Form.Control type="text" name="passportNumber" placeholder="Passport Number" />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingDateOfBirth" label="Date of Birth">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" name="dateOfBirth" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingGender" label="Gender">
              <Form.Control type="text" name="gender" placeholder="Gender" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingEmail" label="Email Address">
              <Form.Control type="email" name="email" placeholder="Email Address" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingResidentialAddress" label="Residential Address">
              <Form.Control type="text" name="residentialAddress" placeholder="Residential Address" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingInstallationAddress" label="Installation Address">
              <Form.Control type="text" name="installationAddress" placeholder="Installation Address" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingGPS" label="GPS Coordinates for Installation Address">
              <Form.Control type="text" name="gpsCoordinates" placeholder="GPS Coordinates" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingTownCity" label="Town/City">
              <Form.Control type="text" name="townCity" placeholder="Town/City" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingTelephone" label="Telephone Number">
              <Form.Control type="text" name="telephone" placeholder="Telephone Number" required />
            </FloatingLabel>
          </Col>
        </Row>

        <h2>KYC Documents</h2>
        <Form.Group className="mb-3">
          <Form.Label>Copy of ID</Form.Label>
          <Form.Control type="file" name="copyOfID" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Passport</Form.Label>
          <Form.Control type="file" name="passport" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Proof of Residence</Form.Label>
          <Form.Control type="file" name="proofOfResidence" required />
        </Form.Group>

        <h2>Service Requested</h2>
        <Form.Group className="mb-3">
          <Form.Label>WibroniX Pay As You Go Top Up</Form.Label>
          <Form.Check type="radio" label="2GB" value="2GB" name="payAsYouGo" />
          <Form.Check type="radio" label="3GB" value="3GB" name="payAsYouGo" />
          <Form.Check type="radio" label="5GB" value="5GB" name="payAsYouGo" />
          <Form.Check type="radio" label="10GB" value="10GB" name="payAsYouGo" />
          <Form.Check type="radio" label="15GB" value="15GB" name="payAsYouGo" />
          <Form.Check type="radio" label="20GB" value="20GB" name="payAsYouGo" />
          <Form.Check type="radio" label="25GB" value="25GB" name="payAsYouGo" />
          <Form.Check type="radio" label="30GB" value="30GB" name="payAsYouGo" />
          <Form.Check type="radio" label="60GB" value="60GB" name="payAsYouGo" />
          <Form.Check type="radio" label="100GB" value="100GB" name="payAsYouGo" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>WibroniX Unlimited</Form.Label>
          <Form.Check type="radio" label="Unlimited" value="Unlimited" name="wibronixUnlimited" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Business Packages</Form.Label>
          <Form.Check type="radio" label="Nano Office" value="Nano Office" name="businessPackage" />
          <Form.Check type="radio" label="Micro Office" value="Micro Office" name="businessPackage" />
          <Form.Check type="radio" label="Small Office" value="Small Office" name="businessPackage" />
        </Form.Group>

        <h2>Order Details</h2>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingOrderNumber" label="Order Number">
              <Form.Control type="text" name="orderNumber" placeholder="Order Number" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingSerialNumber" label="Serial Number">
              <Form.Control type="text" name="serialNumber" placeholder="Serial Number" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingDealerNumber" label="Dealer Number">
              <Form.Control type="text" name="dealerNumber" placeholder="Dealer Number" required />
            </FloatingLabel>
          </Col>
        </Row>

        <h2>Payment Information</h2>
        <Form.Group className="mb-3">
          <Form.Label>Payment Received</Form.Label>
          <Form.Check type="checkbox" label="Yes" name="paymentReceived" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select name="paymentMethod" required>
            <option value="EcoCash">EcoCash</option>
            <option value="PayNow">PayNow</option>
            <option value="EcoCash Bill Payment">EcoCash Bill Payment</option>
            <option value="Econet Shops">Econet Shops</option>
            <option value="Bank Deposit/Transfer">Bank Deposit/Transfer</option>
            <option value="Cash">Cash</option>
          </Form.Select>
        </Form.Group>

        <h2>Declaration by Customer</h2>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingCustomerName" label="Name">
              <Form.Control type="text" name="customerName" placeholder="Name" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingCustomerID" label="ID/Passport Number">
              <Form.Control type="text" name="customerID" placeholder="ID/Passport Number" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" name="date" />
            </Form.Group>
          </Col>
        </Row>

        <h2>Installation Information (to be completed by Sales Representative)</h2>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingSalesFirstName" label="First Name">
              <Form.Control type="text" name="salesFirstName" placeholder="First Name" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingSalesSurname" label="Surname">
              <Form.Control type="text" name="salesSurname" placeholder="Surname" required />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="floatingSalesCompany" label="Company/Reseller">
              <Form.Control type="text" name="salesCompany" placeholder="Company/Reseller" required />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Payment Received</Form.Label>
              <Form.Check type="checkbox" label="Yes" name="salesPaymentReceived" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Payment Method</Form.Label>
              <Form.Select name="salesPaymentMethod" required>
                <option value="EcoCash">EcoCash</option>
                <option value="PayNow">PayNow</option>
                <option value="EcoCash Bill Payment">EcoCash Bill Payment</option>
                <option value="Econet Shops">Econet Shops</option>
                <option value="Bank Deposit/Transfer">Bank Deposit/Transfer</option>
                <option value="Cash">Cash</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <h2>Terms and Conditions</h2>
        <Card className="mb-3">
          <Card.Body>
            <p>
              The following Terms and Conditions apply to WibroniX Services offered by Liquid Home. These Terms and Conditions may also be obtained as a hard copy from any Liquid Home outlet. Please note that Customers must read these Terms and Conditions in conjunction with the General Terms and Conditions appearing on the Liquid Home website <a href="https://zw.liquidhome.tech">https://zw.liquidhome.tech</a>.
            </p>
            <p>
              1. DEFINITIONS
              <br />
              1.1 The following definitions are used in these Terms and Conditions:
              <br />
              1.1.1 “Acceptance Date” means the date on which the Customer accepted these Terms and Conditions by signing the Liquid Home WibroniX Service Order Form;
              <br />
              1.1.2 “Activation Date” means the date on which Liquid Home granted the Customer access to the Liquid Home WibroniX Service;
              <br />
              1.1.3 “Customer Premises Equipment” or “CPE” includes a dongle, MiFi, handset or Router required to connect to the WibroniX network;
              <br />
              1.1.4 “Data Protection Legislation” means the Cyber and Data Protection Act [Chapter 12:07], all applicable legislation, and any subsequent legislation in relation to the protection of personal data in Zimbabwe;
              <br />
              1.1.5 “Business Day” means Monday to Friday, excluding Saturday, Sunday and all official public holidays in Zimbabwe;
              <br />
              1.1.6 “Business Hours” means Liquid Home’s business hours between 08H00 and 17H00 on a Business Day;
              <br />
              1.1.7 “WibroniX” means the internet connection services provided by Liquid Home using wireless technology called Long Term Evolution (LTE);
              <br />
              1.1.8 “Liquid Home Agent” means an individual or company appointed by Liquid Home to sell WibroniX Services on its behalf;
              <br />
              1.1.9 “Service Coverage Area” means the areas in which the WibroniX Services are available as outlined on the Liquid Home website <a href="https://zw.liquidhome.tech">https://zw.liquidhome.tech</a>;
              <br />
              1.1.10 “SIM Card” means the WibroniX Services Subscriber Identification Module Card;
              <br />
              1.1.11 “Services” means the WibroniX Services provided by Liquid Home in terms of this Agreement;
              <br />
              1.1.12 “Potential Customer” or “Customer” means the Party identified as such on the Liquid Home Service Order Form;
              <br />
              1.1.13 “Service Order Form” means the document/s (which includes electronic documents and online forms) which the Customer is required to complete before Liquid Home can provide the Services;
              <br />
              1.1.14 “Terms and Conditions” or “Agreement” means these Terms and Conditions for Liquid Home WibroniX Packages as read with the General Terms and Conditions of Service appearing on the Liquid Home website <a href="https://zw.liquidhome.tech">https://zw.liquidhome.tech</a>;
              <br />
              1.1.15 “Liquid Home” means Data Control & Systems (1996) (Private) Limited trading as Liquid Intelligent Technologies;
              <br />
              1.1.16 “Warranty Period” means for any Customer Premise Equipment, a 12 (twelve) month period commencing on the date on which the Customer Premise Equipment is purchased.
            </p>
            {/* Add the rest of the terms and conditions similarly */}
          </Card.Body>
        </Card>

        <h2>Signature</h2>
        <Form.Group className="mb-3">
          <Form.Label>Signature</Form.Label>
          <SignatureCanvas ref={sigCanvas} penColor="black" canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default ServiceOrderForm;

