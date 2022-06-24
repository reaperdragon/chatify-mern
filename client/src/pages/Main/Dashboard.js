import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FormRow, Header } from "../../components";
import { searchUser } from "../../features/user/userSlice";

const Dashboard = () => {
  const { users } = useSelector((state) => state.user);
  const [values, setValues] = useState({ search: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchUser(values.search));
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <div className="container">
          <div className="container_1">
            <div className="container_1--search">
              <FormRow
                type="text"
                placeholder="search user"
                name="search"
                value={values.search}
                handleChange={handleChange}
              />
              <button className="button-search" onClick={handleSearch}>
                Search
              </button>

              <div className="container_1--search-users">
                {values.search === "" ? null : (
                  <div>
                    {users[0]?.map((user) => (
                      <div key={user._id} className="search-users">
                        <img
                          src={user.avatar}
                          alt="profile-user"
                          className="profile"
                        />
                        <p className="username-search">{user.username}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="container_1--users"></div>
          </div>
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

  .container_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container_1--search {
    height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 80%;
  }

  input {
    width: 100%;
    height: 40px;
    padding-left: 5px;
    background: #dff3fe;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    outline: none;
    transition: all 0.3s ease-in-out;
  }
  input:focus {
    color: black;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
  input::placeholder {
    font-family: "Poppins", sans-serif;
  }

  .button-search {
    width: 100%;
    height: 30px;

    background: rgba(67, 43, 255, 0.8);
    border-radius: 10px;
    border: none;
    margin: 5px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    padding: 10px 0;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translate(0, -5px);
      background: #432bff;
      box-shadow: 0px 6px 30px rgba(67, 43, 255, 0.4);
    }
  }

  .search-users {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    background: #f2f2f2;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
  }

  .profile {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 20px;
  }

  .username-search {
    font-family: "Poppins";
    font-size: 16px;
  }
`;
