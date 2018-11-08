import React from "react";
import {NavBarHeaderComponent} from "./NavBarHeader";
import {Col, Container} from "reactstrap";

export const MainComponent = ({className, children}) => {
    return <div className={className}>
        <Col id="header" lg={12}>
            <NavBarHeaderComponent/>
        </Col>
        {children}
    </div>
};