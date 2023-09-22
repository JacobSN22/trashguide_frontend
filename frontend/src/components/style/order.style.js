import styled from 'styled-components'

export const Orderstyle = styled.section`

.activefour {
    color: #6DA830;
}

    section {
        font-family: sans-serif;
        padding: 5em 0 0 0;
        background: linear-gradient(
                to top,
                #62BB6500 0%,
                #62BB6533 100%
            );

            h1 {
                color: #2F3146;
                font-size: 32px;
                font-weight: 100;
            }

            p {
                color: #5F5F63;
            }

        form {
            background: radial-gradient(circle at 100%, #DCDCDC, #DCDCDC 84%, #114D46 84%);
            max-width: 700px;
            margin: auto;
            padding: 2em 2em 2em 5em;
            border-radius: 0.7em;
            text-align: center;

            input {
            width: 90%;
            font-size: 16px;
            padding: 1em 0 1em 2em;
            border-radius: 0.2em;
            border: none;
            margin-bottom: 2em;
            }   

            select {
                padding: 0.4em 1em;
                font-size: 20px;

                option {
                    font-size: 20px;
                }
            }

            button {
                background-color: #D8EADB;
                margin: 2em 0 0 0;
                color: #0E4F2D;
                padding: 1em 5em;
                border-radius: 0.4em;
                border: none;
                box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.75);
                -webkit-box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.75);
            }

            button:hover {
                cursor: pointer;
            }
        }
    }

`