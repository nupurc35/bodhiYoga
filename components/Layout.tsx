
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
