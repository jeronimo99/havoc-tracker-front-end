import React from 'react';
import Landing from './Landing';

const menu = [
  {
    url: 'add-survivor',
    title: 'Add Survivor'
  }
];

const LandingPage = () => {
  return <Landing menu={menu} />
};

export default LandingPage;