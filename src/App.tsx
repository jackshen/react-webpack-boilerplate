import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";

const AppWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route element={<Home />} path="" />
        {/* Add more routes here */}
      </Routes>
    </AppWrapper>
  );
};

export default App;
