import React from "react";
import styled from "styled-components";

const StyledAnswer = styled.li`
    border 1px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 5px;
    cursor: pointer;
    
    :hover {
       
        background: rgba(255,255,255,0.2);
        transition: background 0.3s easy-in-out;

    }



`

const Answer = props => (
    <StyledAnswer
        onClick={() => props.onAnswerClick(props.answer.id)}>
        {props.answer.text}
    </StyledAnswer>

)

export default Answer;