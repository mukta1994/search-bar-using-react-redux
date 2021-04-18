import { GET_RESULTS, GET_RESULTS_SUCCESS, SEARCH_INP, PAGINATION } from "../actions/actions";


const initialState = {
    results: [],
    isLoading: false,
    counter: 1,
    query:"",
    loadMore:false,
    pagination:{
      currentPage:0,
      totalPages:0,
      total:0
    }
  };

  const reducers = (state =initialState, action:any) => {
    switch (action.type) {
      case GET_RESULTS:
        return {
            ...state,
          isLoading: true
        };
      case GET_RESULTS_SUCCESS:
        if(action.loadMore)
          return {
            ...state,
          isLoading: false,
          results:(state.results ? state.results:[]).concat(action.results)
          } 
        else
        return {
            ...state,
            isLoading: false,
            results:action.results
        }
      case PAGINATION:
        return {
            ...state,
            pagination: action.paginationData
        }
        case SEARCH_INP:
            return {
                ...state,
                query : action.query
            }
     default:
        return state
    }
   }
   

   export default reducers;
