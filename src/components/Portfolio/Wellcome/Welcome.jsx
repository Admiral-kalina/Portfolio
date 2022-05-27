import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Wellcome = () => {
  const [flag, setFlag] = useState(false);

  if (!flag) {
    setTimeout(() => {
      setFlag(true);
      console.log(flag);
    }, 2000);
  }


  return (
  <WellcomeContainer>
    <WellcomeText>
      <FirstText>
        Hi, I'm <span> Kalinichenko Andrii</span>
      </FirstText>
      <SecondText>Frontend Developer</SecondText>
    </WellcomeText>
    <ViewButon>

      <ViewButonText>Check Out My Magic</ViewButonText>
      <ArrowButton>
        <StyledLinkToAbout href="#about">
          <MouseImg>
            <MouseScroller />
          </MouseImg>
        </StyledLinkToAbout>
      {/*  /!* <IoIosArrowDown /> *!/*/}
      </ArrowButton>
    </ViewButon>
  </WellcomeContainer>
  );
};

export default Wellcome;

const WellcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  font-size: 2.5rem;
  color: whitesmoke;
  position: relative;
  overflow: hidden;
  background-image: url("https://images.pexels.com/photos/2924738/pexels-photo-2924738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  font-family: "Baloo", cursive;
  z-index: 6;
  @media (max-width: 1000px) {
    background-image: url("https://thumbs.gfycat.com/ComplexNiceBadger-size_restricted.gif"),
    linear-gradient(#0e0e0e, #0e0e0e);
  }
`;

const ViewButon = styled.div`
  color: white;
  position: absolute;
  bottom: 2%;
  width: 100%;
  height: 30%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.4rem;
  /* position: absolute; */
`;
const ViewButonText = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledLinkToAbout = styled.a`
  width: 100%;
  color: white;
  text-decoration: none;
  /* border: 1px solid black; */
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

const ArrowAnimation = keyframes`
  0%{
    transform: translateY(0)
  }
  100%{
    transform: translateY(8px)
  }
`;

const ArrowButton = styled.div`
  text-align: center;
  color: white;
  font-size: 3rem;
  animation: ${ArrowAnimation} 0.6s alternate infinite;
`;

const WellcomeText = styled.div`
  font-family: "Baloo", cursive;
  width: 100%;
  height: 70%;
`;

const FirstText = styled.h1`
  /* border: 1px solid red; */
  text-align: center;
  padding-top: 20px;

  span {
    color: lightsalmon;
  }
`;

const SecondText = styled(FirstText)``;

const mouseScroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`;

const MouseImg = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 3px solid #fff;
  border-radius: 25px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

const MouseScroller = styled.div`
  width: 4px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation: ${mouseScroll} 3s infinite;
`;




