import { sendLoginAction, sendRegisterAction} from '../../store/ducks/user/actions'
import {UserTypes, UserLogin, User} from '../../store/ducks/user/types'
import {NotifyTypes} from '../../store/ducks/notify/types'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios'

jest.mock('axios', () => {
  return {
    get: jest.fn(),
    post: jest.fn()
  };
});

const middlewares: any = [thunk]
const mockStore = configureStore(middlewares)

describe('actions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should create all actions instances for user login', async () => {

  
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({
      data: { token: 'jwt-example' }
    });


    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, UserTypes.TOGGLE_LOGIN, NotifyTypes.SET_LOADING ]
    const user: UserLogin ={ email:"rodrigo@gmail.com", password:'1234qwer'}

    return store.dispatch<any>(sendLoginAction(user)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for user register', async () => {

  
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({
      data: { token: 'jwt-example' }
    });


    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, UserTypes.TOGGLE_REGISTER, NotifyTypes.SET_LOADING ]
    const user: User ={ email:"rodrigo@gmail.com", password:'1234qwer', birthDay: new Date(), nickName: "rodrigo", lastName: "azevedo", firstName: "rodrigo" }

    return store.dispatch<any>(sendRegisterAction(user)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
})