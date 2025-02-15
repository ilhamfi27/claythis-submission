import { FC, PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

type MainLayoutProps = PropsWithChildren

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
