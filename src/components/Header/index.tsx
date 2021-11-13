import { Navbar, Nav } from "react-bootstrap";

import { useAuth } from "../../hooks/auth";

import { Container, Logo } from "./styles";

export function Header() {
  const { authenticated } = useAuth();

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="/home">
          <Logo
            src="/static/images/logo_nome.svg"
            className="logoImg"
            alt="SUGARPIX"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {authenticated ? (
              <Nav.Link href="/profile">Meu BabyPix</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/signup">Cadastrar Meu Pix</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
              </>
            )}
            <Nav.Link eventKey={2} href="/about">
              Sobre
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
