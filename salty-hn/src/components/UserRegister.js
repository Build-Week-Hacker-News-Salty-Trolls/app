import React from 'react';
import { useDispatch } from 'react-redux'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import { userRegister } from '../actions'

import { FieldStyled, FormStyled, ButtonStyled } from './Styling';



const UserRegistration = ({ values, touched, errors, handleSubmit }) => {
    const dispatch = useDispatch()
    // use values.userName etc to access state
    console.log(values)

    return (
        <div>
            <FormStyled onSubmit={handleSubmit}>
                {/* <FieldStyled
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                {touched.firstName && errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                )}
                <FieldStyled
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                {touched.lastName && errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                )} */}
                <FieldStyled
                    type="text"
                    name="username"
                    placeholder="username"
                />
                {touched.userName && errors.userName && (
                    <p className="error">{errors.userName}</p>
                )}
                <FieldStyled
                    type="text"
                    name="email"
                    placeholder="email"
                />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}

                <FieldStyled
                    type="password"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <ButtonStyled type="submit">Submit!</ButtonStyled>
            </FormStyled>
        </div>
    )
}


const FormikUserRegistration = withFormik({
    mapPropsToValues({ username, email, password }) {

        return {
            //commenting out first name and last name because the back end I'm using can't take them
            // firstName: "",
            // lastName: "",
            username: username || "",
            email: email || "",
            password: password || "",
        }
    },

    validationSchema: Yup.object().shape({
        // firstName: Yup.string()
        //     .required("Just make one up if you want"),
        // lastName: Yup.string()
        //     .required("Just use Smith if it makes you more comfortable"),
        username: Yup.string()
            .min(4, "Usernames need to be at least 4 characters long")
            .required("We need to know who you really are"),
        email: Yup.string()
            .email("Needs to be a real email")
            .required("Yup, we really need it! (not for newsletters of course ;) )"),
        password: Yup.string()
            .min(6, "Little longer please (at least 6 characters)")
            .required("Can't get in without a password")
    }),
    handleSubmit(values, { props }) {
        console.log(values, 'this is props', props)
        props.dispatch(userRegister(values))
        // props.history.push('/home')
    }
})(UserRegistration)

const FormikUserRegistrationWrapper = props => {
    const dispatch = useDispatch();
    return (
        <>
            <FormikUserRegistration dispatch={dispatch} history={props.history} />
        </>
    )
}


export default FormikUserRegistrationWrapper