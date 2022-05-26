import Main from './components/Portfolio/Main';
import styled from "styled-components";

function App() {
  return (
    <MainApp>
      <Main/>
    </MainApp>
  );
}
const MainApp = styled.div`
  background-image: url("https://images.pexels.com/photos/259425/pexels-photo-259425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  scroll-snap-type: y mandatory;
  @media (max-width: 1000px) {
    background: linear-gradient(to bottom, #000000, #434343);
  }
`;



export default App;
