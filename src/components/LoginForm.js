import React from 'react';
import {Input} from '../elements/Input';
import {PrimaryBtn} from '../elements/Buton';
import Contenedor from '../elements/Contenedor';

function LoginForm(props) {
    return (
        <Contenedor>
        <h2 className="title">Ingresar</h2>
            <div className="container">
            
                <label htmlFor="uname" className="label"><b>email</b></label>
                <Input type="email" placeholder="correo electrónico" demotion="2" />

                <label htmlFor="psw" className="label"><b>contraseña</b></label>
                <Input type="password" placeholder="* * * * * * * * * * " demotion="2" />

                <Contenedor elevation="0" w="75%">
                    <PrimaryBtn>entrar</PrimaryBtn>
                </Contenedor>
                <span className="psw">Olvidaste tu contraseña? <a href="/">click aqui</a></span>
            </div> 

            
        </Contenedor>
    );
}

export default LoginForm;

