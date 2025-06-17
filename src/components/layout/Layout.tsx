import React from 'react';
import UtilityStrip from './UtilityStrip';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityStrip />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;