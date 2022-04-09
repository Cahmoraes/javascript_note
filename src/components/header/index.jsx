import { Container, Navbar, Column } from 'rbx'
import logoImage from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import '../../styles/header.scss'

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logoImage} alt="logo" />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu">
          <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
            <Column.Group>
              <Link to="/register" className="button is-white has-text-custom-purple">
                RegisterLink
              </Link>
              <Link to="/login" className="button is-outlined is-custom-purple">
                LoginLink
              </Link>
            </Column.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}