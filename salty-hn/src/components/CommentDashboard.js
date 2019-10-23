import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchContainerStyled, SearchStyled, ContainerStyled } from './Styling';

import GeneralCommentCards from './GeneralCommentCards';

const CommentDashboard = () => {
    const [comments, setComments] = useState([]);
    const [query, setQuery] = useState("");

    const handleChanges = e => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        axios
            .get('https://salty-salt.herokuapp.com/user-dump')
            .then(response => {
                console.log(response);
                const results = response.data.filter(username => 
                    username.author.toLowerCase().includes(query.toLowerCase()));
                setComments(results);
            })
            .catch(error => {
                console.log("there was an error", error)
            })
    }, [query])
    
    

    return (
        <ContainerStyled>
            <form>
                <SearchStyled 
                    type="text" 
                    name="search" 
                    placeholder="Search by Salty Hacker Username"
                    onChange={handleChanges}
                />
            </form>
            <SearchContainerStyled>
                {comments.map((comment, index) => {
                    return (
                        <GeneralCommentCards
                            key={index}
                            username={comment.author}
                            rank={comment.ranking}
                            salty_score={comment.total_score}
                        />
                    )
                })}
            </SearchContainerStyled>
        </ContainerStyled>
    )
}

export default CommentDashboard