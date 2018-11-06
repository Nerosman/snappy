import React from "react";
import {InputComponent} from "./reusableComponents/InputComponent";
import {Button, Form} from "reactstrap";

export class ShipInfoFormComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    inputValueToState(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm() {
        console.log(this.state)
    }

    render() {
        return <Form>
            <InputComponent
                id="first-name"
                name="firstName"
                label="First name"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
                placeholder="John"
            />
            <InputComponent
                id="second-name"
                name="secondValue"
                label="Second name"
                type={"text"}
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
                placeholder="Whiskey"
            />
            <InputComponent
                id="address"
                name="address"
                label="Address"
                type={"text"}
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
                placeholder="1234 Main St"
            />
            <InputComponent
                id="city"
                name="city"
                label="City"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <InputComponent
                id="state"
                name="state"
                label="State"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <InputComponent
                id="zip"
                name="zip"
                label="Zip"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <InputComponent
                id="email"
                name="email"
                label="Email"
                type={"email"}
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <InputComponent
                id="phone"
                name="phone"
                label="Phone"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <InputComponent
                id="special-notes"
                name="specialNotes"
                label="Special notes"
                type={"textarea"}
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
            />
            <Button onClick={this.submitForm.bind(this)}>Submit</Button>
        </Form>
    }
}
