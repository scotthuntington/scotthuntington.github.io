import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderBar } from './components/HeaderBar';
import { SIZES } from './constants';
import { About } from './pages/About.page';
import { Ludography } from './pages/Ludography.page';
import { Prototype } from './pages/Prototype.page';
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
  padding-bottom: ${SIZES.XXL};
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
            <Route path="*" element={<Navigate replace to="/prototypes/*" />} />
            <Route path="/ludography" element={<Ludography />} />
            <Route path="/prototypes/*">
              <Route path="" element={<Prototypes />} />
              <Route path=":id" element={<Prototype />} />
              {/* <Route path="ducklings" element={<Prototype />} />
              <Route path="ttotm" element={<Prototype />} />
              <Route path="tesseract" element={<Prototype />} />
              <Route path="svf" element={<Prototype />} />
              <Route path="toohot" element={<Prototype />} />
              <Route path="treasurebeach" element={<Prototype />} /> */}
            </Route>
            <Route path="about" element={<About />} />
            {/* <Route path="/404" element={<PageNotFound />} /> */}
            {/* <Route path="*" element={<Navigate replace to="/404"/>} /> */}
          </Routes>
        </Content>
      </Main>
    </Outer>
  );
}

export default App;
