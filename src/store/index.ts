import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store<ApplicationState | any> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
