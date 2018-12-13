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
    const purchaseLocation = '';
    const sunDirection = '';
    const lastWatering = '';
    const lastFeeding = '';
    const lastReport = '';
    this.props.addPlant({ commonName, scientificName, imageUrl, age });
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
        <p>Description (not functional):</p>
        <input
          type="text"
          name="description"
          placeholder="Write something..."
        />
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
