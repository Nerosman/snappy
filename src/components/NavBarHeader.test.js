import {configure, shallow} from "enzyme/build";
import {ShipInfoComponent} from "./shipInfo/ShipInfoComponent";
import jest from "jest-mock";
import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import {NavBarHeaderComponent} from "./NavBarHeader";

configure({ adapter: new Adapter() });

describe('<NavBarHeaderComponent />', () => {
    test('take snapshot for header', () => {
        const wrapper = shallow(
            <NavBarHeaderComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('could save input value to state', ()=> {
        const wrapper = shallow(<NavBarHeaderComponent />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'toggle');
        wrapper.find('NavbarToggler').simulate('click');
        expect(wrapper.state('isOpen')).toEqual(true);
    });
});
