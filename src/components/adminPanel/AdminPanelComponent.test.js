import ReactDOM from "react-dom";
import React from "react";
import {AdminPanelComponent} from "./AdminPanelComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
});
