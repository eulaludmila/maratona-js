import React from 'react';
import {Form, H1} from './styled';
import { Link } from 'react-router-dom';

const Create = () => {
    return(
        <>

        <div id="container">
            <H1>Create Link</H1>
            <Form>

                <div className="input">

                    <label>Label:</label>
                    <input type="text" ></input>
                </div>
                <div className="input">

                    <label>Url:</label>
                    <input type="url" ></input>
                </div>
                <div className="input">
                    <label>É uma rede-social?</label>
                    <input type="checkbox"></input>
                </div>
                <div className="input">

                    <button type="submit">CRIAR</button>
          
                </div>

            </Form>
        </div>
        </>
    )
}

export default Create;