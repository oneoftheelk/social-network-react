import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import { required, maxLengthCreator } from './../../../utils/validators/validator';
import { Textarea } from './../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.addPost}>
                <div className={style.caption}>My Posts</div>
                <Field component={Textarea} name={'newPostText'} placeholder={'your news...'}
                    validate={ [required, maxLength10] } />
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'addNewPost' })(AddNewPostForm);

const MyPosts = (props) => {
    let PostsElements = props.posts.map( item => {
        return <Post message={item.message} likeCount={item.likeCount} />
    })

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div>
                {PostsElements}
            </div>
        </>
    )
}

export default MyPosts;