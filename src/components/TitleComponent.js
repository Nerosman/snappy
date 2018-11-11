export const TitleComponent = ({pathname}) => {
    switch (pathname) {
        case '/ship-info':
            return "Fill shipping info to receive a gift";
        case '/admin-panel':
            return "Snappy gifts order list";
        default:
            return "Snappy"
    }
};