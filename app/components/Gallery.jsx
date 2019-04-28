import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants, updateDate } from '../reducers';
import { GalleryItem } from './index.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
    const { classes, plants } = this.props;
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
  )(withStyles(styles)(Gallery))
);
