import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(){
    return(
        <div>
        <h1>Page Not found</h1>
         <Link to="/">Back to home</Link>           
        </div>
    )
}

export default NotFoundPage;