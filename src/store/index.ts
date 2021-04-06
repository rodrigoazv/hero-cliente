import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './ducks';
import { UserState } from './ducks/user/types';
import { NotifyState } from './ducks/notify/types';
import { LocalState } from './ducks/local/types';
import { CharComicsState } from './ducks/char-comics/types';

export interface ApplicationState {
  user: UserState;
  notify: NotifyState;
  local: LocalState;
  charcomics: CharComicsState;
}

const store: Store<ApplicationState | any> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
