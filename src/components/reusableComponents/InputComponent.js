import React from "react";
import {FormGroup, Input, Label} from "reactstrap";

export const InputComponent = ({value, onChange, label, name, type, disabled, onValid, errorMessage, id, placeholder, required = false}) => (
    <FormGroup row>
        <Label for={id}>{label}</Label>
        <Input
            id={id}
            name={name}
            type={type ? type : "number"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            invalid={!onValid}
            required={required}
        />
        {!onValid ? <div className="error-text">
            {errorMessage}
        </div> : null}
    </FormGroup>
);