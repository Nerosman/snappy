import React from "react";
import {InputComponent} from "../reusableComponents/InputComponent";
import {Button, Form} from "reactstrap";
import {validateAddress, validateEmail, validateLengthOfValue} from "../../utils/validations";
import {toast} from "react-toastify";

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

    submitForm() {
        let inputsValidity = [];

        let checkInputEmptyValidity = async () => {
            for (let key in this.state) {
                if (!key.includes("Validity")) {
                    this.setState({
                        [key + "Validity"]: !!this.state[key]
                    })
                }
            }
            return this.state;
        };

        checkInputEmptyValidity().then((res)=>{
            console.log(res);
            const isFormNonValid = inputsValidity.includes(false);

            if (isFormNonValid) {
                toast("Something went wrong. Please check your data", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    type: "error"
                })
            } else {
                return fetch("orderList", {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    redirect: "follow", // manual, *follow, error
                    referrer: "no-referrer", // no-referrer, *client
                    body: JSON.stringify(this.state),
                }).then((res) => {
                    res.status === 200 && toast("Your date has been save successfully", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        type: "success"
                    })
                })
            }
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
                onValid={this.state.firstNameValidity}
                placeholder="John"
                errorMessage={"Input cannot be empty"}
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
