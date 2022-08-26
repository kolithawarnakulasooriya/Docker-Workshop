import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import InitPage from './components';
import Dashboard from './components/dashboard';

const style = {
  paddingTop: '10px'
}

function App() {

  const [isInitPage, setIsInitPage] = useState(false);

  const handleGoto = () => {
    setIsInitPage(!isInitPage);
  }

  const loadChildren = () => {
    if(isInitPage)
      return <InitPage goto={handleGoto}/>
    else
      return <Dashboard goto={handleGoto}/>
  }

  return (
    <Container fluid style={style}>
      {
        loadChildren()
      }
    </Container>
  );
}

export default App;
