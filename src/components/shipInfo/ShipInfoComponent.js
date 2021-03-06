import React from "react";
import {InputComponent} from "../reusableComponents/InputComponent";
import {Button, Form, Row, Col, Container} from "reactstrap";
import {validateAddress, validateEmail, validateLengthOfValue} from "../../utils/validations";
import {toast} from "react-toastify";
import {addOrderRequest} from "../../communicator";

export class ShipInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValidity: true,
            phoneValidity: true,
            specialNotesValidity: true,
            addressValidity: true,
            firstNameValidity: true,
            secondNameValidity: true,
            address1: "",
            address2: "",
            firstName: "",
            secondName: "",
            phone: "",
            specialNotes: "",
            email: ""

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

    validateAddress() {
        const {address1, address2} = this.state;
        address1 && address2 && validateAddress(address1, address2)
            .then(response => response.json())
            .then(jsondata => {
                this.setState({
                    addressValidity: jsondata.ErrorCode === 0,
                    addressErrorMessage: jsondata.ErrorMessage
                });
                if (jsondata.ErrorCode === 0) {

                }
            })
    }

    submitForm(e) {
        e.preventDefault();

        let inputsValidity = [];

        for (let key in this.state) {
            if (key.includes("Validity")) {
                inputsValidity.push(this.state[key])
            }
        }

        const isFormNonValid = inputsValidity.includes(false);

        if (isFormNonValid) {
            toast("Something went wrong. Please check your data", {
                position: toast.POSITION.BOTTOM_RIGHT,
                type: "error"
            })
        } else {
            addOrderRequest(this.state).then((res) => {
                res.status === 200 && toast("Your date has been save successfully", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    type: "success"
                })
            })
        }
    }

    render() {
        return <Container fluid>
            <Row lg={12}>
                <Col lg={{size: 6, offset: 3}} className="well">
                    <Form onSubmit={this.submitForm.bind(this)}>
                        <InputComponent
                            id="first-name"
                            name="firstName"
                            label="First name"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.inputValueToState.bind(this)}
                            onValid={this.state.firstNameValidity}
                            placeholder="John"
                            errorMessage={"Input cannot be empty"}
                            required={true}
                        />
                        <InputComponent
                            id="second-name"
                            name="secondName"
                            label="Second name"
                            type={"text"}
                            value={this.state.secondName}
                            onChange={this.inputValueToState.bind(this)}
                            onValid={this.state.secondNameValidity}
                            placeholder="Whiskey"
                            errorMessage={"Input cannot be empty"}
                            required={true}
                        />
                        <InputComponent
                            id="address"
                            name="address1"
                            label="Address"
                            type={"text"}
                            value={this.state.address1}
                            onChange={this.inputValueToState.bind(this)}
                            onValid={this.state.addressValidity}
                            placeholder="1234 Main St"
                            errorMessage={this.state.addressErrorMessage || "Input cannot be empty"}
                            required={true}
                        />
                        <InputComponent
                            id="cityStateZip"
                            name="address2"
                            label="City, State, Zip"
                            type="text"
                            value={this.state.address2}
                            onChange={this.inputValueToState.bind(this)}
                            onBlur={this.validateAddress.bind(this)}
                            onValid={this.state.addressValidity}
                            placeholder="ASBURY PARK, NJ 07712-6086 "
                            errorMessage={this.state.addressErrorMessage || "Input cannot be empty"}
                            required={true}
                        />

                        <InputComponent
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={this.state.email}
                            onChange={this.emailParameterToState.bind(this)}
                            onValid={this.state.emailValidity}
                            placeholder="mail@gmail.com"
                            errorMessage="Please include @ and . in the email address"
                            required={true}
                        />
                        <InputComponent
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="text"
                            value={this.state.phone}
                            onChange={this.phoneParameterToState.bind(this)}
                            onValid={this.state.phoneValidity}
                            placeholder="0329232943"
                            errorMessage="Length of phone number must be less then 10 charts"
                            required={true}
                        />
                        <InputComponent
                            id="special-notes"
                            name="specialNotes"
                            label="Special notes"
                            type={"textarea"}
                            value={this.state.specialNotes}
                            onChange={this.specialNotesToState.bind(this)}
                            onValid={this.state.specialNotesValidity}
                            errorMessage="Length of special notes must be less then 500  charts"
                        />
                        <Button id="submit-ship-info-button" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}
