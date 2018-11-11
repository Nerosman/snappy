import ReactDOM from "react-dom";
import React from "react";
import {AdminPanelTableComponent} from "./AdminPanelTableComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("component <AdminPanelTableComponent />", ()=>{
    it('render div into AdminPanelTableComponent without table', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanelTableComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('snapshot adminPanel', () => {
        const wrapper = shallow(<AdminPanelTableComponent/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render AdminPanelTableComponent with table', () => {
        const wrapper = shallow(<AdminPanelTableComponent orderList={[{firstName: "Bohdan", secondName: "Yuzyfyshyn", address1: "Kn. Olgy 12", address2: "Lviv", email: "nerosman2601@gmail.com", phone: "0323212323"}]}/>);
        expect(wrapper)
    });

});
