export const addOrderRequest = (state) => {
    return fetch("orderList", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(state),
    })
};

export const getOrderListRequest = () => {
    return fetch("/orderList")
};

export const validateAddressRequest = async (address1, address2) => {
    return fetch(`/api/address?AddressLine1=${address1}&&AddressLine2=${address2}&+Prk+NJ&UserKey=`)
};