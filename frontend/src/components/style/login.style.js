import styled from 'styled-components'

export const Loginstyle = styled.div`

    section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 10em;
        text-align: center;
        background-color: #F4F7F7;
        padding: 10em 10em;
        font-family: sans-serif;
    }

    .text {
        padding: 2em 7em;
        h1 {
            font-weight: 100;
        }

        h2 {
            display: inline;
            margin: 0 0 0 0.5em;
            font-weight: 100;
        }
    }

    form {
        background-color: #FBFCFC;margin: auto;
        width: 300px;
        max-width: 300px;
        max-height: 400px;
        border-radius: 1em;
        text-align: left;
        padding: 2em;
        
        
        .showbutton{
            margin: 0 0 1em 0;
            p {
                display: inline;
            }

            button {
                background-color: #FBFCFC;
                border: none;

                img {
                    width: 20px;
                }
            }

            button:hover {
                cursor: pointer;
            }

        }

        input {
            width: 93%;
            padding: 1em;
            border-radius: 1em;
            border: solid gray 1px;
            margin-bottom: 2em;
        }

        .button {
            text-align: center;

            button {
                background-color: #114D46;
                color: #FFFFFF;
                padding: 1em 5em;
                border-radius: 1em;
                border: none;
            }

            button:hover {
                cursor: pointer;
            }
        }
    }


    .loggedin {
        text-align: center;
        margin: 5em 0;
        font-family: sans-serif;

        p {
            font-size: 32px;
        }

        button {
                background-color: #114D46;
                color: #FFFFFF;
                padding: 1em 5em;
                border-radius: 1em;
                border: none;
            }

            button:hover {
                cursor: pointer;
            }
    }



    .wave {
        display: none;
    }

`