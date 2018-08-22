import {
  RECEIVE_MAP_DATA,
} from './constants';

export const receiveMapData = data => ({
  type: RECEIVE_MAP_DATA,
  data,
});

export function getMapData() {
  return (dispatch) => {
    fetch('https://printerror.xyz/flakelord/API/FakeMap/') // eslint-disable-line
      .then(response => response.json())
      .then(items => dispatch(receiveMapData(items)))
      .catch(() => console.error('error getMapData'));
  };
}
