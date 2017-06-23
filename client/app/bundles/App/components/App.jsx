import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Message from './Message';
import Schedule from './schedules/Schedule';

export default class App extends React.Component {
  static propTypes = {
    currentUserId: PropTypes.string.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { currentUserId: this.props.currentUserId };
  }

  render() {
    return (
      <div>
        <Grid>
          <Schedule currentUserId={this.state.currentUserId} />
        </Grid>
      </div>
    );
  }
}
