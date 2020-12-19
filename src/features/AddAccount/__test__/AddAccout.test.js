import React from 'react';
import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

// import { render, fireEvent, cleanup } from 'test-utils';
import AddAccount from '../index';

jest.mock('react-redux');
jest.mock('../../../store/reducers/Account');


afterEach(cleanup);
test('renders the Add Account component', () => {
    const component = renderer.create(<AddAccount />, document.body);
    expect(component.toJSON()).toMatchSnapshot();
});