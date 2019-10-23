import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerStyled } from './Styling';

import GeneralCommentCards from './GeneralCommentCards';

const CommentDashboard = () => {
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState("");

    const handleChanges = e => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        axios
            .get('https://salty-salt.herokuapp.com/dump')
            .then(response => {
                console.log(response);
                const results = response.data.filter(username => 
                    username.by.toLowerCase().includes(query.toLowerCase()));
                setComments(results);
            })
            .catch(error => {
                console.log("there was an error", error)
            })
    }, [query])
    
    

    return (
        <ContainerStyled>
            <form>
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