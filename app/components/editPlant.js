import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant } from '../reducers/plantReducer.js';

class EditPlant extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // this.props.loadPlants(this.props.match.params.plantId);
    this.setState(this.props.plant);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ commonName: event.target.value });
  }

  // understand why refreshing causes selected plant data to be lost
  render() {
    console.log(this.props);
    return (
      <div>
        <main>
          <h1>Edit plant info</h1>
          {!this.state || this.state === {} ? null : (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
              <input
                type="text"
                name="purchaseLocation"
                placeholder="Home Depot"
              />
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
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plant: state.plants.selectedPlant });

// const mapDispatchToProps = dispatch => ({
//   loadPlants: plantId => dispatch(fetchOnePlant(plantId)),
// });

export default withRouter(connect(mapStateToProps)(EditPlant));
