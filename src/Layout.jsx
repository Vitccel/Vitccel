import React from 'react';
import Header from './components/Header'; // Tu nuevo header inteligente
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div> 
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}