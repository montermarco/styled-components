import styled from 'styled-components';
import { demotion, setFlex } from '../utilities';

export const Input = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.placeholder,
    elevation: props.elevation,
    demotion: props.demotion
}))`
  padding: 15px 20px;
  border-radius:50px;
  border: none;
  outline: none;
  width:280px;
  height:50px;
  background-color:#E0E5EC;
  ${ props => demotion[props.demotion]};
  ${setFlex()};
`;

 
