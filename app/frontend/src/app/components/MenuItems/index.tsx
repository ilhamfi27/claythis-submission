import { FC } from 'react';
import { SidebarMenus } from '../../../../@types/menu';

type MenuItemsProps = {
  menuItems: SidebarMenus[];
};

const MenuItems: FC<MenuItemsProps> = ({ menuItems }) => {
  const renderMenu = (items: SidebarMenus[], depth = 0) => {
    return (
      <ul className={depth === 0 ? 'space-y-4' : 'space-y-2 ml-4 mt-2'}>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href || '#'}
              className={`flex items-center ${
                depth === 0
                  ? 'text-gray-400'
                  : 'p-2 rounded-lg hover:bg-gray-800'
              } ${depth > 0 && item.children ? 'justify-between' : ''}`}
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
