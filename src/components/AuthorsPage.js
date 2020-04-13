import React, {useEffect, useState} from 'react';
import AuthorList from './AuthorList';
import authorStore from '../stores/authorStore';
import {loadAuthors} from '../actions/authorAction';

function AuthorsPage(){

    const [authors, setAuthor] = useState(authorStore.getAuthors())
    
    useEffect(()=>{
        authorStore.addChangeListener(onChange);
        if(authorStore.getAuthors().length === 0){
            loadAuthors();
        }
        return () => authorStore.removeChangeListener(onChange);
    },[]);

    function onChange(){
        setAuthor(authorStore.getAuthors());
    }
    return (
        <>
        <h2>Authors</h2>
        <AuthorList authors={authors}></AuthorList>
        </>
    )
}

export default AuthorsPage;