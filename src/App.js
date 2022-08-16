import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderBar } from './components/HeaderBar';
import { SIZES } from './constants';
import { About } from './pages/About.page';
import { Ludography } from './pages/Ludography.page';
import { Prototypes } from './pages/Prototypes.page';

const Outer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES.XL};
`

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
`

const Content = styled.div`
  padding-top: ${SIZES.XL};
`
const PageNotFound = styled.div`
  
`

function App() {
  return (
    <Outer>
      <Main>
        <HeaderBar />
        <Content>
          <Routes>
            <Route path="/" element={<Prototypes />} />
            <Route path="/ludography" element={<Ludography />} />
            <Route path="/prototypes" element={<Prototypes />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate replace to="/404"/>} />
          </Routes>
        </Content>
      </Main>
    </Outer>
  );
}

export default App;
