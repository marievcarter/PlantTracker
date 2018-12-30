import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlants, createNewPlant } from '../reducers/plantReducer';

class AddPlant extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const commonName = target.commonName.value;
    const scientificName = target.scientificName.value;
    const imageUrl =
      event.target.imageUrl.value ||
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4X2fApbWpFBCIQ9qoprZUZdPqF9aShQApZS57B2ARpjTbs9UUg';
    const age = target.age.value || 1;
    const purchaseLocation = target.purchaseLocation.value;
    const sunDirection = target.sunDirection.value;
    const lastWatering = target.lastWatering.value || '1/1/2019';
    const lastFeeding = target.lastFeeding.value || '1/1/2019';
    const lastRepot = target.lastRepot.value || '1/1/2019';
    const description = target.description.value;
    await this.props.addPlant({
      commonName,
      scientificName,
      imageUrl,
      age,
      purchaseLocation,
      sunDirection,
      lastWatering,
      lastFeeding,
      lastRepot,
      description,
    });
    await this.props.loadPlants();
    this.props.history.push('/plants');
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
        <p>Description:</p>
        <textarea name="description" placeholder="Add a description here..." />
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
