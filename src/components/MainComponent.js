import React from "react";
import {NavBarHeaderComponent} from "./NavBarHeader";
import {Col} from "reactstrap";
import {ToastContainer} from "react-toastify";

export const MainComponent = ({className, children}) => {
    return <div className={className}>
        <Col id="header" lg={12}>
            <NavBarHeaderComponent/>
        </Col>
        {children}
        <ToastContainer />
    </div>
};