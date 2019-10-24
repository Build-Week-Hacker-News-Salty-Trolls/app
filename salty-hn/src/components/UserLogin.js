import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'

import { FormStyled, FieldStyled, ButtonStyled } from './Styling';
import { userLogin } from '../actions';

const UserLogIn = ({ values, touched, errors, handleSubmit }) => {
    const dispatch = useDispatch()
    // use values.userName etc to access state
    // console.log('username', values.username, 'pass', values.password)
    return (
        <div>
            <FormStyled onSubmit={handleSubmit}>
                <FieldStyled
                    type="text"
                    name="username"
                    placeholder="username"
                />
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}
                <FieldStyled
                    type="password"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <ButtonStyled type="submit">Log In</ButtonStyled>
            </FormStyled >
        </div>
    )
}

const FormikUserLogIn = withFormik({
    mapPropsToValues({ username, password }) {

        return {

            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(3, "Usernames need to be at least 3 characters long")
            .required("We need to know who you are!"),
        password: Yup.string()
            .min(6, "Little longer please (at least 6 characters)")
            .required("Can't get in without a password")
    }),
    handleSubmit(values, { props }) {
        console.log(values, 'this is props', props)
        props.dispatch(userLogin(values))
        props.history.push('/home')
    }
})(UserLogIn)

const FormikLoginWrapper = props => {
    const dispatch = useDispatch();
    return (
        <>
            <FormikUserLogIn dispatch={dispatch} history={props.history} />
        </>
    )
}





export default FormikLoginWrapper