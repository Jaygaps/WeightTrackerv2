import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  padding: 0 24px;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.15);
`;

function Header() {
  return <HeaderWrapper>Weight Tracker</HeaderWrapper>;
}

export default Header;
