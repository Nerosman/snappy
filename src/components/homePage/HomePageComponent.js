import React from "react";
import {Jumbotron, Button} from "reactstrap"
import {Link} from "react-router-dom";

export const HomePageComponent = () => {
    return <Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This app prepare some gift for you, click on the button below.</p>
        <hr className="my-2" />
        <p className="lead">
            <Link to="/ship-info"><Button>Get gift</Button></Link>
        </p>
    </Jumbotron>
}