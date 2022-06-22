import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Profile1 from "../assets/img/user1.jpg";
import Profile2 from "../assets/img/user2.jpg";

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
        <div className="container_image">
          <div className="container_image--main">
            <div className="container_image--main--chat-1">
              <p className="container_image--main--chat-message">Hi There!😃</p>{" "}
              <img
                src={Profile1}
                alt="user1"
                className="container_image--main--chat-profile-1"
              />
            </div>

            <div className="container_image--main--chat-2">
              <img
                src={Profile2}
                alt="user1"
                className="container_image--main--chat-profile-1"
              />
              <div className="container_image--main--chat-typing">
                <span className="circle bouncing"></span>
                <span className="circle bouncing"></span>
                <span className="circle bouncing"></span>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Landing;

const typing = keyframes` 
 0% {
       transform: translateY(0);
    }
    33% {
     transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
`;

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

  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .container_main {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    @media only screen and (max-width: 640px) {
      align-items: center;
      text-align: center;
    }
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

    @media only screen and (max-width: 640px) {
      font-size: 80px;
    }
  }

  .container_main-p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 60px;
    margin: 10px 0;

    @media only screen and (max-width: 640px) {
      font-size: 35px;
      line-height: 45px;
    }
  }

  .container_main-p--name {
    line-height: 75px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media only screen and (max-width: 640px) {
      font-size: 35px;
      line-height: 45px;
    }
  }

  .container_image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    @media only screen and (max-width: 640px) {
      display: none;
    }
  }

  .container_image--main--chat-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
  }

  .container_image--main--chat-message {
    width: max-content;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 30px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
  }

  .container_image--main--chat-profile-1 {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-position: cover;
  }

  .container_image--main--chat-2 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
    left: -30px;
  }
  .container_image--main--chat-typing {
    display: block;
    border-radius: 20px;
    margin: 0 1rem;
    display: flex;
    background: #f2f2f2;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .container_image--main {
    position: relative;
    height: 100%;
  }

  .circle {
    display: block;
    height: 37px;
    width: 37px;
    border-radius: 50%;
    background-color: #8d8d8d;
    margin: 3px;
    animation: ${typing} 1000ms ease-in-out infinite;
    animation-delay: 3600ms;
  }

  .circle:nth-child(1) {
    animation-delay: 0ms;
  }

  .circle:nth-child(2) {
    animation-delay: 333ms;
  }

  .circle:nth-child(3) {
    animation-delay: 666ms;
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

  @media only screen and (max-width: 640px) {
    margin-top: 20px;
  }
`;
