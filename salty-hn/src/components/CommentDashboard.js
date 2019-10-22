import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerStyled } from './Styling';

import GeneralCommentCards from './GeneralCommentCards';

const CommentDashboard = () => {
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState({});

    const handleChanges = e => {
        setQuery({...query, [e.target.name]:e.target.value});
    }

    const handleSearch = (event) => {
        const results = comments.filter(username => username.author.toLowerCase().includes(query))
        setComments(results)
    }
    

    useEffect(() => {
        axios
            .get('https://salty-salt.herokuapp.com/dump')
            .then(response => {
                console.log(response);
                setComments(response.data);
            })
            .catch(error => {
                console.log("there was an error", error)
            })
    }, [])

    return (
        <ContainerStyled>
            <form onChange={handleSearch}>
            <input 
                type="text" 
                name="search" 
                placeholder="Search by Salty Hacker Username"
                onChange={handleChanges}
                />
            </form>
            {comments.map((comment, index) => {
                return (
                    <GeneralCommentCards
                        key={comment.id}
                        username={comment.by}
                        comment={comment.text}
                        salty_score={comment.salty_score}
                    />
                )
            })}
        </ContainerStyled>
    )
}

export default CommentDashboard