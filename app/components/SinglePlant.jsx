import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant, deletePlant } from '../reducers/plantReducer';

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
      lastFeeding,
      lastRepot,
      lastWatering,
      description,
      id,
    } = this.props.plant;
    return (
      <div>
        <main className="flex-container">
          <div className="flex-container-items">
            <div>
              <h2>{commonName}</h2>
              <img className="profile-pic" src={imageUrl} />
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
            </div>
            <NavLink to={`/plants/${id}/editPlant`}>
              <button>Edit</button>
            </NavLink>
            <button onClick={this.handleDelete.bind(this, id)}>Delete</button>
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
