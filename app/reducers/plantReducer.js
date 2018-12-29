import Axios from 'axios';

// define actions
const GOT_PLANTS_FROM_SERVER = 'GOT_PLANTS_FROM_SERVER';
const GOT_PLANT_FROM_SERVER = 'GOT_PLANT_FROM_SERVER';
const GOT_NEW_PLANT = 'GOT_NEW_PLANT';
const REMOVED_PLANT = 'REMOVED_PLANT';

// define action creators
const gotPlants = plants => ({
  type: GOT_PLANTS_FROM_SERVER,
  plants,
});

const gotOnePlant = plant => ({
  type: GOT_PLANT_FROM_SERVER,
  plant,
});

const gotNewPlant = plant => ({
  type: GOT_NEW_PLANT,
  plant,
});

const removedPlant = plantId => ({
  type: REMOVED_PLANT,
  plantId,
});

// thunk creators
export const fetchPlants = () => async dispatch => {
  const res = await Axios.get('/api/plants');
  const plants = res.data;
  dispatch(gotPlants(plants));
};

export const fetchOnePlant = plantId => async dispatch => {
  const res = await Axios.get(`/api/plants/${plantId}`);
  const plant = res.data[0];
  dispatch(gotOnePlant(plant));
};

export const createNewPlant = plant => async dispatch => {
  const res = await Axios.post('/api/plants', plant);
};

export const deletePlant = plantId => async dispatch => {
  await Axios.delete(`/api/plants/${plantId}`);
  dispatch(removedPlant(plantId));
};

// initial state plants
const initialState = { plants: [], selectedPlant: {} };

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PLANTS_FROM_SERVER:
      return { ...state, plants: action.plants };
    case GOT_PLANT_FROM_SERVER:
      return { ...state, selectedPlant: action.plant };
    case GOT_NEW_PLANT:
      return { ...state, plants: [...state.plants, action.plant] };
    case REMOVED_PLANT:
      return {
        ...state,
        plants: [
          ...state.plants.filter(plant => {
            return plant.id !== action.plantId;
          }),
        ],
      };
    default:
      return state;
  }
};
