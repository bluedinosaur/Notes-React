import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
