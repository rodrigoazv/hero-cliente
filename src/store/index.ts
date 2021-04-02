import { createStore, Store } from 'redux';
import rootReducer from './ducks';

export interface ApplicationState {}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
