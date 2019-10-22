import styled from 'styled-components';
import { Form, Field } from 'formik';


export const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 900px;
    background-color: #ff6600;
`

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    background-color: #5D5B5B;
`

export const FieldStyled = styled(Field)`
    width: 30%;
    margin: 3% auto 0 auto;
`

export const ButtonStyled = styled.button`
    width: 15%;
    margin: 3% auto;
`