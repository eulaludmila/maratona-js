import React from 'react';
import {Form, H1} from './styled';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return(
        <div id="container">
            <H1>Sign Up</H1>
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

                    <label>Confirma Senha:</label>
                    <input type="password" ></input>
                </div>
                <div className="input">

                    <button type="submit">CADASTRAR</button>
                   <Link to="/sign-in"> Já possui conta? Entre aqui</Link>
                </div>

            </Form>
        </div>
    )
}

export default SignUp;