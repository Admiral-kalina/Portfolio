import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Wellcome = () => {


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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Baloo", cursive;
  font-size: 2.5rem;
  color: whitesmoke;
  background-image: url("https://images.pexels.com/photos/2924738/pexels-photo-2924738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 6;
  @media (max-width: 1000px){
    background-image: url("https://thumbs.gfycat.com/ComplexNiceBadger-size_restricted.gif"),
    linear-gradient(#0e0e0e, #0e0e0e);
  }
`;

const WellcomeText = styled.div`
  width: 100%;
  text-align: center;
`;

const FirstText = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  span{
    color: lightsalmon;
  }
`;

const SecondText = styled(FirstText)``;

const ViewButonText = styled.div`
  width: 100%;
  text-align: center;
`;

const ViewButon = styled.div`
  width: 100%;
  position:absolute ;
  bottom: 2%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  flex-wrap: wrap;
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


const StyledLinkToAbout = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  z-index: 2;
  &:hover{
    cursor: pointer;
  }
`;

const MouseImg = styled.div`
  width: 2px;
  padding: 10px 15px;
  height: 35px;
  border: 3px solid #fff;
  border-radius: 25px;
  opacity:0.5;
  :hover{
    opacity: 1;
  }
`;

const mouseScroll = keyframes`
  0%{opacity: 0}
  20%{transform:translateY(0); opacity: 1}
  100%{transform: translateY(12px); opacity:0}
`;
const MouseScroller = styled.div`
  width: 3px;
  height: 8px;
  border-radius: 15px;
  background-color:#fff;
  animation: ${mouseScroll} 3s infinite;

  :hover{
    
  }
`;



