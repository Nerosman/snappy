import React from "react";
import {InputComponent} from "./reusableComponents/InputComponent";
import {Button, Form} from "reactstrap";
import {validateAddress, validateEmail, validateLengthOfValue} from "../utils/validations";

export class ShipInfoFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValidity: true,
            phoneValidity: true,
            specialNotesValidity: true,
            address: "",
            cityStateZip: ""
        }
    }

    inputValueToState(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    emailParameterToState(e) {
        const email = e.target.value;
        const emailValidity = validateEmail(email);
        this.setState({
            [e.target.name]: email,
            emailValidity
        });
    }

    phoneParameterToState(e) {
        const phone = e.target.value;
        const phoneValidity = validateLengthOfValue(phone, 10);
        this.setState({
            [e.target.name]: phone,
            phoneValidity
        });
    }

    specialNotesToState(e) {
        const specialNotes = e.target.value;
        const specialNotesValidity = validateLengthOfValue(specialNotes, 500);
        this.setState({
            [e.target.name]: specialNotes,
            specialNotesValidity
        });
    }

    submitForm() {
        console.log(this.state);
        validateAddress(this.state.address, this.state.cityStateZip).then((res)=>{
            console.log(res)
        })
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
                id="cityStateZip"
                name="cityStateZip"
                label="City, State, Zip"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={true}
                placeholder="ASBURY PARK, NJ 07712-6086 "
            />
            <InputComponent
                id="email"
                name="email"
                label="Email"
                type={"email"}
                onChange={this.emailParameterToState.bind(this)}
                onValid={this.state.emailValidity}
                errorMessage="Please include @ and . in the email address"
            />
            <InputComponent
                id="phone"
                name="phone"
                label="Phone"
                onChange={this.phoneParameterToState.bind(this)}
                onValid={this.state.phoneValidity}
                errorMessage="Length of phone number must be less then 10 charts"
            />
            <InputComponent
                id="special-notes"
                name="specialNotes"
                label="Special notes"
                type={"textarea"}
                onChange={this.specialNotesToState.bind(this)}
                onValid={this.state.specialNotesValidity}
                errorMessage="Length of special notes must be less then 500  charts"
            />
            <Button id="submit-ship-info-button" onClick={this.submitForm.bind(this)}>Submit</Button>
        </Form>
    }
}
