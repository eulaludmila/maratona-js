import styled from 'styled-components';


export const NavMenu = styled.div`
    width:100%;
    height:60px;
    background-color:#7139ad;

    ul{
        width:100%;
        list-style:none;

        li{

            float:left;
            text-align:center;

            & + li{
                margin-left:25px;
            }
        }
    }

`