import React from 'react';
import CommponSection from './CommponSection';
import page_img from '../src/images/home.svg';

const Home = ()=> {
  return (
  <>
    <CommponSection 
    name="Grow your business with"
    imgsrc={page_img} 
    visit='/service'
    btname='Get Start'
    />
  </>
  )
}

export default Home;