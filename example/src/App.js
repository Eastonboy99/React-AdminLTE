import React, { Component } from 'react'

import { Container, MainHeader, Nav, NavLink, SideBarToggle } from 'react-admin-lte'

export default class App extends Component {
  render() {
    return (
      <Container boxedLayout>
        <MainHeader>
          <Nav>
            <SideBarToggle />
            <NavLink>

            </NavLink>
          </Nav>
        </MainHeader>
      </Container>
    )
  }
}
