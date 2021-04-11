import { getCharsAction, getComicsAction, getCharsIdAction, getComicsIdAction, getSearch } from '../../store/ducks/char-comics/actions'
import {CharComicsTypes, SearchType} from '../../store/ducks/char-comics/types'
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
  it('should create all actions instances for char get', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { char: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, CharComicsTypes.TOGGLE_CHAR, NotifyTypes.SET_LOADING ]
    const page = 10;
    return store.dispatch<any>(getCharsAction('', page)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for comic get', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { comics: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, CharComicsTypes.TOGGLE_COMICS, NotifyTypes.SET_LOADING ]
    const page = 10;
    return store.dispatch<any>(getComicsAction('', page)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for char get by id', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { char: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING,CharComicsTypes.TOGGLE_CHAR_BY_ID, NotifyTypes.SET_LOADING ]
    return store.dispatch<any>(getCharsIdAction('fakeid')).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for comic get by id', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { comics: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
   
    const expectedPayload = [  NotifyTypes.SET_LOADING, CharComicsTypes.TOGGLE_COMICS_BY_ID, NotifyTypes.SET_LOADING ]
    return store.dispatch<any>(getComicsIdAction('fakeid')).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for search char', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { char: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
    const search: SearchType = { searchType: 'Char', searchUrl: '/', valueSearch: ''}
    const expectedPayload = [  NotifyTypes.SET_LOADING, CharComicsTypes.TOGGLE_CHAR, NotifyTypes.SET_LOADING ]
    return store.dispatch<any>(getSearch(search)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
  it('should create all actions instances for search comics', async () => {

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: { char: [{}] }
    });

    const initialState = {}
    const store = mockStore(initialState)
    const search: SearchType = { searchType: 'Comics', searchUrl: '/', valueSearch: ''}
    const expectedPayload = [  NotifyTypes.SET_LOADING, CharComicsTypes.TOGGLE_COMICS, NotifyTypes.SET_LOADING ]
    return store.dispatch<any>(getSearch(search)).then(() => { 
        
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedPayload)
    })
    
  })
})