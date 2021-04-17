import { CauseDataType } from '../types'

export const GET_RESULTS = "GET_USERS";
export const GET_RESULTS_SUCCESS = "GET_USERS_SUCCESS";
export const INC_COUNTER = "INC_COUNTER";
export const SEARCH_INP = "SEARCH_INP";


export const getResults = () => {
  return {
    type: GET_RESULTS
  };
};

export const incCounter = (payload:number) => ({
    type:INC_COUNTER,
    payload
  });

export const getResultsSuccess = (results:CauseDataType) => {
  return {
    type: GET_RESULTS_SUCCESS,
    results
  };
};

export const searchInput = (query:string) => {
    return {
      type: SEARCH_INP,
      query
    };
  };