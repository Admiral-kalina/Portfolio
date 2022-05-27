import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import {GlobalContext} from "../../../state/globalState";
// import myPhoto from './myPhoto.jpg'

const About = () => {
    const [flag, setFlag] = useState(false);
    const { pageSection, setPageSection } = useContext(GlobalContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.3
    });

    if (inView) {
        setPageSection("about");
        if (!flag) setFlag(true);
    }

    return (
        <AboutWrapper id="about" ref={ref}>
            <AboutBox>
                <AboutHeader>About</AboutHeader>
                <AboutSections>
                    <AboutSectionOne>
                        <AboutText flag={flag}>
                            {`Wellcome! 
              
I'm Frontend developer, who enjoys building things that live on the internet ocean 🐳.

I develop exceptional websites and web apps that provide intuitive,  user interfaces, UI effects.

I am ambitious and enthusiastic passionate about Web Development. 

My Technology Stack:
- HTML & (S)CSS
- JavaScript (ES6+)
- React
- Redux

And more.. 🤓
`}
                        </AboutText>
                        {/*<MyPhoto \ />*/}
                    </AboutSectionOne>
                </AboutSections>
            </AboutBox>
            <Footer>
                <Github href='https://github.com/Admiral-kalina'>Github</Github>
            </Footer>
        </AboutWrapper>

    );
};

export default About;

const Footer = styled.div`
  font-size: 1.5rem;
  display: flex;
  width: 80%;
  justify-content: center;
`

const Github = styled.a`
  text-decoration: none;
  color: #929e8c;
  :hover{
    color:#fff;
  }
`

const AboutWrapper = styled.div`
  color: azure;
  height: 100vh;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  border-radius: 0 0 50px 0;
  box-shadow: 6px 22px 72px 1px rgba(255, 255, 255, 0.65);
`;
const AboutBox = styled.div`
  height: 75%;
  width: 80%;
  backdrop-filter: blur(7px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2rem;

`;

const AboutHeader = styled.h1`
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  height: 10%;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
`;

const AboutSections = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  height: 85%;
`;

const AboutSectionOne = styled.div`
  width: 100%;
  height: 100%;
  /* color: white */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const textMove = keyframes`

`;

const AboutText = styled.p`
  border-left: 1px dashed skyblue ;
  font-family: 'Acme', sans-serif;
  white-space: pre-line;
  width: 80%;
  height: 90%;
  padding-left: 10px;
  font-size: 1.4rem;
  overflow-y:auto ;
  @keyframes fadeIn {
    0% { opacity: 0;
      transform: translateX(-10px)
    }
    100% { opacity: 1;
      transform: translateX(0)
    }
}

animation: ${({ flag }) => (flag ? "fadeIn 1s  alternate" : null)};

  @media (max-width: 1300px) {

`;

const MyPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 50px;
  height: 30%;
  width: 30%;
  max-width: 250px;
  max-height: 250px;
  border: 1px dashed teal;
`;
