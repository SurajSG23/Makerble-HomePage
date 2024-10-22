import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <MainContainer>
        <Header handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
        <hr />
        <Body setIsMenuOpen={setIsMenuOpen}/>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
