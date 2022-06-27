import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h1 className="logo">Chatify</h1>
        <h2 className="message-1">404</h2>
        <h3 className="message-2">Oooops!</h3>
        <p className="message-3">
          Sorry, The Page You are looking for doesn’t exists or has been
          removed.{" "}
        </p>
        <Button to="/landing">Go Back To Home</Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  height: 100vh;
`;
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .message-1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 150px;

    @media only screen and (max-width: 640px) {
      font-size: 120px;
    }
  }

  .message-2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 80px;

    @media only screen and (max-width: 640px) {
      font-size: 40px;
    }
  }

  .message-3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    margin: 30px 0;
    color: #606060;

    @media only screen and (max-width: 640px) {
      font-size: 20px;
    }
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
  margin: 10px 0;
  padding: 0 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 30px rgba(67, 43, 255, 0.6);
  }

  @media only screen and (max-width: 640px) {
    font-size: 20px;
  }
`;
