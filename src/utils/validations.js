export let validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateLengthOfValue = (value, length) => {
    return value.length <= length;
};

export const validateAddress = async (address1, address2) => {
    if(address1 && address2) {
        return await fetch(`http://www.yaddress.net/api/address?AddressLine1=${address1}&AddressLine2=${address2}+Prk+NJ&UserKey=`, {
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        })
    }
};