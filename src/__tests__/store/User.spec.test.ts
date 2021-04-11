import { sendLoginAction, sendRegisterAction, getUserAction, setAuth, refetchCharComicLikeAction, likeCharComicAction} from '../../store/ducks/user/actions'
import {UserTypes, UserLogin, User, likeCharComics} from '../../store/ducks/user/types'
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
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, UserTypes.TOGGLE_LOGIN,NotifyTypes.SET_MESSAGE, NotifyTypes.SET_LOADING ]
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
  it('should create all actions instances for user get actions', async () => {
  
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { user: 'fake user' }
    });

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, UserTypes.TOGGLE_USER, NotifyTypes.SET_LOADING ]

    return store.dispatch<any>(getUserAction()).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })

  it('should create all actions instances for setAuth actions', async () => {

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, UserTypes.TOGGLE_LOGOUT, NotifyTypes.SET_LOADING ]

    return store.dispatch<any>(setAuth()).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for refetch char comics actions', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { likedChar: [], likedComic:[] }
    });
    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  UserTypes.TOGGLE_CHAR_LIKE, UserTypes.TOGGLE_COMIC_LIKE ]

    return store.dispatch<any>(refetchCharComicLikeAction()).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for like char comics actions', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { likedChar: [], likedComic:[] }
    });
    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [   NotifyTypes.SET_MESSAGE]
    const like: likeCharComics = {thumb: 'Super', id: 'Super', like: true, name: 'Super', type: 'characters'}

    return store.dispatch<any>(likeCharComicAction(like)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
})