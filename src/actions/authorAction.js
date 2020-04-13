import dispatcher from '../appDispatcher';
import * as authorApi from '../api/authorApi';
import actionTypes from '../actions/actionTypes';

export function loadAuthors(){
    return authorApi.getAuthors().then(_authors=>{
        dispatcher.dispatch({
            actionType:actionTypes.LOAD_AUTHORS,
            authors:_authors
        })
    })
}