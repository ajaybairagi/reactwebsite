import React from 'react';
import CommponSection from './CommponSection';
import imgname from '../src/images/about.png';

const About = ()=> {
  return (
    <>
    <CommponSection 
    name="Welcome to About"
    imgsrc={imgname} 
    visit='/service'
    btname='Start Now'
    />
  </>
  )
}

export default About;