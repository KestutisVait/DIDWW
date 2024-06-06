import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 175px;
    &::after {
        content: '';
        display: block;
        width: 83%;
        height: 8px;
        background-color: #176BBC;
        filter: blur(10px);
        z-index: 1;
        margin-top: -0.3rem;
`;
const StyledButton = styled.div`
    background-color: #176BBC;
    color: white;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-align: center;
    width: fit-content;
    padding: 0.3rem 1rem;
    box-shadow: inset 0 0px 10px rgb(23, 107, 188, 0.3);
    cursor: pointer;
    transition: 0.3s;
    z-index: 2;
    &:hover {
        background-color: #669ed2;
    }
`;

const Button = (props) => {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <StyledButton onClick={() => { 
                navigate(-1)
                const element = document.getElementById('viewport');
                const viewportWidth = element.offsetWidth; 
                viewportWidth !== 1441 && props.onClick()    
            }}>
                Back to country list
            </StyledButton>
        </Wrapper>
    )
}

export default Button
