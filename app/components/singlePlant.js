import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOnePlant } from '../reducers/plantReducer.js';

class SinglePlant extends Component {
  componentDidMount() {
    this.props.loadPlants(this.props.match.params.plantId);
  }

  render() {
    console.log(this.props);
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
              {/* {this.props.plant.plantDetail === undefined ||
              this.props.plant.plantDetail === {} ? (
                'No details to show!'
              ) : (
                <div>hi</div>
              )} */}
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
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ plant: state.plants.selectedPlant });

const mapDispatchToProps = dispatch => ({
  loadPlants: plantId => dispatch(fetchOnePlant(plantId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SinglePlant)
);
