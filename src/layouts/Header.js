import React from 'react'
import logo from '../logo.svg';
import styled from 'styled-components';
import { yellow, elevation } from '../utilities';

const Header = ( { className } ) => {
    return (        
        <header className={ className }>
            <img src={ logo } alt="logo" className="logo"/>
        </header>
    )
};

export default styled(Header)`
    background: ${yellow};
    padding: 10px 5%;
    ${elevation[1]};
    .logo{
        width: 60px;
    }
`;

/*
const styledHeader = styled(Header)`
    background: teal;
    padding: 10px 5%;
    .logo{
        width: 60px;
    }
`;
*/
