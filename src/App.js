import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Menu from './Components/Menu'
import Footer from './Components/Footer'
import Routes from './routes'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <main>
          <Container>
            <Routes />
          </Container>
        </main>
        <Footer />


      </div>
    </BrowserRouter>

  );
}

export default App;
