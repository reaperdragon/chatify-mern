import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";


const Header = () => {
  const { user } = useSelector((state) => state.user);

  const [show, setShow] = useState(true);

  const toggle = () => setShow(!show);

  return (
    <Wrapper>
      <ContentWrapper>
        <div className="header_search--container" onClick={toggle}>
          <FiSearch className="search" />
          <p className="header-search--container-s"> Search User </p>
        </div>

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

  .search {
    font-size: 18px;
  }

  .header_search--container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #f2f2f2;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  .header-search--container-s {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }

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
