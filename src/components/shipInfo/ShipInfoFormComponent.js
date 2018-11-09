import React from "react";
import {InputComponent} from "../reusableComponents/InputComponent";
import {Button, Form} from "reactstrap";
import {validateAddress, validateEmail, validateLengthOfValue} from "../../utils/validations";
import {toast} from "react-toastify";
import {addOrderRequest} from "../../communicator";

export class ShipInfoFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValidity: true,
            phoneValidity: true,
            specialNotesValidity: true,
            addressValidity: true,
            address1Validity: true,
            address2Validity: true,
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

    submitForm(e) {
        e.preventDefault();
        // validateAddress(this.state.address1, this.state.address2)
        //     .then(response => response.json())
        //     .then(jsondata => {
        //         this.setState({
        //             addressValidity: jsondata.ErrorCode === 0,
        //             addressErrorMessage: jsondata.ErrorMessage
        //         })
        //     })
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
        return <Form onSubmit={this.submitForm.bind(this)}>
            <InputComponent
                id="first-name"
                name="firstName"
                label="First name"
                type="text"
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
                onChange={this.inputValueToState.bind(this)}
                onValid={this.state.addressValidity && this.state.address1Validity}
                placeholder="1234 Main St"
                errorMessage={this.state.addressErrorMessage || "Input cannot be empty"}
                required={true}
            />
            <InputComponent
                id="cityStateZip"
                name="address2"
                label="City, State, Zip"
                type="text"
                onChange={this.inputValueToState.bind(this)}
                onValid={this.state.addressValidity && this.state.address2Validity}
                placeholder="ASBURY PARK, NJ 07712-6086 "
                errorMessage={this.state.addressErrorMessage || "Input cannot be empty"}
                required={true}
            />
            <InputComponent
                id="email"
                name="email"
                label="Email"
                type={"email"}
                onChange={this.emailParameterToState.bind(this)}
                onValid={this.state.emailValidity}
                errorMessage="Please include @ and . in the email address"
                required={true}
            />
            <InputComponent
                id="phone"
                name="phone"
                label="Phone"
                onChange={this.phoneParameterToState.bind(this)}
                onValid={this.state.phoneValidity}
                errorMessage="Length of phone number must be less then 10 charts"
                required={true}
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
            <Button id="submit-ship-info-button" type="submit">Submit</Button>
        </Form>
    }
}
