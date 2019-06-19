import styled from 'styled-components';
import { salmon, teal, elevation, orange, green } from '../utilities';

export const Button = styled.button`
    padding: 5px 40px;
    border-radius: 4px;
    color: white;
    ${elevation[1]};
    font-size: 2rem;
    border: none;
    background: ${ green };
    ${ ({ size }) => {
        if(size === 'sm'){
            return `
                font-size: 1rem;
                padding: 3px 10px;
            `;
        }
    }};

    ${ ({ type }) => {
        if(type === 'cancel'){
            return `
            background: ${ orange };
            `;
        }
    }};
   
`;

export const CancelButton = styled(Button)`
    background: ${ salmon };
`;

