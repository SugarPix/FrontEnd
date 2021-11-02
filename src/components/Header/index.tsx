import { Navbar, Nav } from "react-bootstrap";

import { Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand href="/">
          <Logo
            src="/static/images/logo_nome.png"
            className="logoImg"
            alt="SUGARPIX"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/signup">Cadastrar Meu Pix</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              Sobre
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
