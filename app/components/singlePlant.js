import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, deletePlant } from '../reducers/plantReducer.js';

class SinglePlant extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadPlant(this.props.match.params.plantId);
  }

  handleDelete(plantId) {
    // delete plant from database
    event.preventDefault();
    this.props.deletePlant(plantId);
    this.props.history.push('/plants');
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
                <b>Scientific Name: </b>
                {this.props.plant.scientificName}
              </p>
              <p>
                <b>Age: </b>
                {`${this.props.plant.age} years`}
              </p>
              <p>
                <b>Sun Exposure: </b>
                {this.props.plant.sunDirection}
              </p>
              <p>
                <b>Last Watering: </b>
                {this.props.plant.lastWatering
                  ? this.props.plant.lastWatering.slice(0, 10)
                  : null}
              </p>
              <p>
                <b>Last Feeding: </b>
                {this.props.plant.lastFeeding
                  ? this.props.plant.lastFeeding.slice(0, 10)
                  : null}
              </p>
              <p>
                <b>Last Repot: </b>
                {this.props.plant.lastRepot
                  ? this.props.plant.lastRepot.slice(0, 10)
                  : null}
              </p>
              <p>{this.props.plant.description}</p>
            </div>
            <NavLink to={`/plants/${this.props.plant.id}/editPlant`}>
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
  loadPlant: plantId => dispatch(fetchOnePlant(plantId)),
  deletePlant: plantId => dispatch(deletePlant(plantId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SinglePlant)
);
