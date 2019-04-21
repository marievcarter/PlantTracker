import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants, updateDate } from '../reducers/plantReducer';
import { GalleryItem } from './index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    flexGrow: 1,
    padding: 30,
  },
};

class Gallery extends Component {
  componentDidMount() {
    this.props.loadPlants();
  }

  handleClick(plantId, field) {
    event.preventDefault();
    this.props.updateDate({ id: plantId, field });
  }

  render() {
    const { classes } = this.props;
    // const { spacing } = this.state;
    let { plants } = this.props;
    return (
      <div>
        <NavLink to={'/plants/addPlant'}>
          <button>+ Add Plant</button>
        </NavLink>
        <Grid container justify="center" className={classes.root} spacing={24}>
          {plants.map(plant => (
            <Grid key={plant.id} item xs={40}>
              <GalleryItem
                key={plant.id}
                plant={plant}
                setWaterDate={this.handleClick.bind(
                  this,
                  plant.id,
                  'lastWatering'
                )}
                setRepotDate={this.handleClick.bind(
                  this,
                  plant.id,
                  'lastRepot'
                )}
                setFertilizeDate={this.handleClick.bind(
                  this,
                  plant.id,
                  'lastFeeding'
                )}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plants: state.plants.plants,
});

const mapDispatchToProps = dispatch => ({
  loadPlants: () => dispatch(fetchPlants()),
  updateDate: updatesObj => dispatch(updateDate(updatesObj)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Gallery))
);
