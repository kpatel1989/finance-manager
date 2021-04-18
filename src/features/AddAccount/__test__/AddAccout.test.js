import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import { render, cleanup, fireEvent } from "@testing-library/react";
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
test('should display Bank account components when I select account type', () => {
    const { getByTestId } = render(<AddAccount />);
    const dropdown = getByTestId('bankTypeSelector');
    fireEvent.change(dropdown, {
        target: { value: '1' }
    });
    expect(dropdown.value).toEqual('1');
});