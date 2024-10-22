import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

const Header = ({ handleMenuClick, isMenuOpen }) => {
  return (
    <>
      <MainContainer>
        <div className="logo"></div>
        <div className="container">
          <div className="search">
            <input type="text" placeholder="Search for contacts" />
          </div>
          <div className="links">
            <a href="#">Home</a>
          </div>
          <div className="links">
            <a href="#">Explore</a>
          </div>
          <div className="links">
            <a href="#">
              My Apps <FaCaretDown />
            </a>
          </div>
          <div className="user-dp"></div>
          <div className="menu" onClick={handleMenuClick}>
            <IoMenu />
          </div>
        </div>
      </MainContainer>
      {isMenuOpen && <ExtraMenu />}
    </>
  );
};

export default Header;

const ExtraMenu = () => {
  return (
    <Extra>
      <div className="user">
        <div className="user-dp"></div>
        <div className="name">
          <h3> UserName</h3>
        </div>
      </div>
      <div className="items">
        <IoIosNotifications className="icon-not" />
        <h3>Notifications</h3>
        <p>5</p>
      </div>
      <div className="items">
        <FaMessage className="icon-msg" />
        <h3>Messages</h3>
        <p>19</p>
      </div>
      <div className="items">
        <IoIosCreate className="icon-create" />
        <h3>Create</h3>
      </div>
      <div className="items">
        <FaStar className="icon-star" />
        <h3>Upgrade</h3>
      </div>
      <div className="items">
        <h3>Your Account</h3>
      </div>
      <div className="items">
        <h3>Organisations</h3>
      </div>
      <div className="items">
      <a href="https://about.makerble.com/our-values" target="_blank"><h3>About Us</h3></a>  
      </div>
      <div className="items">
      <a href=""><h3>Explore</h3></a>   
      </div>
      <div className="items">
      <a href=""><h3>Terms & Conditions</h3></a>    
      </div>
    </Extra>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5vw 0 2vw;
  .logo {
    background-image: url("./src/assets/logo-word.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 60px;
    cursor: pointer;
  }
  .links,
  .container {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .links a {
    all: unset;
    font-size: 22px;
    font-weight: 500;
    color: grey;
    display: flex;
    align-items: center;
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
  .links:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  .search input {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
  .user-dp {
    background-image: url("./src/assets/user.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  .menu {
    font-size: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 882px) {
    height: 20vh;
    flex-direction: column;
    justify-content: center ;
    .container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 667px) {
    .user-dp {
      display: none;
    }
  }
  @media (max-width: 593px) {
    .search {
      display: none;
    }
  }
  @media (max-width: 372px) {
    .links:nth-child(4) {
      display: none;
    }
  }
`;

const Extra = styled.div`
  z-index: 1;
  position: absolute;
  top: 10vh;
  min-width: 15vw;
  height: auto;
  border: 2px solid black;
  right: 0.2vw;
  animation: slide 0.2s linear;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  @keyframes slide {
    0% {
      transform: translateY(-15vw);
    }
    100% {
      transform: translateY(0);
    }
  }
  .user-dp {
    background-image: url("./src/assets/user.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }

  .user {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 30px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
  .items {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    justify-content: left;
    &:hover {
      color: #3e3e3e;
      transform: scale(1.04);
      text-decoration: underline;
    }
    & a{
      all: unset;
    }
  }
  .icon-not,
  .icon-create {
    font-size: 30px;
    position: relative;
    left: 7px;
  }
  .icon-msg,
  .icon-star {
    font-size: 20px;
  }
  @media (max-width: 882px) {
    top: 20vh;
  }
`;
