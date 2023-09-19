import styled from 'styled-components'

export const Footerstyle = styled.footer`

    footer {
        background-color: #114D46;
        color: white;
        margin-top: -4px;
        font-family: sans-serif;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 2em;

        h4 {
            color: white;
        }

        p {
            color: #FFFFFFB2;
        }

        h5 {
            color: #FFFFFF80;
            font-weight: 100;
            font-size: 15px;
            display: inline;
        }

        .footertext{
            width: 400px;
            padding: 3em 0 0 5em;
        }

        .totop {
            text-align: right;
            padding: 14em 4em 0 0;

            a {
                text-decoration: none;
                color: #FFFFFF99;
            }
        }
    }

    

`