import React, { Component } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

`
const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

`;


class Layout extends Component {
    render() {
        return (
            <StyledLayout>
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </StyledLayout>
        );
    }
}

export default Layout;