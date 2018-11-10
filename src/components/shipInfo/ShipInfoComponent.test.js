import React from "react";
import {configure, mount, render, shallow} from 'enzyme';
import {ShipInfoComponent} from "./ShipInfoComponent";
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import {InputComponent} from "../reusableComponents/InputComponent";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

describe('<ShipInfoComponent />', () => {
    it('renders without crashing', () => {
        shallow(<ShipInfoComponent/>);
    });

    it('can render div into ShipInfoComponent', () => {
        const div = document.createElement('div');
        render(<ShipInfoComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders elems', () => {
        const wrapper = render(<ShipInfoComponent />);
        expect(wrapper.find('#email')).toHaveLength(1);
        expect(wrapper.find('#phone')).toHaveLength(1);
        expect(wrapper.find("form")).toHaveLength(1);
        expect(wrapper.find("[lg=12]"))
    });

    it('allows us to set props', () => {
        const wrapper = mount(<ShipInfoComponent bar="baz" />);
        expect(wrapper.props().bar).toEqual('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('renders seven <InputComponent /> components', () => {
        const wrapper = shallow(<ShipInfoComponent />);
        expect(wrapper.find(InputComponent)).toHaveLength(7);
    });


    it('could save input value to state', ()=> {
        const wrapper = shallow(<ShipInfoComponent />);
        const event = {
            target: {name: 'firstName', value: 'Bohdan' }
        };
        const instance = wrapper.instance();
        jest.spyOn(instance, 'inputValueToState');
        wrapper.find('#first-name').simulate('onChange', event);
        instance.inputValueToState(event);
        expect(instance.inputValueToState).toHaveBeenCalled();
        expect(wrapper.state('firstName')).toEqual("Bohdan");
    });

    it('could save email to state', ()=> {
        const wrapper = shallow(<ShipInfoComponent />);
        const event = {
            target: {name: 'email', value: 'nerosman2601@gmail.com' }
        };
        const instance = wrapper.instance();
        jest.spyOn(instance, 'emailParameterToState');
        wrapper.find('#email').simulate('onChange', event);
        instance.emailParameterToState(event);
        expect(instance.emailParameterToState).toHaveBeenCalled();
        expect(wrapper.state('email')).toEqual("nerosman2601@gmail.com");
        expect(wrapper.state('emailValidity')).toEqual(true)
    });

    it('could save phone to state', ()=> {
        const wrapper = shallow(<ShipInfoComponent />);
        const event = {
            target: {name: 'phone', value: '231312312' }
        };
        const instance = wrapper.instance();
        jest.spyOn(instance, 'phoneParameterToState');
        wrapper.find('#phone').simulate('onChange', event);
        instance.phoneParameterToState(event);
        expect(instance.phoneParameterToState).toHaveBeenCalled();
        expect(wrapper.state('phone')).toEqual("231312312");
        expect(wrapper.state('phoneValidity')).toEqual(true)
    });

    it('could save special notes to state', ()=> {
        const wrapper = shallow(<ShipInfoComponent />);
        const event = {
            target: {name: 'specialNotes', value: 'Some text' }
        };
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'specialNotesToState');
        wrapper.find('#special-notes').simulate('onChange', event);
        instance.specialNotesToState(event);
        expect(spy).toHaveBeenCalled();
        expect(instance.specialNotesToState).toHaveBeenCalled();
        expect(wrapper.state('specialNotes')).toEqual("Some text");
        expect(wrapper.state('specialNotesValidity')).toEqual(true)
    });

    test('render a shipInfo', () => {
        const wrapper = shallow(
            <ShipInfoComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });


    it('check if component has one form', () => {
        const wrapper = shallow(<ShipInfoComponent />);
        expect(wrapper.find('Form').length).toBe(1);
    });

    it('submitting form item', () => {
        const wrapper = shallow(<ShipInfoComponent />);
        const event = Object.assign(jest.fn(), {preventDefault: () => {}})
        wrapper.simulate('click', event);
        wrapper.find('Form').props().onSubmit(event);
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'submitForm');
        instance.submitForm(event);
        expect(instance.submitForm).toHaveBeenCalled();
    });

    it('should clear the input field', () => {
        const wrapper = shallow(<ShipInfoComponent />);
        const input = wrapper.find(InputComponent).first();
        expect(
            input.props().value
        ).toEqual('');
    });


});
