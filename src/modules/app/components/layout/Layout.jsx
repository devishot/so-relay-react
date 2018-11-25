import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Layout extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {this.props.header}
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            {this.props.right}
          </Col>
        </Row>
      </Container>
    );
  }
}