import styled from 'styled-components';
import {absolute, elevation } from '../utilities';

const Container = styled.div.attrs(props => ({
    xP: props.xP,
    yP: props.yP,
    w: props.w || "350px",
    h: props.h || '300px',
    elevation: props.elevation || 4
}))`
    background-color: #E0E5EC;
    border-radius: 15px;
    padding: 20px 40px;
    margin-bottom: 30px;
    ${absolute({ 
        yP: props => props.yP,
        xP: props => props.xP 
    })};
    width: ${props => props.w};
    height: ${props => props.h};
    ${props => elevation[props.elevation]};
`;

export default Container;
