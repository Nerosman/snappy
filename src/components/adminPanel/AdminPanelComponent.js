import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {AdminPanelTableComponent} from "./AdminPanelTableComponent";

export class AdminPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }

    componentDidMount() {
        fetch("/orderList")
            .then(response => response.json())
            .then((orderList) => {
                return this.setState({
                    orderList
                })
            })
    }

    render() {
        return <Row lg={12}>
            <Col lg={{size: 10, offset: 1}} className="well">
                <legend>Snappy gifts order list</legend>
                <AdminPanelTableComponent orderList={this.state.orderList}/>
            </Col>
        </Row>
    }
}