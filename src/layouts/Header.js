import React from 'react'
import logo from '../logo.svg';
import styled from 'styled-components';
import { elevation, encode, salmon } from '../utilities';

const Header = ( { className } ) => {
    return (        
        <header className={ className }>
            <img src={ logo } alt="logo" className="logo"/>
        </header>
    )
};

export default styled(Header)`
    background: ${salmon};
    padding: 10px 5%;
    ${encode};
    ${elevation[3]};
    .logo{
        width: 60px;
    }
    
`;

