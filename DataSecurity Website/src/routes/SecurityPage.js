import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import BenifitsDataSecurity from '../components/security/BenifitsDataSecurity';
import Security from '../components/security/Security';

const SecurityPage = () => {
  return (
    <div>
        <Navbar />
        <Security />
        <hr /> 
        <BenifitsDataSecurity />
        <Footer />
    </div>
  );
};

export default SecurityPage;