import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'login'}
          className={s.input}
          component={'input'}
          name={'login'}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          className={s.input}
          component={'input'}
          name={'password'}
        />
      </div>
      <div className={s.wrapper}>
        <Field
          component={'input'}
          type={'checkbox'}
          className={s.checkbox}
          name={'rememberMe'}
        />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginReduxForm;
