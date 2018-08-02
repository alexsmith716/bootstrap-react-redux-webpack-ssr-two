// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({ online: state.online }))

export default class TesterTest extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {

    const { online } = this.props;

    return(
      <div className="col-lg-12 d-flex justify-content-center">
        <p className="color-crimson font-opensans-italic-webfont">{`'online' store state is ${online} !`}</p>
      </div>
    )

  }
}
