import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { FormRow } from "./";

import { useDispatch, useSelector } from "react-redux";

import { searchUser } from "../features/user/userSlice";

const SearchDrawer = ({ toggle, show }) => {
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

  const transitions = useTransition(show, null, {
    from: { position: "fixed", opacity: 0, width: 0 },
    enter: { opacity: 1, width: 320 },
    leave: { opacity: 0, width: 0 },
  });

  return (
    <Wrapper>
      {transitions?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <animated.div style={{ width: props.width }} className="drawer">
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
                </div>
              </animated.div>
              <div className="fill" onClick={toggle} />
            </animated.div>
          )
      )}
    </Wrapper>
  );
};

export default SearchDrawer;

const Wrapper = styled.div`
  .overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  }

  .fill {
    flex: 1;
    background: transparent;
    cursor: pointer;
  }

  .drawer {
    height: 100%;
    background-color: #ffffff;
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
    height: 40px;

    background: rgba(67, 43, 255, 0.8);
    border-radius: 10px;
    border: none;
    margin: 5px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
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
