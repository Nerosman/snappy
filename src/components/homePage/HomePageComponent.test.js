import React from "react";
import {configure, render, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomePageComponent} from "./HomePageComponent";

import {BrowserRouter as Router, Link} from 'react-router-dom';
import * as ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import {Button} from "reactstrap";

configure({adapter: new Adapter()});

describe('<HomePageComponent />', () => {
    it('renders without crashing', () => {
        shallow(<Router><HomePageComponent/></Router>);
    });
    it('can render div into HomePageComponent', () => {
        const div = document.createElement('div');
        render(<Router><HomePageComponent/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('check if component has one Jumbotron', () => {
        const wrapper = shallow(<HomePageComponent/>);
        expect(wrapper.find('Jumbotron').length).toBe(1);
    });
    test('snapshot homePage', () => {
        const wrapper = shallow(
            <Router><HomePageComponent/></Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('renders elems', () => {
        const wrapper = render(<Router><HomePageComponent/></Router>);
        expect(wrapper.find('.display-3')).toHaveLength(1);
        expect(wrapper.find('.lead')).toHaveLength(2);
        expect(wrapper.find(".my-2")).toHaveLength(1);
    });

    test('Link matches snapshot', () => {
        const component = renderer.create(
            <Router>
                <HomePageComponent>
                    <Link to="/ship-info">
                        <Button>Get gift</Button>
                    </Link>
                </HomePageComponent>
            </Router>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});