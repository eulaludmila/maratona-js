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

export const Grid = styled.div`
    /* max-width:1000px; */
    width:100%;
    display:flex;
    flex-direction:column;

    div.add{
        
        /* max-width:1000px; */
        width:inherit;
        height:50px;
        display:flex;
        justify-content:space-between;
        margin: 30px auto;


        h1{

            text-align:center;
            color:#7139ad;
        }

        button{
            width:80px;
            height:40px;
            background-color:#7139ad;
            color:#fff;
            text-decoration:none;
            outline:none;
            border:none;
            border-radius:4px;
            font-size:15px;
            font-weight:bold;
            cursor:pointer;
        }
    }

    div.links{
        display:grid;
        grid-template-columns: 100px auto;
        width:100%;
        margin: 0 auto 20px;
        box-sizing:border-box;
        column-gap: 10px;

        .info{
            display:grid;
            flex-direction:row;
            grid-template-columns: auto 15%; 

            div{
                display:flex;
                flex-direction:column;
                    span{
                    width:100%;

                    &:first-child{
                        font-weight:bold;
                    }

                    & + span{
                        color:#A8A8A8;
                        font-size:14px;
                        margin-top:5px;
                    }
                }


                & + div{
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:flex-end;

                a {
                    width:80px;
                    height:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background-color:transparent;
                
                }


            } 
            } 
        }

        img{
                width:100%;
                height:100px;
                margin-right:15px;
            }


    }

`;