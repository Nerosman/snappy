import React from "react";
import {Link} from "react-router-dom";
import {NavItem} from "reactstrap";

export const NavItemsComponent = () => {
    switch (window.location.pathname) {
        case "/ship-info":
            return <NavItem>
                <Link className="nav-link" to="/admin-panel">Admin panel</Link>
            </NavItem>;
        case "/admin-panel":
            return <NavItem>
                <Link className="nav-link" to="/ship-info">Get gift</Link>
            </NavItem>;
        default :
            return <React.Fragment>
                <NavItem>
                    <Link className="nav-link" to="/admin-panel">Admin panel</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/ship-info">Get gift</Link>
                </NavItem>
            </React.Fragment>
    }
};
