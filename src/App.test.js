import React from 'react';
import App from './App'
import Home from './Pages/Home'
import { shallow } from 'enzyme'

it('simple UI test de App.js usando shallow', () => {

  const wrapper = shallow(<App/>) 
   
  const home = <Home/>

  expect(wrapper.contains(home)).toBe(true)
 
})



