import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { lazy, Suspense } from 'react'
import './App.css'

const Menu = lazy(() => import('./Components/Menu'));
const Footer = lazy(() => import('./Components/Footer'));
const Routes = lazy(() => import('./routes'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<p>Carregando...</p>}>
          <Menu />
        </Suspense>
        <main>
          <Container>
            <Suspense fallback={<p>Carregando...</p>}>
              <Routes />
            </Suspense>
          </Container>
        </main>
        <Suspense fallback={<p>Carregando...</p>}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
export default App;
