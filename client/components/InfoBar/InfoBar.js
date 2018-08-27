import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../../redux/modules/info';

@connect(state => ({ info: state.info.data }), { load })

export default class InfoBar extends Component {

  static propTypes = {
    info: PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.number
    }),
    load: PropTypes.func.isRequired
  };

  static defaultProps = {
    info: null
  };

  render() {

    const { info, load } = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');

    return (

      <div className="container">

        <div className={`${styles.infoBar} card text-center`}>

          <div className="card-body bg-light">

            <h5 className="card-title">
              This is an info bar {info ? info.message : 'no info!'}
            </h5>

            <p className={`${styles.time} card-text`}>
              {info && new Date(info.time).toString()}
            </p>

            <button type="button" className="btn btn-primary" onClick={load}>
              Reload from server
            </button>

          </div>
        </div>
      </div>
    );
  }
}
