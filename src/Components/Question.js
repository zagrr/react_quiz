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
`


class Question extends React.Component {

    onAnswerClickHandler = (answerID) => {
        console.log("answerID", answerID);

        this.props.onQuestionAnswered();
    }

    render() {
        return (
            <StyledQuestion>
                <QuestionHeader>
                    <span>
                        <strong>{this.props.index}.</strong>&nbsp;
                {this.props.question.questionText}
                    </span>
                    <small>{this.props.index} из {this.props.questionsCount}</small>
                </QuestionHeader>

                <ul style={{ "listStyle": "none", margin: 0, padding: 0 }}>
                    {
                        this.props.question.answers.map((item, index) =>
                            <Answer
                                key={item.id}
                                answer={item}
                                onAnswerClick={this.onAnswerClickHandler}
                            />)
                    }
                </ul>
            </StyledQuestion>


        )
    }
}

export default Question;



