import React from 'react';
import {connect} from 'react-redux';
import {loadCurrency} from '../modules/currency';

import Home from '../components/Home';

const mapStateToProps = (state) => state.currency;

const mapDispatchToProps = (dispatch) => ({
  onLoadCurrency: (base) => dispatch(loadCurrency(base))
});

class HomeContainer extends React.Component {
  componentDidMount() {
    if (!this.props.rates) {
      this.props.onLoadCurrency(this.props.base);
    }
  }
  render() {
    return <Home {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
