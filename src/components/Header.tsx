import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Title>GALLERY APP</Title>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
`;
