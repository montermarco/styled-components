import { css } from 'styled-components';

export const fixed = ( { 
    x = 0, 
    y = 0, 
    yP = 'top', 
    xP='left' 
} = {} ) => css`
    position: fixed;
    ${yP} : ${y};
    ${xP} : ${x};
`;

export const absolute = ( { 
    x = 0, 
    y = 0, 
    yP = 'top', 
    xP='left' 
} = {} ) => css`
    position: absolute;
    ${yP} : ${y};
    ${xP} : ${x};
`;

export const setFlex = ( {xF='center', yF='center' } = {} ) => `display:flex;align-items:${yF};justify-content:${xF}`; 


/* 
justify-content ( x ) 
    flex-start
    flex-end
    *center
    space around 
    space between
align-items ( y )
    flex-start
    flex-end
    *center
    strech
    baseline

    ${setFlex( { y: "flex-start" } )}    
*/