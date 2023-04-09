import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: Right;
  margin: 20px 50px;
  z-index: 15;
  li{
    padding: 18px 30px;
  }
  @media (max-width: 768px){
      margin: 0;
      background-color: #1565df;
      flex-direction: column;
      position: fixed;
      transition: all 0.3s linear;
      transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)' };
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      text-align: center;
      padding-top: 40px;
      li{
          color: #fff;
      }
  }
`;

function Navbar({open}) {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </Ul>
  );
}

export default Navbar;
