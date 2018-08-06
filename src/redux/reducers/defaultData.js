import { DEFAULT_ACTION } from '../constants';

const initialState = null;

export default (state = initialState, { type }) => {
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
};
