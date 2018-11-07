import React from "react";
import {Col, Container, Row} from "reactstrap";
import {ShipInfoFormComponent} from "./ShipInfoFormComponent";

export const ShipInfoComponent = () => {
    return <Container fluid>
        <Row lg={12}>
            <Col lg={{ size: 6, offset: 3 }} className="well">
                <legend>
                    Fill shipping info to receive a gift
                </legend>
                <ShipInfoFormComponent/>
            </Col>
        </Row>
    </Container>
}