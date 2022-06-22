import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="container_main">
          <h2 className="container_main--name">Chatify</h2>
          <p className="container_main-p">
            Have fun and <br /> communicate <br /> with others,
            <br /> with <span className="container_main-p--name">Chatify.</span>
          </p>
          <Button to="/register">Login / Register</Button>
        </div>
        <div className="container_image"></div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;

  .container_main {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .container_main--name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 120px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .container_main-p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 60px;
    margin: 10px 0;
  }

  .container_main-p--name {
    line-height: 75px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const Button = styled(Link)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: white;
  border-radius: 20px;
  width: 350px;
  border: none;
  outline: none;
  height: 80px;
  background: #432bff;
  box-shadow: 0px 6px 30px rgba(67, 43, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 30px rgba(67, 43, 255, 0.6);
  }
`;
