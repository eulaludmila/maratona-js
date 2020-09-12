import styled from 'styled-components'

export const MenuLinks = styled.div`

    width:100%;
    height:50px;
    background-color:#7139ad;

    .alinha-items{
        width:100%;
        height:inherit;
        max-width:1200px;
        margin:0 auto;
        display:flex;
        justify-content:space-around;

        .item{
            width:33.3%;
            height:inherit;
            color:#FFF;
            font-weight:bold;
            display:flex;
            justify-content:center;
            align-items:center;

            &:hover{
                background-color:#FFF;
                color:#7139ad;
                transition:0.5s;
                cursor: pointer;
            }
        }
    }

`;
