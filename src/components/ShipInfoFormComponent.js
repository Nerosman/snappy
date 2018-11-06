import React from "react";
import {InputComponent} from "./reusableComponents/InputComponent";
import {Form} from "reactstrap";

export const ShipInfoFormComponent = () => {
    return <Form>
        <InputComponent
            id="first-name"
            label="First name"
            type="text"
            onValid={true}
            placeholder="John"
        />
        <InputComponent
            id="second-name"
            label="Second name"
            type={"text"}
            onValid={true}
            placeholder="Whiskey"
        />
        <InputComponent
            id="address"
            label="Address"
            type={"text"}
            onValid={true}
            placeholder="1234 Main St"
        />
        <InputComponent
            id="city"
            label="City"
            type="text"
            onValid={true}
        />
        <InputComponent
            id="state"
            label="State"
            type="text"
            onValid={true}
        />
        <InputComponent
            id="zip"
            label="Zip"
            type="text"
            onValid={true}
        />
        <InputComponent
            id="email"
            label="Email"
            type={"email"}
            onValid={true}
        />
        <InputComponent
            id="phone"
            label="Phone"
            onValid={true}
        />
        <InputComponent
            id="special-notes"
            label="Special notes"
            type={"textarea"}
            onValid={true}
        />
    </Form>
};
