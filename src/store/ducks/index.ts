import { combineReducers } from 'redux';

import user from './user';
import notify from './notify';
import local from './local';
import charcomics from './char-comics';

export default combineReducers({ notify, user, local, charcomics });
