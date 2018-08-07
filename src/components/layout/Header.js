import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'

import SearchBox from './SearchBox'
import logoImg from '../../img/logo.png'

class Header extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logoImg}
                className="App-logo"
                alt={formatMessage({id: 'logo'})}
              />
              <span className="brand-text">explorer</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/operations">
              <NavItem>
                <FormattedMessage id="operations" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/txs">
              <NavItem>
                <FormattedMessage id="transactions" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/ledgers">
              <NavItem>
                <FormattedMessage id="ledgers" />
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/exchanges">
              <MenuItem>
                <FormattedMessage id="exchanges" />
              </MenuItem>
            </LinkContainer>

            <LinkContainer to="/payments">
              <MenuItem>
                <FormattedMessage id="payments" />
              </MenuItem>
            </LinkContainer>

            <li className="divider-vertical" />

            <LinkContainer to="/effects">
              <MenuItem>
                <FormattedMessage id="effects" />
              </MenuItem>
            </LinkContainer>
          </Nav>
          <SearchBox />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default injectIntl(Header)
