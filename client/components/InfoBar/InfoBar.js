import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../../redux/modules/info';

// data and action bindings && components
// component && wrapper '@connect' in component
// component bound to 'redux' actions and state
// component with local/encapsulated state
// state is local/encapsulated
// state not accessible to any component other than the one that owns and sets it

@connect(state => ({ info: state.info.data }), { load })

export default class InfoBar extends Component {

  // define properties and methods of class 'InfoBar'

  static propTypes = {
    info: PropTypes.shape({
      message: PropTypes.string,
      time: PropTypes.number
    }),
    load: PropTypes.func.isRequired
  };

  // following default data flow
  // ES7 static property initializer
  // @babel/plugin-proposal-class-properties
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
              This is the InfoBar {info ? `'${info.message}'` : 'no info!'}
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
