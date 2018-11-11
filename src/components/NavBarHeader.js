import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import {TitleComponent} from "./TitleComponent";
import {NavItemsComponent} from "./NavItemsComponent";

export class NavBarHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const {pathname} = window.location;
        return (
            <div>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/"><TitleComponent pathname={pathname}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItemsComponent pathname={pathname}/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}