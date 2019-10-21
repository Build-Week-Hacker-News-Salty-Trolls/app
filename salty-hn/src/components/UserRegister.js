import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const UserRegistration = ({ values, touched, errors }) => {

    console.log(values.firstName)
    
    return(
        <div>
            <Form>
                <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />
                {touched.firstName && errors.firstName && (
                    <p className="error">{errors.firstName}</p>
                )}
                <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
                {touched.lastName && errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                )}
                <Field
                    type="text"
                    name="userName"
                    placeholder="username"
                />
                {touched.userName && errors.userName && (
                    <p className="error">{errors.userName}</p>
                )}
                <Field
                    type="text"
                    name="email"
                    placeholder="email"
                />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field 
                    type="text"
                    name="password"
                    placeholder="password"
                />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
            </Form>
        </div>
    )
}


const FormikUserRegistration = withFormik({
    mapPropsToValues(){
        
        return{
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
        }
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .required("Just make one up if you want"),
        lastName: Yup.string()
            .required("Just use Smith if it makes you more comfortable"),
        userName: Yup.string()
            .min(4, "Usernames need to be at least 4 characters long")
            .required("We need to know who you really are"),
        email: Yup.string()
            .email("Needs to be a real email")
            .required("Yup, we really need it! (not for newsletters of course ;) )"),
        password: Yup.string()
            .min(6, "Little longer please (at least 6 characters)")
            .required("Can't get in without a password")
    })
})(UserRegistration)

export default FormikUserRegistration