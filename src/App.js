import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import Posts from './components/Posts';

export default function App() {  
  return (
    <Container fluid className="App">
      <Header />
      <Container>
        <Body sidebar>
          <Posts />
        </Body>
      </Container>
    </Container>
  );
}
