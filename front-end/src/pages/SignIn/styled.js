import styled from 'styled-components'

export const H1 = styled.h1`
    text-align:center;
    color:#7139ad;
    margin:30px 0;
`;

export const Form = styled.form`

    max-width:400px;
    width:100%;
    margin:0 auto;

    div{
        width:100%;
        min-height:30px;
        height:auto;
        display:flex;
        flex-direction:column;
       

        label{
            color:#000;
            font-size:1rem;
            margin-bottom:5px;
        }

        input{
            height:35px;
            border-radius:4px;
            border:solid 1px #e8e8e8;
            padding: 0 10px;
            font-size:0.9rem;

            &:focus{
                box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
            }
       
        }

        & + div{
            margin-top:25px;
        }

        & > button{
            margin-top:10px;
        }

    }

    button{
        width:150px;
        height:35px;
        border:none;
        border-radius:4px;
        color:#FFF;
        font-weight:bold;
        margin:0 auto;
        background-color:#7139ad;
        cursor: pointer;
        font-size:0.8rem;
        
    }

    a,a:active,a:focus,a:visited{
        width:100%;
        text-align:center;
        color:#7139ad;
        font-size:0.9rem;
        margin-top:10px;
        text-decoration:none;

        &:hover{
            text-decoration:underline;
            cursor: pointer;
        }
    }


`;