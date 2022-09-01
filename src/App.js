import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from './components/Navbar'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Utils/Theme"
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Video from "./components/Video";
import SignIn from './components/SignIn'

const Container = styled.div`
  display: flex;
  position:relative;

`
const Main = styled.div`
  flex: 7;
  @media (max-width: 425px) {
    flex:3; 
  }
`

const Wrapper = styled.div``;

function App() {

  const [mobile, setMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 425px)").matches) {
      // The viewport is less than 425px pixels wide
      setMobile((prevState) => !prevState);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu mobile={mobile} darkMode={darkMode} setDarkMode={setDarkMode} activeNav={activeNav} setActiveNav={setActiveNav} />
          <Main>
            <Navbar mobile={mobile} darkMode={darkMode} activeNav={activeNav} setActiveNav={setActiveNav} />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='signin' element={<SignIn />} />
                  <Route path='video'>
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
