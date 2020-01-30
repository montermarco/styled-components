import React from 'react'
import logo from '../logo.svg';
import styled from 'styled-components';
import { elevation, encode, teal, absolute } from '../utilities';

const Header = ( { className } ) => {
    return (        
        <header className={ className }>
            <img src={ logo } alt="logo" className="logo"/>
        </header>
    )
};

export default styled(Header)`
    background: ${teal};
    padding: 10px 5%;
    width: 100%;
    ${encode};
    ${absolute({ y: '5'}) };
    ${elevation[1]};
    .logo{
        width: 60px;
    }
    
`;
