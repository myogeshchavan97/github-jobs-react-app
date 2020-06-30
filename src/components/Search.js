import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import JobsContext from '../context/jobs';

const Search = () => {
  const { onSearch } = useContext(JobsContext);

  const [state, setState] = useState({
    description: '',
    location: '',
    full_time: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full_time') {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.full_time
      }));
    } else {
      setState({
        ...state,
        [name]: value
      });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    onSearch(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ''}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                name="location"
                value={state.location || ''}
                placeholder="Enter location"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search
            </Button>
          </Col>
        </Row>
        <div className="filters">
          <Form.Group controlId="full_time">
            <Form.Check
              type="checkbox"
              name="full_time"
              className="full-time-checkbox"
              label="Full time only"
              checked={state.full_time}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default Search;
