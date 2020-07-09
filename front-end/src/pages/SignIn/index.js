import React from 'react';
import {Form, H1} from './styled';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return(
        <div id="container">
            <H1>Sign In</H1>
            <Form>

                <div className="input">

                    <label>Email:</label>
                    <input type="text" ></input>
                </div>
                <div className="input">

                    <label>Senha:</label>
                    <input type="password" ></input>
                </div>
                <div className="input">

                    <button type="submit">ENTRAR</button>
                    <Link to="/sign-up">Não possui uma conta? Cadastre-se</Link>
                </div>

            </Form>
        </div>
    )
}

export default SignIn;