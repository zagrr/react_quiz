import React from "react";
import styled from "styled-components";

import Answer from "./Answer";

const StyledQuestion = styled.div`
    width: 600px;
    color: #fff;
    border: 2px solid #fff;
    margin: 0 10px;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
`;

const QuestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;


const Question = props => (

    <StyledQuestion>
        <QuestionHeader>
            <span>
                <strong>2.</strong>&nbsp;
                Как Дела?
            </span>
            <small>4 из 6</small>
        </QuestionHeader>

        <ul style={{ "list-style": "none", margin: 0, padding: 0}}>
            {
                props.answers.map((item, index) => <Answer answer={item} />)
            }
        </ul>


    </StyledQuestion>


)

export default Question;




