import styled from 'styled-components'

export const Headerstyle = styled.header`

    hr {
        margin-top: 2em;
    }

    header {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        padding: 0 5em;
        font-family: sans-serif;
    }

    h1 {
        display: inline;
    }

    nav {
        text-align: center;

        ul {

            li {
                display: inline;
                margin: 1em;
                a {
                    color: #232F44;
                    text-decoration: none;
                }

                a:active {
                    color: #6DA830;
                }
            }
        }
    }

    .loginicon {
        padding: 1em;
        text-align: right;
    }

    

`