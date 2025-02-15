'use client';

import React from 'react';
import TreeMenu from '../../TreeMenu';
import MenusForm from '../../Forms/Menus/MainForm';

const MenuPage = () => {
  return (
    <div className="flex flex-col space-y-10 md:space-x-10 md:flex-row md:space-y-0 pb-8">
      <TreeMenu />
      <MenusForm />
    </div>
  );
};

export default MenuPage;
