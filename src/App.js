import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { SIZES } from './constants';

const StyledContainer = styled(Container)`
  padding: ${SIZES.MD};
  width: 720px;
  border: 1px solid black;
`

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES.XL};
`

const Side = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  background-color: #FFF6F4;
`

const SideLink = styled.div`
  padding: ${SIZES.MD};
`

function App() {
  return (
    <Wrapper>
      <Side>
        <SideLink>Prototypes</SideLink>
        <SideLink>Ludography</SideLink>
        <SideLink>About Us</SideLink>
      </Side>
      <Main>
        <StyledContainer>
          <Row>

            <Col md={12}>
              Hello
            </Col>
            <Col>
              Hello
            </Col>
          </Row>
        </StyledContainer>
      </Main>
    </Wrapper>
  );
}

export default App;
