import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validator';
import { login } from './../../redux/authReducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'E-mail'}
                    validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'Password'} type={'password'}
                    validate={[required]} />
            </div>
            <div className={styles.rememberMe}>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} />
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuthorized) {
        return <Redirect to='/profile' />
    }

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized
});

export default connect(mapStateToProps, {login})(Login);