import React from "react";
import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";
const Option = ({ selected }) => {
  const checkValue = () => {
    if (selected == 0) {
      return <Contacts />;
    } else if (selected == 1) {
      return <Projects />;
    } else if (selected == 2) {
      return <Albums />;
    } else if (selected == 3) {
      return <Organizations />;
    } else if (selected == 4) {
      return <Boards />;
    } else if (selected == 5) {
      return <PersonalProgress />;
    } else if (selected == 6) {
      return <Tasks />;
    }
  };
  return (
    <>
      <MainContainer>{checkValue()}</MainContainer>
    </>
  );
};

export default Option;

const Contacts = () => {
  return (
    <>
      <ContactContainer>
        <div>
          <h3>Contacts</h3>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Herry</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Siyamadit</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Claire</p>
          </div>
        </div>
        <div className="cContainer">
          <h5>Show all</h5>
        </div>

        <div className="add">
          <button>Add Contact</button>
        </div>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    text-align: center;
    color: #337ab7;
  }
  .img {
    background: url("./src/assets/makerble.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .cContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & p {
      font-size: 18px;
    }
  }
  .add button {
    width: 150px;
    height: 40px;
    background-color: #ff6767;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      font-size: 21px;
      cursor: pointer;
      color: white;
    }
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectContainer>
        <div>
          <h3>Projects</h3>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>4359 test</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>A test 5146</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>A Training Project</p>
          </div>
        </div>
        <div className="cContainer">
          <h5>Show all</h5>
        </div>

        <div className="add">
          <button>Add Project</button>
        </div>
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    text-align: center;
    color: #337ab7;
  }
  .img {
    background: url("./src/assets/makerble-project.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .cContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & p {
      font-size: 18px;
    }
  }
  .add button {
    width: 150px;
    height: 40px;
    background-color: #ff6767;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      font-size: 21px;
      cursor: pointer;
      color: white;
    }
  }
`;

const Albums = () => {
  return (
    <>
      <AlbumsContainer>
        <div>
          <h3>Albums</h3>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>2021 Portfolio</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>All Partners</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Big Lottery Fund</p>
          </div>
        </div>
        <div className="cContainer">
          <h5>Show all</h5>
        </div>

        <div className="add">
          <button>Add Album</button>
        </div>
      </AlbumsContainer>
    </>
  );
};

const AlbumsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    text-align: center;
    color: #337ab7;
  }
  .img {
    background: url("./src/assets/makerble.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .cContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & p {
      font-size: 18px;
    }
  }
  .add button {
    width: 150px;
    height: 40px;
    background-color: #ff6767;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      font-size: 21px;
      cursor: pointer;
      color: white;
    }
  }
`;

const Organizations = () => {
  return (
    <>
      <OrgContainer>
        <div>
          <h3>Organizations</h3>
        </div>
        <div className="cContainer">
          <div className="img1"></div>
          <div>
            <p>2021 Portfolio</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img2"></div>
          <div>
            <p>All Partners</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img3"></div>
          <div>
            <p>Big Lottery Fund</p>
          </div>
        </div>
        <div className="cContainer">
          <h5>Show all</h5>
        </div>
      </OrgContainer>
    </>
  );
};
const OrgContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    text-align: center;
    color: #337ab7;
  }
  .img1 {
    background: url("./src/assets/org1.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .img2 {
    background: url("./src/assets/org2.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .img3 {
    background: url("./src/assets/org3.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .cContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & p {
      font-size: 18px;
    }
  }
  .add button {
    width: 100px;
    height: 50px;
    background-color: #ff6767;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      font-size: 22px;
      cursor: pointer;
      color: white;
    }
  }
`;
const Boards = () => {
  return (
    <>
      <BoardContainer>
        <div>
          <h3>Boards</h3>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Angola Productions</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>Attendance reporting</p>
          </div>
        </div>
        <div className="cContainer">
          <div className="img"></div>
          <div>
            <p>CHIVA RYH</p>
          </div>
        </div>
        <div className="cContainer">
          <h5>Show all</h5>
        </div>

        <div className="add">
          <button>Add Board</button>
        </div>
      </BoardContainer>
    </>
  );
};

const BoardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    text-align: center;
    color: #337ab7;
  }
  .img {
    background: url("./src/assets/makerble-boards.png") no-repeat center/cover;
    width: 50px;
    height: 50px;
  }
  .cContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    & p {
      font-size: 18px;
    }
  }
  .add button {
    width: 150px;
    height: 40px;
    background-color: #ff6767;
    font-size: 20px;
    font-weight: 500;
    color: #363636;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      font-size: 21px;
      cursor: pointer;
      color: white;
    }
  }
`;

const PersonalProgress = () => {
  return (
    <>
      <PersonalContainer>
        <div className="img"></div>
        <p>Show all</p>
      </PersonalContainer>
    </>
  );
};

const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    cursor: pointer;
  }
  .img {
    width: 100%;
    height: 30vh;
    background: url("./src/assets/makerble-progress.png") no-repeat
      center/contain;
  }
`;

const Tasks = () => {
  return (
    <>
      <TaskContainer>
        <div className="input">
          <input type="text" placeholder="Add your next task" />
          <button>Save Task</button>
        </div>
        <div className="tasks">
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>Follow up call needed</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>Contact the local authority</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>Book in another meeting</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>Speak the GP about XYZ</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>You need to call her about...</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>Submission deadline</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="ele">
            <div className="temp">
              <div>
                <MdPlayArrow />
                <p>XYZ Project announcement</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </TaskContainer>
    </>
  );
};

const TaskContainer = styled.div`
  width: 100%;
  height: 35vh;
  .input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 5px auto;
    & input {
      width: 20vw;
      height: 40px;
      border-radius: 60px;
      padding-left: 10px;
      font-size: 16px;
    }
    & button {
      width: 5vw;
      z-index: 1;
      height: 40px;
      background-color: #ff6f6f;
      border: none;
      font-size: 14px;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.05);
        background-color: red;
        color: white;
        cursor: pointer;
      }
    }
  }
  .tasks {
    width: 100%;
    height: 29vh;
    padding: 10px 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ele {
    width: 95%;
    min-height: 7vh;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 5px;
  }
  .temp {
    width: 20vw;
    height: 40px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    & div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 17px;
      width: auto;
    }
    & input{
      cursor: pointer;
    }
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 35vh;
`;
