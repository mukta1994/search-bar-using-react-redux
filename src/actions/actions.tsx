import { CauseDataType , SearchResponsePaginationDataType } from '../types'

export const GET_RESULTS = "GET_RESULTS";
export const GET_RESULTS_SUCCESS = "GET_RESULTS_SUCCESS";
export const SEARCH_INP = "SEARCH_INP";
export const PAGINATION = "PAGINATION";


export const getResults = () => {
  return {
    type: GET_RESULTS
  };
};

export const getResultsSuccess = (results:CauseDataType,loadMore:boolean) => {
  return {
    type: GET_RESULTS_SUCCESS,
    results,
    loadMore
  };
};

export const paginationData = (paginationData:SearchResponsePaginationDataType) => {
  return {
    type: PAGINATION,
    paginationData
    
  };
};

export const searchInput = (query:string) => {
    return {
      type: SEARCH_INP,
      query
    };
  };
