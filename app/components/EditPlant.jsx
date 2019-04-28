import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, updatePlant } from '../reducers/plant';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
  },
  textField: {
    width: '40%',
    margin: '10px 500px 10px 10px',
  },
  menu: {
    width: 200,
  },
  title: {
    margin: 10,
    margin: '40px 10px 10px 10px',
  },
});

class EditPlant extends Component {
  constructor() {
    super();
    this.state = {
      commonName: undefined,
      scientificName: undefined,
      imageUrl: undefined,
      age: undefined,
      purchaseLocation: undefined,
      sunDirection: undefined,
      lastWatering: undefined,
      lastFeeding: undefined,
      lastRepot: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState(this.props.plant);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(plantId) {
    event.preventDefault();
    const { target } = event;
    const commonName = target.commonName.value || this.state.commonName;
    const scientificName =
      target.scientificName.value || this.state.scientificName;
    const imageUrl = target.imageUrl.value || this.state.imageUrl;
    const age = target.age.value || this.state.age;
    const sunDirection = target.sunDirection.value || this.state.sunDirection;
    const lastWatering = target.lastWatering.value || this.state.lastWatering;
    const lastFeeding = target.lastFeeding.value || this.state.lastFeeding;
    const lastRepot = target.lastRepot.value || this.state.lastRepot;
    const description = target.description.value || this.state.description;
    this.props.updatePlant(plantId, {
      commonName,
      scientificName,
      imageUrl,
      age,
      sunDirection,
      lastWatering,
      lastFeeding,
      lastRepot,
      description,
    });
    this.props.loadPlant(plantId);
    this.props.history.push(`/plants/${plantId}`);
  }
  render() {
    console.log(this.props);
    const { plant, classes } = this.props;
    return (
      <div>
        <h1 className={classes.title}>Edit plant info</h1>
        <form
          className={classes.container}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit.bind(this, this.props.plant.id)}
        >
          <p>Common Name:</p>
          <TextField
            id="standard-required"
            name="commonName"
            className={classes.textField}
            value={this.state.commonName}
            margin="normal"
          />
          <p>Scientific Name:</p>
          <TextField
            id="standard-required"
            name="scientificName"
            className={classes.textField}
            value={this.state.scientificName}
            margin="normal"
          />
          <p>Image:</p>
          <TextField
            id="standard-required"
            name="imageUrl"
            className={classes.textField}
            value={this.state.imageUrl}
            margin="normal"
          />
          <p>Age (years):</p>
          <TextField
            id="standard-required"
            name="age"
            className={classes.textField}
            value={this.state.age}
            margin="normal"
          />
          <p>Purchase Location:</p>
          <TextField
            id="standard-required"
            name="purchaseLocation"
            className={classes.textField}
            value={this.state.purchaseLocation}
            margin="normal"
          />

          <p>Sun Direction:</p>
          <select
            type="text"
            name="sunDirection"
            value={this.state.sunDirection}
          >
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
            <option>Northeast</option>
            <option>Southeast</option>
            <option>Northwest</option>
            <option>Southwest</option>
          </select>

          <p>Last Watering:</p>
          <input
            type="text"
            name="lastWatering"
            value={this.state.lastWatering}
          />

          <p>Last Feeding:</p>
          <input
            type="text"
            name="lastFeeding"
            value={this.state.lastFeeding}
          />

          <p>Last Repot:</p>
          <input type="text" name="lastRepot" value={this.state.lastRepot} />

          <p>Description:</p>
          <textarea
            rows="10"
            cols="30"
            value={this.state.description}
            name="description"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plant: state.plantReducer.selectedPlant });

const mapDispatchToProps = dispatch => ({
  updatePlant: (plantId, updates) => dispatch(updatePlant(plantId, updates)),
  loadPlant: plantId => dispatch(fetchOnePlant(plantId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(EditPlant))
);
