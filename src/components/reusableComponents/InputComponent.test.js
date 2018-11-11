import ReactDOM from "react-dom";
import React from "react";
import {InputComponent} from "./InputComponent";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("InputComponent", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InputComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        shallow(<InputComponent />);
    });

    it('renders welcome message', () => {
        const wrapper = shallow(<InputComponent />);
        expect(wrapper.find('.error-text').type()).toEqual('div');
    });

    test('make snapshot for InputComponent', () => {
        const wrapper = shallow(
            <InputComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
