import { action } from 'typesafe-actions';
import { UserTypes, User, UserResponse } from './types';
import { NotifyTypes } from '../notify/types';
import { sendRegister } from './service';

export const sendRegisterAction = async (data: User) => {
  action(NotifyTypes.SET_LOADING, true);
  try {
    const respData: UserResponse = await sendRegister(data);
    action(UserTypes.TOGGLE_MENU, respData.token);
  } catch (error) {
    action(NotifyTypes.SET_MESSAGE);
  } finally {
    action(NotifyTypes.SET_LOADING, false);
  }
};
