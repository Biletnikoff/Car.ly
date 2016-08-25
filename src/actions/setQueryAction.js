import { createAction } from 'redux-actions';

//sends a new query to the reducer to be added to state
export default createAction('SET_QUERY', (query) => query);
