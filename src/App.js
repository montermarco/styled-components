import React from 'react';
import GlobalStyle from './Global'

//Components
import LoginForm from './components/LoginForm';
import Wrapper from './elements/Wrapper';
import Contenedor from './elements/Contenedor';


function App() {
  return (
    <Wrapper>
        
        <Contenedor w="30%" h="300px" elevation="0"> 
          <LoginForm/>
        </Contenedor>
      <GlobalStyle/>        
    </Wrapper>
  );
}

export default App;
