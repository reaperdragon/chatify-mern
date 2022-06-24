import React, { useState } from "react";

import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="container">
          <div className="container_1"></div>
          <div className="container_2"></div>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  .container {
    max-width: 1234px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
`;
