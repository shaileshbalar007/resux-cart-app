import './App.css';
import HomeContainer from './containers/HomeContainers';
import Header from './containers/HeaderContainer';
import{Container,Row,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><HomeContainer/></Col>
          <Col><Header/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
