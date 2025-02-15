'use client';
import { useSidebarStore } from '@/store/reducers/sidebar';
import { FaFolder } from 'react-icons/fa';

const Header = () => {
  const { isOpened, toggleSidebar } = useSidebarStore();
  return (
    <>
      {/* Mobile Toggle Button: Always at the top (only on mobile) */}
      <div className={`${isOpened ? 'md:hidden' : 'block'} mb-4`}>
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="bg-white text-white"
        >
          <img src={`/icons/menu-open.svg`} />
        </button>
      </div>
      <header className="flex items-center mb-8">
        <FaFolder className="text-gray-400 w-6 h-6" />
        <div className="text-gray-400 ml-2">/ Menus</div>
      </header>
    </>
  );
};

export default Header;
