import styled from 'styled-components';
import { Form, Field } from 'formik';


export const AppStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 900px;
    background-color: #ff6600;
`

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        border: 2px solid black;
        border-radius: 4px;
        padding: 1%;
        margin-right: 1.5%;
        font-size: 3rem;
    }
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

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #5D5B5B;
    width: 100%;
`

export const UserCardStyled = styled.div`
    width: 60%;
    margin: 2% auto 0 auto;
    background-color: #F7A067;
    color: black;
    opacity: 0.8;
    border-radius: 8px;

    button {
        margin-bottom: 2%;
    }
`

export const NavBarStyled = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 2% auto;
    width: 100%;
    align-items: flex-end;

    a, p {
        text-decoration: none;
        margin: 0 3%;
        color: black;

        :hover {
            color: #5D5B5B;
        }
    }
`
export const SearchStyled = styled.input`
    margin: 5%;
`

export const SearchContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #5D5B5B;
    width: 100%;
`

export const SearchCardStyled = styled.div`
    width: 30%;
    margin: 2% auto 0 auto;
    background-color: #F7A067;
    color: black;
    opacity: 0.8;
    border-radius: 8px;

    button {
        margin-bottom: 2%;
    }
`

export const CommentCardStyled = styled.div`
    width: 80%;
    padding: 1% 3%;
    margin: 2% auto 0 auto;
    background-color: #F7A067;
    color: black;
    opacity: 0.8;
    border-radius: 8px;

    button {
        margin-bottom: 2%;
    }
`