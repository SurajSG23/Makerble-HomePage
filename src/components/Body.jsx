import React from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import Option from "./Option";
import { useState, useEffect } from "react";
const Body = ({ setIsMenuOpen }) => {
  const post_info = [
    {
      name: "user",
      old: "1d",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "1k",
    },
    {
      name: "user2",
      old: "3d",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "1.6k",
    },
    {
      name: "user3",
      old: "3d",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "3k",
    },
    {
      name: "user4",
      old: "5d",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "67k",
    },
    {
      name: "user5",
      old: "1w",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "12k",
    },
    {
      name: "user2",
      old: "3w",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui ipsam laborum, est consequuntur dolores voluptatum distinctio asperiores saepe nisi alias accusamus. Odio qui, vero ipsum ab suscipit veritatis error eveniet, aliquam ratione voluptas odit?",
      like: "23k",
    },
  ];

  const [selected, setSelected] = useState(0);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <MainContainer onClick={() => setIsMenuOpen(false)}>
      <div className="left">
        <div className="options-container">
          <select name="" id="options" onChange={handleChange}>
            <option value="0" disabled selected hidden>
              ---- Select ----
            </option>
            <option value="0">Contacts</option>
            <option value="1">Projects</option>
            <option value="2">Albums</option>
            <option value="3">Organizations</option>
            <option value="4">Boards</option>
            <option value="5">Personal Progress</option>
            <option value="6">Tasks</option>
          </select>
          <div>
            <Option selected={selected} />
          </div>
        </div>
        <div className="follow">
          <div className="details">
            <div>
              <h3>Followers</h3>
            </div>
            <div className="dp-pics">
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <p>Show All</p>
            </div>
          </div>
        </div>
        <div className="follow">
          <div className="details">
            <div>
              <h3>Following</h3>
            </div>
            <div className="dp-pics">
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <div className="user-dp"></div>
              <p>Show All</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="post">
          <input type="text" placeholder="'UserName' share some progress" />
          <button>Post</button>
        </div>
        <div className="news">
          <div>
            <h3>NEWSFEED</h3>
          </div>
          <div className="main">
            {post_info.map((value) => {
              return (
                <>
                  <div className="container">
                    <div className="user">
                      <div className="user-dp"></div>
                      <div>
                        <h3>{value.name}</h3>
                        <p>{value.old} ago</p>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                        {value.content} <a href="#">Read more...</a>
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="comment">
                        <div>
                          <input type="text" placeholder="Add a comment" />
                        </div>
                        <div>
                          <button>
                            <IoMdSend />
                          </button>
                        </div>
                      </div>
                      <div className="like">
                        <div title="Like" class="heart-container">
                          <input
                            id="Give-It-An-Id"
                            class="checkbox"
                            type="checkbox"
                          />
                          <div class="svg-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="svg-outline"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="svg-filled"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="100"
                              width="100"
                              class="svg-celebrate"
                            >
                              <polygon points="10,10 20,20"></polygon>
                              <polygon points="10,50 20,50"></polygon>
                              <polygon points="20,80 30,70"></polygon>
                              <polygon points="90,10 80,20"></polygon>
                              <polygon points="90,50 80,50"></polygon>
                              <polygon points="80,80 70,70"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p>{value.like}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Body;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 1px 0;
  display: flex;
  .right {
    position: absolute;
    width: 75vw;
    height: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .post {
    width: 90%;
    height: 40px;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 10px;
    gap: 10px;
  }
  .post input {
    width: 90%;
    border-radius: 10px;
    padding-left: 10px;
    font-size: larger;
    border-color: grey;
    &::placeholder {
      opacity: 0.5;
    }
  }
  .post button {
    width: 10%;
    background-color: red;
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      background-color: #ff5e5e;
    }
  }
  .news {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    overflow-y: auto;
    & h3 {
      text-align: center;
    }
  }
  .container {
    width: 90%;
    height: auto;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 10px;
    padding: 0 0 10px 0;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
  }
  .user {
    display: flex;
    gap: 10px;
    align-items: center;
    height: auto;
    position: relative;
    margin: 10px 0 0 5px;
  }
  .user-dp {
    background-image: url("https://raw.githubusercontent.com/SurajSG23/Makerble-HomePage/main/src/assets/user.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  .content {
    width: 90%;
    height: auto;
    display: flex;
    margin: 0 auto;
  }
  .comment {
    display: flex;
    align-items: center;
    gap: 5px;
    & input {
      width: 250px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid black;
      font-size: 16px;
      padding-left: 10px;
    }
    & button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      background-color: grey;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: black;
        transform: scale(1.1);
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  .heart-container {
    --heart-color: red;
    position: relative;
    width: 25px;
    height: 25px;
    transition: 0.3s;
  }

  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .heart-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-container .svg-outline,
  .heart-container .svg-filled {
    fill: var(--heart-color);
    position: absolute;
  }

  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }

  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate 0.5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  .heart-container .checkbox:checked ~ .svg-container .svg-filled {
    display: block;
  }

  .heart-container .checkbox:checked ~ .svg-container .svg-celebrate {
    display: block;
  }
  .like {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @keyframes keyframes-svg-filled {
    0% {
      transform: scale(0);
    }

    25% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }

  @keyframes keyframes-svg-celebrate {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      filter: brightness(1.5);
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
      display: none;
    }
  }
  .left {
    position: absolute;
    width: 27vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 0 0 5px;
    gap: 5px;
  }
  .follow {
    width: 100%;
    height: 30vh;
    border: 1px solid black;
    border-radius: 5px;
    overflow-y: auto;
  }
  .options-container {
    width: 100%;
    height: 40vh;
    border-radius: 5px;
    border: 1px solid black;
  }
  #options {
    width: 100%;
    height: 35px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }
  .details h3 {
    text-align: center;
    color: red;
    font-size: 20px;
    font-weight: 600;
  }
  .dp-pics {
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    & p {
      position: relative;
      bottom: -15px;
      cursor: pointer;
    }
  }

  @media (max-width: 708px) {
    display: flex;
    flex-direction: column !important ;
    .right {
      position: absolute;
      width: 100vw;
      height: 100%;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .left {
      display: none;
    }
    .container {
      width: 100%;
      height: auto;
      border: 2px solid black;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: 10px;
      padding: 0 0 0px 0;
    }
    .main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: auto;
      width: 80vw;
    }
    .post {
      width: 60%;
    }
    .post button {
      width: 40%;
      background-color: red;
      color: white;
      font-size: 20px;
      font-weight: 500;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
        background-color: #ff5e5e;
      }
    }
    .comment {
      & input {
        width: 150px;
        height: 35px;
        border-radius: 4px;
        border: 1px solid black;
        font-size: 16px;
        padding-left: 10px;
      }
    }
  }
`;
