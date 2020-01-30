import styled from 'styled-components';
import {absolute, elevation, setFlex, setMargin } from '../utilities';

const Contenedor = styled.div`
    background-color: #E0E5EC;
    border-radius: 15px;
    padding: 20px 40px;
    width: ${props => props.w};
    height: ${props => props.h};
    ${props => elevation[props.elevation] || elevation[4]};
    ${props => setFlex({ 
        xF: props.xF || "center",
        yF: props.yF || "center"
    })};
    ${props => absolute({ 
        yP: props => props.yP,
        xP: props => props.xP,
        x: props => props.x || "350px",
        y: props => props.y || '300px'
    })};
    
    ${props => setMargin({
        mt: props.mt || 0,
        mr: props.mr || 0,
        mb: props.mb || 0,
        ml: props.ml || 0
    })}
`;

export default Contenedor;