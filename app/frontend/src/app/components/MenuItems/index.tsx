import { FC } from 'react';
import { SidebarMenus } from '../../../../@types/menu';
import { useMenuStore } from '@/store/reducers/menu';

type MenuItemsProps = {
  menuItems: SidebarMenus[];
};

const MenuItems: FC<MenuItemsProps> = ({ menuItems }) => {
  const { setSelectedMenu, selectedMenu } = useMenuStore();
  const renderMenu = (items: SidebarMenus[], depth = 0) => {
    return (
      <ul className={depth === 0 ? 'space-y-4' : 'space-y-2 ml-4 mt-2'}>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href ?? 'javascript:void(0)'}
              className={`flex items-center p-2 rounded-lg ${
                depth === 0
                  ? 'text-gray-400'
                  : 'hover:bg-[#9FF443] hover:text-black'
              } ${depth > 0 && item.children ? 'justify-between' : ''} ${
                selectedMenu === item.title ? 'bg-[#9FF443] text-black' : ''
              }`}
              onClick={() => setSelectedMenu(item.title)}
            >
              <span>{item.title}</span>
            </a>
            {item.children && renderMenu(item.children, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };
  return <nav>{renderMenu(menuItems)}</nav>;
};

export default MenuItems;
