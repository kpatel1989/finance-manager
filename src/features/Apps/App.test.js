import React from 'react';
import renderer from 'react-test-renderer';
import App from './index';

jest.mock('../Home', () => () => (<homeplaceholder />));

test('renders learn react link', () => {
  const component = renderer.create(<App />, document.body);
  expect(component.toJSON()).toMatchSnapshot();
});
