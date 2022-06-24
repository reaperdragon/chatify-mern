import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <ContentWrapper>
        <h2 className="header_logo">Chatify</h2>

        <div className="header_profile">
          <img
            src={user?.avatar}
            alt="profile"
            className="header_profile--avatar"
          />

          <h3 className="header_profile--username">{user.username}</h3>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 40px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .header_logo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .header_profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }

  .header_profile--avatar {
    height: 18px;
    width: 18px;
    border-radius: 50%;
  }

  .header_profile--username {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
  }
`;
