import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserLogIn = ({ touched, errors}) => {


    return (
        <div>
            <Form>
                <Field 
                    type="text" 
                    name="userName" 
                    placeHolder="username"
                />
                {touched.userName && errors.userName && (
                    <p className="error">{errors.userName}</p>
                )}
                <Field
                    type="text"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <button type="submit">Log In</button>
            </Form>
        </div>
    )
}

const FormikUserLogIn = withFormik(
    mapPropsToValues({ userName, password }){
        return(
            userName: userName || "",
            password: ""
        )
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string()
            .min(4, "Usernames need to be at least 4 characters long")
            .required("We need to know who you are!"),
        password: Yup.string()
            .min(6, "Little longer please (at least 6 characters)")
            .required("Can't get in without a password")
    })
)(UserLogIn)


export default FormikUserLogIn