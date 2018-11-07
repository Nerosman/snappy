export let validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateLengthOfValue = (value, length) => {
    return value.length <= length;
};

export const validateAddress = async (address1, address2) => {
    if(address1 && address2) {
        // return await fetch(`http://www.yaddress.net/api/address?AddressLine1=${address1}&AddressLine2=${address2}+Prk+NJ&UserKey=`, {
        //     mode: "cors"
        // })
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp)
            }
        };
        xhttp.open("GET", `http://www.yaddress.net/api/address?AddressLine1=${address1}&AddressLine2=${address2}+Prk+NJ&UserKey=`, true);
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.send();
    }
};