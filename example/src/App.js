import React, { Component } from 'react'
// import 'admin-lte/dist/css/adminlte.min.css'
import { Container, MainHeader, Nav, NavLink, SideBarToggle, MainSidebar, UserPanel, SidebarMenu } from 'react-admin-lte'

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

          <SidebarMenu >
            <li class="nav-item has-treeview menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./index.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./index2.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./index3.html" class="nav-link active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul>
            </li>
          </SidebarMenu>
        </MainSidebar>
      </Container>
    )
  }
}
