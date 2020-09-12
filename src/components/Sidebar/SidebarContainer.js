import React from 'react';
import Sidebar from './Sidebar';

const menu = [
  {
    url: 'add-survivor',
    title: 'Add Survivor'
  }
];

const SidebarContainer = () => {
  return <Sidebar menu={menu} />
};

export default SidebarContainer;