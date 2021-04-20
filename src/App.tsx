import React from 'react';
import './App.scss';
import { connect } from 'react-redux';

//components
import SearchBar from './components/SearchBar'
import SearchResults from './components/searchresults/SearchResults'
import LoadButton from './components/searchresults/resultcomponents/LoadButton'

//api
import { getSearchResults } from './api/services';

//actions
import {getResults, getResultsSuccess, searchInput, paginationData } from './actions/actions';

//types
import { CauseDataType, SearchResponsePaginationDataType  } from './types'

//material ui
import CircularProgress from '@material-ui/core/CircularProgress';


function App(props:any) {

  const {query, isLoading,pagination}=props.Reducer
  
  //start search when enter is clicked
  const onKeyUp=(e:any)=> {
    if (e.charCode === 13) {
      getAllSearchResults(false);
    }
  }


  //get all search results if it is load more then pagenumber will be incremented by one otherwise always first page is rendered
  const getAllSearchResults = (loadMore:boolean) => {
    
    if(query!==''){
      test();
      props.onLoadResultsClick();
      if(loadMore){
      getDataDependingonPage(loadMore,pagination.currentPage+1);
      }
      else{
        getDataDependingonPage(loadMore,1);
      }
    }
  };

  const test =()=>{
    console.log("test")
  }


  const getDataDependingonPage=async(loadMore:boolean,pageNum:any)=>{

      const searchResults= await getSearchResults(query,pageNum);
      props.onLoadSearchResultsOnComplete(searchResults.data,loadMore);
      props.getPagination(searchResults.meta.pagination);
  }


  const handleInput=(e:any)=>{
    props.onChangeInput(e.target.value)
  }

  //when clear button is clicked make reset
  const clearInput=()=>{
    props.onChangeInput('');
    props.onLoadSearchResultsOnComplete([]) 
    pagination.currentPage=0;
    pagination.total=0;
  }


  return (
    <div className="App">
         <SearchBar callback={()=>getAllSearchResults(false)} 
                    onInput={(e:any) => handleInput(e)}
                    clearSearchInput={() => clearInput()}
                    onKeyPress={onKeyUp}
                    val={props.Reducer.query}/>

        <SearchResults></SearchResults>

        {isLoading ?<CircularProgress /> : null}

        <LoadButton callback={()=>getAllSearchResults(true)}
                    paginationData={pagination} />
       
    </div>

  );
}

const mapStateToProps = (state:any) => ({
  ...state
});


const mapDispatchToProps = (dispatch:any) => {
  return {
    onLoadResultsClick: () => {
      dispatch(getResults());
    },
    onLoadSearchResultsOnComplete: (results:CauseDataType,loadMore:boolean) => {
      dispatch(getResultsSuccess(results, loadMore)); 
    },
    onChangeInput:(query:any)=>{
      dispatch(searchInput(query));
    },
    getPagination:(pagination:SearchResponsePaginationDataType)=>{
      dispatch(paginationData(pagination))
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);