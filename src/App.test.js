import React from 'react';
import ReactDOM from 'react-dom';
//import test libraries
import expect from 'expect.js';
import  shallow  from 'enzyme';

import moment from 'moment';
import App from './App';
import Myservice from './form/service';
import MyForm from './form/form';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
//test Myservice CalculateDiff function
it('return should retrun 5', ()=> {
  expect(Myservice.calculateDiff(moment().subtract(5, 'days'),moment().subtract(10, 'days'))).to.eql(5);
})
it('should fail', ()=> {
  expect(Myservice.calculateDiff(moment().subtract(1, 'days'),moment().subtract(10, 'days'))).to.eql(5);
})
//negative value should return positive one 
it('it should return a positive 6', ()=> {
  expect(Myservice.calculateDiff(moment().subtract(8, 'days'),moment().subtract(2, 'days'))).to.eql(6);
})

it('it should containe date picker', ()=> {
  const wrapper = shallow(<MyForm />);
  expect(wrapper.contains(<label>Start Date  : </label>)).to.equal(true);
})
