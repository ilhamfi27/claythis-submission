'use client';
import { useMenuStore } from '@/store/reducers/menu';
import { TreeViewData, type SidebarMenus } from '../../../../@types/menu';
import { FC, useEffect, useState } from 'react';
import { buildTreeView } from '@/shared/utils/tree';
import MenuItems from '../MenuItems';
import { useSidebarStore } from '@/store/reducers/sidebar';
import SidebarIcon from './SidebarIcon';
import useWindowWidth from '@/hooks/useWindowWidth';

const Sidebar: FC = () => {
  const { menus } = useMenuStore();
  const [menuItems, setMenuItems] = useState<SidebarMenus[]>([]);
  const { isOpened, setIsOpened } = useSidebarStore();
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 768 && !isOpened) {
      setIsOpened(true);
    } else if (width <= 768 && isOpened) {
      setIsOpened(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const generateSidebarMenus = (menus: TreeViewData[]): SidebarMenus[] => {
    return menus.map((menu: TreeViewData) => ({
      title: menu.name,
      href: '#',
      children: menu.children ? generateSidebarMenus(menu.children) : undefined,
    }));
  };

  useEffect(() => {
    setMenuItems(generateSidebarMenus(buildTreeView(menus)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus]);

  const toggleSidebar = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {/* Desktop Sidebar: Always visible on md and larger */}
      <aside
        className={`hidden ${
          isOpened ? 'md:block' : 'hidden'
        } bg-gray-900 text-white w-64 p-6 rounded-lg shadow-lg relative mt-4 ml-4 h-[97%] overflow-y-auto`}
      >
        <SidebarIcon toggleSidebar={toggleSidebar} />
        <MenuItems menuItems={menuItems} />
      </aside>

      {/* Mobile Off-Canvas Sidebar: Visible only when toggled */}
      {isOpened && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          {/* Sidebar */}
          <aside className="relative bg-gray-900 text-white w-64 p-6 shadow-lg h-full overflow-y-auto">
            <SidebarIcon toggleSidebar={toggleSidebar} />
            <MenuItems menuItems={menuItems} />
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
