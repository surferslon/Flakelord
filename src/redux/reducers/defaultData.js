import { RECEIVE_MAP_DATA } from '../constants';

const initialState = {
  mapFakeData: null,
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_MAP_DATA:
      console.log(data);
      return { ...state, mapFakeData: data };
    default:
      return state;
  }
};
