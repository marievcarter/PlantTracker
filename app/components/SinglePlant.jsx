import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, deletePlant } from '../reducers/plant';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: '40%',
    borderRadius: 0,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, .2)',
    padding: 10,
    margin: '50px 0 30px 0',
  },
  media: {
    height: 350,
    width: 350,
  },
  root: {
    flexGrow: 1,
  },
  button: {
    textDecoration: 'none',
    color: 'green',
  },
};

class SinglePlant extends Component {
  componentDidMount() {
    this.props.loadPlant(this.props.match.params.plantId);
  }

  handleDelete(plantId) {
    event.preventDefault();
    this.props.deletePlant(plantId);
    this.props.history.push('/plants');
  }

  render() {
    const {
      commonName,
      scientificName,
      age,
      imageUrl,
      sunDirection,
      description,
      id,
      lastFeeding,
      lastRepot,
      lastWatering,
    } = this.props.plant;
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" className={classes.root} spacing={24}>
          <Card className={classes.card}>
            <h2>{commonName}</h2>
            {/* <CardActionArea> */}
            <CardMedia className={classes.media} image={imageUrl} />
            {/* </CardActionArea> */}
          </Card>
          <Card className={classes.card}>
            <p>
              <b>Scientific Name: </b>
              {scientificName}
            </p>
            <p>
              <b>Age: </b>
              {`${age} years`}
            </p>
            <p>
              <b>Sun Exposure: </b>
              {sunDirection}
            </p>
            <p>
              <b>Last Watering: </b>
              {lastWatering ? lastWatering.slice(0, 10) : null}
            </p>
            <p>
              <b>Last Feeding: </b>
              {lastFeeding ? lastFeeding.slice(0, 10) : null}
            </p>
            <p>
              <b>Last Repot: </b>
              {lastRepot ? lastRepot.slice(0, 10) : null}
            </p>
            <p>{description}</p>
          </Card>
        </Grid>
        <Grid container justify="center">
          <NavLink className={classes.button} to={`/plants/${id}/editPlant`}>
            <Button variant="outlined" className={classes.button}>
              Edit
            </Button>
          </NavLink>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.handleDelete.bind(this, id)}
          >
            Delete
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plant: state.plantReducer.selectedPlant,
  lastFeeding: state.plantReducer.lastFeeding,
  lastRepot: state.plantReducer.lastRepot,
  lastWatering: state.plantReducer.lastWatering,
});

const mapDispatchToProps = dispatch => ({
  loadPlant: plantId => dispatch(fetchOnePlant(plantId)),
  deletePlant: plantId => dispatch(deletePlant(plantId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SinglePlant))
);
