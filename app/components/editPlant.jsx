import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, updatePlant } from '../reducers/plant';

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
    return (
      <div>
        <main>
          <h1>Edit plant info</h1>
          <form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit.bind(this, this.props.plant.id)}
          >
            <p>Common Name:</p>
            <input
              type="text"
              name="commonName"
              value={this.state.commonName}
            />
            <br />
            <p>Scientific Name:</p>
            <input
              type="text"
              name="scientificName"
              value={this.state.scientificName}
            />
            <br />
            <p>Image:</p>
            <input type="text" name="imageUrl" value={this.state.imageUrl} />
            <br />
            <p>Age (years):</p>
            <input type="text" name="age" value={this.state.age} />
            <br />
            <p>Purchase Location:</p>
            <input
              type="text"
              name="purchaseLocation"
              value={this.state.purchaseLocation}
            />
            <br />
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
            <br />
            <p>Last Watering:</p>
            <input
              type="text"
              name="lastWatering"
              value={this.state.lastWatering}
            />
            <br />
            <p>Last Feeding:</p>
            <input
              type="text"
              name="lastFeeding"
              value={this.state.lastFeeding}
            />
            <br />
            <p>Last Repot:</p>
            <input type="text" name="lastRepot" value={this.state.lastRepot} />
            <br />
            <p>Description:</p>
            <textarea
              rows="10"
              cols="30"
              value={this.state.description}
              name="description"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </main>
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
  )(EditPlant)
);
