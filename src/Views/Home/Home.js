import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Store/actions";
import { mockUsers } from "../../utils/mocks";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";

import "./Home.scss";
import Dashboard from "./Dashboard";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const userStatus = useSelector((state) => state.status);

  const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f6f7;
    font-family: "Poppins", sans-serif;
    margin: 0;
  }
`;
  useEffect(() => {
    dispatch(fetchUsers(mockUsers));
  }, [dispatch]);

  return (
    <div className="Home">
      <GlobalStyle />
      <Header />
      <Dashboard userStatus={userStatus} userData={userData} />
      <p>users list below:</p>
    </div>
  );
}

export default Home;
