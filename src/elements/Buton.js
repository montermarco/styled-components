import styled from "styled-components";
import {
  teal,
  yellow,
  setRem,
  setLetterSpacing,
  setFont,
  setTransition,
  setFlex
} from "../utilities";

export const PrimaryBtn = styled.button`
  background: ${teal};
  color: ${yellow};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
  padding: ${setRem(17)} ${setRem(36)};
  ${setFont.main};
  ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${yellow};
  }
  ${props =>
    `margin: ${props.mt || 0} ${props.mr || 0} ${props.mb || 0} ${props.ml || 0}}`};  
  ${setFlex( )};
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
