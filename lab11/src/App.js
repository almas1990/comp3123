import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import PersonList from './PersonList';

export default function App() {
  return (
    <>
      <Navbar className="header-bar" variant="dark"><Container className="justify-content-center"><Navbar.Brand>User List</Navbar.Brand></Container></Navbar>
      <Container className="py-4">
        <p className="text-muted text-center">COMP3123 Lab 11 • Axios API Example • 101568934</p>
        <PersonList />
      </Container>
    </>
  );
}
