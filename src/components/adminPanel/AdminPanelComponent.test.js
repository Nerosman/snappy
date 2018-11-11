import ReactDOM from "react-dom";
import React from "react";
import {AdminPanelComponent} from "./AdminPanelComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShipInfoComponent} from "../shipInfo/ShipInfoComponent";
import jest from "jest-mock";

configure({ adapter: new Adapter() });

describe("component <AdminPanelComponent />", ()=>{
    it('render div into AdminPanelComponent without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanelComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('snapshot adminPanel', () => {
        const wrapper = shallow(<AdminPanelComponent/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('check if component has one Container', () => {
        const wrapper = shallow(<AdminPanelComponent/>);
        expect(wrapper.find('Container').length).toBe(1);
    });

    it('could save orderList to state', ()=> {
        const wrapper = shallow(<AdminPanelComponent />);
        const orderList = [{firstName: "Bohdan", secondName: "Yuzyfyshyn", address1: "Kn. Olgy 12", address2: "Lviv", email: "nerosman2601@gmail.com", phone: "0937680642"}];
        const instance = wrapper.instance();
        jest.spyOn(instance, 'setOrderListToState');
        instance.setOrderListToState(orderList);
        expect(instance.setOrderListToState).toHaveBeenCalled();
        expect(wrapper.state('orderList')).toEqual(orderList);
    });
});
