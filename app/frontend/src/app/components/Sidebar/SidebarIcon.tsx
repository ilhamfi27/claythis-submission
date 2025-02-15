import { FC } from 'react';

type SidebarIconProps = {
  toggleSidebar: () => void;
};

const SidebarIcon: FC<SidebarIconProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between text-2xl font-bold mb-8">
      <div>
        <img src="/icons/cloit.svg" />
      </div>
      <button
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        className="bg-transparent"
      >
        <img src={`/icons/menu-closed.svg`} />
      </button>
    </div>
  );
};

export default SidebarIcon;
