import React from 'react';
import {Table} from "reactstrap"

export const AdminPanelTableComponent = ({orderList}) => {
    return orderList.length > 0 ? <Table responsive>
        <thead>
        <tr>
            <th>#</th>
            <th>First name</th>
            <th>Second name</th>
            <th>Address</th>
            <th>City, State, Zip</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Special notes</th>
        </tr>
        </thead>
        <tbody>
        {orderList.map((order, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.firstName}</td>
                    <td>{order.secondName}</td>
                    <td>{order.address1}</td>
                    <td>{order.address2}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.specialNotes}</td>
                </tr>
            );
        })}
        </tbody>
    </Table> : <div>There is no data to display</div>
};