**Running application:** 
1) Starting node server
    `npm run startServer`
2) Running development server
    `npm run start`
3) Running production bundles
    `npm run build`
4) Running test
    `npm run test`

**Front-end documentation:**

1. `index.js` - keep functionality to render app

2. `App.js` main component, provide routing

    `<Route exact path="/" component={HomePageComponent}/>` - route to home page

    `<Route path="/ship-info" component={ShipInfoComponent}/>` - route to page with form for order creation

    `<Route path="/admin-panel" component={AdminPanelComponent}/>` - route to table with all orders

3. `App.css` keep all styles for app

4. `communicator.js` - contain all requests

5. `setupProxy.js`

    `app.use(proxy("/orderList", { target: "http://localhost:5000/", "secure": false, "changeOrigin": true}));` - proxy for api
    `app.use(proxy("/api/address", {target: "http://www.yaddress.net/", "changeOrigin": true}))` - proxy for address validation
    
6. `utils/validations.js` - keep all validations for App

7. directory `components` contain all components for app

    1. adminPanel - contain into table with all orders
    2. homePage - contain into table with all orders
    3. reusableComponents - contain into InputComponent
    4. shipInfo - contain into form for order creation

8. `MainComponent.js` container component for all routes, contain into NavBarHeader

9. `NavBarHeader.js` component for header

10. `NavItemsComponent.js` component which return navigation items depends on window.location

11. `TitleComponent.js` component which return title for Header depends on window.location

12. `adminPanel/AdminPanelComponent.js` container component for table with all orders 

    _first get json from response, then set into state this list_

            getOrderListRequest().then(response => response.json())
                .then((orderList) => {
                    return this.setState({
                        orderList
                    })
                })  

    _pass this list as props to table_
            
        <AdminPanelTableComponent orderList={this.state.orderList}/>

13. `adminPanel/AdminPanelComponent.js` table with all orders

    `orderList.length > 0` then render table, in other case render div with message `<div>There is no data to display</div>`

14. `homePage/HomePageComponent.js` home page with welcome info

15. `reusableComponent/InputComponent.js` contain reusable input component, which provide the possibility use any type of input, custom message for validation...

16. `shipInfo/ShipInfoComponent.js` component with form for creating new order

**Back-end documentation:**

1. `server.js` - contain entry point for express server
    
    `const port = process.env.PORT || 5000; ` - set port
    
    `const OrderList = require('./api/models/orderListModel');` - get model
    
    `const bodyParser = require('body-parser');` - added for parse JSON by default
    
    `mongoose.connect(...);` - connect to dataBase
    
2. `api/models/orderListModel` - contain mongoose schema for saving into dataBase

3. `api/controllers/orderListController` - contain two requests all_order_list (for getting all list) and create_order (for create one order)

4. `api/routes/orderListRoutes` - contain one route "/orderList" with possibility to get and post
