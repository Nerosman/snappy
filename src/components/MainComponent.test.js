import ReactDOM from "react-dom";
import React from "react";
import {MainComponent} from "./MainComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';
import {NavBarHeaderComponent} from "./NavBarHeader";

configure({ adapter: new Adapter() });

describe("component <MainComponent />", ()=>{
    it('render div into AdminPanelComponent without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><MainComponent /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('snapshot adminPanel', () => {
        const wrapper = shallow(<Router><MainComponent /></Router>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders one <NavBarHeaderComponent />', () => {
        const wrapper = shallow(<MainComponent />);
        expect(wrapper.find(NavBarHeaderComponent)).toHaveLength(1);
    });
});
