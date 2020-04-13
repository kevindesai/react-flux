import React from 'react';
import TextInput from './common/TextInput';


const CourseForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                name="title"
                id="title"
                label="Title"
                onChange={props.onChange}
                value={props.course.title}
                error={props.errors.title} />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select name="authorId"
                        id="author"
                        className="form-control"
                        onChange={props.onChange}
                        value={props.course.authorId || ''}>
                        <option value=""></option>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>
            {props.errors.authorId && (
                <div className="alert alert-danger">
                    {props.errors.authorId}
                </div>
            )}

            <TextInput
                name="category"
                id="category"
                label="Category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category} />

            <input type="submit" value="submit" className="btn btn-primary" />
        </form>
    );
};

export default CourseForm;