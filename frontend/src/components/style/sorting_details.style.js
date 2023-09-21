import styled from 'styled-components'

export const Detailsstyle = styled.section`

    .border {
        max-width: 1028px;
        margin: auto;
        box-shadow: 1px 9px 19px -14px rgba(0,0,0,0.75);
        -webkit-box-shadow: 1px 9px 19px -14px rgba(0,0,0,0.75);
    }

    .sortgrid {
        font-family: sans-serif;
        max-width: 1028px;
        margin: auto;
        border: solid #017EC0 1px;
        border-radius: 1em;
        padding: 3em;
        box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);

        .container {
            max-width: 1028px;
            background-color: #F8F8F8;
            padding: 1em 5em;
            margin: 0 0 3em 0;
            box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
            border-radius: 0.7em;

            h3 {
                display: inline;
                margin: 0 0 0 3em;
            }

            img {
                vertical-align: middle;
            }

        }
    }         

        a {
            text-decoration: none;
            color: #414141;
        }

        button {
                background-color: #D8EADB;
                margin: 1em 0 2em 0;
                color: #0E4F2D;
                padding: 1em 5em;
                border-radius: 0.4em;
                border: none;
                box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.75);
                -webkit-box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.75);
                position: sticky;
                top: 10%;
                left: 3%;
            }

            button:hover {
                cursor: pointer;
            }




            //__________________Ja tak og Nej tak____________________________

            .true-items {
                text-align: center;
                font-family: sans-serif;
                max-width: 1028px;
                background-color: #F8F8F8;
                border-radius: 1em;
                padding: 2em;


                .items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    margin: 0 auto;

                    .container {
                        margin: 2em 0;
                    }

                    h3 {
                        font-weight: 100;
                        color: #696974;
                    }

                    p {
                        color: #3F7749;
                        background-color: #D8EADB;
                        display: inline;
                        padding: 0.5em 0.7em;
                        border-radius: 1em;
                    }
                }
            }



            .false-items {
                text-align: center;
                font-family: sans-serif;
                max-width: 1028px;
                background-color: #F8F8F8;
                border-radius: 1em;
                padding: 2em;

                .items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    margin: 0 auto;

                    .container {
                        margin: 2em 0;
                    }

                    h3 {
                        font-weight: 100;
                        color: #696974;
                    }

                    p {
                        color: #773F3F;
                        background-color: #EAD8D8;
                        display: inline;
                        padding: 0.5em 0.7em;
                        border-radius: 1em;
                    }
                }
            }


`