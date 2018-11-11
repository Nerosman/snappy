import {configure, shallow} from "enzyme/build";
import React from "react";
import Adapter from "enzyme-adapter-react-16/build";
import {TitleComponent} from "./TitleComponent";

configure({ adapter: new Adapter() });

describe('<TitleComponent />', () => {
    test('take snapshot for navItemsComponent', () => {
        const wrapper = shallow(
            <TitleComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should work with a switch statement with /ship-info pathname', () => {
        const wrapper = shallow(<TitleComponent pathname={"/ship-info"} />);
        expect(wrapper);
    });

    it('should work with a switch statement with /admin-panel pathname', () => {
        const wrapper = shallow(<TitleComponent pathname={"/admin-panel"} />);
        expect(wrapper);
    });
});
