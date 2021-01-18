import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import Logo from './beer-box.png'

function Menu(props) {
    const { location } = props
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Full Stack Games" width="70"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav activeKey={location.pathname} className="ml-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} href="/clube" to="/clube">Clube de Assinantes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )

}

export default withRouter(Menu)