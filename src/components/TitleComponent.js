import React from "react";

export const TitleComponent = () => {
    switch (window.location.pathname) {
        case '/ship-info':
            return "Fill shipping info to receive a gift";
        case '/admin-panel':
            return "Snappy gifts order list";
        default:
            return "Snappy"
    }
};