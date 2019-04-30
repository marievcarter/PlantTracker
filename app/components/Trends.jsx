import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants, updateDate } from '../reducers';
import { GalleryItem } from './index.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LineChart, Line } from 'recharts';

const styles = {
  root: {
    flexGrow: 1,
    padding: 30,
  },
};

class Trends extends Component {
  componentDidMount() {
    this.props.loadPlants();
  }

  handleClick(plantId, field) {
    event.preventDefault();
    this.props.updateDate({ id: plantId, field });
  }

  render() {
    const data = [
      { name: 'Page A', uv: 350, pv: 2400, amt: 2400 },
      { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
      { name: 'Page A', uv: 120, pv: 2400, amt: 2400 },
      { name: 'Page A', uv: 240, pv: 2400, amt: 2400 },
      { name: 'Page A', uv: 440, pv: 2400, amt: 2400 },
      { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
    ];
    const { classes, plants } = this.props;
    return (
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    );
  }
}

const mapStateToProps = state => ({
  plants: state.plantReducer.plants,
});

const mapDispatchToProps = dispatch => ({
  loadPlants: () => dispatch(fetchPlants()),
  updateDate: updatesObj => dispatch(updateDate(updatesObj)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Trends))
);
