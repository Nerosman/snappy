import ReactDOM from "react-dom";
import React from "react";
import {AdminPanelTableComponent} from "./AdminPanelTableComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("component <AdminPanelTableComponent />", ()=>{
    it('render div into AdminPanelTableComponent without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanelTableComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('snapshot adminPanel', () => {
        const wrapper = shallow(<AdminPanelTableComponent/>);
        expect(wrapper).toMatchSnapshot();
    });

});
