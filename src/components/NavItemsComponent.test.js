import {configure, shallow} from "enzyme/build";
import {NavItemsComponent} from "./NavItemsComponent";
import React from "react";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

describe('<NavItemsComponent />', () => {
    test('take snapshot for navItemsComponent', () => {
        const wrapper = shallow(
            <NavItemsComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should work with a switch statement with /ship-info pathname', () => {
        const wrapper = shallow(<NavItemsComponent pathname={"/ship-info"} />);
        expect(wrapper);
    });

    it('should work with a switch statement with /admin-panel pathname', () => {
        const wrapper = shallow(<NavItemsComponent pathname={"/admin-panel"} />);
        expect(wrapper);
    });
});
