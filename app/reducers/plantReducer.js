import Axios from 'axios';

// define actions
const GOT_PLANTS_FROM_SERVER = 'GOT_PLANTS_FROM_SERVER';

// define action creators
const gotPlants = plants => ({
  type: GOT_PLANTS_FROM_SERVER,
  plants,
});

// thunk creators
export const fetchPlants = () => async dispatch => {
  const res = await Axios.get('/api/plants');
  const plants = res.data;
  dispatch(gotPlants(plants));
};

// initial state plants
const initialState = { plants: [], selectedPlant: {} };

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PLANTS_FROM_SERVER:
      return { ...state, plants: action.plants };
    default:
      return state;
  }
};
