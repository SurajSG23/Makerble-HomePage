import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <MainContainer>
        <div className="img"></div>
        <div className="container">
          <div className="copy">
            <div className="logo"></div>
            <div>Copyright &copy; 2024 Makerble | All Rights Reserved</div>
          </div>
          <div className="footer2">
            <div className="socials">
              <div>
                <a
                  href="https://www.instagram.com/makerble/?hl=en"
                  target="_blank"
                  className="insta"
                >
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a href="https://x.com/Makerble" target="_blank" className="x">
                  <FaTwitter />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/makerble"
                  target="_blank"
                  className="face"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/makerble"
                  target="_blank"
                  className="insta"
                >
                  <FaYoutube />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/Makerble/"
                  target="_blank"
                  className="face"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className="contact">
              <h4>
                {" "}
                <IoIosMail />
                contact@makerble.com
              </h4>
              <h4>
                {" "}
                <IoCall />
                020 8123 6253
              </h4>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Footer;

const MainContainer = styled.div`
  margin-top: auto;
  width: 100%;
  height: 10vh;
  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .img {
    background: url("./src/assets/footer.png") no-repeat center/cover;
    width: 100%;
    height: 40px;
    position: relative;
  }
  .logo {
    background: url("./src/assets/logo.png") no-repeat center/contain;
    width: 50px;
    height: 50px;
  }
  .footer2 {
    width: 23vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    right: 0;
  }
  .socials {
    display: flex;
    gap: 20px;
    font-size: 40px;
    margin: -15px 0;
  }
  .copy {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .contact {
    display: flex;
    gap: 10px;

    & h4 {
      display: flex;
      align-items: center;
    }
  }
  .socials div {
    color: #626262;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
    & a {
      all: unset;
    }
    .insta:hover {
      color: red;
    }
    .x:hover {
      color: #30cbff;
    }
    .face:hover {
      color: blue;
    }
  }

  @media (max-width: 1135px) {
    height: 25vh;
    .footer2 {
      width: 90vw;
    }
    .container {
      flex-direction: column;
      gap: 20px;
    }
    .contact {
      display: flex;
      flex-direction: column;
    }
  }
`;
