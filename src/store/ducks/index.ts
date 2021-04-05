import { combineReducers } from 'redux';

import user from './user';
import notify from './notify';
import local from './local';

export default combineReducers({ notify, user, local });
