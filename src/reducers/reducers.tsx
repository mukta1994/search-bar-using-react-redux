import { GET_RESULTS, GET_RESULTS_SUCCESS, INC_COUNTER, SEARCH_INP } from "../actions/actions";


const initialState = {
    results: [],
    isLoading: false,
    counter: 1,
    query:""
  };

  const reducers = (state =initialState, action:any) => {
    switch (action.type) {
      case GET_RESULTS:
        return {
            ...state,
          isLoading: true
        };
      case GET_RESULTS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            results:action.results
        }
      case INC_COUNTER:
        return {
            ...state,
            counter: action.payload + 1
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
