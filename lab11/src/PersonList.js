import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Badge, Button, Card, Col, Row, Spinner } from 'react-bootstrap';

export default class PersonList extends Component {
  state = { persons: [], loading: true, error: '' };

  componentDidMount() {
    this.loadPeople();
  }

  loadPeople = () => {
    this.setState({ loading: true, error: '' });
    axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
        console.log(res.data);
        this.setState({ persons: res.data.results, loading: false });
      })
      .catch(() => this.setState({ error: 'Unable to load users. Please try again.', loading: false }));
  };

  render() {
    const { persons, loading, error } = this.state;
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Random User Profiles <Badge bg="secondary">{persons.length}</Badge></h2>
          <Button variant="outline-primary" size="sm" onClick={this.loadPeople} disabled={loading}>Refresh Users</Button>
        </div>
        {loading && <div className="text-center py-5"><Spinner animation="border" role="status" /><p className="mt-2">Loading users...</p></div>}
        {error && <Alert variant="danger">{error} <Button variant="outline-danger" size="sm" onClick={this.loadPeople}>Retry</Button></Alert>}
        {!loading && !error && persons.map((person) => (
          <Card key={person.login.uuid} className="person-card mb-3 shadow-sm">
            <Card.Body>
              <Row className="align-items-center g-3">
                <Col xs={12} md={3} className="text-center">
                  <img className="profile-photo" src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
                  <div className="mt-2"><Badge bg="primary">{person.nat}</Badge></div>
                </Col>
                <Col xs={12} md={9}>
                  <h3 className="h5">{person.name.title} {person.name.first} {person.name.last}</h3>
                  <dl className="details-grid">
                    <dt>Username</dt><dd>{person.login.username}</dd>
                    <dt>Gender</dt><dd>{person.gender}</dd>
                    <dt>Date of Birth</dt><dd>{new Date(person.dob.date).toLocaleDateString()} (Age {person.dob.age})</dd>
                    <dt>Address</dt><dd>{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</dd>
                    <dt>Email</dt><dd><a href={`mailto:${person.email}`}>{person.email}</a></dd>
                    <dt>Phone</dt><dd>{person.phone}</dd>
                    <dt>Cell</dt><dd>{person.cell}</dd>
                  </dl>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
