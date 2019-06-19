import React from 'react';
import GlobalStyle from './Global'

//Components
import Header from './layouts/Header';
import { Button, CancelButton } from './elements'; 

function App() {
  return (
    <div className="App">
  
        <Header/>


        <Button>stld-butt</Button>
        <CancelButton>xtnd-btt</CancelButton>

        <Button type='cancel'>type-cancel</Button>
        <Button size='sm' >size-sm</Button>
        
        <CancelButton size='sm'>size-sm</CancelButton>

        <GlobalStyle/>

    </div>
  );
}

export default App;
