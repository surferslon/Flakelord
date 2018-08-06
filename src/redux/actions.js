import { DEFAULT_ACTION } from './constants';

export const getTodoList = data => ({
  type: DEFAULT_ACTION,
  data,
});
