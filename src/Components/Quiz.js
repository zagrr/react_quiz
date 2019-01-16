import React, { Component } from "react"
import styled from "styled-components";

import Question from "./Question";

const StyledQuiz = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    background: linear-gradient(90deg, #5041b2 0%, #7969e6 100%);
    flex-grow: 1;
`

const StyledH1 = styled.h1`
    color: #fff;
    margin-left: 10px;
`

class Quiz extends Component {


    constructor() {
        super();
        console.log("constructor");

        this.state = {
            quiz: [
                {
                    answers: [
                        { text: "Ответ 1" },
                        { text: "Ответ 2" },
                        { text: "Ответ 3" },
                        { text: "Ответ 4" }
                    ]
                }
            ]

        }
    }


    render() {
        return (
            <StyledQuiz>
                <div>
                    <StyledH1>Quiz</StyledH1>
                    <Question answers={this.state.quiz[0].answers}/>
                </div>

            </StyledQuiz>

        );
    }
}

export default Quiz;