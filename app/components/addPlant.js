import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlants, createNewPlant } from '../reducers/plantReducer';

class AddPlant extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const commonName = event.target.commonName.value;
    const scientificName = event.target.scientificName.value;
    const imageUrl = event.target.imageUrl.value;
    const age = event.target.age.value;
    const purchaseLocation = event.target.purchaseLocation.value;
    const sunDirection = event.target.sunDirection.value;
    const lastWatering = event.target.lastWatering.value;
    const lastFeeding = event.target.lastFeeding.value;
    const lastRepot = event.target.lastRepot.value;
    this.props.addPlant({
      commonName,
      scientificName,
      imageUrl,
      age,
      purchaseLocation,
      sunDirection,
      lastWatering,
      lastFeeding,
      lastRepot,
    });
    this.props.loadPlants();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add new plant:</h3>
        <p>Common Name:</p>
        <input type="text" name="commonName" placeholder="Bunny ears cactus" />
        <br />
        <p>Scientific Name:</p>
        <input
          type="text"
          name="scientificName"
          placeholder="Opuntia microdasys"
        />
        <br />
        <p>Image:</p>
        <input
          type="text"
          name="imageUrl"
          placeholder="https://via.placeholder.com/150"
        />
        <br />
        <p>Age (years):</p>
        <input type="text" name="age" placeholder="3" />
        <br />
        <p>Purchase Location:</p>
        <input type="text" name="purchaseLocation" placeholder="Home Depot" />
        <br />
        <p>Sun Direction:</p>
        <select type="text" name="sunDirection">
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
        <input type="text" name="lastWatering" placeholder="2/3/2018" />
        <br />
        <p>Last Feeding:</p>
        <input type="text" name="lastFeeding" placeholder="2/3/2018" />
        <br />
        <p>Last Repot:</p>
        <input type="text" name="lastRepot" placeholder="2/3/2018" />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPlant: plant => dispatch(createNewPlant(plant)),
  loadPlants: () => dispatch(fetchPlants()),
});

export default connect(
  null,
  mapDispatchToProps
)(AddPlant);
