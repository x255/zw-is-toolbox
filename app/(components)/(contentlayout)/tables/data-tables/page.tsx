"use client";
import { BasicTable, Savetable } from "@/shared/data/tables/datatabledata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from '../../../../../shared/layout-components/header/pageheader';

const DataTables = () => {
	return (
		<Fragment>
			<Seo title={"Data-Tables"} />
			<Pageheader title="Data Tables" heading="Tables" active="Data Tables" />
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Datatable
							</Card.Title>
						</Card.Header>
						<Card.Body className="overflow-auto">

							<BasicTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Delete Row Datatable</Card.Title>
						</Card.Header>
						<Card.Body>
							<Savetable />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default DataTables;
