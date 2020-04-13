import React from 'react';

function AuthorList(props){
    console.log(props);
    return(
        <table className="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    props.authors.map((author)=>{
                        return(
                            <tr key={author.id}>
                                <td>{author.id}</td>
                                <td>{author.name}</td>
                                <td>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default AuthorList