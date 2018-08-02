// @flow

import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import createStore from '../../redux/createStore';
import apiClient from '../../../server/utils/apiClient';

import TesterTest from './TesterTest';



describe('TesterTest', () => {

  const testTesterTest = renderIntoDocument(<Provider store={store} key="provider">
    <InfoBar />
  </Provider>);

  it('should render and test', () => {
    expect(TesterTest.bark()).to.be('Wah wah, I am Test');
  });
});




// test('Dog.bark', () => {
//   const testDog = new Dog('Test');
//   expect(testDog.bark()).to.be('Wah wah, I am Test');
// 
// });
