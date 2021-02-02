import React from 'react';
import Row from 'react-bootstrap/Row';
import '../components/images/Logo.gif';

const logo = require('../components/images/Logo.gif')


const LandingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div className="Container">
        <Row>
        <img src={logo.default} alt="logo"/>
        </Row>
      </div>

    </div>
  );
};

export default LandingPage;
