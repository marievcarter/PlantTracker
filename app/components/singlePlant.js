import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, deletePlant } from '../reducers/plantReducer.js';

class SinglePlant extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadPlants(this.props.match.params.plantId);
  }

  handleDelete(plantId) {
    // delete plant from database
    event.preventDefault();
    this.props.deletePlant(plantId);
  }

  render() {
    return (
      <div>
        <main>
          <div>
            <div>
              <h2>{this.props.plant.commonName}</h2>
              <img className="profile-pic" src={this.props.plant.imageUrl} />
              <p>
                <span>Age: </span>
                {`${this.props.plant.age} years`}
              </p>
              <p>
                <span>Sun Exposure: </span>
                {this.props.plant.sunDirection}
              </p>
              <p>
                <span>Last Watering: </span>
                {this.props.plant.lastWatering}
              </p>
              <p>
                <span>Last Feeding: </span>
                {this.props.plant.lastFeeding}
              </p>
              <p>
                <span>Last Repot: </span>
                {this.props.plant.lastRepot}
              </p>
            </div>
            <NavLink to={'/plants/editPlant'}>
              <button>Edit</button>
            </NavLink>
            <button onClick={this.handleDelete.bind(this, this.props.plant.id)}>
              Delete
            </button>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plant: state.plants.selectedPlant });

const mapDispatchToProps = dispatch => ({
  loadPlants: plantId => dispatch(fetchOnePlant(plantId)),
  deletePlant: plantId => dispatch(deletePlant(plantId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SinglePlant)
);
