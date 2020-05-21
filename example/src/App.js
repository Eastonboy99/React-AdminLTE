import React, { Component } from 'react'
import 'admin-lte/dist/css/adminlte.min.css'
import { Container, MainHeader, Nav, NavLink, SideBarToggle, MainSidebar, UserPanel, SidebarMenu, MenuItem, ContentWrapper, ContentHeader } from 'react-admin-lte'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faTh } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const menu = [
  {
    value: "Starter Pages",
    to: "/",
    icon: <FontAwesomeIcon icon={faTachometerAlt} />,
    active: true,
    // LinkComponent: withRouter(NavLink),
    subItems: [
      {
        value: "Active Page",
        icon: <FontAwesomeIcon icon={faCircle} />,
        active: true
      },
      {
        value: "Inactive Page",
        icon: <FontAwesomeIcon icon={faCircle} />
      }
    ]
  },
  {
    value: "Simple Link",
    icon: <FontAwesomeIcon icon={faTh} />

  }
]


export default class App extends Component {
  render() {
    return (
      <Container miniSidebar>
        <MainHeader>
          <Nav>
            <SideBarToggle />
            <NavLink title="Home" href="./" />
          </Nav>
        </MainHeader>
        <MainSidebar brandLogo logoSrc="img/AdminLTELogo.png" logoLink="./">
          <UserPanel name="Alexander Pierce" imgSrc="img/user2-160x160.jpg" />

          <SidebarMenu menu={menu} />
        </MainSidebar>
        <ContentWrapper>
            <ContentHeader name="Starter Page" /> 
          </ContentWrapper>
      </Container>
    )
  }
}
