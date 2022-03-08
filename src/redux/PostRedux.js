import axios from "axios"

const types = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
}

export const actions = {
  fetchPostsRequest: () => {
    return {
      type: types.FETCH_POSTS_REQUEST
    }
  },
  fetchPostsSuccess: (posts) => {
    return {
      type: types.FETCH_POSTS_SUCCESS,
      payload: posts
    }
  },
  fetchPostsFailure: (error) => {
    return {
      type: types.FETCH_POSTS_FAILURE,
      payload: error
    }
  },
  fetchPosts: (dispatch) => {
    dispatch(actions.fetchPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(actions.fetchPostsSuccess(response.data))
      })
      .catch(error => {
        dispatch(actions.fetchPostsFailure(error))
      })
  }
}

const initialState = {
  loading: false,
  data: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      }
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload
      }
    default:
      return state
  }
}