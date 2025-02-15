'use client';
import { useMenuStore } from '@/store/reducers/menu';
import { useSidebarStore } from '@/store/reducers/sidebar';
import { FaFolder } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

const Header = () => {
  const { isOpened, toggleSidebar } = useSidebarStore();
  const { selectedMenu } = useMenuStore();
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
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 bg-[#253BFF] rounded-full">
          <HiOutlineViewGrid className="w-10 h-10 stroke-white" />
        </div>
        <h2 className="font-bold text-3xl">{selectedMenu ?? 'Menus'}</h2>
      </div>
    </>
  );
};

export default Header;
