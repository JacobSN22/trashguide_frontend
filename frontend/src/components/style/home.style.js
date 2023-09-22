import styled from 'styled-components'

export const Homestyle = styled.section`

section {
    font-family: sans-serif;
    height: 900px;
}

    img {
        width: 100%;
        max-width: 99%;
        height: 662px;
        object-fit: cover;
    }

    .firstimg {
        position: absolute;
    }

    .main {
        text-align: center;
    }

    .onmain {
        margin: auto;
        height: 200px;
        max-height: 250px;
        max-width: 600px;
        width: 100%;
        background-color: #D8EADB;
        position: relative;
        /* margin-left: 30%; */
        top: 520px;
        border-radius: 1em;
        padding: 2em;
        text-align: center;
    }

    h1 {
        font-size: 35px;
        color: #222A41;
        font-weight: 100;
    }

    a {
        padding: 1em 2em;
        background-color: #114D46;
        color: #FFFFFF;
        border-radius: 0.3em;
        margin: 4em 1em 0 0;
        border: none;
        text-decoration: none;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10em;
        padding: 0 10%;
        font-family: sans-serif;
        margin-bottom: 5em;

        img {
            width: 100%;
            height: 90%;
            object-fit: cover;
            border-radius: 1em;
        }

        h2 {
            font-size: 65px;
            font-weight: 100;
        }
            
        span {
            background: linear-gradient(
                to top,
                #62BB65 0%,
                #62BB65 50%,
                white 50%,
                white 100%
            );
        }
        

        p {
            font-size: 20px;
        }
    }

    .artone {

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        div {
            margin: auto;
        }

        .pic {
            width: 400px;
            max-width: 400px;        
            
            img {
                height: 400px;
                width: 400px;
                object-fit: cover;
            }
        }


    }

    .arttwo {

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        div {
            margin: auto;
        }

        .pic {
            width: 400px;
            max-width: 400px;
        }

        img {
            height: 400px;
            width: 400px;
            object-fit: cover;
        }
    }

`