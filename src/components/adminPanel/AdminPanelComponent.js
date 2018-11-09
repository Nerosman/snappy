import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {AdminPanelTableComponent} from "./AdminPanelTableComponent";
import {getOrderListRequest} from "../../communicator";

export class AdminPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }

    componentDidMount() {
        getOrderListRequest().then(response => response.json())
            .then((orderList) => {
                return this.setState({
                    orderList
                })
            })
    }

    render() {
        return <Container fluid>
            <Row lg={12}>
                <Col lg={{size: 10, offset: 1}} className="well">
                    <AdminPanelTableComponent orderList={this.state.orderList}/>
                </Col>
            </Row>
        </Container>
    }
}