import React from 'react';
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
    const component = renderer.create(<AddAccount />, document.body);
    // fireEvent.change(getByTestId('bankTypeSelector'), {
    //     target: { value: 'savings' }
    // });
    const dropdown = document.querySelector('[datat-testid=bankTypeSelector]');
    renderer.act(() => {
        dropdown.dispatchEvent(new MouseEvent("click"), {
            target: { value: 'savings' }
        });
      });

    console.log(getByTestId('bankTypeSelector').value)
    expect(getByTestId('bankTypeSelector').value).toEqual('savings');

});