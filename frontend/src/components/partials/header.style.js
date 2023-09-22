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
        margin: 0 0 0 0.5em;
    }

    nav {
        text-align: center;

        ul {

            li {
                display: inline;
                margin: 0.7em;
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




    @media (max-width: 1250px) {

        header {
            grid-template-columns: 1fr;
            padding: 0;

            ul {
                padding: 0 0 0 1em;
            }
        }
        
        .loginicon {
        padding: 1em;
        text-align: center;
    }

    .logo {
        text-align: center;
        margin: 0 0 0 0.5em;
    }


}

    

`