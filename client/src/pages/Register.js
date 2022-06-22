import React, { useState } from "react";
import styled from "styled-components";
import MeshGradient from "../assets/img/background.png";
import { FormRow } from "../components";

import { toast } from "react-toastify";

const initialState = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMember = (e) => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, fullName, isMember } = values;

    if (
      !email ||
      !password ||
      (!isMember && !username) ||
      (!isMember && !fullName)
    ) {
      toast.error("Please Provide All Fields.");
      return;
    }

    if (isMember) {
      console.log(email, password);
      setValues({ username: "", fullName: "", email: "", password: "" });
      return;
    } else {
      console.log(username, fullName, email, password);
      setValues({ username: "", fullName: "", email: "", password: "" });
      return;
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <div className="mockup">
          <img src={MeshGradient} alt="gradient" className="gradient" />
        </div>

        <div className="content">
          <form className="form" onSubmit={onSubmit}>
            <div className="main">
              <h3 className="logo">Chatify</h3>
              <h4>{values.isMember ? "Login" : "Register"}</h4>
            </div>

            <div className="fields">
              {!values.isMember && (
                <FormRow
                  type="username"
                  placeholder="username"
                  name="username"
                  value={values.username}
                  handleChange={handleChange}
                />
              )}

              {!values.isMember && (
                <FormRow
                  type="fullName"
                  placeholder="fullname"
                  name="fullName"
                  value={values.fullName}
                  handleChange={handleChange}
                />
              )}

              <FormRow
                type="email"
                placeholder="email"
                name="email"
                value={values.email}
                handleChange={handleChange}
              />

              <FormRow
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                handleChange={handleChange}
              />

              <button type="submit" className="btn-login">
                {values.isMember ? "Login" : "Register"}
              </button>
              <p>
                {values.isMember
                  ? "Not Have An Account?"
                  : "Already Have an Account? "}
                <span onClick={toggleMember}>
                  {" "}
                  {!values.isMember ? "Login." : "Create one."}
                </span>
              </p>
            </div>
          </form>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  height: 100vh;
  transition: all 0.3s ease-in-out;
`;

const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  .mockup {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mockup-image {
    position: relative;
    top: 200px;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form {
    width: 520px;
    background: #ffffff;
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 0;
    @media only screen and (max-width: 768px) {
      padding: 40px 30px;
    }
  }

  .logo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 120px;
    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 73px;

    background: linear-gradient(110.29deg, #2e5cff 11.11%, #973df0 60.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input {
    width: 100%;
    height: 60px;
    padding-left: 5px;
    border: none;
    background: #dfe5fd;
    border-radius: 15px;
    margin: 10px 0;
    outline: none;
    transition: all 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;
  }
  input:focus {
    color: black;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
  input::placeholder {
    font-family: "Poppins", sans-serif;
    color: #9e9e9e;
  }
  .btn-login {
    background: rgba(67, 43, 255, 0.8);
    border-radius: 15px;
    border: none;
    margin: 10px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 36px;
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
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 10px 0;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    background: linear-gradient(144.1deg, #2e5cff 24.59%, #973df0 102.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    cursor: pointer;
  }
`;
