import {validateAddressRequest} from "../communicator";

export let validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateLengthOfValue = (value, length) => {
    return value.length <= length;
};

export const validateAddress = async (address1, address2) => {
    return validateAddressRequest(address1, address2)
};